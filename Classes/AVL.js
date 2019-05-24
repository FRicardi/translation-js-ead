const AVLNode = require('./AVLNode')
/**
 * Implementation of a balanced binary tree by the AVL strategy
 */
class AVL {

    constructor() {
        this.root = null;
        this.text = ''
    }

    get getText() {
        this.stringAVLInOrder()
        return this.text;
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
            this.setTreeRoot = node;
            return;
        } else {
            this.insertImpl(treeRoot, node)
        }
    }

    insertImpl(root, node) {
        const nodeData = node.data.dictionary.word;
        const rootData = !!root ? root.data.dictionary.word : null;
        
        if (root === null) {
            root = node;
        }
        
        else if (rootData > nodeData) {
            root.left = this.insertImpl(root.left, node);

            if (root.left !== null && this.getBalanceFactor(root) > 1) {
                if (node.data.dictionary.word > root.left.data.dictionary.word) {
                    root = this.leftRotation(root);
                }
             }
        }

        else if (rootData < nodeData) {
            root.right = this.insertImpl(root.right, node);

            if (root.right !== null && this.getBalanceFactor(root) < -1) {
                if (node.data.dictionary.word > root.right.data.dictionary.word) {
                    root = this.rightRotation(root);
                } 
             }
        }

        else {
            console.log('Node data already inserted');
        }

        return root;
    }
    
    leftRotation(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
     }
     
     rightRotation(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
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

    stringAVLInOrder() {
        this.text = ''
        this.stringAVLInOrderImpl(this.root)
    }

    stringAVLInOrderImpl(root) {
        if (root) {
            this.stringAVLInOrderImpl(root.left);
            let listText = ''
            for (var i = 0; i < root.data.dictionary.definitions.getListSize; i ++) {
                var def = root.data.dictionary.definitions.getAt(i)
                listText += `#${def.data}`
            }
            this.text += `${root.data.dictionary.word}${listText}\n`
            this.stringAVLInOrderImpl(root.right);
        }
        return
    }

    findDefinitionsByWord (word) {
        return new Promise((resolve, reject) => {
            this.findDefinitionImpl(this.root, word, (translations) => {
                resolve(translations)
            })
        })
    }

    findDefinitionImpl(root, word, callback) {
        if(root){
            if(root.data.dictionary.word === word){
                callback(root.data.dictionary.definitions)
            }
            else if(root.data.dictionary.word > word)
                this.findDefinitionImpl(root.left, word, callback);
            else if(root.data.dictionary.word < word)
                this.findDefinitionImpl(root.right, word, callback);
        }
        else {
            callback(null)
        }
    }
}

module.exports = AVL