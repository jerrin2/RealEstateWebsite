import React from 'react';

const electricity = () => {
  const data = [
    { provider: 'TXU Energy', monthlyBill: '$94.38' },
    { provider: 'Frontier Utilities', monthlyBill: '$61.65' },
    { provider: 'Gexa Energy', monthlyBill: '$119.60' },
    { provider: 'Direct Energy', monthlyBill: '$76.43' },
  ];

  return (
    <table style={{
      "border":"1px solid"
    }}>
      <thead>
        <tr>
          <th>Energy Provider</th>
          <th>Monthly Bill Estimate (for 500 kWh)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.provider}</td>
            <td>{item.monthlyBill}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default electricity