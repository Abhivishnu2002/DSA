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
    deleteAt(index){
        if(index<0 || index>this.size) return;
        if(index === 0){
            this.head = this.head.next;
            if(this.head) this.head.prev = null;
            else this.tail = null;
        }else if(index === this.size - 1){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            let curr = this.head;
            for(let i = 0; i < index; i++){
                curr = curr.next
            }
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev
        }
        this.size--;
    }
    deleteValue(data){
        let curr = this.head;
        while(curr){
            if(curr.value === data){
                if(curr === this.head){
                    this.head = this.head.next;
                    if(this.head) this.head.prev = null;
                    else this.tail = null;
                }else if(curr === this.tail){
                    this.tail = curr.prev;
                    this.tail.next = null;
                }else{
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }
                this.size--;
                return;
            }
            curr = curr.next;
        }
    }
}