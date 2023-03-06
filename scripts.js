const calc = document.querySelector('.calculator')
calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calculator__btn'))
        return;
    const value = event.target.innerText;
    switch (value) {
        case 'C':
            result.innerText = '';
            break;
        case '=':
            const res = eval(result.innerText);
            if (res === Infinity) {
                result.innerHTML = "На ноль <span style='color:red'> Нельзя </span>"
                break;
            }
            result.innerText = eval(result.innerText).toFixed(2);
            break;

        default:
            result.innerText += value;
            break;
    }
})

