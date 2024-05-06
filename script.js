const taskModel = document.getElementById('taskModel');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('form');
const close = document.getElementsByClassName('close')[0];

addTaskBtn.addEventListener('click',function () {
    taskModel.style.display = 'block';
})

close.addEventListener('click',function () {
    taskModel.style.display = 'none';
})

const formEl =document.querySelector("form");
const tbodyEl =document.querySelector("tbody")
const tableEl =document.querySelector("table");
formEl.addEventListener("submit", onAdd)
function onAdd(e) {
    e.preventDefault();
    const titre = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const datel = document.getElementById('deadline').value;
    const Etat = document.getElementById('etat').value;
    const priorite = document.getElementById('priority').value;
    tbodyEl.innerHTML+=`
        <tr>
            <td>${titre}</td>
            <td>${description}</td>
            <td>${datel}</td>
            <td>${priorite}</td>
            <td>${Etat}</td>
            <td class="g"><button type="submit" class="icon_click"><ion-icon name='pencil-outline' class="icon">"+"</ion-icon></button></td>
            <td class="g"><button type="submit" class="icon_click2"><ion-icon name="checkmark-done-outline" class="icon"></ion-icon></button></td>
        </tr>
    `
    taskForm.reset();
    taskModel.style.display = 'none'
}

