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
            console.log(`Node data (${node.data.word}) inserted to root`)
            this.setTreeRoot = node;
            return;
        }

        if (treeRoot.data.word > node.data.word) {
            console.log(`Node word (${node.data.word}) lesser than root word (${treeRoot.data.word})`);
            treeRoot.left = this.insertImpl(treeRoot.left, node);
        } else if (treeRoot.data.word < node.data.word ) {
            console.log(`Node word (${node.data.word}) greater than root data (${treeRoot.data.word})`)
            treeRoot.right = this.insertImpl(treeRoot.right, node);
        } else {
            console.log(`Node word (${node.data.word}) already inserted`);
        }

        // this.setTreeRoot = this.balanceTree(treeRoot);

        this.setTreeRoot = treeRoot;

    }
 
    insertImpl(root, node) {

        if (root === null) {
            root = node;
        } else if (root.data.word > node.data.word) {
            console.log(`Node word (${node.data.word}) lesser than root word (${root.data.word})`);
            root.left = this.insertImpl(root.left, node);
        } else if (root.data.word < node.data.word) {
            console.log(`Node word (${node.data.word}) greater than root data (${root.data.word})`)
            root.right = this.insertImpl(root.right, node);
        } else {
            console.log(`Node word (${node.data.word}) already inserted`);
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
        const treeRoot = this.getTreeRoot;

        if (!treeRoot) {
            return 0;
        }

        return 1 + this.getHeight(treeRoot);
    }

    getHeight(node) {

        console.log(node.data.word)

        if (node === null) {
            return -1
        }

        if (node.right === null && node.right === null) {
            return 0;
        }

        if (!node.right) {
            return 1 + this.getHeight(node.left);
        }

        if(!node.left) {
            return 1 + this.getHeight(node.right);
        }

        const rightTotal = this.getHeight(node.right);
        const leftTotal = this.getHeight(node.left);

        console.log({ rightTotal, leftTotal })

        return rightTotal > leftTotal ? rightTotal : leftTotal;
    
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
        return;
    }
}

module.exports = AVL