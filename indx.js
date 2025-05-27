// Increase shittttt

let count = 0; 

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const value = document.getElementById("bubu");

increaseBtn.onclick = increase;
resetBtn.onclick = reset;
decreaseBtn.onclick = decrease;

function increase(){
    count++;
    value.textContent = count;
}
function reset(){
    count = 0;
    value.textContent = count;
}
function decrease(){
    if(count==0){
        window.alert(`Cannot decrease`);
    } else{
        count--;
        value.textContent = count;
    };
    
}

let random = Math.floor(Math.random() * 50) + 1;

const input = document.getElementById("inputGuess");
const submitBtn = document.getElementById("submitGuess");
const resetBtn2 = document.getElementById("reset2");

const greet = document.getElementById("greet");
const output = document.getElementById("output");



submitBtn.onclick = function(){

    if(isNaN(input.value)){
        window.alert('Only accepts number, Try again!')
        return;
    }


    else if(input.value == random){
        
        output.textContent = random;
        greet.textContent = `Congrats You guess`;
    }
    else{

        
        output.textContent = random;
        greet.textContent = `Try Again`;
        console.log(input);
        console.log(typeof input);
    }
}



//pay inamo
const subs = document.getElementById("subs");
const Visa = document.getElementById("Visa");
const cashG = document.getElementById("CashG");
const paypal = document.getElementById("Paypal");
const SubmitBtn = document.getElementById("bayad");

const subNotif = document.getElementById("subNotif")
const payNotif = document.getElementById("payNotif")


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
            payNotif.textContent = 'Paid Using CashG';
        }else{
            subNotif.textContent = 'Select payment fist';
        }
    }
    else{
       subNotif.textContent = 'Subscribe first'; 
    }
}




