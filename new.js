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