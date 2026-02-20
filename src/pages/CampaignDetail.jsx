import React from 'react';
import { MdQrCode2, MdTrendingUp, MdAttachMoney, MdShoppingCart } from 'react-icons/md';
import { DeliveryDetailsCard } from '../components/DashboardCards/DeliveryDetailsCard';
import { LightCard } from '../components/DashboardCards/LightCard';
import './CampaignDetail.css';

/**
 * CampaignDetail Page
 * Detail page for campaign analytics with dashboard cards
 * 
 * Grid System: 12 columns, 32px margins, 16px gutters
 */
export const CampaignDetail = () => {
  // Sample data for DeliveryDetailsCard
  const deliveryData = [
    { label: 'Enroute', value: 3452, color: '#7DB7F1' },
    { label: 'Processing', value: 3452, color: '#FFFFFF' },
    { label: 'Delivered', value: 3452, color: '#A6A6EF' },
    { label: 'Returned', value: 3452, color: '#DA291C' },
  ];

  return (
    <div className="campaign-detail-page">
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
  );
};

export default CampaignDetail;
