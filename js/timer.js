const startup_hours = document.getElementById('startup_hours');
const startup_minutes = document.getElementById('startup_minutes');
const stop_hours = document.getElementById('stop_hours');
const stop_minutes = document.getElementById('stop_minutes');
const decon_hours = document.getElementById('decon_hours');
const decon_minutes = document.getElementById('decon_minutes');

function checkHoursUpArrow(table_hours, table_minutes) {
    const hours = document.querySelector(table_hours);
    const minutes = document.querySelector(table_minutes);

    if (Number(hours.innerHTML) === 23) {
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
    } else {
        if (Number(hours.innerHTML) < 9) {
            hours.innerHTML = `0${Number(hours.innerHTML) + 1}`
        } else if (Number(hours.innerHTML) >= 9 && Number(hours.innerHTML) <= 22) {
            hours.innerHTML = Number(hours.innerHTML) + 1
        }
    }
}
function checkHoursDownArrow(table_hours, table_minutes) {
    const hours = document.querySelector(table_hours);
    const minutes = document.querySelector(table_minutes);

    if (Number(hours.innerHTML) === 0 && Number(minutes.innerHTML) === 0) {
        hours.innerHTML = '23';
    } else {
        if (Number(hours.innerHTML) !== 0 && Number(hours.innerHTML) <= 10) {
            hours.innerHTML = `0${Number(hours.innerHTML) - 1}`
        } else if (Number(hours.innerHTML) !== 0 && Number(hours.innerHTML) >= 10) {
            hours.innerHTML = Number(hours.innerHTML) - 1
        }
    }
}
function checkMinutesUpArrow(table_hours, table_minutes) {
    const hours = document.querySelector(table_hours);
    const minutes = document.querySelector(table_minutes);


    if (Number(hours.innerHTML) === 23 && Number(minutes.innerHTML) === 59) {
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
    } else if (Number(minutes.innerHTML) === 59) {
        if (Number(hours.innerHTML) < 10) {
            hours.innerHTML = `0${Number(hours.innerHTML) + 1}`
            minutes.innerHTML = '00';
        } else {
            hours.innerHTML = `${Number(hours.innerHTML) + 1}`
            minutes.innerHTML = '00';
        }
    } else {
        if (Number(minutes.innerHTML) < 9) {
            minutes.innerHTML = `0${Number(minutes.innerHTML) + 1}`
        } else if (Number(minutes.innerHTML) >= 9 && Number(minutes.innerHTML) <= 59) {
            minutes.innerHTML = Number(minutes.innerHTML) + 1
        }
    }
}
function checkMinutesDownArrow(table_hours, table_minutes) {
    const hours = document.querySelector(table_hours);
    const minutes = document.querySelector(table_minutes);

    if (Number(hours.innerHTML) === 0 && Number(minutes.innerHTML) === 0) {
        hours.innerHTML = '23';
        minutes.innerHTML = '59';
    } else if (Number(minutes.innerHTML) === 0) {
        if (Number(hours.innerHTML) < 10){
            hours.innerHTML = `0${Number(hours.innerHTML) - 1}`
            minutes.innerHTML = '59';
        }else{
            hours.innerHTML = `${Number(hours.innerHTML) - 1}`
            minutes.innerHTML = '59';
        }
    } else {
        if (Number(minutes.innerHTML) !== 0 && Number(minutes.innerHTML) <= 10) {
            minutes.innerHTML = `0${Number(minutes.innerHTML) - 1}`
        } else if (Number(minutes.innerHTML) !== 0 && Number(minutes.innerHTML) >= 10) {
            minutes.innerHTML = Number(minutes.innerHTML) - 1
        }
    }
}

const days = document.querySelectorAll('.settings__settings-day');
const done = document.getElementById('done');
const cancel = document.getElementById('cancel');
let active;

days.forEach(day => {
    day.addEventListener('click', () => {
        days.forEach(day => {
            day.classList.remove('active')
        });
        day.classList.add('active')
        localStorage.setItem('active-day', day.id);
        active = day.id;
        changeTimer(active)
    })
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('active-day')) {
        active = localStorage.getItem('active-day');
        const day = document.getElementById(active);
        day.classList.add('active');
        changeTimer(active)
    } else {
        const monday = document.getElementById('Monday');
        monday.classList.add('active');
        active = 'Monday';
        changeTimer(active)
    }
})

done.addEventListener('click', () => {
    localStorage.setItem(active, JSON.stringify(
        {
            startup_hours: startup_hours.textContent,
            startup_minutes: startup_minutes.textContent,
            stop_hours: stop_hours.textContent,
            stop_minutes: stop_minutes.textContent,
            decon_hours: decon_hours.textContent,
            decon_minutes: decon_minutes.textContent
        }
    ))
})

