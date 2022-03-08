//firstClass Ticket 

// increment

// document.getElementById("firstClassTktInc").addEventListener("click", function () {
//     // var firstClassTktNum = document.getElementById("firstClassTktNum").value;
//     // console.log(firstClassTktNum);
//     // var firstClassTktNumCnv = parseFloat(firstClassTktNum);
//     // var firstClassTktNumInc = firstClassTktNumCnv + 1;
//     // document.getElementById("firstClassTktNum").value = firstClassTktNumInc;
//     // var firstClassTktPrice = 150 * firstClassTktNumInc;
//     // document.getElementById("firstClassTktPrice").innerText = firstClassTktPrice;
//     // console.log(firstClassTktPrice);

//     handleTicketPrice(true);
//   });



  //decrement

//   document.getElementById("firstClassTktDec").addEventListener("click",function(){
//     //   var firstClassTktNum = document.getElementById("firstClassTktNum").value;
//     //   var firstClassTktNumCnv = parseFloat(firstClassTktNum);
//     // var firstClassTktNumDec = firstClassTktNumCnv - 1;
//     // document.getElementById("firstClassTktNum").value = firstClassTktNumDec;
//     // var firstClassTktPrice = 150 * firstClassTktNumDec;
//     // document.getElementById("firstClassTktPrice").innerText = firstClassTktPrice;

//     handleTicketPrice(false);
//   })




/////function of First class ticket 

// function handleTicketPrice(isIncrease){
//     var firstClassTktNum = document.getElementById("firstClassTktNum").value;
//     var firstClassTktNumCnv = parseFloat(firstClassTktNum);
//     let newFirstClassTkt = firstClassTktNumCnv;
//     if(isIncrease== true){
//         newFirstClassTkt = firstClassTktNumCnv + 1;
//     }

//     if(isIncrease== false && firstClassTktNumCnv > 0 ){
//         newFirstClassTkt = firstClassTktNumCnv - 1;
//     }
//     document.getElementById("firstClassTktNum").value = newFirstClassTkt;
//     var firstClassTktPrice = 150 * newFirstClassTkt;
//     document.getElementById("firstClassTktPrice").innerText = firstClassTktPrice;
    
// }


/////marge Function
function handleTicketPrice(product,isIncrease){
    var TktNum = document.getElementById(product + "ClassTktNum").value;
    var TktNumCnv = parseFloat(TktNum);
    let newTkt = TktNumCnv;
    if(isIncrease== true){
        newTkt = TktNumCnv + 1;
    }

    if(isIncrease== false && TktNumCnv > 0 ){
        newTkt = TktNumCnv - 1;
    }

    let TktPrice = 0;
    if(product=="first"){
         TktPrice = 150 * newTkt;
    }

    if(product=="economy"){
        TktPrice = 100 * newTkt;
   }

    document.getElementById(product+"ClassTktNum").value = newTkt;
    document.getElementById(product+"ClassTktPrice").innerText = TktPrice;
    calculation();
}


function calculation(){
    var firstClassTktNum = document.getElementById("firstClassTktNum").value;
    var firstClassTktPrice = 150 * firstClassTktNum;
    

    var economyClassTktNum = document.getElementById("economyClassTktNum").value;
    var economyClassTktPrice = 100 * economyClassTktNum;

    var subTotalPrice = firstClassTktPrice + economyClassTktPrice;
    document.getElementById("subTotalPrice").innerText =subTotalPrice ;

    console.log(subTotalPrice);
}

