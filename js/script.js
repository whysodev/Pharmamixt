const time = document.querySelector('.header__nav-time');
time.innerHTML = `${moment().format("hh:mm, DD MMMM")}`;

// const circle = document.querySelector('.speedometer__speedometer-circle');
// const percent2 = 10;
// const percent = 20;
// const coordinate = 2200 - 1340 * (percent / 100)

// circle.style.strokeDashoffset = `${coordinate}`
// 400px - 10
// 396px
// 2200 - ((1600 * percentage) / 100)
const numbers = document.querySelectorAll('.manual__manual-number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbers.forEach(number => {
            number.classList.remove('active');
        })
        number.classList.add('active')
    })
})