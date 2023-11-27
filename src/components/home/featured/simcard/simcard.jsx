// SimPlansTable.js

import React from 'react';

const simcard = () => {
  const data = [
    { company: 'AT&T', plan: '16GB', price: '$25' },
    { company: 'Verizon', plan: '15GB', price: '$30' },
    { company: 'T Mobile', plan: '10GB', price: '$40' },
    { company: 'Cricket Wireless', plan: '3 Months Unlimited', price: '$40' },
    { company: 'Mint Mobile', plan: '3 Months Unlimited', price: '$45' },
  ];

  const additionalInfo = [
    'Payment method (a credit card from your country will work as long as it is run through Visa or Mastercard, U.S. debit/credit card, cash, etc.)',
    'Passport',
    'Visa (I-20 paperwork)',
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Plan</th>
            <th>Price (monthly)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.plan}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Additional Information</h2>
      <ul>
        {additionalInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default simcard;
