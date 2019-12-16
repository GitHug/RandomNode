class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.size = 1
  }

  getRandomNode() {
    const leftSize = this.left ? this.left.size : 0
    const index = this._getRandomInt(this.size)

    if (index < leftSize) {
      return this.left.getRandomNode()
    } else if (index === leftSize) {
      return this
    } else {
      return this.right.getRandomNode()
    }
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * max)
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

const tree = new TreeNode(7)
tree.insertInOrder(5)
tree.insertInOrder(6)
tree.insertInOrder(4)
tree.insertInOrder(9)
tree.insertInOrder(8)

tree.getRandomNode()
