class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node
        }
        this.size++
    }
    reverse(){
        if(this.isEmpty()){
            return;
        }else{
            let curr = this.head
            let prev = null
            while(curr){
                let nextNode = curr.next
                curr.next = prev
                prev = curr
                curr = nextNode
            }
            this.head = prev
        }
    }
    deleteIndex(index){
        if(index < 0 || index > this.size){
            console.log("Invalid Index");
        }else{
            let curr = this.head;
            for(let i = 0; i<index-1; i++){
                curr=curr.next
            }
            curr.next = curr.next.next
            this.size--
        }
    }
    deleteValue(data){
        if(this.isEmpty()){
            return;
        }
        if(this.head.value === data){
            this.head = this.head.next 
            this.size--
            return;
        }
            let curr = this.head;
            while(curr.next && curr.next.value !== data){
                curr = curr.next
            }
            if(curr.next){
                curr.next = curr.next.next
                this.size--
            }
    }
    search(value){
        if(this.isEmpty()){
            return;
        }
        if(this.head.value === value){
            return 0;
        }
        let curr= this.head
        for(let i=0; i<this.size; i++){
            if(curr.value===value){
                return i;
            }else{
                curr = curr.next;
            }
        }
        return "Value not found"
    }
    middle(){
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next){
            slow = slow.next;  
            fast = fast.next.next;
        }
        return slow ? slow.value : null;
    }
    removeMiddle(){
        if(this.isEmpty()){
            return;
        }
        if(!this.head.next.next){
            this.head.next = null;
            this.size--
            return;
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next;
        }
        if(prev){
            prev.next = slow.next;
            this.size--;
        }
    }
    linkedListArray(){
        let arr = [];
        let curr = this.head;
        for(let i=0;i<this.size;i++){
            arr.push(curr.value)
            curr = curr.next;
        }
        return arr;
    }
    arrayToLinkedList(arr){
        for(let i = 0; i<arr.length; i++){
            this.append(arr[i]);
        }
    }
    isPalindrome(){
        let arr = [];
        let curr = this.head
        while(curr){
            arr.push(curr.value)
            curr = curr.next;
        }
        for(let i = 0; i<arr.length/2; i++){
            if(arr[i]!==arr[arr.length-1-i]){
                return false;
            }
        }
        return true;
    }
    removeLast(){
        if(this.isEmpty()){
            return;
        }
        if(!this.head.next){
            this.head = null;
            this.size--;
            return;
        }
        let curr = this.head;
        while(curr.next && curr.next.next){
            curr = curr.next;
        }
        if(curr.next){
            curr.next = curr.next.next;
            this.size--;
        }
    }
    insertAfter(target, value){
        let curr = this.head;
        while(curr){
            if(curr.value === target){
                const node = new Node(value);
                node.next = curr.next;
                curr.next = node
                this.size++
                return;
            }
            curr = curr.next;
        }
    }
    insertBefore(target, value){
        if(this.isEmpty()){
            return;
        }
        if(this.head.value===target){
            this.prepend(value);
            this.size++;
        }
        let curr = this.head;
        while(curr.next && curr.next.value !== target){
            curr = curr.next;
        }
        if(curr.next){
            const node = new Node(value)
            node.next = curr.next;
            curr.next = node
            this.size++;
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let curr = this.head
            let listValue = '';
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValue);
        }
    }
}

const list = new LinkedList()
list.prepend(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.insertAfter(30, 35);
list.insertAfter(40, 45);
list.insertBefore(20, 15);
console.log(list.search(10))
console.log(list.middle())
list.print()
console.log(list.isPalindrome());