/**
 * Implementation of the structure of a node. Data will be a Dictionary object
 */
class AVLNode {

    /**
     * Constructor of the class
     * @param { Dictionary } data 
     * @param { AVLNode } left 
     * @param { AVLNode } right 
     */
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

}