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
            console.log(`Node data (${node.data.dictionary.word}) inserted to root`)
            this.setTreeRoot = node;
            return;
        } else {
            this.insertImpl(treeRoot, node)
        }
    }

    insertImpl(root, node) {
        if (root === null) {
            console.log(`Node data (${node.data.dictionary.word}) inserted to subtree root`)
            root = node;
        } else if (root.data.dictionary.word > node.data.dictionary.word) {
            console.log(`Node data lesser than root data (left) ${node.data.dictionary.word}`);
            root.left = this.insertImpl(root.left, node);
        } else if (root.data.dictionary.word < node.data.dictionary.word) {
            console.log(`Node data greater than root data (right) ${node.data.dictionary.word}`);
            root.right = this.insertImpl(root.right, node);
        } else {
            console.log(`Node word (${node.data.word}) already inserted`);
        }

        return root;
    }

    rightRotate(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    leftRotate(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    rotate(root) {
        if (root.balanceFactor() > 1) {
            if (getBalanceFactor(root.left) === -1) leftRotate(root.left);
            rightRotate(root);
        }
        else if (root.balanceFactor() < -1) {
            if (getBalanceFactor(root.right) === 1) rightRotate(root.right);
            leftRotate(root);
        }
    }

    getBalanceFactor(root) {
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    getHeight(root) {
        let height = 0;
        if (root === null) {
            height = -1;
        } else {
            height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }
        return height;
    }

    balanceFactor() {
    }

    readInOrder() {
        this.readInOrderImpl(this.root)
    }

    readInOrderImpl(root) {
        if (root) {
            this.readInOrderImpl(root.left);
            console.log({ Word: root.data.dictionary.word });
            this.readInOrderImpl(root.right);
        }
        return;
    }
}

module.exports = AVL