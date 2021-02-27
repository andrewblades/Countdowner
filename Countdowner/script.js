const thedate = '1 Jan 2022'
const daysE = document.getElementById("days")
const hoursE = document.getElementById('hours')
const minutesE = document.getElementById('minutes')
const secondsE = document.getElementById('seconds')


function count() {
    const newDate = new Date(thedate);
    const currentDate = new Date();


    const seconds = (newDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds / 3600) % 24
    const minutes = Math.floor(seconds / 60) % 60
    const sec = Math.floor(seconds) % 60

    console.log(days, hours, minutes, sec);
    daysE.innerHTML = days;
    hoursE.innerHTML = hours;
    minutesE.innerHTML = minutes;
    secondsE.innerHTML = sec;
}
count();

setInterval(count, 1000)

