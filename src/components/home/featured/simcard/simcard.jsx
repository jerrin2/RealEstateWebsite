// SimPlansAndInfoTable.js

import React from 'react';

const simcard = () => {
  const simPlansData = [
    { company: 'AT&T', plan: '16GB', price: '$25' },
    { company: 'Verizon', plan: '15GB', price: '$30' },
    { company: 'T Mobile', plan: '10GB', price: '$40' },
    { company: 'Cricket Wireless', plan: '3 M unlimited', price: '$40' },
    { company: 'Mint Mobile', plan: '3 M unlimited', price: '$45' },
  ];

  const additionalInfo = [
    'Payment method (a credit card from your country will work as long as it is run through Visa or Mastercard, U.S. debit/credit card, cash, etc.)',
    'Passport',
    'Visa (I-20 paperwork)',
  ];

  return (
    <div>
      <h2>SIM Plans</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Plan</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Price (monthly)</th>
          </tr>
        </thead>
        <tbody>
          {simPlansData.map((item, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.company}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.plan}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Additional Information</h2>
      <h3>Info you need to bring with you to open an account, buy a sim card or new phone: </h3>
      <ul>
        {additionalInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default simcard;


