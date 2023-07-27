import React, { useEffect, useState } from 'react';
import './StatsCard.css';

const Stats = () => {
  const [animatedIndex, setAnimatedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const statsData = [
    {
      number: '10k+',
      label: 'Happy Clients',
    },
    {
      number: '50k+',
      label: 'Shipments Delivered',
    },
    {
      number: '28k+',
      label: 'Served Pincodes',
    },
    {
      number: '24/7',
      label: 'Support',
    },
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`stat ${index === animatedIndex ? 'animated' : ''}`}
        >
          <h1 className="stat-number">{stat.number}</h1>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
