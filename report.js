window.onload = function renderPaymentInformation() {
    const paymentData = JSON.parse(localStorage.getItem("paymentData")) || [];
    const paidInfo = document.getElementById("payment-information");
    paidInfo.innerHTML = "";
  
    paymentData.forEach(function (info) {
      const paidRow = document.createElement("tr");
      paidRow.innerHTML = `
                <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6">${info.card}</td>
                <td class="text-center border-solid border-2 border-slate-500 px-8 m-6">${info.name}</td>
                <td class="text-center border-solid border-2 border-slate-500 ppx-8 m-6">${info.paid}</td>
                <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6"> ${info.debitAccountNo}</td>
                <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6">${info.bdt}</td>
                <td class=" text-center border-solid border-2 border-slate-500 px-8 m-6">${info.contact}</td>
                <td class="text-center border-solid border-2 border-slate-500 px-8 m-6">${info.creditAccount}</td>
                <td class="text-center border-solid border-2 border-slate-500 px-8 m-6">${info.branch}</td>
      `;
      paidInfo.appendChild(paidRow);
    });
  };