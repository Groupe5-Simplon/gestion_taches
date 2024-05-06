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
            <td class="g"><button type="submit" class="icon_click" onclick="editData(this)"><ion-icon name='pencil-outline' class="icon">"+"</ion-icon></button></td>
            <td class="g"><button type="submit" class="icon_click2" onclick="done(this)"><ion-icon name="checkmark-done-outline" class="icon">"+"</ion-icon></button></td>
        </tr>
    `
    taskForm.reset();
    taskModel.style.display = 'none'
}
function editData(button) {  
    let row = button.parentNode.parentNode; 
    let titreCell = row.cells[0]; 
    let descriptCell = row.cells[1]; 
    let dateCell = row.cells[2]; 
    let etatCell = row.cells[3]; 
    let prioriteCell = row.cells[4]
 
    let titreInput = 
        prompt("Entrez le nouveau titre:", 
            titreCell.innerHTML); 
    let descriptInput = 
        prompt("Entrez la nouvelle description:", 
            descriptCell.innerHTML); 
    let dateInput = 
        prompt("Entrez la nouvelle date:", 
            dateCell.innerHTML 
        ); 
    let etatInput = 
        prompt("Entrez le nouveau état:", 
            etatCell.innerHTML 
        );
    let prioriteInput = 
        prompt("Entrez la nouvelle priorité:", 
            prioriteCell.innerHTML 
        );  
    titreCell.innerHTML = titreInput; 
    descriptCell.innerHTML = descriptInput; 
    dateCell.innerHTML = dateInput; 
    etatCell.innerHTML = etatInput; 
    prioriteCell.innerHTML = prioriteInput;
}
function done(button) {  
    let row = button.parentNode.parentNode; 
    
    let titreCell = row.cells[0]; 
    let descriptCell = row.cells[1]; 
    let dateCell = row.cells[2]; 
    let etatCell = row.cells[3]; 
    let prioriteCell = row.cells[4]
 
    let titreInput = "<del>"+titreCell.innerHTML+"</del>";
    let descriptInput ="<del>"+descriptCell.innerHTML+"</del>"; 
    let dateInput ="<del>"+ dateCell.innerHTML+"</del>"; 
    let etatInput ="<del>"+ etatCell.innerHTML +"</del>";
    let prioriteInput ="<del>"+ prioriteCell.innerHTML +"</del>";  

    titreCell.innerHTML = titreInput; 
    descriptCell.innerHTML = descriptInput; 
    dateCell.innerHTML = dateInput; 
    etatCell.innerHTML = etatInput; 
    prioriteCell.innerHTML = prioriteInput;
}

