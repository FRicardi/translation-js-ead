/**
 * Implementation of a linked list to store the dictionary
 */
class LinkedList
{
    constructor () {
        this.head = null;
    }

    /**
     * Insert a new Node to the list at the beggining of the list
     * @param {*} data 
     */
    insertAtBeggining (data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    /**
     * Insert a new Node to the list at the end of the list
     * @param {*} data 
     */
    insertAtEnd (data) {        
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while(tail.next !== null){
             tail = tail.next;
        }
        tail.next = newNode;
     
        return this.head;
    }

    /**
     * Get a node of the list in the index position
     * @param { Number } index 
     */
    getAt (index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    /**
     * Insert a new node to the index position
     * @param { * } data 
     * @param { Number } index 
     */
    insertAt (data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;       
        return this.head
    }
    
    /**
     * Delete the first Node of the list
     */
    deleteFirstNode () {
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    } 

    /**
     * Delete the last node of the list
     */
    deleteLastNode = function(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
       let previous = this.head;
       let tail = this.head.next;
       while(tail.next !== null){
           previous = tail;
           tail = tail.next;
       }
       previous.next = null;
       return this.head;
    }

    /**
     * Delete a Node at the index position
     * @param { Number } index 
     */
    deleteAt (index) { 
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);   
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;     
        return this.head
    }
    
    /**
     * Are you sure? This will delete all the list
     */
    deleteList (){
        this.head = null;
    }
}