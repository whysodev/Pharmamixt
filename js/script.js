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

const cursor = document.querySelector('.speedometer__speedometer-cursor');
const progress = document.querySelector('.speedometer__speedometer-circle');
const runner = document.querySelector('.speedometer__thermometer-runner');
const result = document.querySelector('.speedometer__speedometer-result');
const figure = document.querySelector('#progress');
const runner_number = document.querySelector('.speedometer__thermometer-number');

function runSpeedometer() {
    figure.src = '../images/progress.svg';
    button_icon.src = '../images/icons/button-stop-icon.svg';
    status_button.textContent = 'Running';
    status_icon.src = '../images/icons/play-icon.svg';
    localStorage.setItem('status', true);
    document.body.classList.remove('staying');
    document.body.classList.add('running');

    const mode = Number(localStorage.getItem('activeNumber')) || 1;

    value = 200 * mode;
    carbon_dioxide = 1000;


    let deg = (value * 0.18) + 45;
    let offset = 2250 - (value * 1.1);
    let height = carbon_dioxide * (9 / 35);

    progress.style.strokeDashoffset = offset;
    cursor.style.transform = `rotate(${deg}deg)`;
    runner.style.height = height + 'px';
    runner_number.innerHTML = carbon_dioxide;

    let currentValue = 0;
    const step = 10;
    let carbon_value = 0;

    function changeValue() {
        if (currentValue < value) {
            currentValue += step;
            carbon_value += step;
            result.innerHTML = currentValue;
            runner_number.innerHTML = carbon_value;
            setTimeout(changeValue, 1);
        } else {
            result.innerHTML = value;
            runner_number.innerHTML = carbon_dioxide;
        }
    }

    changeValue()
}
function stopSpeedometer() {
    button_icon.src = '../images/icons/treangle-icon.svg';
    status_button.textContent = 'Standby';
    status_icon.src = '../images/icons/stop-icon.svg';
    localStorage.setItem('status', false);
    result.innerHTML = '00'
    figure.src = '../images/progressoff.svg';
    progress.style.strokeDashoffset = 2250;
    cursor.style.transform = `rotate(45deg)`;
    document.body.classList.remove('running');
    document.body.classList.add('staying');
    runner.style.height = 0;
    runner_number.innerHTML = 0;
}

window.addEventListener('load', () => {
    if (play_button) {
        progress.setAttribute('r', '350');
        progress.setAttribute('cx', '380');
        progress.setAttribute('cy', '380');
        let value;

        if (isRunning) {
            runSpeedometer()
        } else {
            stopSpeedometer()
        }

        play_button.addEventListener('click', () => {
            if (isRunning === false) {
                isRunning = true;
                runSpeedometer()
            } else if (isRunning === true) {
                isRunning = false;
                stopSpeedometer()
            }
        })
    }
})

if (window.location.href !== 'http://127.0.0.1:5500/pages/index.html') {
    let idleTime = 0;
    let idleInterval = setInterval(timerIncrement, 1000);

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
    });
}