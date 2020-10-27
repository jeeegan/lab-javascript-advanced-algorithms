const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
  warningTopStack.style.display = "none";
  warningBottomStack.style.display = "none";
  clearStackInput();
  let html = "";
  for (let i=0; i<newStack.MAX_SIZE; i++) {
    if (i < newStack.stackControl.length) {
      html += `<li class="active">${newStack.stackControl[i]}</li>`
    } else {
      html += `<li class="inactive"></li>`;
    }
  }
  stackList.innerHTML = html;
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block";
    warningBottomStack.innerText = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block";
    warningTopStack.innerText = type;
  }
};


const addToStack = () => {
  if (newStack.push(stackInput.value) === "Stack Overflow") {
    generateWarningStack("overflow");
  } else {
    renderListStack();
  }
};

const removeFromStack = () => {
  if (newStack.pop() === "Stack Underflow") {
    generateWarningStack("underflow");
  } else {
    renderListStack();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
