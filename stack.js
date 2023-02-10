class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
        this.nextNode=null
    }
}
class Stack{
    
    constructor()
    {
   this. rootNode = null;
   this.head=-1
    }
   
    pushElement(value)
    {
        
        let n=new Node(value)
        
       if(this.head==-1&&this.rootNode == null){
        console.log("Insert an element in the stack using linked list")
            this.rootNode=n
            this.head++
        }else{
             let temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            if(temp.nextNode==null)
            temp.nextNode = n;
            this.head++;
        }
    }
    
    popElement(){
        let temp=this.rootNode
        console.log("pop an element in the stack using linked list")
        if(this.head<0)
        {
            console.log("Stack is empty")
            return 0;
        }
       
       else{
            let p;
        for(let i=0;i<=this.head;i++){
            p=temp
            temp=temp.nextNode        
       }
       console.log(p.data)
       this.head--;
    }
    }
      
    printElements(){
        let temp = this.rootNode;
        console.log("Display the elements in linked list using stack")
        if(this.head<0)
        {
            console.log("Stack is empty")
            return 0;
        }
        else{
        for(let i=0;i<=this.head;i++){
            console.log(temp.data)
            temp = temp.nextNode;
            
        }
        
    }
    }
}
let list = new Stack()
list.pushElement(1);
list.pushElement(2);
list.pushElement(3);
list.pushElement(5)
list.printElements();
list.popElement();
list.printElements();
list.popElement();
list.printElements();
