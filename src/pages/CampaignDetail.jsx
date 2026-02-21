import React, { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { MdQrCode2, MdTrendingUp, MdAttachMoney, MdShoppingCart, MdFilterList, MdKeyboardArrowDown, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { DeliveryDetailsCard } from '../components/DashboardCards/DeliveryDetailsCard';
import { LightCard } from '../components/DashboardCards/LightCard';
import { Search } from '../components/Search/Search';
import AreaRow from '../components/Row/AreaRow';
import { CampaignMap } from '../components/Map/CampaignMap';
import { BackButton } from '../components/Button/BackButton';
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
  const handleCityClick = (city) => {
    setSelectedCity(city);
    setViewMode('zips');
    setSearchValue(''); // Clear search when drilling down
    setSortColumn(null); // Reset sort
    
    // Generate zip code data for this city (simulate 5-15 zip codes per city)
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
    
    // Zoom map to city
    setMapViewState({
      longitude: city.lng,
      latitude: city.lat,
      zoom: 11, // Closer zoom for zip code level
      transitionDuration: 1000
    });
  };
  
  // Handler to go back to cities view
  const handleBackToCities = () => {
    setViewMode('cities');
    setSelectedCity(null);
    setAreaData(allCitiesData);
    setSearchValue('');
    setSortColumn(null);
    
    // Zoom out to show all cities
    setMapViewState({
      longitude: -95.7,
      latitude: 37.1,
      zoom: 4,
      transitionDuration: 1000
    });
  };

  // Handler to zoom map to a specific city
  const handleFocusCity = (lat, lng) => {
    setMapViewState({
      longitude: lng,
      latitude: lat,
      zoom: viewMode === 'cities' ? 8 : 11, // Different zoom for cities vs zips
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
  
  // Generate map markers for zip codes with color coding based on QR scan percentage
  const mapMarkers = useMemo(() => {
    if (viewMode !== 'zips') return [];
    
    // Color scale function: lower % = red, higher % = green
    const getColor = (qrScanPercent) => {
      const percent = parseFloat(qrScanPercent);
      // Scale: 0-5% = red, 5-10% = orange, 10-15% = yellow, 15%+ = green
      if (percent < 5) return '#ef4444'; // red
      if (percent < 10) return '#f97316'; // orange
      if (percent < 15) return '#eab308'; // yellow
      return '#22c55e'; // green
    };
    
    return filteredAreaData.map(area => ({
      lat: area.lat,
      lng: area.lng,
      color: getColor(area.qrScans),
      label: `${area.zip}: ${area.qrScans} QR Scans`
    }));
  }, [viewMode, filteredAreaData]);

  // Sample data for DeliveryDetailsCard
  const deliveryData = [
    { label: 'Enroute', value: 3452, color: '#7DB7F1' },
    { label: 'Processing', value: 3452, color: '#FFFFFF' },
    { label: 'Delivered', value: 3452, color: '#A6A6EF' },
    { label: 'Returned', value: 3452, color: '#DA291C' },
  ];

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
              icon={MdQrCode2}
              label="QR Scans"
              total="50,5689"
              data={deliveryData}
            />
            
            <div className="campaign-detail__metrics-grid">
              <LightCard
                icon={MdQrCode2}
                label="QR Scans"
                value="9%"
                description="532 scans"
              />
              
              <LightCard
                icon={MdTrendingUp}
                label="Conversion Rate"
                value="0.3%"
                description="154 conversions"
              />
              
              <LightCard
                icon={MdAttachMoney}
                label="Revenue Attached"
                value="$48,300"
                description=""
              />
              
              <LightCard
                icon={MdShoppingCart}
                label="Cost Per Acquisition"
                value="$3.95"
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
                      onFocus={() => handleFocusCity(area.lat, area.lng)}
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
            markers={mapMarkers}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
