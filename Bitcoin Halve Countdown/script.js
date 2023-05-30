const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let countDownDate = new Date("Apr 27, 2024 15:37:25").getTime();

let x = setInterval(function() {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let day =Math.floor(distance / (1000 * 60 * 60 * 24));
        let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = day;
        document.getElementById("hours").innerHTML = hour;
        document.getElementById("minutes").innerHTML = minute;
        document.getElementById("seconds").innerHTML = second;

})