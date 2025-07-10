class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    addToLast(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++                             
    }
    addToStart(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++ 
    }
    toLinkedList(arr){
        for(const value of arr){
            this.addToLast(value);
        }
    }
}