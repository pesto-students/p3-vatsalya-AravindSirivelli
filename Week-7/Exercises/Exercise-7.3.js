//Detect Loop

const LinkedList = require("../util/LinkedList.js");
const ll = new LinkedList();
ll.insertLast(2);
ll.insertLast(4);
ll.insertLast(7);
ll.insertLast(8);
ll.insertLast(9);
ll.printListData();
console.log(ll);

function hasRotation(head) {
    if (head === null) return false;
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }
    return false;
}

//Randomly setting a loop here
ll.head.next.next.next.next = ll.head.next.next;

// Check the loop by printing the output 
function printList(node) {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}
console.log(printList(ll.head));


const isRotated = hasRotation(ll.head);
console.log(isRotated);




