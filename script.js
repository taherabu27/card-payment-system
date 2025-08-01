// Initial products array

const personCardInfo = [
  {
    id: 4619881100021433,
    cardNo: "4619881100021433",
    name: "Abu Taher",
    contact: "01723067505",
    address: "Jamuna Bank PLC",
    amount: "",
    accountType: "",
    debitAccountNo: "",
    cheque: "",
    type: "",
    creditAccount: "1001000238674",
    branch: "Mymensingh Branch",
  },

  {
    id: 4619881100021876,
    cardNo: "4619881100021876",
    name: "Kamrul Hasan Tusher",
    contact: "01841788365",
    address: "Mirpur Dhaka",
    amount: "",
    accountType: "",
    debitAccountNo: "",
    cheque: "",
    type: "",
    creditAccount: "1001000238674",
    branch: "Mymensingh Branch",
  },

  {
    id: 4619881100021977,
    cardNo: "4619881100021977",
    name: "Tania Sharmin",
    contact: "01673836970",
    address: "Aqua Mymensingh",
    amount: "",
    accountType: "",
    debitAccountNo: "",
    cheque: "",
    type: "",
    creditAccount: "1001000238674",
    branch: "Mymensingh Branch",
  },
  {
    id: 4619881100021897,
    cardNo: "4619881100021897",
    name: "Nure Alam Siddiq",
    contact: "01916666994",
    address: "Mirpur Mymensingh",
    amount: "",
    accountType: "",
    debitAccountNo: "",
    cheque: "",
    type: "",
    creditAccount: "1001000238674",
    branch: "Mymensingh Branch",
  },
  {
    id: 4619881100022977,
    cardNo: "4619881100022977",
    name: "Fakhrul Hassan Talukder",
    contact: "01673836971",
    address: "Aqua Mymensingh",
    amount: "",
    accountType: "",
    debitAccountNo: "",
    cheque: "",
    type: "",
    creditAccount: "1001000238674",
    branch: "Mymensingh Branch",
  },
];

const accountInfo = [
  {
    accountNumber: "1101003335327",
    balance: 10000,
  },
  {
    accountNumber: "1102000065206",
    balance: 80000,
  },
];

let finalPaymentInfo = [...personCardInfo];
let paymentRecords = [];
let editIndex = [];

// check the payment validation through account balance and paidamount...

const validPayment = (accountNo, paidAmount) => {
  const account = accountInfo.find((acc) => acc.accountNumber === accountNo);
  const amount = parseFloat(paidAmount);
  if (!account) {
    alert("Enter the valid account Number");
    return false;
  } else if (amount > account.balance) {
    alert("Insufficient balance. Payment cannot be completed.");
    return false;
  }
  //deduct the account balance
  account.balance -= amount;
  return true;
};

// fetch the card information from array...
function fetchInfoFromArray() {
  const inputCardNo = document.getElementById("input-card").value;
  const cardInfo = personCardInfo.find(function (info) {
    return info.cardNo === inputCardNo || info.id.toString() === inputCardNo;
  });

  if (cardInfo) {
    renderCardInfo(cardInfo);
  } else {
    alert("Card information is invalid!!!!");
  }
}

/// render the card information...
function renderCardInfo(information) {
  document.getElementById("appear-card-number").innerText = information.cardNo;
  document.getElementById("appear-card-name").innerText = information.name;
  document.getElementById("name-oncard").innerText = information.name;
  document.getElementById("contact").innerText = information.contact;
  document.getElementById("address").innerText = information.address;
  document.getElementById("amount-paid").value = information.amount;
  document.getElementById("debit-account").value = information.debitAccountNo;
  document.getElementById("cheque-no").innerText = information.cheque;
  document.getElementById("payment-type-bdt").value = information.type;
  document.getElementById("credit-account-number").innerText =
    information.creditAccount;
  document.getElementById("branch").innerText = information.branch;
}

// add payment information and submit the payment form to payment information table...

function addPaymentInfo(event) {
  event.preventDefault();

  const cardNumber = document.getElementById("appear-card-number").innerText;
  const cardName = document.getElementById("appear-card-name").innerText;
  const nameOnCard = document.getElementById("name-oncard").innerText;
  const contact = document.getElementById("contact").innerText;
  const amountPaid = document.getElementById("amount-paid").value;
  const debitAccountNumber = document.getElementById("debit-account").value;
  const paymentTypeBdt = document.getElementById("payment-type-bdt").value;
  const creditAccountNumber = document.getElementById(
    "credit-account-number"
  ).innerText;
  const branchNo = document.getElementById("branch").innerText;

  if (amountPaid === "" || debitAccountNumber === "" || paymentTypeBdt === "") {
    return alert("Input Value can't be Blank");
  }

  if (!validPayment(debitAccountNumber, amountPaid)) {
    return false;
  }

  const addPaymentInTable = {
    card: cardNumber,
    name: cardName,
    oncard: nameOnCard,
    contact: contact,
    paid: amountPaid,
    debitAccountNo: debitAccountNumber,
    bdt: paymentTypeBdt,
    creditAccount: creditAccountNumber,
    branch: branchNo,
  };
  paymentRecords.push(addPaymentInTable);

  alert("Payment submitted successfully");

  // save the data to local storage
  localStorage.setItem("paymentData", JSON.stringify(paymentRecords));

  // window.location.href = "report.html";
  window.open("report.html", "_blank");

  renderPaymentInformation();

  //Reset The payment form...////
  document.getElementById("payment-form").reset();

  // Clear any non-input (text) fields manually
  document.getElementById("appear-card-number").innerText = "";
  document.getElementById("appear-card-name").innerText = "";
  document.getElementById("name-oncard").innerText = "";
  document.getElementById("contact").innerText = "";
  document.getElementById("address").innerText = "";
  document.getElementById("credit-account-number").innerText = "";
  document.getElementById("branch").innerText = "";
}

// registration Info

const userRegistration = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const registrationId = document.getElementById("office-id").value;
  const branchId = document.getElementById("branch-name").value;
  const branchCode = document.getElementById("branch-code").value;
  const passcode = document.getElementById("password").value;
  const passCodeConfirm = document.getElementById("confirm-password").value;

  // simple validation
  if (!name || !email || !passcode) {
    return alert("input all the information");
  }

  const randomNumber = Math.floor(Math.random() * 100000);
  const userId = randomNumber;

  const createUser = {
    userId,
    name,
    email,
    registrationId,
    branchId,
    branchCode,
    passcode,
    passCodeConfirm,
  };

  localStorage.setItem(userId, JSON.stringify(createUser));

  document.getElementById(
    "resultMessage"
  ).textContent = `Registration successful! Your User ID is: ${userId}`;
  
};

document
  .getElementById("search-card")
  .addEventListener("click", fetchInfoFromArray);

document
  .getElementById("payment-form")
  .addEventListener("submit", addPaymentInfo);

document
  .getElementById("registration-form")
  .addEventListener("submit", userRegistration);

  

renderPaymentInformation();
userRegistration();
