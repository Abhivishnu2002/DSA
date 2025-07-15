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
        this.size++;
    }
    addToFirst(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }
    linkedListArray(){
        let curr = this.head;
        let arr = [];
        for(let i = 0; i<this.size; i++){
            arr.push(curr.value)
            curr = curr.next;
        }
        console.log(arr);
    }
    arrLinkedList(arr){
        for(const values of arr){
            this.addToLast(values);
        }
    }
    deleteAt(index){
        if(index < 0 || index > this.size) return;
        if(index===0){
            this.head = this.head.next;
            if(this.head) this.head.prev = null;
            else this.tail = null;
        }else if(index === this.size-1){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            let curr = this.head;
            for(let i=0; i<index; i++){
                curr = curr.next;
            }
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
        }
        this.next--;
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
    middle(){
        if(!this.head) return;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }
    removeMiddle(){
        if(!this.head) return;
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
        if(slow.next) slow.next.prev = prev;
        if(slow === this.tail)this.tail = prev;
        this.size--;
    }
    removeDuplicate(){
        if(!this.head) return;
        const seen = new Set();
        let curr = this.head;
        while(curr){
        if(seen.has(curr.value)){
            if(curr===this.tail){
                this.tail = curr.prev;
                this.tail.next = null;
            }else{
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
            }
            this.size--;
        }else{
            seen.add(curr.value);
        }
        curr = curr.next;
        }
    }
    reverse(){
        let curr = this.head;
        let temp = null;
        while(curr){
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        if(temp){
            this.tail = this.head;
            this.head = temp.prev;
        }
    }
    isPalindrome(){
        if(this.size <= 1)return true;
        let left = this.head;
        let right = this.tail;
        while(left!== right && left.prev !== right){
            if(left.value !== right.value) return false;
            left = left.next;
            right = right.next;
        }
        return true;
    }
    insertAfter(target, value) {
        let curr = this.head;
        while (curr) {
        if (curr.value === target) {
        const node = new Node(value);
        node.next = curr.next;
        node.prev = curr;
        if (curr === this.tail) this.tail = node;
        else curr.next.prev = node;
        curr.next = node;
        this.size++;
        return;
        }
        curr = curr.next;
        }
    }
    insertBefore(target, value){
        let curr = this.head;
        while(curr){
            if(curr.value === target){
                const node = new Node(value);
                node.next = curr;
                node.prev = curr.prev;
                if(curr === this.head) this.head = node;
                else curr.prev.next = node;
                curr.prev = node;
                this.size++;
                return;
            }
            curr = curr.next;
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
            return;
        }
        let curr = this.head;
        let listValues = "";
        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues);
    }
}

const list = new DoublyLinkedList();
list.addToFirst(10)
list.addToLast(20)
list.addToLast(30)
list.linkedListArray();
list.arrLinkedList([40, 50, 60, 70, 70]);
console.log(list.middle());
list.removeMiddle();
list.removeDuplicate();
list.reverse();
console.log(list.isPalindrome());
list.insertAfter(60, 55);
list.insertBefore(60, 65);
list.print();
list.deleteAt(0)
list.deleteValue(9)