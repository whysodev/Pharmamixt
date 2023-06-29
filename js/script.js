const time = document.querySelector('.header__nav-time');
time.innerHTML = `${moment().format("hh:mm, DD MMMM")}`;

const circle = document.querySelector('.speedometer__speedometer-circle');
const percent = 62;
const number = 2200 - 1280 * (percent / 100)

circle.style.strokeDashoffset  = `${number}`

// 2200 - ((1600 * percentage) / 100)