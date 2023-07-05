const circle = document.querySelector('.speedometer__speedometer-circle');
const percent = 50;
const percent_indicator = document.querySelector('.speedometer__speedometer-percent');

let modified_percent;

if (percent <= 10 && percent <= 10){
    modified_percent = percent * 2;
}else if (percent > 10 && percent <= 25){
    modified_percent = 20 + 20 / 15 * (percent - 10);
}else if (percent > 25 && percent <= 100){
    modified_percent = 40 + 20 / 25 * (percent - 25)
}

percent_indicator.innerHTML = `${percent}%`;
const coordinate = 2200 - 1340 * (modified_percent / 100);
circle.style.strokeDashoffset = `${coordinate}`;