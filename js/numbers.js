const numbers = document.querySelectorAll('.manual__manual-number');
const activeNumber = localStorage.getItem('activeNumber');
if (activeNumber){
    const element = document.getElementById(activeNumber)
    element.classList.add('active')
}else{
    const element = document.getElementById('number-1');
    element.classList.add('active');
}
numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbers.forEach(number => {
            number.classList.remove('active');
        })
        localStorage.setItem('activeNumber', number.id)
        number.classList.add('active')
    })
})