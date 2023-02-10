class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    var temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    if(temp.nextNode==null)
                    temp.nextNode = new Node(value);
                }
            }

        insertElementatfirst(value, index){
            var newinsert=new Node(value)
            if(index==0){
                console.log("Insert element at beginning in the linkedlist")
                var curr=this.rootNode
                newinsert.nextNode=curr
                this.rootNode=newinsert            
            }
        }
        insertElementatmiddle(value,index)
        {
            var newinsert=new Node(value)
                console.log("Insert element at midlle or last in the linked list")
                var curr=this.rootNode
                var size=0
                while(curr!=null){
                var prev=curr.nextNode
                size++
                
                if(size==index){
                
                curr.nextNode=newinsert 
                newinsert.nextNode=prev
                break;
                }
            
                curr=curr.nextNode
            }
        }

        removeElementatfirst(index){
            if(index==0){
                console.log("Delete element at beginning in the linkedlist")
                var curr=this.rootNode
                curr=curr.nextNode
                 this.rootNode=curr     
            }

        }
        removeElementatmiddle(index)
        {
            
                console.log("Delete element at midlle or last in the linked list")
                var curr=this.rootNode
                var size=0
                while(curr!=null){
                var prev=curr.nextNode
                size++
                
                if(size==index){
                
                curr.nextNode=prev.nextNode
                
                break;
                }
            
               curr=curr.nextNode
                }
        }
        
        printElements(){
            var temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }
            else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
                
            }
            
        }
        }
}


var list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.printElements();
list.insertElementatfirst(4,0);
list.printElements();
list.insertElementatmiddle(5,2);
list.printElements();
list.removeElementatfirst(0);
list.printElements();
list.removeElementatmiddle(2)

list.printElements();