---
title: "Binary Search Tree"
tags: [study, algorithm, cs, leetcode]

date: 2022-05-30
categories: [algorithm]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Binary Search Tree
==================

Binary Search Tree 基本概念是每一個節點最多有左右各一個子節點, 
左子節點的值小於自身節點的值, 右子節點則大於本身.

> A Binary Search Tree (BST) is a binary tree in which each vertex 
> has only up to 2 children that satisfies BST property: 
> All vertices in the left subtree of a vertex must hold a value 
> smaller than its own and all vertices in the right subtree of a 
> vertex must hold a value larger than its own.
>
> [_Binary Search Tree, AVL Tree - VisuAlgo_](https://visualgo.net/en/bst?slide=1)

只要符合上述定義, 無論樹長得如何, 都符合 BST 的規範.  
BST 在搜尋資料上有 O(log N) 複雜度優勢, 是很常使用的基礎資料結構.



Data Struct
-----------

一般用資料結構來表示二元樹節點有兩種方式:

### w/ parent ###

```c
struct node {
    int value;
    node *parent;
    node *l_child;
    node *r_child;
}
```

### w/o parent ###

```c
struct node {
    int value;
    node *l_child;
    node *r_child;
}
```

兩者的差別至在於節點定義中是否包含指向父節點的屬性, 節點間的連結是單向還是雙向關係.

包含父節點的資料結構雙向連結的屬性, 從二元樹中任一節點巡訪, 皆可完整還原完整二元樹的資料.
若有需要, 可以從任何一個節點開始尋訪, 無須每一次都必須從 Root 開始巡訪. 
但當修改二元樹中的資料時, 需要注意維護節點中的連結關係, 尤其是父節點的連結.

而不包含父節點的結構中, API 呼叫基本上都必須從 Root 開始巡訪. 
但相對修改資料時, 只需要處理子節點的單向連結關係, 程式結構都比較簡單.

兩者各有優缺點, 依實務需求決定. 本篇選用不包括父連結的結構. 



ADT Basic Operate
-----------------

BST (and especially balanced BST like AVL Tree) is an efficient 
data structure to implement a certain kind of Table (or Map) 
Abstract Data Type (ADT).

A Table ADT must support at least the following three operations 
as efficient as possible:

-   Search(v) — determine if v exists in the ADT or not,
-   Insert(v) — insert v into the ADT,
-   Remove(v) — remove v from the ADT.

### Search(v) ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) search(v int) bool {
    if n == nil { return false }
    if n.value == v { return true }
    if n.value > v { return n.left.search(v)} 
    else { return n.right.search(v)}
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### Insert(v) ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) insert(v int) {
    if n.value <= 0 {
        n.value = v
        return
    }

    if n.value > v {
        if n.left != nil { n.left.insert(v) } 
        else { n.left = &Node{v, nil, nil} }
    } else {
        if n.right != nil { n.right.insert(v) } 
        else { n.right = &Node{v, nil, nil} }
    }
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### Remove(v) ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) doRemove(v int) *Node {
    if n == nil { return nil }
    if n.value > v {
        n.left = n.left.doRemove(v)
        return n
    }
    if n.value < v {
        n.right = n.right.doRemove(v)
        return n
    }
    // n.value = v
    if n.left == nil && n.right == nil { return nil }
    if n.left == nil { return n.right }
    if n.right == nil { return n.left }

    successor := n.right.findMaxNode()
    n.value, successor.value = successor.value, n.value
    n.right = n.right.doRemove(v)
    return n
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>



Find & Travsal
--------------

### Min / Max ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) findMin() int {
    if n == nil { return -1 }
    if n.left == nil { return n.value }
    return n.left.findMin()
}

