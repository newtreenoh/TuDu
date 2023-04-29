// DOM elements
const btnAddTask = document.getElementById('btnAddTask');
const tuDuContent = document.getElementById('tuDuContent');

const addTuDuText = document.getElementById('addTuDuText');
const btnDelete = document.getElementById('btnDelete');

// Event Listeners
btnAddTask.addEventListener('click', addTuDu);
tuDuContent.addEventListener('click', removeTuDu);

// Functions
function addTuDu(){
    try {
        if(addTuDuText.value != ''){
            const div = document.createElement('div');
            div.className = 'tuDuTask';
            div.innerHTML = `
            <ul class="tuDuTask">
                <li>
                <input type="checkbox" name="" id="tuDuCheckbox">
                <p class="taskText">` + addTuDuText.value + `</p>
                <button class="btnDelete">X</button>
                </li>
            </ul>
            `;
            tuDuContent.appendChild(div);
            addTuDuText.value = '';         // reset input field to empty for next use
        } else {
            alert('Please add a TuDu to add.')
        }
    } catch (error) {
        console.log(error);
    }
}

function removeTuDu() {
    
}
  
  