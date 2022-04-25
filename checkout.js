// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let mArr =JSON.parse(localStorage.getItem(movie)) || [] ;
function confirmBooking()
{
  let  name =  document.getElementById("user_name").value ;

   let seat = document.getElementById("number_of_seats").value ;
    
    mArr.push(name,seat)
    localStorage.setItem("movie",JSON.stringify(mArr))
    console.log(mArr);
}

mArr.map(function(el)
{
   let p = document.createElement("p");
   p.innerHTML =el.amount;
   movie.append(p);

})