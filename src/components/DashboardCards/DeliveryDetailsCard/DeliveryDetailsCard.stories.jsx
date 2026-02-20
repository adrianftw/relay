import React from 'react';
import { DeliveryDetailsCard } from './DeliveryDetailsCard';
import { 
  MdQrCode2, 
  MdLocalShipping,
  MdInventory,
  MdStore,
} from 'react-icons/md';

export default {
  title: 'Dashboard Cards/DeliveryDetailsCard',
  component: DeliveryDetailsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Default - QR Scans
export const Default = {
  args: {
    icon: MdQrCode2,
    label: 'QR Scans',
    total: '50,5689',
    data: [
      { label: 'Enroute', value: 3452, color: '#7DB7F1' },
      { label: 'Processing', value: 3452, color: '#FFFFFF' },
      { label: 'Delivered', value: 3452, color: '#A6A6EF' },
      { label: 'Returned', value: 3452, color: '#DA291C' },
    ],
  },
};

// Delivery statistics
export const DeliveryStats = {
  args: {
    icon: MdLocalShipping,
    label: 'Deliveries',
    total: '12,845',
    data: [
      { label: 'In Transit', value: 4200, color: '#7DB7F1' },
      { label: 'Pending', value: 1500, color: '#FFFFFF' },
      { label: 'Completed', value: 6800, color: '#A6A6EF' },
      { label: 'Failed', value: 345, color: '#DA291C' },
    ],
  },
};

// Inventory status
export const InventoryStatus = {
  args: {
    icon: MdInventory,
    label: 'Inventory',
    total: '8,234',
    data: [
      { label: 'In Stock', value: 5234, color: '#A6A6EF' },
      { label: 'Low Stock', value: 2000, color: '#7DB7F1' },
      { label: 'Reserved', value: 800, color: '#FFFFFF' },
      { label: 'Out of Stock', value: 200, color: '#DA291C' },
    ],
  },
};

// Store orders
export const StoreOrders = {
  args: {
    icon: MdStore,
    label: 'Orders',
    total: '24,567',
    data: [
      { label: 'Processing', value: 8900, color: '#7DB7F1' },
      { label: 'Packed', value: 6700, color: '#FFFFFF' },
      { label: 'Shipped', value: 7800, color: '#A6A6EF' },
      { label: 'Cancelled', value: 1167, color: '#DA291C' },
    ],
  },
};

// Different data distributions
export const UnevenDistribution = {
  args: {
    icon: MdQrCode2,
    label: 'Campaign Views',
    total: '156,432',
    data: [
      { label: 'Mobile', value: 89000, color: '#7DB7F1' },
      { label: 'Desktop', value: 45000, color: '#A6A6EF' },
      { label: 'Tablet', value: 18432, color: '#FFFFFF' },
      { label: 'Other', value: 4000, color: '#DA291C' },
    ],
  },
};

// Multiple cards
export const MultipleCards = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, 350px)', 
    gap: '24px',
    padding: '20px'
  }}>
    <DeliveryDetailsCard 
      icon={MdQrCode2}
      label="QR Scans"
      total="50,5689"
      data={[
        { label: 'Enroute', value: 3452, color: '#7DB7F1' },
        { label: 'Processing', value: 3452, color: '#FFFFFF' },
        { label: 'Delivered', value: 3452, color: '#A6A6EF' },
        { label: 'Returned', value: 3452, color: '#DA291C' },
      ]}
    />
    <DeliveryDetailsCard 
      icon={MdLocalShipping}
      label="Deliveries"
      total="12,845"
      data={[
        { label: 'In Transit', value: 4200, color: '#7DB7F1' },
        { label: 'Pending', value: 1500, color: '#FFFFFF' },
        { label: 'Completed', value: 6800, color: '#A6A6EF' },
        { label: 'Failed', value: 345, color: '#DA291C' },
      ]}
    />
  </div>
);
