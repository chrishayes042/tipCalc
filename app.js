

function getTenPercent(){
  document.getElementById("tipPercentText").value = 10;
}
function getFifPercent(){
    document.getElementById("tipPercentText").value = 15;
}
function getTwenPercent(){
    document.getElementById("tipPercentText").value = 20;
}
function getTotalAmount(){
    var percent = parseInt(document.getElementById("tipPercentText").value);
    let firstAmount = parseInt(document.getElementById("amountText").value);   
    if(isNaN(percent)){
        document.getElementById("tipPercentText").setAttribute("class", "errorStyle");
        alert("The percent must be a number")
    } else if(isNaN(firstAmount)){
        document.getElementById("tipPercentText").setAttribute("class", "null");
        document.getElementById("amountText").setAttribute("class", "errorStyle");
        alert("The amount must be a number")
    } else {
        
        document.getElementById("amountText").setAttribute("class", "null");
    }
    percent = percent / 100
    amount = firstAmount * percent    
    totalAmount = amount + firstAmount
    if(!isNaN(totalAmount)){
        document.getElementById("totalAmountText").value = totalAmount;
    }
    

}

// window.onload = function(){
//     let btn = document.getElementById("calculate");
//     btn.onclick = getTotalAmount();
// }