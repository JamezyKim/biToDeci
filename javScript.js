/* Place your JavaScript in this file */

function convertDeciToBi(number){

    if (number == 0){
        return '0';
    }    
    let result = ""
    while (number>0){
        result = String(number%2) + result;
        number = Math.floor(number/2);
    }
    return result;
}

function convertBiToDeci(number){
    let result = 0;
    let numLen = number.length - 1;
    for (let i=0;i<=number;i++){
        result = result + Math.pow(2,numLen-i)
    }
    return result;
}

function convert(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let userInput = document.getElementById("userInput").value;
    let result;

    if (from == to){
        result = userInput;
    }
    else if(from == "binary" && to == "decimal"){
        result = convertBiToDeci(userInput);
    }
    else if(from == "decimal" && to == "binary"){
        result = convertDeciToBi(Number(userInput));
    }
    document.getElementById("result").innerHTML = result;

}
function swap(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let tempValue = from;
    from = to;
    to = tempValue;
    document.getElementById("from").value = from
    document.getElementById("to").value = to
}
function reset(){
    document.getElementById("from").value = "binary"
    document.getElementById("to").value = "decimal"
    let userInput = document.getElementById("userInput").value='';
    let result;

}