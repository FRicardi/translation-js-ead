const AVLNode = require('./AVLNode')

/**
 * Implementation of a balanced binary tree by the AVL strategy
 */
class AVL {

    constructor() {
        this.root = null;
    }

    get getTreeRoot() {
        return this.root;
    }

    set setTreeRoot(node) {
        this.root = node;
    }
    /**
     * 
     * @param { Dictionary } data 
     */
    insert(data) {
        const node = new AVLNode(data);
        
        const treeRoot = this.getTreeRoot;

        if (treeRoot === null) {
            console.log('Node data inserted to root')
            this.setTreeRoot = node;
            return;
        }

        if (treeRoot.data.word > node.data.word) {
            console.log('Node data lesser than root data');
            treeRoot.left = this.insertImpl(treeRoot.left, node);
        } else if (treeRoot.data.word < node.data.word ) {
            console.log('Node data greater than root data')
            treeRoot.right = this.insertImpl(treeRoot.right, node);
        } else {
            console.log('Node data already inserted');
        }

        this.setTreeRoot = treeRoot
        // console.log({ treeRoot })

    }
 
    insertImpl(root, node) {

        if (root === null) {
            root = node;
        } else if (root.data.word > node.data.word) {
            console.log('Node data lesser than root data');
            root.left = this.insertImpl(root.left, node);
        } else if (root.data.word < node.data.word) {
            console.log('Node data greater than root data')
            root.right = this.insertImpl(root.right, node);
        } else {
            console.log('Node data already inserted');
        }

        return root;
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

    balanceFactor() {        
    }

    readInOrder() {
        this.readInOrderImpl(this.root)
    }

    readInOrderImpl(root) {
        if (root) {
            this.readInOrderImpl(root.left);
            console.log({ Word: root.data.word });
            this.readInOrderImpl(root.right);
        }
        return
    }
}

module.exports = AVL