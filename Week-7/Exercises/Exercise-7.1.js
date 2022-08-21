//Reverse a LinkedList
const LinkedList = require("../util/LinkedList.js");

const ll = new LinkedList();
ll.insertLast(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(500);
ll.insertLast(600);

ll.printListData();
console.log(ll);


function reverseLinkedList(head) {
    let previous = null;
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    }
    return previous;
}
console.log(reverseLinkedList(ll.head));
