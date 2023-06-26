const time = document.querySelector('.header__nav-time');
time.innerHTML = `${moment().format("hh:mm, DD MMMM")}`