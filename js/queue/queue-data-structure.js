class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    return this.queueControl.length === 0;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
    return "Queue Overflow";
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    }
    return this.queueControl.pop();
  }
}
