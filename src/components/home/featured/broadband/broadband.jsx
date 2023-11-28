// BroadbandPlansTable.js

import React from 'react';

const broadband = () => {
  const data = [
    { company: 'AT&T', plan: '300 - 5000 Mbps', price: '$55 - $25 per Month' },
    { company: 'Spectrum', plan: '100 - 1,000 Mbps', price: '$30 - $90 per Month' },
    { company: 'Astound', plan: '100 - 1,200 Mbps', price: '$20 - $80 per Month' },
    { company: 'Verizon', plan: '300 Mbps', price: '$24.99 - $49 per Month' },
    { company: 'Xfinity', plan: '75 - 1,200 Mbps', price: '$20 - $80' },
    { company: 'T-Mobile 5G Home Internet', plan: '72  245 Mbps', price: '$50.00' },
  ];

  return (
    <div>
    <h2>broadband Plans</h2>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Plan</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Price (monthly)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.company}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.plan}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default broadband;
