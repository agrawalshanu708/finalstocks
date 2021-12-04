const entryPrice = document.querySelector("#entry-price")
const noOfStocks = document.querySelector("#no-of-stocks")
const currentPrice = document.querySelector("#current-price")
const checkButton = document.querySelector("#check-button")
const outputStatus = document.querySelector("#output-status")

checkButton.addEventListener("click", function clickValidate(){

    let ep = Math.floor(entryPrice.value)
    let num = Math.floor(noOfStocks.value)
    let cp = Math.floor(currentPrice.value)


     if(ep > 0 && num > 0 && cp > 0){

        let net = (cp-ep)*num;
        let x = ep*num;
        let per = (net/x)*100;
        if( net >=0 ){
            outputStatus.innerText = ("your net Profit is Rs " +net+ " and percentage is " +per+ "%")
    
           
    
        }else {
            outputStatus.innerText = ("your net Loss is Rs " +net+ " and percentage is " +per+ "%")
    
    
        }

     }else{
          outputStatus.innerText = "Invalid Entry, please check the value once"
     }
    })














   


