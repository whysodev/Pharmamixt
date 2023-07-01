const time = document.querySelector('.header__nav-time');
time.innerHTML = `${moment().format("HH:mm, DD MMMM")}`;
const language = document.querySelector('.header__nav-language');

language.addEventListener('click', () => {
    if (language.textContent === 'RU'){
        language.textContent = 'DE'
    }else{
        language.textContent = 'RU'
    }
});