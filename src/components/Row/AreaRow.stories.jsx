import React from 'react';
import AreaRow from './AreaRow';

export default {
  title: 'Components/Row/AreaRow',
  component: AreaRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Area row component for displaying ZIP code information with QR scans, conversion rates, and delivery progress. Uses existing ProgressBar component with Relay design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    zip: {
      control: 'text',
      description: 'ZIP code or area identifier',
    },
    qrScans: {
      control: 'text',
      description: 'QR Scans percentage',
    },
    conversion: {
      control: 'text',
      description: 'Conversion rate percentage',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Delivery completion progress (0-100)',
    },
    onZipClick: {
      action: 'zipClicked',
      description: 'Callback when ZIP code is clicked',
    },
    href: {
      control: 'text',
      description: 'Link URL for ZIP code',
    },
  },
};

// Default story
export const Default = {
  args: {
    zip: '9375',
    qrScans: '5.6%',
    conversion: '.02%',
    progress: 68,
  },
};

// With different ZIP codes
export const DifferentZipCodes = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AreaRow 
      zip="9375" 
      qrScans="5.6%" 
      conversion=".02%" 
      progress={68} 
    />
    <AreaRow 
      zip="98101" 
      qrScans="4.2%" 
      conversion=".03%" 
      progress={82} 
    />
    <AreaRow 
      zip="98102" 
      qrScans="8.1%" 
      conversion=".01%" 
      progress={45} 
    />
    <AreaRow 
      zip="98103" 
      qrScans="3.9%" 
      conversion=".04%" 
      progress={91} 
    />
  </div>
);

// With various progress levels
export const VariousProgressLevels = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AreaRow 
      zip="9375" 
      qrScans="1.2%" 
      conversion=".01%" 
      progress={10} 
    />
    <AreaRow 
      zip="9376" 
      qrScans="3.4%" 
      conversion=".02%" 
      progress={35} 
    />
    <AreaRow 
      zip="9377" 
      qrScans="5.6%" 
      conversion=".02%" 
      progress={68} 
    />
    <AreaRow 
      zip="9378" 
      qrScans="8.9%" 
      conversion=".03%" 
      progress={95} 
    />
    <AreaRow 
      zip="9379" 
      qrScans="10.2%" 
      conversion=".04%" 
      progress={100} 
    />
  </div>
);

// With click handlers
export const WithClickHandlers = () => {
  const handleZipClick = (zip) => {
    console.log('ZIP clicked:', zip);
    alert(`Viewing details for ZIP: ${zip}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AreaRow 
        zip="9375" 
        qrScans="5.6%" 
        conversion=".02%" 
        progress={68}
        onZipClick={() => handleZipClick('9375')}
      />
      <AreaRow 
        zip="98101" 
        qrScans="4.2%" 
        conversion=".03%" 
        progress={82}
        onZipClick={() => handleZipClick('98101')}
      />
      <AreaRow 
        zip="98102" 
        qrScans="8.1%" 
        conversion=".01%" 
        progress={45}
        onZipClick={() => handleZipClick('98102')}
      />
    </div>
  );
};
WithClickHandlers.parameters = {
  docs: {
    description: {
      story: 'Interactive area rows with click handlers for ZIP codes',
    },
  },
};

// With href links
export const WithLinks = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AreaRow 
      zip="9375" 
      qrScans="5.6%" 
      conversion=".02%" 
      progress={68}
      href="/campaigns/spring-mail/seattle-wa/9375"
    />
    <AreaRow 
      zip="98101" 
      qrScans="4.2%" 
      conversion=".03%" 
      progress={82}
      href="/campaigns/spring-mail/seattle-wa/98101"
    />
    <AreaRow 
      zip="98102" 
      qrScans="8.1%" 
      conversion=".01%" 
      progress={45}
      href="/campaigns/spring-mail/seattle-wa/98102"
    />
  </div>
);
WithLinks.parameters = {
  docs: {
    description: {
      story: 'Area rows with href links for routing',
    },
  },
};

// Table view with multiple rows
export const TableView = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    maxWidth: '820px',
    border: '1px solid #DADFE4',
    borderRadius: '8px',
    overflow: 'hidden',
  }}>
    {/* Header row */}
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: '118px 98px 149px 1fr',
      padding: '12px 16px',
      background: '#F8F9FA',
      borderBottom: '1px solid #DADFE4',
      fontFamily: 'Helvetica',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#74787C',
    }}>
      <div>ZIP</div>
      <div>QR Scans</div>
      <div>Conversion</div>
      <div>Delivery Completion</div>
    </div>
    
    {/* Data rows */}
    <AreaRow 
      zip="9375" 
      qrScans="5.6%" 
      conversion=".02%" 
      progress={68}
      href="/campaigns/spring-mail/seattle-wa/9375"
    />
    <AreaRow 
      zip="98101" 
      qrScans="4.2%" 
      conversion=".03%" 
      progress={82}
      href="/campaigns/spring-mail/seattle-wa/98101"
    />
    <AreaRow 
      zip="98102" 
      qrScans="8.1%" 
      conversion=".01%" 
      progress={45}
      href="/campaigns/spring-mail/seattle-wa/98102"
    />
    <AreaRow 
      zip="98103" 
      qrScans="3.9%" 
      conversion=".04%" 
      progress={91}
      href="/campaigns/spring-mail/seattle-wa/98103"
    />
    <AreaRow 
      zip="98104" 
      qrScans="7.3%" 
      conversion=".02%" 
      progress={73}
      href="/campaigns/spring-mail/seattle-wa/98104"
    />
  </div>
);
TableView.parameters = {
  docs: {
    description: {
      story: 'Multiple area rows in a table layout with header',
    },
  },
};

// High performance areas
export const HighPerformance = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AreaRow 
      zip="98105" 
      qrScans="12.4%" 
      conversion=".08%" 
      progress={98} 
    />
    <AreaRow 
      zip="98106" 
      qrScans="11.2%" 
      conversion=".07%" 
      progress={96} 
    />
    <AreaRow 
      zip="98107" 
      qrScans="10.8%" 
      conversion=".06%" 
      progress={94} 
    />
  </div>
);
HighPerformance.parameters = {
  docs: {
    description: {
      story: 'Area rows showing high performance metrics',
    },
  },
};

// Low performance areas
export const LowPerformance = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AreaRow 
      zip="98108" 
      qrScans="1.2%" 
      conversion=".005%" 
      progress={15} 
    />
    <AreaRow 
      zip="98109" 
      qrScans="0.8%" 
      conversion=".003%" 
      progress={8} 
    />
    <AreaRow 
      zip="98110" 
      qrScans="2.1%" 
      conversion=".008%" 
      progress={22} 
    />
  </div>
);
LowPerformance.parameters = {
  docs: {
    description: {
      story: 'Area rows showing low performance metrics',
    },
  },
};
