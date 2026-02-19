import React from 'react';
import { CampaignRow } from '../components/Row/CampaignRow';
import { Button } from '../components/Button/Button';
import './Campaigns.css';

/**
 * Campaigns Page - Displays list of campaigns
 */
export const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Spring Sale 2026',
      date: '8/16',
      status: 'Delivery In Progress',
      statusVariant: 'blue',
      progress: 68,
    },
    {
      id: 2,
      name: 'Summer Campaign',
      date: '12/20',
      status: 'In Review',
      statusVariant: 'gray',
      progress: 45,
    },
    {
      id: 3,
      name: 'Holiday Promotions',
      date: '5/10',
      status: 'Delivery Complete',
      statusVariant: 'green',
      progress: 100,
    },
  ];

  const handleCampaignClick = (campaignName) => {
    console.log('Campaign clicked:', campaignName);
  };

  const handleMenuClick = (campaignName) => {
    console.log('Menu clicked for:', campaignName);
  };

  return (
    <div className="campaigns-page">
      {/* Page Header */}
      <div className="campaigns-page__header">
        <h1 className="campaigns-page__title">Campaigns</h1>
        <Button variant="primary" size="medium">
          Create Campaign
        </Button>
      </div>

      {/* Campaigns Table */}
      <div className="campaigns-page__table">
        <div className="campaigns-page__table-header">
          <span className="campaigns-page__col campaigns-page__col--name">Campaign Name</span>
          <span className="campaigns-page__col campaigns-page__col--date">Date</span>
          <span className="campaigns-page__col campaigns-page__col--status">Status</span>
          <span className="campaigns-page__col campaigns-page__col--progress">Progress</span>
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
    </div>
  );
};
