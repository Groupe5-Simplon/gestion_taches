const taskModel = document.getElementById('taskModel');
const taskForm = document.getElementById('taskForm');
const addTaskBtn = document.getElementById('addTaskBtn');
const close = document.getElementsByClassName('close')[0];

addTaskBtn.addEventListener('click',function () {
    taskModel.style.display = 'block';
})

close.addEventListener('click',function () {
    taskModel.style.display = 'none';
})

taskForm.addEventListener("click", function (event) {
    event.preventDefault();
    const titre = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const datel = document.getElementById('deadline').value;
    const priorite = document.getElementById('priority').value;
    if (titre && description && datel && priorite) {
        let tableau = document.getElementById('tableau').getElementsByTagName('tbody')[0];
        // tableau.insertRow().innerHTML="<td>"+titre+"</td><td>"+description+"</td><td>"+datel+"</td><td>"+priorite+"</td>"+"<ion-icon name='pencil-outline'>"+"</ion-icon>";
        tableau.insertRow().innerHTML = "<td>" + titre + "</td><td>" + description + "</td><td>" + datel + "</td><td>" + priorite + "</td><td class=ion-icon><ion-icon name='pencil-outline'></ion-icon></td><td class=ion-icon><ion-icon name='trash-outline'></ion-icon></td>";
        taskModel.style.display = 'none'
        taskForm.reset();
    } else {
        return;
    }
    
})