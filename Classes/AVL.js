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
        } else {
            this.insertImpl(treeRoot, node)
        }
    }

    insertImpl(root, node) {
        const rootData = !!root ? root.data.dictionary.word : null;
        const nodeData = node.data.dictionary.word;

        if (root === null) {
            root = node;
            console.log(`Node ${nodeData} inserted`);
        }

        else if (rootData > nodeData) {
            console.log(`Node ${nodeData} lesser than root ${rootData} (go left)`);
            root.left = this.insertImpl(root.left, node);

            if (root.left !== null && this.getBalanceFactor(root) > 1) {
                console.log('Start balancing')
                // if (node.data > root.left.data) {
                //     root = this.rotationLL(root);
                // } else {
                //     console.log('1')
                //     root = this.rotationLR(root);
                // }
            }
        }

        else if (rootData < nodeData) {
            console.log(`Node ${nodeData} greater than root ${rootData} (go right)`);
            root.right = this.insertImpl(root.right, node);
            // if (root.right !== null && this.getBalanceFactor(root) < -1) {
            //     if (node.data > root.right.data) {
            //         root = this.rotationRR(root);
            //     } else {
            //         root = this.rotationRL(root);
            //     }
            // }
        }

        else {
            console.log('Node data already inserted');
        }

        return root;
    }

    rotationLL(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    rotationRR(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    rotationLR(node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
     }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    getBalanceFactor(root) {
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    getHeight(root) {
        let height = 0;
        if (root === null || typeof root == "undefined") {
            height = -1;
        } else {
            height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }
        return height;
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
        return
    }

    findDefinitionsByWord (word) {
        return this.findDefinitionImpl(this.root,word);
    }

    findDefinitionImpl(root,word) {
        if(root){
            if(root.data.dictionary.word == word)
                return root.data.dictionary.definitions;
            else if(root.data.dictionary.word < word)
                this.findDefinitionImpl(root.left, word);
            else if(root.data.dictionary.word > word)
                this.findDefinitionImpl(root.right, word);
        }
        else {
            return null
        }
    }
}

module.exports = AVL