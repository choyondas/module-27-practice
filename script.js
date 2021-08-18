function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {

        document.getElementById('inputField').value = pin;
    } else {
        generatePin();
    }
};
document.getElementById('keyPad').addEventListener('click', function(even) {
    const input = even.target.innerText;
    const inputValue = document.getElementById('inputBox');
    const previousNum = inputValue.value;
    const newNum = previousNum + input;




    if (isNaN(input)) {
        if (input == 'C') {
            inputValue.value = '';
        }
    } else {

        inputValue.value = newNum;

    }

});


function submit() {
    const pinNum = document.getElementById('inputBox').value;
    const generatePin = document.getElementById('inputField').value;
    if (pinNum == generatePin) {
        document.getElementById('notify-match').style.display = "block";
        document.getElementById('notify-not-match').style.display = "none";
    } else {
        document.getElementById('notify-match').style.display = "none";
        document.getElementById('notify-not-match').style.display = "block";

    }
}