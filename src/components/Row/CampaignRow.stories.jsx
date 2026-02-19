import React from 'react';
import CampaignRow from './CampaignRow';

export default {
  title: 'Components/Row/CampaignRow',
  component: CampaignRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Campaign row component for displaying campaign information with status, progress, and actions. Uses existing Tag and ProgressBar components with Relay design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    campaignName: {
      control: 'text',
      description: 'Campaign name',
    },
    date: {
      control: 'text',
      description: 'Date or count display',
    },
    status: {
      control: 'text',
      description: 'Status text',
    },
    statusVariant: {
      control: 'select',
      options: ['purple', 'blue', 'green', 'red', 'gray'],
      description: 'Status tag color',
    },
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Progress percentage',
    },
    href: {
      control: 'text',
      description: 'Link URL for campaign',
    },
    onCampaignClick: {
      action: 'campaign-clicked',
      description: 'Campaign click handler',
    },
    onMenuClick: {
      action: 'menu-clicked',
      description: 'Menu click handler',
    },
  },
};

// Default story
export const Default = {
  args: {
    campaignName: 'Spring Mail Campaign',
    date: '8/16',
    status: 'Delivery In Progress',
    statusVariant: 'blue',
    progress: 68,
  },
};

// Different statuses
export const DeliveryInProgress = {
  args: {
    campaignName: 'Spring Mail Campaign',
    date: '8/16',
    status: 'Delivery In Progress',
    statusVariant: 'blue',
    progress: 68,
  },
};

export const Completed = {
  args: {
    campaignName: 'Summer Email Blast',
    date: '9/15',
    status: 'Completed',
    statusVariant: 'green',
    progress: 100,
  },
};

export const Draft = {
  args: {
    campaignName: 'Fall Newsletter',
    date: '10/1',
    status: 'Draft',
    statusVariant: 'gray',
    progress: 15,
  },
};

export const Failed = {
  args: {
    campaignName: 'Winter Promotion',
    date: '12/20',
    status: 'Failed',
    statusVariant: 'red',
    progress: 45,
  },
};

export const Scheduled = {
  args: {
    campaignName: 'Holiday Campaign',
    date: '11/25',
    status: 'Scheduled',
    statusVariant: 'purple',
    progress: 0,
  },
};

// Different progress values
export const LowProgress = {
  args: {
    campaignName: 'Q1 Marketing Push',
    date: '1/10',
    status: 'In Progress',
    statusVariant: 'blue',
    progress: 25,
  },
};

export const MidProgress = {
  args: {
    campaignName: 'Q2 Marketing Push',
    date: '4/10',
    status: 'In Progress',
    statusVariant: 'blue',
    progress: 50,
  },
};

export const HighProgress = {
  args: {
    campaignName: 'Q3 Marketing Push',
    date: '7/10',
    status: 'In Progress',
    statusVariant: 'blue',
    progress: 85,
  },
};

// Multiple rows (table view)
export const MultipleRows = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1196px' }}>
      <CampaignRow
        campaignName="Spring Mail Campaign"
        date="8/16"
        status="Delivery In Progress"
        statusVariant="blue"
        progress={68}
      />
      <CampaignRow
        campaignName="Summer Email Blast"
        date="9/15"
        status="Completed"
        statusVariant="green"
        progress={100}
      />
      <CampaignRow
        campaignName="Fall Newsletter"
        date="10/1"
        status="Draft"
        statusVariant="gray"
        progress={15}
      />
      <CampaignRow
        campaignName="Winter Promotion"
        date="12/20"
        status="Failed"
        statusVariant="red"
        progress={45}
      />
      <CampaignRow
        campaignName="Holiday Campaign"
        date="11/25"
        status="Scheduled"
        statusVariant="purple"
        progress={0}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple campaign rows displaying various statuses and progress values',
      },
    },
  },
};

// Interactive example
export const Interactive = {
  render: () => {
    const [campaigns, setCampaigns] = React.useState([
      { id: 1, name: 'Spring Mail Campaign', date: '8/16', status: 'Delivery In Progress', variant: 'blue', progress: 68 },
      { id: 2, name: 'Summer Email Blast', date: '9/15', status: 'Completed', variant: 'green', progress: 100 },
      { id: 3, name: 'Fall Newsletter', date: '10/1', status: 'Draft', variant: 'gray', progress: 15 },
    ]);

    const handleCampaignClick = (id) => {
      alert(`Clicked campaign ${id}`);
    };

    const handleMenuClick = (id) => {
      alert(`Menu clicked for campaign ${id}`);
    };

    return (
      <div style={{ width: '100%', maxWidth: '1196px' }}>
        {campaigns.map(campaign => (
          <CampaignRow
            key={campaign.id}
            campaignName={campaign.name}
            date={campaign.date}
            status={campaign.status}
            statusVariant={campaign.variant}
            progress={campaign.progress}
            onCampaignClick={() => handleCampaignClick(campaign.id)}
            onMenuClick={() => handleMenuClick(campaign.id)}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive campaign rows with click handlers',
      },
    },
  },
};

// With links
export const AsLinks = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1196px' }}>
      <CampaignRow
        campaignName="Spring Mail Campaign"
        date="8/16"
        status="Delivery In Progress"
        statusVariant="blue"
        progress={68}
        href="/campaigns/spring-mail"
      />
      <CampaignRow
        campaignName="Summer Email Blast"
        date="9/15"
        status="Completed"
        statusVariant="green"
        progress={100}
        href="/campaigns/summer-email"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Campaign rows with href links for routing',
      },
    },
  },
};

// Long campaign name
export const LongCampaignName = {
  args: {
    campaignName: 'This is a very long campaign name that will be truncated with ellipsis',
    date: '8/16',
    status: 'In Progress',
    statusVariant: 'blue',
    progress: 68,
  },
};

// All status variants
export const AllStatusVariants = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1196px' }}>
      <CampaignRow
        campaignName="Purple Status Campaign"
        date="1/1"
        status="Scheduled"
        statusVariant="purple"
        progress={10}
      />
      <CampaignRow
        campaignName="Blue Status Campaign"
        date="2/2"
        status="In Progress"
        statusVariant="blue"
        progress={35}
      />
      <CampaignRow
        campaignName="Green Status Campaign"
        date="3/3"
        status="Completed"
        statusVariant="green"
        progress={100}
      />
      <CampaignRow
        campaignName="Red Status Campaign"
        date="4/4"
        status="Failed"
        statusVariant="red"
        progress={60}
      />
      <CampaignRow
        campaignName="Gray Status Campaign"
        date="5/5"
        status="Draft"
        statusVariant="gray"
        progress={5}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available status tag color variants',
      },
    },
  },
};

// With table header
export const WithTableHeader = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1196px' }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '316px 100px 200px 1fr 32px',
        gap: 'var(--relay-space-04)',
        padding: 'var(--relay-space-03) 0',
        borderBottom: '2px solid var(--relay-gray-04)',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'var(--relay-gray-08)',
      }}>
        <div>Campaign Name</div>
        <div>Date</div>
        <div>Status</div>
        <div>Progress</div>
        <div></div>
      </div>
      <CampaignRow
        campaignName="Spring Mail Campaign"
        date="8/16"
        status="Delivery In Progress"
        statusVariant="blue"
        progress={68}
      />
      <CampaignRow
        campaignName="Summer Email Blast"
        date="9/15"
        status="Completed"
        statusVariant="green"
        progress={100}
      />
      <CampaignRow
        campaignName="Fall Newsletter"
        date="10/1"
        status="Draft"
        statusVariant="gray"
        progress={15}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Campaign rows with table header for context',
      },
    },
  },
};
