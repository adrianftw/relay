import React, { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { MdQrCode2, MdMailOutline, MdTrendingUp, MdAttachMoney, MdShoppingCart, MdFilterList, MdKeyboardArrowDown, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { DeliveryDetailsCard } from '../components/DashboardCards/DeliveryDetailsCard';
import { LightCard } from '../components/DashboardCards/LightCard';
import { Search } from '../components/Search/Search';
import AreaRow from '../components/Row/AreaRow';
import { CampaignMap } from '../components/Map/CampaignMap';
import { BackButton } from '../components/Button/BackButton';
import { useCountUp } from '../hooks/useCountUp';
import './CampaignDetail.css';

/**
 * CampaignDetail Page
 * Detail page for campaign analytics with dashboard cards
 * 
 * Grid System: 12 columns, 32px margins, 16px gutters
 * 
 * Sections:
 * - Page header with title
 * - Search and filters
 * - Data table with area rows
 * - Dashboard cards
 */
export const CampaignDetail = () => {
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState('All');
  const [areaData, setAreaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState(null); // 'qrScans' or 'conversion'
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc' or 'desc'
  const [viewMode, setViewMode] = useState('cities'); // 'cities' or 'zips'
  const [selectedCity, setSelectedCity] = useState(null); // { city, state, lat, lng }
  const [allCitiesData, setAllCitiesData] = useState([]); // Store all cities for going back
  
  // Map view state - controlled viewport
  const [mapViewState, setMapViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 9
  });

  // Handler to drill into a city and show its zip codes
  const handleCityClick = async (city) => {
    setSelectedCity(city);
    setViewMode('zips');
    setSearchValue(''); // Clear search when drilling down
    setSortColumn(null); // Reset sort
    
    // Check if this is Atlanta, GA - use real data
    if (city.city === 'Atlanta' && city.state === 'GA') {
      try {
        const response = await fetch('/data/atlanta-zips.geojson');
        const geojson = await response.json();
        
        // Calculate total conversions for percentage calculations
        const totalConversions = geojson.features.reduce((sum, f) => sum + f.properties.conversions, 0);
        
        // Transform GeoJSON features to table data
        const zipData = geojson.features.map(feature => {
          const zip = feature.properties.zip;
          const conversions = feature.properties.conversions;
          
          // Calculate center point of polygon/multipolygon for marker placement
          let lat, lng;
          if (feature.geometry.type === 'Polygon') {
            const coords = feature.geometry.coordinates[0];
            lng = coords.reduce((sum, c) => sum + c[0], 0) / coords.length;
            lat = coords.reduce((sum, c) => sum + c[1], 0) / coords.length;
          } else if (feature.geometry.type === 'MultiPolygon') {
            const firstPoly = feature.geometry.coordinates[0][0];
            lng = firstPoly.reduce((sum, c) => sum + c[0], 0) / firstPoly.length;
            lat = firstPoly.reduce((sum, c) => sum + c[1], 0) / firstPoly.length;
          }
          
          // Calculate percentages based on conversion numbers
          // QR Scans: scale conversions to 2-16% range
          const qrScanPercent = ((conversions / totalConversions) * 100 * 5).toFixed(1);
          // Conversion: scale to 0.1-0.6% range  
          const conversionPercent = ((conversions / totalConversions) * 100 * 0.2).toFixed(2);
          
          return {
            city: city.city,
            state: city.state,
            zip: zip,
            lat: lat,
            lng: lng,
            qrScans: `${qrScanPercent}%`,
            conversion: `${conversionPercent}%`,
            progress: Math.floor(Math.random() * 40 + 50), // Keep random for now
          };
        });
        
        setAreaData(zipData);
      } catch (error) {
        console.error('Error loading Atlanta ZIP data:', error);
        // Fallback to generated data if load fails
        generateRandomZipData(city);
      }
    } else {
      // For other cities, generate random data
      generateRandomZipData(city);
    }
    
    // Zoom map to city (no animation on initial drill-down)
    setMapViewState({
      longitude: city.lng,
      latitude: city.lat,
      zoom: 11 // Closer zoom for zip code level
    });
  };
  
  // Helper function to generate random ZIP data for non-Atlanta cities
  const generateRandomZipData = (city) => {
    const numZips = Math.floor(Math.random() * 11) + 5; // 5-15 zips
    const zipData = Array.from({ length: numZips }, (_, i) => {
      // Generate realistic zip codes around the city
      const baseZip = 10000 + Math.floor(Math.random() * 89999);
      const latOffset = (Math.random() - 0.5) * 0.1; // ~5 mile radius
      const lngOffset = (Math.random() - 0.5) * 0.1;
      
      return {
        city: city.city,
        state: city.state,
        zip: String(baseZip + i),
        lat: city.lat + latOffset,
        lng: city.lng + lngOffset,
        // Generate metrics for zips
        qrScans: `${(Math.random() * 15 + 2).toFixed(1)}%`,
        conversion: `${(Math.random() * 0.8).toFixed(2)}%`,
        progress: Math.floor(Math.random() * 40 + 50),
      };
    });
    
    setAreaData(zipData);
  };
  
  // Handler to go back to cities view
  const handleBackToCities = () => {
    setViewMode('cities');
    setSelectedCity(null);
    setAreaData(allCitiesData);
    setSearchValue('');
    setSortColumn(null);
    
    // Zoom out to show all cities (no animation on view change)
    setMapViewState({
      longitude: -95.7,
      latitude: 37.1,
      zoom: 4
    });
  };

  // Handler to zoom map to a specific area (city or ZIP)
  const handleFocusArea = (lat, lng) => {
    setMapViewState({
      longitude: lng,
      latitude: lat,
      // In ZIP view: zoom to 13 if not already zoomed in, otherwise maintain current zoom
      // In cities view: zoom to 8
      zoom: viewMode === 'zips' 
        ? (mapViewState.zoom >= 13 ? mapViewState.zoom : 13)
        : 8,
      transitionDuration: 1000 // Smooth 1-second transition
    });
  };

  // Load and parse CSV data on mount
  useEffect(() => {
    Papa.parse('/data/uscities.csv', {
      download: true,
      header: true,
      complete: (results) => {
        // Transform CSV data into area data format
        // Take first 50 cities and generate metrics
        const transformedData = results.data
          .filter(row => row.city && row.state_id && row.lat && row.lng) // Filter out empty rows
          .slice(0, 50) // Limit to first 50 cities
          .map((row, index) => ({
            city: row.city,
            state: row.state_id,
            zip: `${row.city}, ${row.state_id}`,
            lat: parseFloat(row.lat),
            lng: parseFloat(row.lng),
            population: parseInt(row.population) || 0,
            // Generate realistic-looking metrics
            qrScans: `${(Math.random() * 10 + 1).toFixed(1)}%`,
            conversion: `${(Math.random() * 0.5).toFixed(2)}%`,
            progress: Math.floor(Math.random() * 40 + 50), // 50-90%
          }));
        
        setAreaData(transformedData);
        setAllCitiesData(transformedData);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
        setLoading(false);
      }
    });
  }, []);

  // Handler to toggle column sorting
  const handleSort = (column) => {
    if (sortColumn === column) {
      // Toggle direction if same column
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new column and default to descending
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  // Filter and sort area data
  const filteredAreaData = useMemo(() => {
    // First, filter by search
    let filtered = areaData;
    if (searchValue.trim()) {
      const searchLower = searchValue.toLowerCase();
      filtered = areaData.filter(area => 
        area.city.toLowerCase().includes(searchLower) ||
        area.state.toLowerCase().includes(searchLower) ||
        area.zip.toLowerCase().includes(searchLower)
      );
    }

    // Then, sort if a column is selected
    if (sortColumn) {
      filtered = [...filtered].sort((a, b) => {
        let aVal, bVal;
        
        if (sortColumn === 'qrScans' || sortColumn === 'conversion') {
          // Parse percentage values (e.g., "5.6%" -> 5.6)
          aVal = parseFloat(a[sortColumn]);
          bVal = parseFloat(b[sortColumn]);
        }
        
        if (sortDirection === 'asc') {
          return aVal - bVal;
        } else {
          return bVal - aVal;
        }
      });
    }

    return filtered;
  }, [areaData, searchValue, sortColumn, sortDirection]);

  // Conditional map style - use custom Atlanta style only when viewing Atlanta ZIPs
  const mapStyle = useMemo(() => {
    if (viewMode === 'zips' && selectedCity?.city === 'Atlanta' && selectedCity?.state === 'GA') {
      return 'mapbox://styles/adrianthomasdesign/cmlwkt6vw000601s7hzuh3zm6';
    }
    return import.meta.env.VITE_MAPBOX_STYLE || 'mapbox://styles/adrianthomasdesign/cmlu39aqq00aj01qp47dx8uol';
  }, [viewMode, selectedCity]);

  // Calculate dashboard metrics based on current data
  const dashboardMetrics = useMemo(() => {
    if (viewMode === 'zips' && areaData.length > 0) {
      // Calculate from ZIP data
      const totalZips = areaData.length;
      
      // Calculate average QR scan rate
      const avgQRRate = areaData.reduce((sum, area) => {
        return sum + parseFloat(area.qrScans);
      }, 0) / totalZips;
      
      // Calculate average conversion rate
      const avgConversionRate = areaData.reduce((sum, area) => {
        return sum + parseFloat(area.conversion);
      }, 0) / totalZips;
      
      // Total mail pieces for Atlanta campaign
      const totalPiecesSent = 429048;
      const totalScans = Math.round(totalPiecesSent * (avgQRRate / 100));
      const totalConversions = Math.round(totalScans * (avgConversionRate / 100));
      
      // Calculate revenue (assuming $300 average order value)
      const avgOrderValue = 300;
      const totalRevenue = totalConversions * avgOrderValue;
      
      // Calculate CPA (assuming $0.50 cost per piece)
      const costPerPiece = 0.50;
      const totalCost = totalPiecesSent * costPerPiece;
      const cpa = totalConversions > 0 ? totalCost / totalConversions : 0;
      
      // Delivery status distribution - realistic numbers that add up to total
      const deliveredCount = 343238;  // ~80% delivered
      const enrouteCount = 64357;     // ~15% in transit
      const processingCount = 17162;  // ~4% processing
      const returnedCount = 4291;     // ~1% returned (small as requested)
      
      return {
        totalPiecesSentRaw: totalPiecesSent,
        totalScansRaw: totalScans,
        qrScanRateRaw: avgQRRate,
        totalScansCountRaw: totalScans,
        conversionRateRaw: avgConversionRate,
        conversionsCountRaw: totalConversions,
        revenueRaw: totalRevenue,
        cpaRaw: cpa,
        deliveryData: [
          { label: 'Enroute', value: enrouteCount, color: '#7DB7F1' },
          { label: 'Processing', value: processingCount, color: '#FFFFFF' },
          { label: 'Delivered', value: deliveredCount, color: '#A6A6EF' },
          { label: 'Returned', value: returnedCount, color: '#DA291C' },
        ]
      };
    }
    
    // Default values for cities view - multi-regional campaign
    return {
      totalPiecesSentRaw: 30000000,
      totalScansRaw: 50689,
      qrScanRateRaw: 9,
      totalScansCountRaw: 532,
      conversionRateRaw: 0.3,
      conversionsCountRaw: 154,
      revenueRaw: 48300,
      cpaRaw: 3.95,
      deliveryData: [
        { label: 'Enroute', value: 4500000, color: '#7DB7F1' },
        { label: 'Processing', value: 1200000, color: '#FFFFFF' },
        { label: 'Delivered', value: 24000000, color: '#A6A6EF' },
        { label: 'Returned', value: 300000, color: '#DA291C' },
      ]
    };
  }, [viewMode, areaData]);

  // Animate metric values
  const animatedTotalPiecesSent = useCountUp(dashboardMetrics.totalPiecesSentRaw);
  const animatedTotalScans = useCountUp(dashboardMetrics.totalScansRaw);
  const animatedQRRate = useCountUp(dashboardMetrics.qrScanRateRaw);
  const animatedTotalScansCount = useCountUp(dashboardMetrics.totalScansCountRaw);
  const animatedConversionRate = useCountUp(dashboardMetrics.conversionRateRaw);
  const animatedConversionsCount = useCountUp(dashboardMetrics.conversionsCountRaw);
  const animatedRevenue = useCountUp(dashboardMetrics.revenueRaw);
  const animatedCPA = useCountUp(dashboardMetrics.cpaRaw);

  return (
    <div className="campaign-detail-page">
      <div className="campaign-detail__grid">
        {/* Left Column: Content (8 columns) */}
        <div className="campaign-detail__content">
          {/* Back Button */}
          {viewMode === 'cities' ? (
            <BackButton href="/campaigns">Back to Campaigns</BackButton>
          ) : (
            <BackButton onClick={handleBackToCities}>Spring Mail Campaign</BackButton>
          )}
          
          {/* Page Title */}
          <h1 className="campaign-detail__title">
            {viewMode === 'cities' ? 'Spring Mail Campaign' : `${selectedCity.city}, ${selectedCity.state}`}
          </h1>

          {/* Dashboard Cards Section */}
          <section className="campaign-detail__dashboard">
            <DeliveryDetailsCard
              icon={MdMailOutline}
              label="MailPieces"
              total={Math.round(animatedTotalPiecesSent).toLocaleString()}
              data={dashboardMetrics.deliveryData}
            />
            
            <div className="campaign-detail__metrics-grid">
              <LightCard
                icon={MdQrCode2}
                label="QR Scans"
                value={`${animatedQRRate.toFixed(1)}%`}
                description={`${Math.round(animatedTotalScansCount).toLocaleString()} scans`}
              />
              
              <LightCard
                icon={MdTrendingUp}
                label="Conversion Rate"
                value={`${animatedConversionRate.toFixed(2)}%`}
                description={`${Math.round(animatedConversionsCount).toLocaleString()} conversions`}
              />
              
              <LightCard
                icon={MdAttachMoney}
                label="Revenue Attached"
                value={`$${Math.round(animatedRevenue).toLocaleString()}`}
                description=""
              />
              
              <LightCard
                icon={MdShoppingCart}
                label="Cost Per Acquisition"
                value={`$${animatedCPA.toFixed(2)}`}
                description=""
              />
            </div>
          </section>

          {/* Chart Section - Contains filters and table (8 columns) */}
          <div className="campaign-detail__chart-section">
            {/* Search and Filters Section */}
            <div className="campaign-detail__filters">
              <div className="campaign-detail__filters-left">
                <Search 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={viewMode === 'cities' ? "Search Cities, States" : "Search ZIP Codes"}
                />
                
                <button className="campaign-detail__filter-button">
                  <span>Demographic filters</span>
                  <MdFilterList size={16} />
                </button>
              </div>
              
              <div className="campaign-detail__filters-right">
                <div className="campaign-detail__sort">
                  <label className="campaign-detail__sort-label">Region:</label>
                  <button className="campaign-detail__dropdown">
                    <span>{region}</span>
                    <MdKeyboardArrowDown size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Data Table Section */}
            <div className="campaign-detail__table-container">
              {/* Table Headers */}
              <div className="campaign-detail__table-header">
                <span className="campaign-detail__table-header-cell">{viewMode === 'cities' ? 'Cities' : 'ZIPs'}</span>
                <span className="campaign-detail__table-header-cell"></span> {/* Area Actions column */}
                <button 
                  className="campaign-detail__table-header-cell campaign-detail__table-header-cell--sortable"
                  onClick={() => handleSort('qrScans')}
                >
                  QR Scans
                  {sortColumn === 'qrScans' && (
                    sortDirection === 'asc' ? <MdArrowUpward size={16} /> : <MdArrowDownward size={16} />
                  )}
                </button>
                <button 
                  className="campaign-detail__table-header-cell campaign-detail__table-header-cell--sortable"
                  onClick={() => handleSort('conversion')}
                >
                  Conversion
                  {sortColumn === 'conversion' && (
                    sortDirection === 'asc' ? <MdArrowUpward size={16} /> : <MdArrowDownward size={16} />
                  )}
                </button>
                <span className="campaign-detail__table-header-cell">Delivery Completion</span>
              </div>
              
              {/* Table Rows */}
              <div className="campaign-detail__table-body">
                {loading ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#666' }}>
                    Loading {viewMode === 'cities' ? 'cities' : 'ZIP codes'} data...
                  </div>
                ) : filteredAreaData.length === 0 ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#666' }}>
                    No {viewMode === 'cities' ? 'cities' : 'ZIP codes'} found matching "{searchValue}"
                  </div>
                ) : (
                  filteredAreaData.map((area, index) => (
                    <AreaRow
                      key={index}
                      zip={area.zip}
                      qrScans={area.qrScans}
                      conversion={area.conversion}
                      progress={area.progress}
                      onFocus={() => handleFocusArea(area.lat, area.lng)}
                      onZipClick={viewMode === 'cities' ? () => handleCityClick(area) : undefined}
                      href={viewMode === 'cities' ? undefined : `/campaigns/spring-mail/${area.state.toLowerCase()}/${area.city.toLowerCase().replace(/\s+/g, '-')}/${area.zip}`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Map Container (4 columns) */}
        <div className="campaign-detail__placeholder">
          <CampaignMap
            viewState={mapViewState}
            onMove={(evt) => setMapViewState(evt.viewState)}
            mapStyle={mapStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
