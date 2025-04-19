// Data
const personCardInfo = [
    {
        id: 4619881100021433,
        card: '4619881100021433',
        name: 'Abu Taher',
        contact: '01723067505',
        address: 'Jamuna Bank PLC',
        amount: '',
        accountType: '',
        accountNo: '',
        cheque: '',
        type: '',
        creditAccount: '1001000238674',
        branch: 'Mymensingh Branch'
    },

    // Other person card info objects...

    {
        id: 4619881100021876,
        card: '4619881100021876',
        name: 'Kamrul Hasan Tusher',
        contact: '01841788365',
        address: 'Mirpur Dhaka',
        amount: '',
        accountType: '',
        accountNo: '',
        cheque: '',
        type: '',
        creditAccount: '1001000238674',
        branch: 'Mymensingh Branch'
      },
    
      {
        id: 4619881100021977,
        card: '4619881100021977',
        name: 'Tania Sharmin',
        contact: '01673836970',
        address: 'Aqua Mymensingh',
        amount: '',
        accountType: '',
        accountNo: '',
        cheque: '',
        type: '',
        creditAccount: '1001000238674',
        branch: 'Mymensingh Branch'
      },
      {
        id: 4619881100021897,
        card: '4619881100021897',
        name: 'Nure Alam Siddiq',
        contact: '01916666994',
        address: 'Mirpur Mymensingh',
        amount: '',
        accountType: '',
        accountNo: '',
        cheque: '',
        type: '',
        creditAccount: '1001000238674',
        branch: 'Mymensingh Branch'
    
      },
      {
        id: 4619881100022977,
        card: '4619881100022977',
        name: 'Fakhrul Hassan Talukder',
        contact: '01673836971',
        address: 'Aqua Mymensingh',
        amount: '',
        accountType: '',
        accountNo: '',
        cheque: '',
        type: '',
        creditAccount: '1001000238674',
        branch: 'Mymensingh Branch'
    
      },
];

// Function to find card info by card number
function findCardInfo(cardNumber) {
    return personCardInfo.find(info => info.card === cardNumber || info.id.toString() === cardNumber);
}

// Function to render card info
function renderCardInfo(cardInfo) {
    // Render card info in HTML elements
    document.getElementById('appear-card-number').innerText = cardInfo.card;
    document.getElementById('appear-card-name').innerText = cardInfo.name;
    document.getElementById('name-oncard').innerText = cardInfo.name;
    document.getElementById('contact').innerText = cardInfo.contact;
    document.getElementById('address').innerText = cardInfo.address;
    document.getElementById('amount-paid').value = cardInfo.amount;
    document.getElementById('card-account').value = cardInfo.accountNo;
    document.getElementById('cheque-no').value = cardInfo.cheque;
    document.getElementById('payment-type-bdt').value = cardInfo.type;
    document.getElementById('credit-account-number').innerText = cardInfo.creditAccount;
    document.getElementById('branch').innerText = cardInfo.branch;
    // Render other fields...
}

// Function to add payment info
function addPaymentInfo(event) {
    event.preventDefault();

    // Extract data from form inputs
    const cardNumber = document.getElementById('appear-card-number').innerText;
    const cardInfo = findCardInfo(cardNumber);
    if (!cardInfo) {
        alert('Card information is invalid!!!!');
        return;
    }

    // Construct payment record
    const paymentRecord = {
        card: cardInfo.card,
        name: cardInfo.name,
        oncard: cardInfo.name,
        contact: cardInfo.contact,
        paid: cardInfo.amount,
        accountNo: cardInfo.accountNo,
        bdt: cardInfo.type,
        creditAccount: cardInfo.creditAccount,
        branch: cardInfo.branch,

        // Extract other fields...
    };

    // Add payment record to paymentRecords array
    paymentRecords.push(paymentRecord);

    // Render payment information
    paymentInformation();

    // Reset form
    document.getElementById('payment-form').reset();
}

// Function to render payment information
function paymentInformation() {
    const paidInfo = document.getElementById('payment-information');
    paidInfo.innerHTML = '';

    paymentRecords.forEach(function (info) {
        // Render payment record in HTML table row
        const paidRow = document.createElement('tr');
        paidRow.innerHTML = `
        <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6">${info.card}</td>
        <td class="text-center border-solid border-2 border-slate-500 px-8 m-6">${info.name}</td>
        <td class="text-center border-solid border-2 border-slate-500 ppx-8 m-6">${info.paid}</td>
        <td class=" text-centerborder-solid border-2 border-slate-500 px-8 m-6"> ${info.accountNo}</td>
        <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6">${info.bdt}</td>
        <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6">${info.contact}</td>
        <td class="text-center border-solid border-2 border-slate-500 px-8 m-6">${info.creditAccount}</td>
        <td class="text-center border-solid border-2 border-slate-500 px-8 m-6">${info.branch}</td>
`;
        paidInfo.appendChild(paidRow);
    });
}

// Event listeners
document.getElementById('search-card').addEventListener('click', function () {
    const inputCardNo = document.getElementById('input-card').value;
    const cardInfo = findCardInfo(inputCardNo);
    if (cardInfo) {
        renderCardInfo(cardInfo);
    } else {
        alert('Card information is invalid!!!!');
    }
});

document.getElementById('payment-form').addEventListener('submit', addPaymentInfo);

// Initialize paymentRecords array
const paymentRecords = [];

// Initialize payment information on page load
paymentInformation();
