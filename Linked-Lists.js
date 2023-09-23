// class Node {
// constructor(data){
//     this.data = data,
//     this.next = null
// }}

// const node1 = new Node(10)
// const node2 = new Node(20)


// node1.next = node2


// console.log(node2)

// class Node {
//     constructor(data){
//         this.data = data,
//         this.next = null
//     }
// }

//  p = new Node(1)
//  b = new Node(2)
//  d =  new Node(3)


//  console.log(p.next = p.next.next)



// create a node class 
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

// create a linked list class
class LinkedList {
    constructor(head){
        this.head = null
    }

    // create append method that takes data property
    append(data){

    // create a new node variable with the property og append

    const newNode = new Node(data)

    // check the head and set it to newNode if theres no head
    if(!this.head){
        this.head = newNode
    } else {
        let current = this.head
        while(current.next){
            current = current.next
    }
    current.next = newNode

    }
}

reverse(){

    let prev = null
    let current = this.head
    let next = null

    if(current !== null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    this.next = prev
}

traverse(){
   let current = this.head

    while(current !== null){
        console.log(current.data)
        current = current.next
    }
    }

// Create a new Node with the data you want to prepend.
// Set the next of the new node to point to the current head of the list.
// Update the head of the list to be the new node.

prepend(data){
    let newNode = new Node(data)

    newNode.next = this.head

    this.head = newNode
}

//Start at the head of the linked list.

//Traverse the list until you reach the desired position, keeping track of both the previous node and the current node.

//Create a new node that you want to insert.

//Set the next pointer of the new node to point to the next node (the node after the insertion point).

//Update the next pointer of the previous node to point to the new node.
  

insertAt(position, data){

let newNode = new Node(data)

// If inserting at the beginning (position 0), prepend the node
if(position == 0){
    newNode.next = this.head
    this.head = newNode
    return
}


let current = this.head;
let previous = null;
let currentPosition = 0

while (current !== null && currentPosition < position) {
    previous = current;
    current = current.next;
    currentPosition++;
  }

  if (currentPosition === position) {
    // Insert the new node between previous and current nodes
    previous.next = newNode;
    newNode.next = current;
  } else {
    // Handle cases where position is greater than the length of the list
    console.error("Position out of bounds.");
  }
}

}

// const myList = new LinkedList();

// myList.append(1);
// myList.append(2);
// myList.append(3);

// console.log("Original List:");
// myList.traverse();

// myList.reverse();

// console.log("Reversed List:");
// myList.traverse();


// prepend
// const myList = new LinkedList();

// myList.append(2);
// myList.append(3);

// console.log("Original List:");
// myList.traverse(); // Output: 2, 3

// myList.prepend(1);

// console.log("List after prepend:");
// myList.traverse(); // Output: 1, 2, 3

//INSERTAT()

const myList = new LinkedList();

myList.append(1);
myList.append(3);

console.log("Original List:");
myList.traverse(); // Output: 1, 3

myList.insertAt(1, 2); // Insert 2 at position 1

console.log("List after insertion:");
myList.traverse(); // Output: 1, 2, 3
