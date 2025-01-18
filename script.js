const myDays = document.getElementById("days");
const myHours = document.getElementById("hours");
const myMins = document.getElementById("mins");
const mySecs = document.getElementById("secs");
const dDay = document.getElementById("dDay")
const text =  document.getElementById("text")



setInterval(() => {
    const myBday = new Date("January 19 2025");
    const today = new Date();

    let dayDiff = Math.round((myBday - today) / 1000)
    let rawdays = dayDiff / 86400
    let days = Math.floor(rawdays)
    let rawHours = (rawdays - days) * 24
    let hours = Math.floor(rawHours)
    let rawMins = (rawHours - hours) * 60
    let mins = Math.floor(rawMins)
    let rawSecs = (rawMins - mins) * 60
    let secs = Math.floor(rawSecs)

    myDays.textContent = days
    myHours.textContent = hours
    myMins.textContent = mins
    mySecs.textContent = secs
    console.log(mins);
    console.log(dayDiff)

    if (days === 56|| hours === 3|mins ===40) {
        text.textContent = "mgl"
    }
}, 1000);
