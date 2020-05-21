const numberButtons = document.querySelectorAll('[data-number]')  
const operationButtons = document.querySelectorAll('[data-operation]')  
const equalsButton = document.querySelector('[data-equals]')  
const deleteButton = document.querySelector('[data-delete]')  
const allClearButton = document.querySelector('[data-all-clear]')  
const previousOperandTextElement = document.querySelector('[data-previous-operand]')  
const currentOperandTextElement = document.querySelector('[data-current-operand]') 
  
 
class buildItem {
  constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.allClear();
  }
  
  allClear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = '';
  }
  
  clearEv() { 
      this.currentOperand = this.currentOperand.slice(0,-1);
  }
  
  appendNumber(number) {
      this.currentOperand = this.currentOperand + number;
  }
  
  setOperation(operation) {
    if (this.previousOperand !== '') {
        this.calculation();
    }
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    this.operation = operation;
  }
  
  calculation() {
      let result;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      switch(this.operation) {
          case '+':
            result = prev + current;
              break;
          case '-':
            result = prev - current;
              break;
           case '*':
            result = prev * current;
              break;
          case '÷':
            result = prev / current;
              break;
          default:
              return;
      }
      this.currentOperand = result;
      this.previousOperand = '';
      this.operation = '';
  }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText = this.currentOperand;    
      if (this.operation != null) {
          this.previousOperandTextElement.innerText = 
              `${this.previousOperand} ${this.operation}`;
      } else {
          this.previousOperandTextElement.innerText = '';
      }
    }
  }
  
  const calculator = new buildItem(previousOperandTextElement, currentOperandTextElement);
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.setOperation(button.innerText);
        calculator.updateDisplay();
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.calculation();
    calculator.updateDisplay();
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.allClear();
    calculator.updateDisplay();
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.clearEv();
    calculator.updateDisplay();
  })
  
  