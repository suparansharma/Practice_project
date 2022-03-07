//mobile items

//+ Button
// var mobilePlusBtn = document.getElementById("mobilePlusBtn");
// mobilePlusBtn.addEventListener("click", function () {
//   var increaseMobileNumber = document.getElementById("MobileNumber");
//   var increaseMobileInNumber = parseFloat(increaseMobileNumber.value);
//   var newIncreaseMobileNumber = increaseMobileInNumber + 1;
//   increaseMobileNumber.value = newIncreaseMobileNumber;

//   var mobilePrice = 1219 * newIncreaseMobileNumber;
//   document.getElementById("mobilePrice").innerText = mobilePrice;

//   console.log(mobilePrice);
// });

// //- button
// var mobileMinusBtn = document.getElementById("mobileMinusBtn");
// mobileMinusBtn.addEventListener("click", function () {
//   var decreaseMobileNumber = document.getElementById("MobileNumber");
//   var decreaseMobileInNumber = parseFloat(decreaseMobileNumber.value);
//   var newDecreaseMobileNumber = decreaseMobileInNumber - 1;
//   decreaseMobileNumber.value = newDecreaseMobileNumber;

//   var mobilePrice = 1219 * newDecreaseMobileNumber;
//   document.getElementById("mobilePrice").innerText = mobilePrice;

//   console.log(newDecreaseMobileNumber);
// });

// var mobilePlusBtn = document.getElementById("mobilePlusBtn");
// mobilePlusBtn.addEventListener("click", function () {
//   handleProductChange(true);
// });

// //- button
// var mobileMinusBtn = document.getElementById("mobileMinusBtn");
// mobileMinusBtn.addEventListener("click", function () {
//   handleProductChange(false);
// });

// function handleProductChange(isIncrease) {
//   var MobileNumber = document.getElementById("MobileNumber");
//   var MobileInNumber = parseFloat(MobileNumber.value);
//   let newMobileNumber = MobileInNumber;
//   if (isIncrease == true) {
//     newMobileNumber = MobileInNumber + 1;
//   }

//   if (isIncrease == false && MobileInNumber > 0) {
//     newMobileNumber = MobileInNumber - 1;
//   }

//   MobileNumber.value = newMobileNumber;
//   var mobilePrice = 1219 * newMobileNumber;
//   document.getElementById("mobilePrice").innerText = mobilePrice;
// }

////case items
//// case + button

// var casePlusBtn = document.getElementById("casePlusBtn");
// casePlusBtn.addEventListener("click", function () {
//   var increaseCaseNumber = document.getElementById("CaseNumber");
//   var increaseInCaseNumber = parseFloat(increaseCaseNumber.value);
//   var newIncreaseCaseNumber = increaseInCaseNumber + 1;
//   increaseCaseNumber.value = newIncreaseCaseNumber;

//   var casePrice = newIncreaseCaseNumber * 59;
//   document.getElementById("casePrice").innerText = casePrice;
// });

// var caseMinusBtn = document.getElementById("caseMinusBtn");
// caseMinusBtn.addEventListener("click", function () {
//   var decreaseCaseNumber = document.getElementById("CaseNumber");
//   var decreaseInCaseNumber = parseFloat(decreaseCaseNumber.value);
//   var newDecreaseCaseNumber = decreaseInCaseNumber - 1;
//   decreaseCaseNumber.value = newDecreaseCaseNumber;

//   var casePrice = newDecreaseCaseNumber * 59;
//   document.getElementById("casePrice").innerText = casePrice;
// });

// function handleProductChange(isIncrease) {
//   var CaseNumber = document.getElementById("CaseNumber");
//   var CaseInNumber = parseFloat(CaseNumber.value);
//   let newCaseNumber = CaseInNumber;
//   if (isIncrease == true) {
//     newCaseNumber = CaseInNumber + 1;
//   }

//   if (isIncrease == false && CaseInNumber > 0) {
//     newCaseNumber = CaseInNumber - 1;
//   }
//   CaseNumber.value = newCaseNumber;
//   var casePrice = newCaseNumber * 59;
//   document.getElementById("casePrice").innerText = casePrice;
// }

function handleProductChange(product, isIncrease) {
  var itemNumber = document.getElementById(product + "Number");
  var itemInNumber = parseFloat(itemNumber.value);

  let newitemNumber = itemInNumber;
  if (isIncrease == true) {
    newitemNumber = itemInNumber + 1;
  }

  if (isIncrease == false && itemInNumber > 0) {
    newitemNumber = itemInNumber - 1;
  }
  itemNumber.value = newitemNumber;
  let Price = 0;

  if (product == "Case") {
    // itemNumber.value = newitemNumber;
    Price = newitemNumber * 59;
  }

  if (product == "Mobile") {
    // itemNumber.value = newitemNumber;
    Price = newitemNumber * 1219;
  }
  document.getElementById(product + "Price").innerText = Price;
  //   totalPriceWithoutVat();
  //   tax();
  //   totalPrice();

  calculation();
}

// function totalPriceWithoutVat() {
//   var mobilePrice = document.getElementById("MobilePrice").innerText;
//   var newMobilePrice = parseFloat(mobilePrice);

//   var casePrice = document.getElementById("CasePrice").innerText;
//   var newCasePrice = parseFloat(casePrice);

//   var totalPrice = newMobilePrice + newCasePrice;

//   document.getElementById("totalPrice").innerText = totalPrice;
// }

// function tax() {
//   var mobilePrice = document.getElementById("MobilePrice").innerText;
//   var newMobilePrice = parseFloat(mobilePrice);

//   var casePrice = document.getElementById("CasePrice").innerText;
//   var newCasePrice = parseFloat(casePrice);

//   var totalPrice = (newMobilePrice + newCasePrice) * 0.15;
//   var margeTotalPrice = Math.round(totalPrice);
//   console.log(margeTotalPrice);
//   document.getElementById("tax").innerText = margeTotalPrice;
// }

// function totalPrice() {
//   var mobilePrice = document.getElementById("MobilePrice").innerText;
//   var newMobilePrice = parseFloat(mobilePrice);

//   var casePrice = document.getElementById("CasePrice").innerText;
//   var newCasePrice = parseFloat(casePrice);

//   var totalPrice =
//     newMobilePrice + newCasePrice + (newMobilePrice + newCasePrice) * 0.15;
//   var margeTotalPrice = Math.round(totalPrice);
//   console.log(margeTotalPrice);
//   document.getElementById("total").innerText = margeTotalPrice;
// }

function calculation() {
  //   var MobileNumber = document.getElementById("MobileNumber");
  //   var MobileInNumber = parseFloat(MobileNumber.value);

  //   var caseNumber = document.getElementById("CaseNumber");
  //   var caseInNumber = parseFloat(caseNumber.value);

  var MobileNumber = getInputValue("MobileNumber");
  var CaseNumber = getInputValue("CaseNumber");

  var price = MobileNumber * 1219 + CaseNumber * 59;
  var tax = Math.round(price * 0.15);
  var margeTotalPrice = price + tax;
  //console.log(price, MobileInNumber, caseInNumber);
  document.getElementById("totalPrice").innerText = price;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = margeTotalPrice;
}

function getInputValue(product) {
  var productInput = document.getElementById(product);
  var productNumber = parseFloat(productInput.value);
  return productNumber;
}
