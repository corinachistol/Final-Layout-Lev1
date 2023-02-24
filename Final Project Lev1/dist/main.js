let counterDays = document.querySelector(".co-counter-days")
let counterHours = document.querySelector(".co-counter-hours")
let counterMinutes = document.querySelector(".co-counter-minutes")
let counterSeconds = document.querySelector(".co-counter-seconds")



//Set the date we are counting down to
let countDownDate = new Date("Dec 1, 2024 22:00:00").getTime();

// Update the count down every second
let x = setInterval(function(){

    //get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="counter"
      counterDays.innerHTML = days;
      counterHours.innerHTML = hours;
      counterMinutes.innerHTML = minutes;
      counterSeconds.innerHTML = seconds;
    
       // If the count down is over, write some text 
       if(distance < 0){
        clearInterval(x);
        
        document.getElementById("counter").innerHTML = "EXPIRED";
       }

}, 1000);