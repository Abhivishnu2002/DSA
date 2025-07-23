class Stack{
    constructor(){
        this.stack = [];
    }

    size(){
        return this.stack.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    push(element){
        this.stack.push(element);
    }
    pop(element){
        if(this.isEmpty()){
            return "Stack is empty, cannot do pop";
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty, cannot do peek";
        }
        return this.stack[this.size()-1];
    }
    print(){
        if(this.isEmpty()){
            return "Stack is empty, nothing to print";
        }
        return this.stack;
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.print());
console.log(stack.pop())
console.log(stack.print());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

console.log(stack.print());
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.print());