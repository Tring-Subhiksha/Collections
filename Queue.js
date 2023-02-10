class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class Queue{
    rootNode = null;
    count = 0;
    addElement(value){
            if(this.rootNode == null){
                console.log("Insert an element in the queue using linkedlist")
                this.rootNode= new Node(value)
                this.count++;
            }else{
                var temp = this.rootNode;
                while(temp.nextNode != null){
                    temp = temp.nextNode;
                }
                
                if(temp.nextNode==null)
                temp.nextNode = new Node(value);
                this.count++;
                
            }
           
        }

    deleteElements(){
        console.log("Delete the elements in queue using linked list")
        var temp=this.rootNode
        this.rootNode=this.rootNode.nextNode
        
        console.log(temp.data)
        }
        printElements(){
            console.log("Display the elements in queue using linked list")
            var temp = this.rootNode;
            if(temp == null){
                console.log("Queue is empty!")
            }
            else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
                
            }
            
        }
        }
}
var list=new Queue()
list.addElement(1)
list.addElement(2)
list.addElement(3)
list.printElements()
list.deleteElements()
list.printElements()
list.deleteElements()
list.printElements()
list.deleteElements()
list.printElements()