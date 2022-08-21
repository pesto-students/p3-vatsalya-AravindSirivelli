// Implement a Queue using 2 stack
var Queue = function () {
    this.firstStack = [];
    this.secondStack = [];
};
Queue.prototype.enqueue = function (x) {
    this.firstStack.push(x);
};
Queue.prototype.dequeue = function () {
    while (this.firstStack.length) {
        this.secondStack.push(this.firstStack[this.firstStack.length - 1]);
        this.firstStack.pop();
    }
    let x = this.secondStack[this.secondStack.length - 1];
    this.secondStack.pop();
    return x;
};
Queue.prototype.peek = function () {
    if (this.firstStack.length > 0) {
        return this.firstStack[this.firstStack.length - 1];
    }
    return this.secondStack[this.secondStack.length - 1];
};
Queue.prototype.empty = function () {
    return this.secondStack.length + this.firstStack.length ? false : true;
};
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(240);
queue.enqueue(85);
queue.enqueue(44);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.empty());