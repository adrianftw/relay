import React from 'react';
import './Dashboard.css';

/**
 * Dashboard Page - Home/landing page
 */
export const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-page__title">Dashboard</h1>
      <p className="dashboard-page__subtitle">Welcome to Every Door Direct Mail</p>

      <div className="dashboard-page__cards">
        <div className="dashboard-card">
          <h2 className="dashboard-card__title">Active Campaigns</h2>
          <p className="dashboard-card__value">12</p>
        </div>

        <div className="dashboard-card">
          <h2 className="dashboard-card__title">In Progress</h2>
          <p className="dashboard-card__value">8</p>
        </div>

        <div className="dashboard-card">
          <h2 className="dashboard-card__title">Completed</h2>
          <p className="dashboard-card__value">47</p>
        </div>
      </div>
    </div>
  );
};
