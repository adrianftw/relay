import React from 'react';
import { CampaignRow } from '../components/Row/CampaignRow';
import { Button } from '../components/Button/Button';
import { Search } from '../components/Search/Search';
import { Pagination } from '../components/Pagination/Pagination';
import './Campaigns.css';

/**
 * Campaigns Page - Displays list of campaigns
 * Matches Figma design with search, table, and pagination
 */
export const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
    {
      id: 2,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery In Progress',
      statusVariant: 'blue',
      progress: 68,
    },
    {
      id: 3,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
    {
      id: 4,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
    {
      id: 5,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
    {
      id: 6,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
    {
      id: 7,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
    {
      id: 8,
      name: 'Spring Mail Campaign',
      date: '8/16',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 68,
    },
  ];

  const handleCampaignClick = (campaignName) => {
    console.log('Campaign clicked:', campaignName);
  };

  const handleMenuClick = (campaignName) => {
    console.log('Menu clicked for:', campaignName);
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  const handlePageChange = (page) => {
    console.log('Page changed to:', page);
  };

  const handleCreateNew = () => {
    console.log('Create new campaign clicked');
  };

  return (
    <div className="campaigns-page">
      {/* Page Header */}
      <div className="campaigns-page__header">
        <h1 className="campaigns-page__title">Campaigns</h1>
        <Button variant="primary" size="medium" onClick={handleCreateNew}>
          Create new
        </Button>
      </div>

      {/* Search Bar */}
      <div className="campaigns-page__search">
        <Search 
          placeholder="Search campaigns..." 
          onSearch={handleSearch}
        />
      </div>

      {/* Campaigns Table */}
      <div className="campaigns-page__table">
        <div className="campaigns-page__table-header">
          <span className="campaigns-page__col campaigns-page__col--name">Name</span>
          <span className="campaigns-page__col campaigns-page__col--date">Delivery Start</span>
          <span className="campaigns-page__col campaigns-page__col--status">Campaign Status</span>
          <span className="campaigns-page__col campaigns-page__col--progress">Completion Status</span>
          <span className="campaigns-page__col campaigns-page__col--menu"></span>
        </div>

        <div className="campaigns-page__table-body">
          {campaigns.map((campaign) => (
            <CampaignRow
              key={campaign.id}
              campaignName={campaign.name}
              date={campaign.date}
              status={campaign.status}
              statusVariant={campaign.statusVariant}
              progress={campaign.progress}
              onCampaignClick={() => handleCampaignClick(campaign.name)}
              onMenuClick={() => handleMenuClick(campaign.name)}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="campaigns-page__pagination">
        <Pagination
          currentPage={1}
          totalPages={9}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
