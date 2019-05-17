import AVLNode from 'AVLNode'
/**
 * Implementation of a balanced binary tree by the AVL strategy
 */
class AVL {

    constructor() {
        this.root = null;
    }

    /**
     * 
     * @param { Dictionary } data 
     */
    insert(data) {
        const node = new AVLNode(data);
        
        const treeRoot = this.getTreeRoot();

        if (treeRoot === null) {
            console.log('Node data inserted to root')
            this.setTreeRoot(node);
            return;
        }

        if (treeRoot.data > node.data) {
            console.log('Node data lesser than root data');
            this.insertImpl(treeRoot.left, node);
        } else if (treeRoot.data < node.data ) {
            console.log('Node data greater than root data')
            this.insertImpl(treeRoot.right, node);
        } else {
            console.log('Node data already inserted');
        }

    }
 
    insertImpl(root, node) {

        if (root === null) {
            root = node;
            return;
        }

        if (data.data > node.data) {
            console.log('Node data lesser than root data');
            this.insertImpl(data.left, node);
        } else if (data.data < node.data ) {
            console.log('Node data greater than root data')
            this.insertImpl(data.right, node);
        } else {
            console.log('Node data already inserted');
        }

    }

    remove(node) {

    }

    rightRotation() {

    } 

    doubleRightRotation() {

    }

    leftRotation() {

    }

    doubleLeftRotation() {

    }

    get height() {

    }

    get getTreeRoot() {
        return this.root;
    }

    set setTreeRoot(node) {
        this.root = node;
    }

    get balanceFactor(node) {
        
    }

    readInOrder() {

    }
}