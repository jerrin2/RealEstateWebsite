// ElectricityPlanPage.js

import React from 'react';

const electricity = () => {
  const electricityData = [
    { company: 'TXU Energy', monthlyBill: '$94.38' },
    { company: 'Frontier Utilities', monthlyBill: '$61.65' },
    { company: 'Gexa Energy', monthlyBill: '$119.60' },
    { company: 'Direct Energy', monthlyBill: '$76.43' },
  ];

  return (
    <div>
      <h2>Electricity Plans</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Monthly Bill Estimate</th>
          </tr>
        </thead>
        <tbody>
          {electricityData.map((item, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.company}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.monthlyBill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default electricity;


