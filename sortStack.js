class Stack{
    constructor(){
        this.stack = [];
    }
    push(data){
        this.stack.push(data);
    }
    pop(){
        return this.stack.pop();
    }
    sortWithStack(){
        let tempstack = [];
        let input = this.stack;
        while(input.length>0){
            let tmp = input.pop();
            while(tempstack.length>0 && tempstack[tempstack.length-1]<tmp){
                input.push(tempstack.pop());
            }
            tempstack.push(tmp);
        }
        this.stack = tempstack;
    }


    print(){
        console.log(this.stack.join(" -> "));
    }
}

const stack = new Stack();
stack.push(-6);
stack.push(20);
stack.push(8);
stack.push(-2);
stack.push(4);

console.log("Before sorting: ");
stack.print();

console.log("After sorting: ");
stack.sortWithStack();
stack.print();