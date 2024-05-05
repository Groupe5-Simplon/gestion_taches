const taskModel = document.getElementById('taskModel');
const addTaskBtn = document.getElementById('addTaskBtn');
const close = document.getElementsByClassName('close')[0];

addTaskBtn.addEventListener('click',function () {
    taskModel.style.display = 'block';
})

close.addEventListener('click',function () {
    taskModel.style.display = 'none';
})

const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

function addIt(e) {
    e.preventDefault();
    alert('work');
    const titre = document.getElementById('title').value;
    const descript = document.getElementById('description').value;
    const date = document.getElementById('deadline').value;
    const etat = document.getElementById('etat').value;
    const priorite = document.getElementById('priority').value;
    // const row = body.insertRow();
    const edit = document.createElement('button');
    edit.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'
    edit.onclick = function(){
        editform(form);
    }

    const done = document.createElement('button');
    
    done.innerHTML = '<ion-icon name="checkmark-done-circle-outline"></ion-icon>'
    done.onclick = function(){
        doneform(form);
    }
}

tbody.innerHTML += '`<tr><td>${titre}</td><td>${descript}</td><td>${date}</td><td>${etat}</td><td>${priorite}</td><td><button><ion-icon name="checkmark-done-circle-outline"></ion-icon></button></td><td><button><ion-icon name="create-outline"></ion-icon></button></td></tr>`';

form.addEventListener('submit', addIt);
