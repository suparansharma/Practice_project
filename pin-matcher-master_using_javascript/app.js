///generate btn
function getPin(){
    var randomNumber = (Math.random()*10000+'').split('.')[0];

    if(randomNumber.length == 4 ){
        return randomNumber;
    }

    else{
        return getPin();  
    }
}

document.getElementById("generateBtn").addEventListener("click",function(){
 
    
    document.getElementById("randomValue").value = getPin();
    
})



document.getElementById("btnAll").addEventListener("click",function(event){
    var digit = event.target.innerText;
    console.log(digit);

    if(isNaN(digit)){
        if(digit == 'C'){
            document.getElementById("typeInput").value = "";
        }
    }

    else{

        var typeInput = document.getElementById("typeInput");
        typeInput.value = typeInput.value + digit;

    }
})


function verifyPin(){
    var typeInput = document.getElementById("typeInput").value;
    var generatePin = document.getElementById("randomValue").value;
    // var doNotMatch = document.getElementById("doNotMatch");
    // var match = document.getElementById("match");
    
    if(typeInput==generatePin){

        // match.style.display="block";
        // doNotMatch.style.display="none";
        // console.log("this is match");
        displayMatching("block","none")
    }

    else{
        // match.style.display="none";
        // doNotMatch.style.display="block";
        // console.log("this is not match");
        displayMatching("none","block")
    }

  

}


function displayMatching(correctStatus,inCorrectStatus){
    var match = document.getElementById("match");
    match.style.display = correctStatus;
    var doNotMatch = document.getElementById("doNotMatch");
    doNotMatch.style.display = inCorrectStatus;

}




