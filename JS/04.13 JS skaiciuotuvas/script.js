// 1. Variables
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');

// 2. Functions, that make all the magic

(function() {
  window.onload = function() {
    let runningTotal;
    const buttons = Array.prototype.slice.call(document.querySelectorAll('button'));

    let handleComputation = function(event) {

      let value = event.currentTarget.textContent;
      let output = document.querySelector('.output');
      
      if(value === '='){
        output.innerHTML = eval(runningTotal);
        return;
      }
      else if(value === 'AC'){
        output.innerHTML  = '';
      }
      else if(value === '+' || value === '/' || value === '*' || value === '-') {
        output.innerHTML  += value;
        return
      }
      else if (value === 'CE') {
        output.innerHTML  = output.innerHTML.slice(0, output.innerHTML.length - 1);
      }
      else {
        runningTotal = output.innerHTML + value;
        output.innerHTML += value;
        return;
      }
    };
    buttons.forEach(function(button) {
      button.addEventListener('click', handleComputation);
    });
  }
}());


