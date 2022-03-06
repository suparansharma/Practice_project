//mobile items

//+ Button
var mobilePlusBtn = document.getElementById("mobilePlusBtn");
mobilePlusBtn.addEventListener("click", function () {
  var increaseMobileNumber = document.getElementById("MobileNumber");
  var increaseMobileInNumber = parseFloat(increaseMobileNumber.value);
  var newIncreaseMobileNumber = increaseMobileInNumber + 1;
  increaseMobileNumber.value = newIncreaseMobileNumber;

  var mobilePrice = 1219 * newIncreaseMobileNumber;

  document.getElementById("mobilePrice").innerText = mobilePrice;

  console.log(mobilePrice);
});

//- button
// var mobileMinusBtn = document.getElementById("mobileMinusBtn");
// mobileMinusBtn.addEventListener("click", function () {
//   var decreaseMobileNumber = document.getElementById("MobileNumber");
//   var decreaseMobileInNumber = parseFloat(decreaseMobileNumber);
//   var newDecreaseMobileNumber = decreaseMobileInNumber - 1;
//   decreaseMobileNumber.value = newDecreaseMobileNumber;
// });
