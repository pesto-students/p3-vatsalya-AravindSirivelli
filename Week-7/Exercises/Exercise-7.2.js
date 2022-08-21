//Reverse a LinkedList

//Input: 2,4,7,8,9;   k=3

//Output 8,9,2,4,7

const LinkedList = require("../util/LinkedList.js");
const ll = new LinkedList();
ll.insertLast(2);
ll.insertLast(4);
ll.insertLast(7);
ll.insertLast(8);
ll.insertLast(9);
ll.printListData();
console.log(ll);


function rotateLinkedList(head, k) {
    if (!k || !head || !head.next)
        return head;
    let length = 1; tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    tail.next = head;
    while (--k) {
        head = head.next;
    }
    temp = head;
    head = head.next;
    temp.next = null;
    return head;
}
function printList(node) {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}
const reversedList = rotateLinkedList(ll.head, 3);
console.log(reversedList);
console.log(printList(reversedList));