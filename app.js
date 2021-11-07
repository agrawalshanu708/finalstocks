var entryPrice = document.querySelector("#entry-price")
var noOfStocks = document.querySelector("#no-of-stocks")
var currentPrice = document.querySelector("#current-price")
var checkButton = document.querySelector("#check-button")
var outputStatus = document.querySelector("#output-status")

checkButton.addEventListener("click", function clickValidate(){
    var net = (currentPrice.value - entryPrice.value)*noOfStocks.value ;
    var x = entryPrice.value*noOfStocks.value;
    var per = (net/x)*100;
    if( net >=0 ){
        outputStatus.innerText = ("your net profit  and percentage are " +net+ " and " +per+ "%")
       

    }else {
        outputStatus.innerText = ("your net Loss  and percentage are " +net+ " and " +per+ "%")


    }
} )


