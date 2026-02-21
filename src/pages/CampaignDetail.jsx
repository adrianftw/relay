import React, { useState } from 'react';
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

  // Sample data for DeliveryDetailsCard
  const deliveryData = [
    { label: 'Enroute', value: 3452, color: '#7DB7F1' },
    { label: 'Processing', value: 3452, color: '#FFFFFF' },
    { label: 'Delivered', value: 3452, color: '#A6A6EF' },
    { label: 'Returned', value: 3452, color: '#DA291C' },
  ];

  // Sample area data for table
  const areaData = [
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
    { zip: 'San Francisco, CA', qrScans: '5.6%', conversion: '.02%', progress: 68 },
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
                <span className="campaign-detail__table-header-cell">ZIPs</span>
                <span className="campaign-detail__table-header-cell"></span> {/* Area Actions column */}
                <span className="campaign-detail__table-header-cell">QR Scans</span>
                <span className="campaign-detail__table-header-cell">Conversion</span>
                <span className="campaign-detail__table-header-cell">Delivery Completion</span>
              </div>
              
              {/* Table Rows */}
              <div className="campaign-detail__table-body">
                {areaData.map((area, index) => (
                  <AreaRow
                    key={index}
                    zip={area.zip}
                    qrScans={area.qrScans}
                    conversion={area.conversion}
                    progress={area.progress}
                    href={`/campaigns/spring-mail/seattle-wa/${9375 + index}`}
                  />
                ))}
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
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 9
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
