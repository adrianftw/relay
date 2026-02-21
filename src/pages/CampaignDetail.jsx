import React, { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { MdQrCode2, MdTrendingUp, MdAttachMoney, MdShoppingCart, MdFilterList, MdKeyboardArrowDown } from 'react-icons/md';
import { DeliveryDetailsCard } from '../components/DashboardCards/DeliveryDetailsCard';
import { LightCard } from '../components/DashboardCards/LightCard';
import { Search } from '../components/Search/Search';
import AreaRow from '../components/Row/AreaRow';
import { CampaignMap } from '../components/Map/CampaignMap';
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
  const [sortBy, setSortBy] = useState('Conversion Rate');
  const [region, setRegion] = useState('All');
  const [areaData, setAreaData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Map view state - controlled viewport
  const [mapViewState, setMapViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 9
  });

  // Handler to zoom map to a specific city
  const handleFocusCity = (lat, lng) => {
    setMapViewState({
      longitude: lng,
      latitude: lat,
      zoom: 8, // Zoom in to city level
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
        setLoading(false);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
        setLoading(false);
      }
    });
  }, []);

  // Filter area data based on search value
  const filteredAreaData = useMemo(() => {
    if (!searchValue.trim()) {
      return areaData;
    }
    
    const searchLower = searchValue.toLowerCase();
    return areaData.filter(area => 
      area.city.toLowerCase().includes(searchLower) ||
      area.state.toLowerCase().includes(searchLower) ||
      area.zip.toLowerCase().includes(searchLower)
    );
  }, [areaData, searchValue]);

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
          {/* Page Title */}
          <h1 className="campaign-detail__title">Spring Mail Campaign</h1>

          {/* Chart Section - Contains filters and table (8 columns) */}
          <div className="campaign-detail__chart-section">
            {/* Search and Filters Section */}
            <div className="campaign-detail__filters">
              <div className="campaign-detail__filters-left">
                <Search 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search Cities, ZIPs, Counties"
                />
                
                <button className="campaign-detail__filter-button">
                  <span>Demographic filters</span>
                  <MdFilterList size={16} />
                </button>
              </div>
              
              <div className="campaign-detail__filters-right">
                <div className="campaign-detail__sort">
                  <label className="campaign-detail__sort-label">Sort by:</label>
                  <button className="campaign-detail__dropdown">
                    <span>{sortBy}</span>
                    <MdKeyboardArrowDown size={24} />
                  </button>
                </div>
                
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
                <span className="campaign-detail__table-header-cell">Cities</span>
                <span className="campaign-detail__table-header-cell"></span> {/* Area Actions column */}
                <span className="campaign-detail__table-header-cell">QR Scans</span>
                <span className="campaign-detail__table-header-cell">Conversion</span>
                <span className="campaign-detail__table-header-cell">Delivery Completion</span>
              </div>
              
              {/* Table Rows */}
              <div className="campaign-detail__table-body">
                {loading ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#666' }}>
                    Loading cities data...
                  </div>
                ) : filteredAreaData.length === 0 ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#666' }}>
                    No cities found matching "{searchValue}"
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
                      href={`/campaigns/spring-mail/${area.state.toLowerCase()}/${area.city.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
      {/* Dashboard Cards Section - Spans 7 columns */}
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
        </div>

        {/* Right Column: Map Container (4 columns) */}
        <div className="campaign-detail__placeholder">
          <CampaignMap
            viewState={mapViewState}
            onMove={(evt) => setMapViewState(evt.viewState)}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
