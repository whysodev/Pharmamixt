const time = document.querySelector('.header__nav-time');
const language = document.querySelector('.header__nav-language');

function updateTime(){
    time.innerHTML = `${moment().format("HH:mm, DD MMMM")}`;
}

updateTime();

setInterval(updateTime, 1000)

language.addEventListener('click', () => {
    if (language.textContent === 'RU') {
        language.textContent = 'DE'
    } else {
        language.textContent = 'RU'
    }
});

const play_button = document.querySelector('.speedometer__speedometer-play');
const button_icon = document.querySelector('.speedometer__speedometer-play img');
const status_button = document.querySelector('.header__button-text');
const status_icon = document.querySelector('.header__button-icon img');
let isRunning = Boolean(localStorage.getItem('status')) || false;

if (localStorage.getItem('status')) {
    if (localStorage.getItem('status') === 'true') {
        isRunning = true
    } else {
        isRunning = false
    }
} else {
    isRunning = false
}

document.addEventListener('DOMContentLoaded', () => {
    if (isRunning === true) {
        status_button.textContent = 'Running';
        status_icon.src = '../images/icons/play-icon.svg';
    } else if (isRunning === false) {
        status_button.textContent = 'Standby';
        status_icon.src = '../images/icons/stop-icon.svg';
    }
})

if (play_button) {
    if (isRunning === true) {
        button_icon.src = '../images/icons/button-stop-icon.svg';
    } else {
        button_icon.src = '../images/icons/treangle-icon.svg';
    }
    play_button.addEventListener('click', () => {
        if (isRunning === false) {
            isRunning = true;
            button_icon.src = '../images/icons/button-stop-icon.svg';
            status_button.textContent = 'Running';
            status_icon.src = '../images/icons/play-icon.svg';
            localStorage.setItem('status', true)
        } else if (isRunning === true) {
            isRunning = false;
            button_icon.src = '../images/icons/treangle-icon.svg';
            status_button.textContent = 'Standby';
            status_icon.src = '../images/icons/stop-icon.svg';
            localStorage.setItem('status', false)
        }
    })
}

if (window.location.href !== 'http://127.0.0.1:5500/pages/index.html') {
    let idleTime = 0;
    let idleInterval = setInterval(timerIncrement, 1000); // 1 секунда


    function timerIncrement() {
        idleTime += 1;

        if (idleTime >= 60) {
            window.location.href = "http://127.0.0.1:5500/pages/index.html";
        }
    }

    document.addEventListener("mousemove", function () {
        idleTime = 0;
    });

    document.addEventListener("keypress", function () {
        idleTime = 0;
    });

    document.addEventListener('click', () => {
        idleTime = 0;
    })
}