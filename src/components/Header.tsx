import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#F26922',
      color: 'white',
      padding: '20px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 600,
          margin: 0
        }}>
          TONYCICO'S MARKET NOW
        </h1>
        <p style={{
          fontSize: '1.1rem',
          margin: '10px 0 0 0',
          opacity: 0.9
        }}>
          Weekly Market Trends & Insights
        </p>
      </div>
    </header>
  );
};

export default Header; 