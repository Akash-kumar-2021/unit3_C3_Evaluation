// Store the wallet amount to your local storage with key "amount"A
let moneyArr =JSON.parse(localStorage.getItem(amount)) || [] ;
let display = document.getElementById("wallet");
function addMoney()
{
   let wallet =  document.getElementById("amount").value ;
    console.log(wallet);
    moneyArr.push(wallet)
    localStorage.setItem("amount",JSON.stringify(moneyArr))
    console.log(moneyArr);
    display.append(wallet);
    display.style.color ="green"
};

function bookMovies()
{
   window.location.href="checkout.html"
}