function setTime(active) {
    const time = JSON.parse(localStorage.getItem(active));
    startup_hours.innerHTML = time.startup_hours;
    startup_minutes.innerHTML = time.startup_minutes;
    stop_hours.innerHTML = time.stop_hours;
    stop_minutes.innerHTML = time.stop_minutes;
    decon_hours.innerHTML = time.decon_hours;
    decon_minutes.innerHTML = time.decon_minutes;
}

function checkDay() {
    if (localStorage.getItem(active)) {
        setTime(active)
    } else {
        setDefaultTime()
    }
}

function setDefaultTime() {
    startup_hours.innerHTML = '00';
    startup_minutes.innerHTML = '00';
    stop_hours.innerHTML = '00';
    stop_minutes.innerHTML = '00';
    decon_hours.innerHTML = '00';
    decon_minutes.innerHTML = '00';
}


function changeTimer(active) {
    switch (active) {
        case 'Monday':
            checkDay()
            break;
        case 'Tuesday':
            checkDay()
            break;
        case 'Wednesday':
            checkDay()
            break;
        case 'Thursday':
            checkDay()
            break;
        case 'Friday':
            checkDay()
            break;
        case 'Saturday':
            checkDay()
            break;
        case 'Sunday':
            checkDay()
            break;
    }
}

const cross = document.querySelector('.calculator__cross');
const calculator_wrapper = document.querySelector('.calculator-wrapper');
const hoursInput = document.getElementById("calculator_time-hours");
const minutesInput = document.getElementById("calculator_time-minutes");
const tables = document.querySelectorAll('.settings__setting-table');
const calc_done = document.getElementById('calc_done')

function addNumber(number) {
    const hoursInput = document.getElementById("calculator_time-hours");
    const minutesInput = document.getElementById("calculator_time-minutes");

    if (hoursInput.value.length < 2) {
        hoursInput.value += number;
    } else if (minutesInput.value.length < 2) {
        minutesInput.value += number;
    }
}

function backspace() {
    const hoursInput = document.getElementById("calculator_time-hours");
    const minutesInput = document.getElementById("calculator_time-minutes");

    if (minutesInput.value.length > 0) {
        minutesInput.value = minutesInput.value.slice(0, -1);
    } else if (hoursInput.value.length > 0) {
        hoursInput.value = hoursInput.value.slice(0, -1);
    }
}

function checkInputLength(input) {
    let value = input.value;
    value = value.slice(0, 2);
    input.value = value

    if (input.value.length >= 2) {
        minutesInput.focus()
    }
}

cross.addEventListener('click', () => {
    calculator_wrapper.classList.remove('active')
})

function initPlaceholder(table_hours, table_minutes) {
    hoursInput.placeholder = table_hours.innerHTML;
    minutesInput.placeholder = table_minutes.innerHTML;
}
function initTables(table_hours, table_minutes) {
    if (hoursInput.value.length == 0 && minutesInput.value.length == 0) {
        if (hoursInput.value < 23 && minutesInput.value < 60) {
            table_hours.innerHTML = hoursInput.placeholder;
            table_minutes.innerHTML = hoursInput.placeholder;
            calculator_wrapper.classList.remove('active');
        } else {
            alert('Введите правильный формат времени');
        }
    } else if (hoursInput.value.length == 1 || minutesInput.value.length == 1) {
        alert('Введите правильный формат времени')
    } else {
        if (hoursInput.value < 24 && minutesInput.value < 60) {
            table_hours.innerHTML = hoursInput.value;
            table_minutes.innerHTML = minutesInput.value;
            hoursInput.value = '';
            minutesInput.value = '';
            calculator_wrapper.classList.remove('active');
        } else {
            alert('Введите правильный формат времени');
        }
    }
}

tables.forEach(table => {
    table.addEventListener('click', () => {
        calculator_wrapper.classList.add('active');
        if (table.id.startsWith('sta')) {
            initPlaceholder(startup_hours, startup_minutes);
            calc_done.id = 'startup'
        } else if (table.id.startsWith('sto')) {
            initPlaceholder(stop_hours, stop_minutes);
            calc_done.id = 'stop'
        } else {
            initPlaceholder(decon_hours, decon_minutes);
            calc_done.id = 'decon'
        }
    })
})

calc_done.addEventListener('click', () => {
    if (calc_done.id == 'startup') {
        initTables(startup_hours, startup_minutes)
    } else if (calc_done.id == 'stop') {
        initTables(stop_hours, stop_minutes)
    } else if (calc_done.id = 'decon') {
        initTables(decon_hours, decon_minutes)
    }
});