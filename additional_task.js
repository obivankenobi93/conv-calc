const buttonEdit = document.getElementById('btn-edit');
const buttonAdd = document.getElementById('btn-add');
let idTableValue = 1;
const inputPassword = document.querySelector('.view-password');
const inputReads = document.querySelectorAll('.additional-task input');

buttonEdit.addEventListener('click', function () {
    inputReads.forEach((inputRead) => {
        if (inputRead.readOnly) {
            inputRead.readOnly = false;
            buttonEdit.innerText = 'Применить';
            // inputRead.removeAttribute("readonly");
        } else {
            inputRead.readOnly = true;
            buttonEdit.innerText = 'Редактировать';
        }
    })
})

inputPassword.addEventListener('click', function () {
    const viewPassword = document.getElementById('view-input');
    if (viewPassword.type === "text") {
        viewPassword.type = "password";
        inputPassword.innerText = 'Показать пароль';
    }
    else {
        viewPassword.type = "text";
        inputPassword.innerText = 'Скрыть пароль';
    }
})

function arraysToTable(inputValues, idTableValue) {
    const table = document.querySelector('.tableSection table');
    const tr = table.insertRow();
    const idCell = tr.insertCell();

    idCell.textContent = idTableValue;
    for (const row of inputValues) {
        const td = tr.insertCell();
        td.textContent = row;
    }

    const delCell = tr.insertCell();
    delCell.textContent = 'Удалить';
    return table;
}

buttonAdd.addEventListener('click', function () {
    idTableValue += 1;
    let inputValues = new Array();
    inputReads.forEach((inputRead) => {
        inputValues.push(inputRead.value);
    })
    arraysToTable(inputValues, idTableValue);
})
