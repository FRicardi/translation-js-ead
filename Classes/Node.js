/**
 * A node of a list
 * @param { * } data payload to a node
 * @param { Node } next the next node on the list
 */
class Node{
    
    /**
     * Instatiate class Dictionary initial values
     * @param { * } data 
     * @param { Node } next 
     */
    constructor (data, next = null) {
        this.data = data,
        this.next = next
    }
    
}