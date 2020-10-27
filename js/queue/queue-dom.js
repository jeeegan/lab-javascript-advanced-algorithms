const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = "";
};

const generateListQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  clearQueueInput();
  let html = "";
  for (let i=0; i<queue.MAX_SIZE; i++) {
    if (i < queue.queueControl.length) {
      html += `<li class="active">${queue.queueControl[i]}</li>`;
    } else {
      html += `<li class="inactive"></li>`
    }
  }
  queueUL.innerHTML = html;
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = type;
  }
};

const addToQueue = () => {
  if(queue.enqueue(queueInput.value) === "Queue Overflow") {
    generateWarningQueue("overflow");
  } else {
    generateListQueue();
  }
};

const removeFromQueue = () => {
  if (queue.dequeue() === "Queue Underflow") {
    generateWarningQueue("underflow");
  } else {
    generateListQueue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
