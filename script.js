let counterValue=0;

const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const stepValueInput = document.getElementById('stepValue');

function updateCounter(){
    counter.innerText= counterValue;
}

function changeCounter(operation){
    let stepValue = parseInt(stepValueInput.value) || 1;

    counterValue=operation==='increment' ? counterValue + stepValue: counterValue-stepValue;
    updateCounter();

}

incrementBtn.addEventListener('click',() => changeCounter('increment'));
decrementBtn.addEventListener('click', () => changeCounter('decrement'));

updateCounter();