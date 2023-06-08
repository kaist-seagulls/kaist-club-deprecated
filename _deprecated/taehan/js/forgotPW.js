"use strict";

const email = document.getElementById('EMAIL');
const tempBtn = document.getElementById('TEMP_BUTTON');

function color() {
    if((email.value.length>0 && email.value.indexOf("@") !== -1) 
        && email.value.length>=5){
        tempBtn.style.backgroundColor = "#0095F6";
        tempBtn.disabled = false;
    }else{
        tempBtn.style.backgroundColor = "#C0DFFD";
        tempBtn.disabled = true;
    }
}

function moveToMain(){
    location.replace("./main.html");
}

email.addEventListener('keyup', color);
tempBtn.addEventListener('click',moveToMain);