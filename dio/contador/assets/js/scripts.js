var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function icrement() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}
