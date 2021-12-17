const greeting = document.querySelector(".greeting");
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const newYear = document.querySelector(".new-year");

const getTimer = () => {
    let now = new Date();
    let dateDay = now.toLocaleString("ru", { weekday: "long" });
    console.log(dateDay[1]);
    let dateNow = now.getTime();
    console.log(dateNow);

    let getDay = now.getHours();
    console.log(getDay);
    let newYearDate = new Date("31 december 2021");
    let timeRemaining = (newYearDate - dateNow) / 1000;
    console.log(timeRemaining);
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    console.log(days);

    let options = {
        hour12: "false",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    if (getDay >= 5 && getDay <= 11) {
        greeting.innerHTML = "Доброе утро";
    } else if (getDay > 11 && getDay <= 17) {
        greeting.innerHTML = "Добрый день";
    } else if (getDay > 17 && getDay <= 21) {
        greeting.innerHTML = "Добрый вечер";
    } else {
        greeting.innerHTML = "Доброй ночи";
    }

    time.innerHTML = "Текущее время  " + now.toLocaleString("ru", options);

    newYear.innerHTML = "До нового года осталось " + days + "  дней.";

    day.innerHTML = "Сегодня: " + dateDay;
};

getTimer();