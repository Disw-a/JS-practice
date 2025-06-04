// Increase shittttt

let count = 0; 

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("resetB");
const value = document.getElementById("bubu");

increaseBtn.onclick = increase;
decreaseBtn.onclick = decrease;
resetBtn.onclick = function(){
    count = 0;
    value.textContent = count;
};

function increase(){
    count++;
    value.textContent = count;
};

function decrease(){
    if(count==0){
        window.alert(`Cannot decrease`);
    } else{
        count--;
        value.textContent = count;
    };
    
}


//========================================================================================
// Guessing Game
    let random = Math.floor(Math.random() * 50) + 1;

const input = document.getElementById("inputGuess");
const submitBtn = document.getElementById("submitGuess");
const resetBtn2 = document.getElementById("resetGuess");

const greet = document.getElementById("greet");
const output = document.getElementById("output");


submitBtn.onclick = function(){

    if(isNaN(input.value)){
        window.alert('Only accepts number, Try again!')
        return;
    }
    else if(input.value == random){   
        output.textContent = random;
        greet.style.color = 'green';
        greet.textContent = `Congrats! You guess right`;
    }
    else{
 
        output.textContent = random;
        greet.textContent = `Try Again`;
        greet.style.color = 'red';
        console.log(input);
        console.log(typeof input);
    }
}
    resetBtn2.onclick = function(){
        reset();
    }
    function reset(){
        random = Math.floor(Math.random() * 50) + 1;
        greet.textContent = "";
        output.textContent = 0;
        input.value = null;
    }

//========================================================================================
// Subscribe
const subs = document.getElementById("subs");
const Visa = document.getElementById("Visa");
const cashG = document.getElementById("CashG");
const paypal = document.getElementById("Paypal");
const SubmitBtn = document.getElementById("bayad");

const subNotif = document.getElementById("subNotif")
const payNotif = document.getElementById("payNotif")

//submit function
SubmitBtn.onclick =  function (){
    if(subs.checked){
        subNotif.textContent = 'Thanks for subscribing!';
        if(Visa.checked){
            payNotif.textContent = 'Paid Using Visa';
        }
        else if(cashG.checked){
            payNotif.textContent = 'Paid Using CashG';
        }
        else if(paypal.checked){
            payNotif.textContent = 'Paid Using Paypal';
        }else{
            subNotif.textContent = 'Select payment fist';
        }
    }
    else{
       subNotif.textContent = 'Subscribe first'; 
    }
}


//========================================================================================
// count characters in a name

const nang = document.getElementById("NGALAN");
const countBtn = document.getElementById("subString");
const countDisplay = document.getElementById("countN");

countBtn.onclick = function(){
    let pang = nang.value;
    if(!isNaN(pang)){
       countDisplay.textContent = 'String ONly'; 
    }else{
        countDisplay.textContent = pang.length;
    }
}


    const fullNameInput = document.getElementById("inptFullname");
    const fName = document.getElementById("first");
    const mName = document.getElementById("middle");
    const lName = document.getElementById("last");
    const pasaBtn = document.getElementById("pasa");

    
    
    function firstN() {
    let kk = fullNameInput.value.trim();
    let firstSpace = kk.indexOf(" ");
    let lastSpace = kk.lastIndexOf(" ");

    return {
        first: kk.slice(0, firstSpace),
        middle: kk.slice(firstSpace + 1, lastSpace),
        last: kk.slice(lastSpace + 1)
    };
}

pasaBtn.onclick = function() {
    let names = firstN();
    fName.textContent = names.first;
    mName.textContent = names.middle;
    lName.textContent = names.last;
};



// ===================================================================================================

const tempInput = document.getElementById("inputCon");
const convertF_Btn = document.getElementById("toF");
const convertC_Btn = document.getElementById("toC");
const outputTemp = document.getElementById("outputTemp");
const tempSubmitBtn = document.getElementById("tempSubmit");

tempSubmitBtn.onclick = function(){
    let tempValue = Number(tempInput.value);
    if(isNaN(tempValue)){
        outputTemp.textContent = 'Input a number';
        return;
    }
    else if(convertF_Btn.checked){
        outputTemp.textContent = `${tempValue}°C is ${(tempValue * 9/5) + 32}°F`;
    }
    else if(convertC_Btn.checked){
        outputTemp.textContent = `${tempValue}°F is ${(tempValue - 32) * 5/9}°C`;
    }
    else{
        outputTemp.textContent = 'Select a conversion type';
    }
}