func (n *Node) findMax() int {
    if n == nil { return -1 }
    if n.right == nil { return n.value }
    return n.right.findMax()
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### Predecessor ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) findPredecessor(v int) int {
    predecessor := -1
    for n != nil && n.value != v {
        if n.value < v {
            predecessor = n.value
            n = n.right
        } else {
            n = n.left
        }
    }

    if n == nil { return -1 }
    if n.left != nil { return n.left.findMax() } 
    else { return predecessor }
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### Successor ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) findSuccessor(v int) int {
    successor := -1
    for n != nil && n.value != v {
        if n.value > v {
            successor = n.value
            n = n.left
        } else {
            n = n.right
        }
    }

    if n == nil { return -1 }
    if n.right != nil { return n.right.findMin() } 
    else { return successor }
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### Inorder Traversal ###

An Inorder Traversal of this BST to obtain a list of sorted 
integers inside this BST.

Inorder Traversal is a recursive method whereby we visit 
the left subtree first, exhausts all items in the left subtree, 
visit the current root, before exploring the right subtree and 
all items in the right subtree. 

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (n *Node) inorder(nums *[]int) {
    if n == nil { return }
    n.left.inorder(nums)
    *nums = append(*nums, n.value)
    n.right.inorder(nums)
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>


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

### rotate Left/Right ###

<Tabs>
  <TabItem value="go" label="Go" default>

``` go
func (avl *AVLNode) rotateLeft() *AVLNode {
    result := avl.right
    t := result.left
    avl.right = t
    avl.height--
    result.left = avl
    result.height++
    return result
}

func (avl *AVLNode) rotateRight() *AVLNode {
    result := avl.left
    t := result.right
    avl.left = t
    avl.height--
    result.right = avl
    result.height++
    return result
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
```
  </TabItem>
  <TabItem value="python" label="Python">

``` python
```
  </TabItem>
</Tabs>

### insert() ###

```text
insert v
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
func (avl *AVLNode) insert(v int) {
    if avl.value <= 0 {
        avl.value = v
        return
    }
    if avl.value > v { avl.left = avl.left.doInsert(v) } 
    else { avl.right = avl.right.doInsert(v) }
}

func (avl *AVLNode) doInsert(v int) *AVLNode {
    if avl == nil { return newAVLNode(v) }
    if avl.value > v { avl.left = avl.left.doInsert(v) } 
    else { avl.right = avl.right.doInsert(v) }
    return avl.rotateInsert(v)
}

func (avl *AVLNode) rotateInsert(v int) *AVLNode {
    avl.updateHeight()
    bf := avl.balanceFactor()

    if bf > 1 {
        if v > avl.left.value { avl.left = avl.left.rotateLeft() }
        return avl.rotateRight()
    } else if bf < -1 {
        if v < avl.right.value { avl.right = avl.right.rotateRight() }
        return avl.rotateLeft()
    } else {
        return avl
    }
}
```
  </TabItem>
  <TabItem value="js" label="JavaScript">

``` js
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

``` ts
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

這邊以各語言中原生或模擬繼承的方式實作 AVL 對 BST 的繼承.

而限於 Golang 的特性, 繼承和 Overriding 會讓程式變得過於複雜, 
反倒失去 Golang keep in simple 哲學, 僅用 interface 來封裝 AVL Tree Node.



See Also
--------

### BST ###

-   [Binary Search Tree, AVL Tree - VisuAlgo](https://visualgo.net/en/bst)
-   [Binary Search Trees in Go. Introduction | by Puneeth S | Level Up Coding](https://levelup.gitconnected.com/58f9126eb36b)

### Inheritance 繼承 ###

-   Golang
    -   [[Golang] 程式設計教學：用介面 (Interface) 實踐繼承和多型 | 開源技術教學網](https://opensourcedoc.com/golang-programming/interface/)
    -   [秒懂 go 语言的继承 | Go 技术论坛](https://learnku.com/articles/32295)  
    -   [Golang OOP、繼承、組合、介面_Go語言中文網 - MdEditor](https://www.gushiciku.cn/pl/2txm/zh-tw)
