const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#chk-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availabeNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function clickHandler(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }else{
            showMessage("Cash given should be atleast equal to bill amount");
        }
    }else{
        showMessage("Invalid Bill Amount");
    }
})

function hideMessage(){
    message.style.display = "none";
}
 function showMessage(msg){
    //  console.log(msg);
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturned){
    for(let i=0; i<availabeNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availabeNotes[i]);
        amountToBeReturned = amountToBeReturned % availabeNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

