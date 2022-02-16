function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
        return pinString;
    }
    else{
        return getPin();
    }

}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const failError = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    if(pin != typedNumber){
        success.style.display = 'none';
        failError.style.display = 'block';
    }
    else{
        failError.style.display = 'none';
        success.style.display = 'block';
    }
}