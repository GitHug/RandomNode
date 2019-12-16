class MyBinaryTree {
  constructor() {
    this.root = null
  }

  size () {
    return this.root ? this.root.size : 0
  }

  getRandomNode() {
    if (!this.root) return null

    const i = this._getRandomInt(this.size())
    return this.root.getIthNode(i)
  }

  insertInOrder(value) {
    if (!this.root) this.root = new TreeNode(value)
    else this.root.insertInOrder(value)
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.size = 1
  }

  getIthNode(i) {
    const leftSize = this.left ? this.left.size : 0

    if (i < leftSize) {
      return this.left.getIthNode(i)
    } else if (i === leftSize) {
      return this
    } else {
      return this.right.getIthNode(i - (leftSize + 1))
    }
  }

  insertInOrder(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new TreeNode(value)
      else this.left.insertInOrder(value)
    } else {
      if (!this.right) this.right = new TreeNode(value)
      else this.right.insertInOrder(value)
    }
    this.size++
  }

  find (value) {
    if (value === this.value) return this
    else if (value <= this.value) return this.left ? this.left.find(value) : null
    else return this.right ? this.right.find(value) : null
  }
}

const tree = new MyBinaryTree()
tree.insertInOrder(7)
tree.insertInOrder(5)
tree.insertInOrder(6)
tree.insertInOrder(4)
tree.insertInOrder(9)
tree.insertInOrder(8)

tree.getRandomNode()
