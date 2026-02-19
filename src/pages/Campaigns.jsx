import React from 'react';
import { Button } from '../components/Button/Button';
import { Search } from '../components/Search/Search';
import { Tag } from '../components/Tag/Tag';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import CampaignRow from '../components/Row/CampaignRow';
import { Pagination } from '../components/Pagination/Pagination';
import './Campaigns.css';

/**
 * Campaigns Page - Built from Figma using Relay tokens and components
 * Uses existing design system: tokens (--relay-*) and components only
 */
export const Campaigns = () => {
  // Mock data - 9 campaigns from Figma
  const campaigns = [
    { id: 1, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 2, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery In Progress', statusVariant: 'blue', progress: 68 },
    { id: 3, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 4, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 5, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 6, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 7, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 8, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
    { id: 9, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery Complete', statusVariant: 'green', progress: 68 },
  ];

  const handleSearch = (query) => {
    console.log('Search:', query);
  };

  const handleCreateNew = () => {
    console.log('Create new campaign');
  };

  const handlePageChange = (page) => {
    console.log('Page:', page);
  };

  const handleCampaignClick = (id) => {
    console.log('Campaign clicked:', id);
  };

  const handleMenuClick = (id) => {
    console.log('Menu clicked:', id);
  };

  return (
    <div className="campaigns-page">
      {/* Header with title and button - uses relay-h1 token and Button component */}
      <div className="campaigns-page__header">
        <h1 className="campaigns-page__title">Campaigns</h1>
        <Button 
          variant="primary" 
          size="medium" 
          label="Create new"
          onClick={handleCreateNew}
        />
      </div>

      {/* Search - uses Search component */}
      <div className="campaigns-page__search">
        <Search 
          placeholder="Search" 
          onSubmit={handleSearch}
          size="small"
        />
      </div>

      {/* Table - uses relay tokens for styling */}
      <div className="campaigns-page__table">
        {/* Table Header - uses relay typography tokens */}
        <div className="campaigns-page__table-header">
          <div className="campaigns-page__col campaigns-page__col--name">Name</div>
          <div className="campaigns-page__col campaigns-page__col--date">Delivery Start</div>
          <div className="campaigns-page__col campaigns-page__col--status">Campaign Status</div>
          <div className="campaigns-page__col campaigns-page__col--progress">Completion Status</div>
          <div className="campaigns-page__col campaigns-page__col--menu"></div>
        </div>

        {/* Campaign Rows - uses CampaignRow component */}
        <div className="campaigns-page__table-body">
          {campaigns.map((campaign) => (
            <CampaignRow
              key={campaign.id}
              campaignName={campaign.name}
              date={campaign.date}
              status={campaign.status}
              statusVariant={campaign.statusVariant}
              progress={campaign.progress}
              onCampaignClick={() => handleCampaignClick(campaign.id)}
              onMenuClick={() => handleMenuClick(campaign.id)}
            />
          ))}
        </div>
      </div>

      {/* Pagination - uses Pagination component */}
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
