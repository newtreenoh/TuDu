// DOM elements
const btnAddTask = document.getElementById('btnAddTask');

const tuDuContent = document.getElementById('tuDuContent')

// Event Listeners
btnAddTask.addEventListener('click', addTuDu);

// Functions
function addTuDu(){
    try {
        if(addTuDuText.value != ''){
            const div = document.createElement('div');
    
            div.className = 'tuDuTask';
    
            div.innerHTML = `
            <div class="tuDuTask" id="tuDuTask">
                <input type="checkbox" name="" id="tuDuCheckbox">
                <p class="taskText" id="taskText">` + addTuDuText.value + `</p>
                <button class="btnDelete" id="btnDelete">X</button>
            </div>
            `;
    
            tuDuContent.appendChild(div);
            addTuDuText.value = '';         // reset input field to empty for next use
        }else {
            alert('Please add a TuDu to add.')
        }
    } catch (error) {
        console.log(error);
    }
}
