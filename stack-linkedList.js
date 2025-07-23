class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    isEmpty(){
        return this.head === null;
    }
    push(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
    pop(value){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        let curr = this.head
        this.head = curr.next;
        curr = null;
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.head.value;
    }
    print(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        let curr = this.head;
        let listValues = []
        while(curr){
            listValues.push(curr.value);
            curr = curr.next;
        }
        console.log(listValues.join(' -> '));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
stack.pop()
console.log(stack.peek());
stack.print();
stack.pop()
stack.pop()
console.log(stack.peek());
stack.print();