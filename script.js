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

// const form = document.querySelector("form");
// const tbody = document.querySelector("tbody");

// function addIt(e) {
//     e.preventDefault();
//     alert('work');
//     const titre = document.getElementById('title').value;
//     const descript = document.getElementById('description').value;
//     const date = document.getElementById('deadline').value;
//     const etat = document.getElementById('etat').value;
//     const priorite = document.getElementById('priority').value;
//     // const row = body.insertRow();
//     const edit = document.createElement('button');
//     edit.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'
//     edit.onclick = function(){
//         editform(form);
//     }

//     const done = document.createElement('button');
    
//     done.innerHTML = '<ion-icon name="checkmark-done-circle-outline"></ion-icon>'
//     done.onclick = function(){
//         doneform(form);
//     }
// }

// tbody.innerHTML += '`<tr><td>${titre}</td><td>${descript}</td><td>${date}</td><td>${etat}</td><td>${priorite}</td><td><button><ion-icon name="checkmark-done-circle-outline"></ion-icon></button></td><td><button><ion-icon name="create-outline"></ion-icon></button></td></tr>`';

// form.addEventListener('submit', addIt);

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
            <td class="g"><button class="btnM modi"  type="submit"><ion-icon name='pencil-outline'>"+"</ion-icon></button></td>
            <td class="g"><button class="btnT termine" type="submit">Terminer</button></td>
        </tr>
    `
    taskForm.reset();
    taskModel.style.display = 'none'
}

