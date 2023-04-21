// DOM elements
const TuDuForm = document.getElementById('TuDuForm');
const TuDuList = document.querySelector('.TuDus')
const remainingTasks = document.getElementById('remainingTasks')
const completedTasks = document.getElementById('completedTasks')
const totalTasks = document.getElementById('totalTasks')
const addTask = document.getElementById('addTask')
const btnSubmit = document.getElementById('btnSubmit');

let tudus = [];

btnSubmit.addEventListener('click', createNewTuDu);

function createNewTuDu(){
    // Task structure
    const item = {
        id: new Date().getTime(),
        text: "",
        complete:  false
    }

    // to add item at the top
    tudus.unshift(item);
}

