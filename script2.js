const personCardInfo = [
    {
      id: 4619881100021433,
      card: '4619881100021433',
      name: 'Abu Taher',
      contact: '01723067505',
      address: 'Jamuna Bank PLC',
    },
    {
      id: 4619881100021876,
      card: '4619881100021876',
      name: 'Kamrul Hasan Tusher',
      contact: '01841788365',
      address: 'Mirpur Dhaka',
    },
    {
      id: 4619881100021977,
      card: '4619881100021977',
      name: 'Tania Sharmin',
      contact: '01673836970',
      address: 'Aqua Mymensingh',
    },
  ];
  
  function fetchInfoFromArray() {
    const inputCardNo = document.getElementById('input-card').value;
    const cardInfo = personCardInfo.find(info => info.card === inputCardNo || info.id.toString() === inputCardNo);
    if (cardInfo) {
      renderCardInfo(cardInfo);
    } else {
      alert('Card not found!');
    }
  }
  
  function renderCardInfo(information) {
    document.getElementById('appear-card-number').textContent = information.card;
    document.getElementById('appear-card-name').textContent = information.name;
    document.getElementById('contact').textContent = information.contact;
    document.getElementById('address').textContent = information.address;
  }
  
  document.getElementById('search-card').addEventListener('click', fetchInfoFromArray);
  






  // Define the account information with balances
const accounts = [
  { accountNumber: '1102000065206', balance: 10000.00 },
  { accountNumber: '1101003335327', balance: 80000.00 }
];

// // Function to process payment
// function processPayment(accountNumber, paymentAmount) {
//   // Find the account based on the account number
//   const account = accounts.find(acc => acc.accountNumber === accountNumber);

//   // Check if the account exists
//   if (!account) {
//     console.log('Account not found.');
//     return;
//   }

//   // Check if the payment amount is greater than the balance
//   if (paymentAmount > account.balance) {
//     console.log('Insufficient balance. Payment cannot be completed.');
//   } else {
//     // Deduct the payment from the balance
//     account.balance -= paymentAmount;
//     console.log(`Payment of Tk. ${paymentAmount} completed successfully.`);
//     console.log(`Remaining balance: Tk. ${account.balance}`);
//   }
// }

// // Example of how to use the function
// processPayment('1102000065206', 5000); // This will succeed
// processPayment('1101003335327', 90000); // This will fail due to insufficient funds
