---
title: "[DS] AVL Tree"
tags: [study, algorithm, cs, leetcode]

date: 2022-06-02
categories: [algorithm]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[DS] AVL Tree
=============

AVL Tree
--------

A balanced BST is a BST that h = O(log N).
AVL Tree (Adelson-Velskii & Landis, 1962) that is named after its 
inventor: Adelson-Velskii and Landis.

### height(v) ###

__height(v)__: The number of edges on the path from vertex v down to 
its deepest leaf. This attribute is saved in each vertex so we can 
access a vertex's height in __O(1)__ without having to recompute it 
every time.

``` js
v.height = -1 (if v is an empty tree)
v.height = max(v.left.height, v.right.height) + 1 (otherwise)

// Balance Factor
v.bf = v.left.height - v.right.height
````

### rebalance ###

AVL Tree needs to check if still balance after modified

``` text
check balance factor of this and its children
  case1: this.rotateRight
  case2: this.left.rotateLeft, this.rotateRight
  case3: this.rotateLeft
  case4: this.right.rotateRight, this.rotateLeft
  this is balanced
```

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *AVLNode) rotate() *AVLNode {
  n.updateHeight()
  left := n.left.getHeight()
  right := n.right.getHeight()
  bf := left - right

  if bf > 1 {
    if n.left.left.getHeight() < n.left.right.getHeight() {
      n.left = n.left.rotateLeft()
    }
    return n.rotateRight()
  } else if bf < -1 {
    if n.right.left.getHeight() > n.right.right.getHeight() {
      n.right = n.right.rotateRight()
    }
    return n.rotateLeft()
  } else {
    return n
  }
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
  // Class AVLNode
  static _rotate(currentNode) {
    currentNode._updateHeight()
    let left = AVLNode._heightHelper(currentNode.left)
    let right = AVLNode._heightHelper(currentNode.right)
    let bf = left - right

    if (bf > 1) {
      if (AVLNode._heightHelper(currentNode.left.left) < AVLNode._heightHelper(currentNode.left.right))
        currentNode.left = AVLNode._rotateLeft(currentNode.left)
      return AVLNode._rotateRight(currentNode)
    } else if (bf < -1) {
      if (AVLNode._heightHelper(currentNode.right.left) > AVLNode._heightHelper(currentNode.right.right))
        currentNode.right = AVLNode._rotateRight(currentNode.right)
      return AVLNode._rotateLeft(currentNode)
    } else {
      return currentNode
    }
  }
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
  static rotate(currentNode: IAVLNode): IAVLNode {
    currentNode!.updateHeight()
    let left = AVLNode.heightHelper(currentNode!.left)
    let right = AVLNode.heightHelper(currentNode!.right)
    let bf = left - right

    if (bf > 1) {
      if (AVLNode.heightHelper(currentNode!.left!.left) < AVLNode.heightHelper(currentNode!.left!.right))
        currentNode!.left = AVLNode.rotateLeft(currentNode!.left)
      return AVLNode.rotateRight(currentNode)
    } else if (bf < -1) {
      if (AVLNode.heightHelper(currentNode!.right!.left) > AVLNode.heightHelper(currentNode!.right!.right))
        currentNode!.right = AVLNode.rotateRight(currentNode!.right)
      return AVLNode.rotateLeft(currentNode)
    } else {
      return currentNode
    }
  }
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### rotate Left/Right ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *AVLNode) rotateLeft() *AVLNode {
  result := n.right
  t := result.left
  n.right = t
  n.height--
  result.left = n
  result.height++
  return result
}

func (n *AVLNode) rotateRight() *AVLNode {
  result := n.left
  t := result.right
  n.left = t
  n.height--
  result.right = n
  result.height++
  return result
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
  // Class AVL
  static _rotateRight(currentNode) {
    let result = currentNode.left
    let t = result.right
    currentNode.left = t
    currentNode.height--
    result.right = currentNode
    result.height++
    return result
  }

  static _rotateLeft(currentNode) {
    let result = currentNode.right
    let t = result.left
    currentNode.right = t
    currentNode.height--
    result.left = currentNode
    result.height++
    return result
  }
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
  static rotateRight(currentNode: IAVLNode): IAVLNode {
    let result = currentNode!.left
    let t = result!.right
    currentNode!.left = t
    currentNode!.height--
    result!.right = currentNode
    result!.height++
    return result
  }

  static rotateLeft(currentNode: IAVLNode): IAVLNode {
    let result = currentNode!.right
    let t = result!.left
    currentNode!.right = t
    currentNode!.height--
    result!.left = currentNode
    result!.height++
    return result
  }
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### insert(v) ###

```text
insert v
rebalance tree
```

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *AVLNode) insert(val int) {
  if n.value > val { n.left = n.left.insertHelper(val) } 
  else { n.right = n.right.insertHelper(val) }
}

func (n *AVLNode) insertHelper(val int) *AVLNode {
  if n == nil { return newAVLNode(val) }

  if n.value > val { n.left = n.left.insertHelper(val) } 
  else { n.right = n.right.insertHelper(val) }

  return n.rotate()
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
  insert(val) {
    if (this.value > val)
      this.left = AVLNode._insertHelper(val, this.left)
    else
      this.right = AVLNode._insertHelper(val, this.right)
  }

  static _insertHelper(val, currentNode) {
    if (currentNode === null)
      return new AVLNode(val)

    if (currentNode.value > val)
        currentNode.left = AVLNode._insertHelper(val, currentNode.left)
    else
        currentNode.right = AVLNode._insertHelper(val, currentNode.right)

    return AVLNode._rotate(currentNode)
  }
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
  public insert(val: number) {
    if (this.value > val)
      this.left = AVLNode.insertHelper(val, this.left)
    else
      this.right = AVLNode.insertHelper(val, this.right)
  }

    static insertHelper(val: number, currentNode: IAVLNode): IAVLNode {
    if (currentNode === null)
      return new AVLNode(val)

    if (currentNode.value > val)
        currentNode.left = AVLNode.insertHelper(val, currentNode.left)
    else
        currentNode.right = AVLNode.insertHelper(val, currentNode.right)

    return AVLNode.rotate(currentNode)
  }
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### remove(v) ###

```text
remove v
rebalance tree
```

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *AVLNode) remove(val int) IBSTNode {
  return n.removeHelper(val)
}

func (n *AVLNode) removeHelper(val int) *AVLNode {
  // remove v: same as BSTNode 
  // ,,,
  return n.rotate()
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
  remove (val) {
    return AVLNode._removeHelper(val, this)
  }

  static _removeHelper(val, currentNode) {
    // remove v: same as BSTNode 
    // ,,,
    return AVLNode._rotate(result)
  }
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
  public remove (val: number): IAVLNode {
    return AVLNode.removeHelper(val, this)
  }

  static removeHelper(val:number, currentNode: IAVLNode): IAVLNode {
    // remove v: same as BSTNode 
    // ,,,
    return AVLNode.rotate(result)
  }
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>



小結
---

[Binary Heap](heap.md) 一些特性適合練習與解釋 Class 中的 private / public / class method.
而 BST / AVL Tree 則很適合 OOP 中的繼承和封裝概念. 

AVL Tree 亦是一種 BST, 所有對 BST 的操作都適用於 AVL Tree.
適合類別界面封裝概念. 操作時無須考慮是由那一種 Tree 實作, 透過類別封裝界面操作即可. 

另一點則是實作上 AVL Tree 中許多函式都可以直接沿用 BST 界面, 
適合用繼承已利程式重複使用與維護.

這篇盡量以各語言中原生或模擬繼承的方式實作 AVL 對 BST 的繼承.
而限於 Golang 的特性, 繼承和 Overriding 會讓程式變得過於複雜, 
反倒失去 Golang keep in simple 哲學, 僅用 interface 來封裝 AVL Tree Node.



See Also
--------

### AVL ###

-   [Binary Search Tree, AVL Tree - VisuAlgo](https://visualgo.net/en/bst)

### Inheritance 繼承 ###

-   Golang
    -   [[Golang] 程式設計教學：用介面 (Interface) 實踐繼承和多型 | 開源技術教學網](https://opensourcedoc.com/golang-programming/interface/)
    -   [秒懂 go 语言的继承 | Go 技术论坛](https://learnku.com/articles/32295)  
    -   [Golang OOP、繼承、組合、介面_Go語言中文網 - MdEditor](https://www.gushiciku.cn/pl/2txm/zh-tw)
