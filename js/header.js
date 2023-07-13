const time = document.querySelector('.header__nav-time');
const language = document.querySelector('.header__nav-language');

function updateTime() {
    time.innerHTML = `${moment().format("HH:mm, DD MMMM")}`;
}

updateTime();

setInterval(updateTime, 1000)

language.addEventListener('click', () => {
    if (language.textContent === 'EN') {
        language.textContent = 'DE'
    } else {
        language.textContent = 'EN'
    }
});