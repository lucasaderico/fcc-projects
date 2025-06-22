// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  queueSize() {
    return this.max + 1;
  }

  enqueue(item) {
    if (this.write === this.read && this.queue[this.read] === null) {
      this.queue[this.write] = item;
      this.write = (this.write + 1) % this.queueSize();
      return item;
    }

    if (this.write !== this.read) {
      this.queue[this.write] = item;
      this.write = (this.write + 1) % this.queueSize();
      return item;
    }

    return null;
  }

  dequeue() {
    if (this.queue[this.read] === null) return null;

    const value = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = (this.read + 1) % this.queueSize();
    return value;
  }
}
