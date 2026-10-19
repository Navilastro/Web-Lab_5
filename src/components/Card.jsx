import React from 'react';

function Card({ children }) {
  // Minimal styling as requested
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

export default Card;