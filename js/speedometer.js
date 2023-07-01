const circle = document.querySelector('.speedometer__speedometer-circle');
const percent = 50;
const coordinate = 2200 - 1340 * ((percent + 10) / 100);
circle.style.strokeDashoffset = `${coordinate}`