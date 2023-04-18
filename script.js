// DOM elements
const TuDuForm = document.querySelector('#TuDuForm');
const TuDuList = document.querySelector('.TuDus')
const remainingTasks = document.querySelector('#remainingTasks')
const completedTasks = document.querySelector('#completedTasks')
const totalTasks = document.querySelector('#totalTasks')
const addTask = document.querySelector('#addTask')

// check for 'tasks' in local storage using JSON object and turn them into array or get empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

TuDuForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const inputValue = addTask.value

    if(inputValue == ''){
        return
    }

    const task = {
        id: new Date().getTime(),
        name: inputValue,
        isComplete: false,
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    createTasks(task)

    TuDuForm.reset()
    addTask.focus()
})


function createTasks(tasks){
    const task = document.createElement('li')

    task.setAttribute('id', task.id)

    if(task.isComplete){
        task.classList.add('complete')
    }
}
