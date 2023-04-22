// DOM elements
const TuDuForm       = document.getElementById('TuDuForm');
const TuDuList       = document.querySelector('.TuDus');

const remainingTasks = document.getElementById('remainingTasks');
const completedTasks = document.getElementById('completedTasks');
const totalTasks     = document.getElementById('totalTasks');

const addTask        = document.getElementById('addTask');
const btnSubmit      = document.getElementById('btnSubmit');

// Event Listeners
btnSubmit.addEventListener('click', createTuDu);

// Functions
function createTuDu(){
    try {
        if(addTask.value != ''){
            const div = document.createElement('div');
    
            div.className = 'tuDuTask';
    
            div.innerHTML = `
            <li>
                <div>
                    <input type="checkbox" name="tasks" id="1">
                    <span>addTask.value</span>
                </div>
                <button title="removeTask" class="removeTask">
                    X
                </button>
            </li>
            `;
    
            TuDuList.appendChild(div);
            addTask.value = '';         // reset input field to empty for next use
        }else {
            alert('Please add a TuDu to add.')
        }
    } catch (error) {
        console.log(error);
    }
}
