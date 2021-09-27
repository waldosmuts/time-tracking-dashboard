fetch("./data.json")
    .then((res) => res.json())
    .then((data) => generateWeeklyReport(data));

const dailyReport = document.querySelector("#daily-report");
const weeklyReport = document.querySelector("#weekly-report");
const monthlyReport = document.querySelector("#monthly-report");

const workHours = document.querySelector("#work-hours");
const workHoursPrevious = document.querySelector("#work-hours-previous");
const playHours = document.querySelector("#play-hours");
const playHoursPrevious = document.querySelector("#play-hours-previous");
const studyHours = document.querySelector("#study-hours");
const studyHoursPrevious = document.querySelector("#study-hours-previous");
const exerciseHours = document.querySelector("#exercise-hours");
const exerciseHoursPrevious = document.querySelector("#exercise-hours-previous");
const socialHours = document.querySelector("#social-hours");
const socialHoursPrevious = document.querySelector("#social-hours-previous");
const careHours = document.querySelector("#care-hours");
const careHoursPrevious = document.querySelector("#care-hours-previous");

const currentHours = [workHours, playHours, studyHours, exerciseHours, socialHours, careHours];
const previousHours = [workHoursPrevious, playHoursPrevious, studyHoursPrevious, exerciseHoursPrevious, socialHoursPrevious, careHoursPrevious];

function generateDailyReport(data) {
    for (let i = 0; i < 6; i++) {
        currentHours[i].innerText = data[i].timeframes.daily.current;
        previousHours[i].innerText = data[i].timeframes.daily.previous;
    }
}

function generateWeeklyReport(data) {
    for (let i = 0; i < 6; i++) {
        currentHours[i].innerText = data[i].timeframes.weekly.current;
        previousHours[i].innerText = data[i].timeframes.weekly.previous;
    }
}

function generateMonthlyReport(data) {
    for (let i = 0; i < 6; i++) {
        currentHours[i].innerText = data[i].timeframes.monthly.current;
        previousHours[i].innerText = data[i].timeframes.monthly.previous;
    }
}

dailyReport.addEventListener("click", () => {
    dailyReport.classList.add("selected");
    weeklyReport.classList.remove("selected");
    monthlyReport.classList.remove("selected");
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => generateDailyReport(data));
})

weeklyReport.addEventListener("click", () => {
    dailyReport.classList.remove("selected");
    weeklyReport.classList.add("selected");
    monthlyReport.classList.remove("selected");
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => generateWeeklyReport(data));
})

monthlyReport.addEventListener("click", () => {
    dailyReport.classList.remove("selected");
    weeklyReport.classList.remove("selected");
    monthlyReport.classList.add("selected");
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => generateMonthlyReport(data));
})