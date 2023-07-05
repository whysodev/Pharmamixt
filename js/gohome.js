// Устанавливаем таймер на 60 секунд
let idleTime = 0;
let idleInterval = setInterval(timerIncrement, 1000); // 1 секунда

// Функция, вызываемая каждую секунду
function timerIncrement() {
  idleTime += 1;
  
  // Если бездействие длится 60 секунд (или любое другое время, которое вы хотите), перенаправляем пользователя на главную страницу
  if (idleTime >= 60) {
    window.location.href = "http://127.0.0.1:5500/pages/index.html";
  }
}

// Сбросить таймер при любом действии пользователя
document.addEventListener("mousemove", function() {
  idleTime = 0;
});

document.addEventListener("keypress", function() {
  idleTime = 0;
});