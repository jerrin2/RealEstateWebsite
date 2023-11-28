// BankInfoTable.js

import React from 'react';

const bank = () => {
  const bankData = [
    { bank: 'Bank of America', accountName: 'Advantage SafeBalance Banking', monthlyFee: 'No fee for eligible students', initialDeposit: '$25', availableTo: 'Students under 24 and enrolled in school' },
    { bank: 'Chase', accountName: 'Chase College Checking', monthlyFee: '$6 monthly service fee or $0 for 5 years in college', initialDeposit: '$25', availableTo: 'College students aged 17 to 24 years old with proof of student status' },
    { bank: 'Wells Fargo', accountName: 'Student Checking Account', monthlyFee: '$10 monthly service fee or $0 for 17-24 year olds', initialDeposit: '$25', availableTo: '17-24 year old college students' },
    { bank: 'HSBC USA', accountName: 'HSBC Student accounts', monthlyFee: 'No monthly maintenance fee for six years', initialDeposit: '$25', availableTo: 'Over 18 US students and international students studying in the US' },
    { bank: 'US Bank', accountName: 'U.S. Bank Student Checking Account', monthlyFee: 'No monthly maintenance fee (unless you wish to receive paper statements, which cost $42 per month)', initialDeposit: '$25', availableTo: 'US or international students' },
    { bank: 'Santander', accountName: 'Student Value Checking', monthlyFee: 'No monthly fee for students', initialDeposit: '$10', availableTo: 'Students aged 14-25' },
    { bank: 'TD Bank', accountName: 'TD Convenience Checking', monthlyFee: '$15 or $0 if between 17-23', initialDeposit: '$0', availableTo: 'Students aged 17-23' },
    { bank: 'Keybank', accountName: 'Key Student Checking', monthlyFee: '$5 or $0 if you make at least 5 posted transactions or deposit at least $200 to waive the monthly maintenance fee.', initialDeposit: '$50', availableTo: 'Students ages 16 to 24 who are high school juniors or seniors or are enrolled in post-high school education' },
  ];

  const stepsToOpenAccount = [
    'Step 1: Gather Your Documents',
    'Before choosing a bank, we recommend ensuring you have the proper documents at hand. International students generally require the following documents to open a US bank account:',
    '• Student visa',
    '• Passport',
    '• Proof of university enrollment',
    '• Secondary ID (such as a driver’s license or student card)',
    'Step 2: Choose a Bank',
    'The following is a list of some popular banks in the US and the plans they offer for students:',
    '• Bank of America: Advantage SafeBalance Banking',
    '• Capital One: 360 Checking Account',
    '• Chase: Chase College Checking',
    '• HSBC USA: International Student Account',
    '• Santander: Student Value Checking',
    '• TD Bank: TD Student Checking',
    '• U.S. Bank: Student Checking Account',
    '• Wells Fargo: Student Checking Account',
    'Step 3: Choose Your Account Type',
    'After selecting a bank, it’s time to choose an account type. When studying abroad in the US, there are two types of bank accounts: a checking account and a savings account.',
    'It’s vital to note that To open a new account, you will need to bring the following:',
    '• 2 Forms of I.D. – a Passport and current Visa paperwork will count for this, also Social Security Card, a debit or credit card with your name on it)',
    '• Address in home country',
    '• Proof of new address for Texas – a utility bill or lease agreement (something that has your name and address on it)',
    '• Valid email address',
    '• Your U.S. phone number (previously, you could give a friend’s phone number if you did not yet have a personal U.S. number. This is no longer the case. You MUST have your own number before opening the account).',
    '• At least $25 to deposit into the new account',
  ];

  return (
    <div>
      <h2>Banks and Account Information</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Bank</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Bank Account Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Monthly Service Fee</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Minimum Initial Deposit</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Who is it Available To</th>
          </tr>
        </thead>
        <tbody>
          {bankData.map((item, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.bank}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.accountName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.monthlyFee}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.initialDeposit}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.availableTo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Steps to Open a Bank Account</h2>
      <ol>
        {stepsToOpenAccount.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default bank;


