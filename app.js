const entryPrice = document.querySelector("#entry-price")
const noOfStocks = document.querySelector("#no-of-stocks")
const currentPrice = document.querySelector("#current-price")
const checkButton = document.querySelector("#check-button")
const outputStatus = document.querySelector("#output-status")

checkButton.addEventListener("click", function clickValidate(){
    let net = (currentPrice.value - entryPrice.value)*noOfStocks.value ;
    let x = entryPrice.value*noOfStocks.value;
    let per = (net/x)*100;
    if( net >=0 ){
        outputStatus.innerText = ("your net profit  and percentage are " +net+ " and " +per+ "%")
       

    }else {
        outputStatus.innerText = ("your net Loss  and percentage are " +net+ " and " +per+ "%")


    }
} )


