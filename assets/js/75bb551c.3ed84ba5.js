"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[8273],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=l,v=p["".concat(i,".").concat(f)]||p[f]||c[f]||a;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),l=t(4334),a="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3117),l=t(7294),a=t(4334),o=t(2389),s=t(7392),i=t(7094),u=t(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,f=e.defaultValue,v=e.values,m=e.groupId,h=e.className,T=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:T.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,s.l)(g,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===f?f:null!=(n=null!=f?f:null==(t=T.find((function(e){return e.props.default})))?void 0:t.props.value)?n:T[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),S=k.tabGroupChoices,y=k.setTabGroupChoices,B=(0,l.useState)(b),x=B[0],_=B[1],I=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=S[m];null!=w&&w!==x&&g.some((function(e){return e.value===w}))&&_(w)}var Z=function(e){var n=e.currentTarget,t=I.indexOf(n),r=g[t].value;r!==x&&(O(n),_(r),null!=m&&y(m,String(r)))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,l=I.indexOf(e.currentTarget)+1;t=null!=(r=I[l])?r:I[0];break;case"ArrowLeft":var a,o=I.indexOf(e.currentTarget)-1;t=null!=(a=I[o])?a:I[I.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(T.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},T.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function f(e){var n=(0,o.Z)();return l.createElement(p,(0,r.Z)({key:String(n)},e))}},4637:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r=t(3117),l=t(102),a=(t(7294),t(3905)),o=t(5488),s=t(5162),i=["components"],u={title:"[DS] Binary Search Tree",description:"[DS] Binary Search Tree",tags:["Algorithm","CS","Leetcode"],date:new Date("2022-05-29T16:00:00.000Z"),image:"https://i.imgur.com/mErPwqL.png"},d="[DS] Binary Search Tree",c={unversionedId:"bootcamp/algo/bst",id:"bootcamp/algo/bst",title:"[DS] Binary Search Tree",description:"[DS] Binary Search Tree",source:"@site/docs/bootcamp/algo/bst.md",sourceDirName:"bootcamp/algo",slug:"/bootcamp/algo/bst",permalink:"/moco/docs/bootcamp/algo/bst",draft:!1,tags:[{label:"Algorithm",permalink:"/moco/docs/tags/algorithm"},{label:"CS",permalink:"/moco/docs/tags/cs"},{label:"Leetcode",permalink:"/moco/docs/tags/leetcode"}],version:"current",frontMatter:{title:"[DS] Binary Search Tree",description:"[DS] Binary Search Tree",tags:["Algorithm","CS","Leetcode"],date:"2022-05-29T16:00:00.000Z",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"tutorialSidebar",previous:{title:"[DS] AVL Tree",permalink:"/moco/docs/bootcamp/algo/avl"},next:{title:"[DS] Graph",permalink:"/moco/docs/bootcamp/algo/graph"}},p={},f=[{value:"Data Struct",id:"data-struct",level:2},{value:"w/ parent",id:"w-parent",level:3},{value:"w/o parent",id:"wo-parent",level:3},{value:"ADT Basic Operate",id:"adt-basic-operate",level:2},{value:"Search(v)",id:"searchv",level:3},{value:"Insert(v)",id:"insertv",level:3},{value:"Remove(v)",id:"removev",level:3},{value:"Find &amp; Travsal",id:"find--travsal",level:2},{value:"Min / Max",id:"min--max",level:3},{value:"Predecessor",id:"predecessor",level:3},{value:"Successor",id:"successor",level:3},{value:"Traversal",id:"traversal",level:2},{value:"Deep First Traversal",id:"deep-first-traversal",level:3},{value:"Inorder",id:"inorder",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"See Also",id:"see-also",level:2}],v={toc:f};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ds-binary-search-tree"},"[DS]"," Binary Search Tree"),(0,a.kt)("p",null,"Binary Search Tree \u57fa\u672c\u6982\u5ff5\u662f\u6bcf\u4e00\u500b\u7bc0\u9ede\u6700\u591a\u6709\u5de6\u53f3\u5404\u4e00\u500b\u5b50\u7bc0\u9ede,\n\u5de6\u5b50\u7bc0\u9ede\u7684\u503c\u5c0f\u65bc\u81ea\u8eab\u7bc0\u9ede\u7684\u503c, \u53f3\u5b50\u7bc0\u9ede\u5247\u5927\u65bc\u672c\u8eab."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A Binary Search Tree (BST) is a binary tree in which each vertex\nhas only up to 2 children that satisfies BST property:\nAll vertices in the left subtree of a vertex must hold a value\nsmaller than its own and all vertices in the right subtree of a\nvertex must hold a value larger than its own."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://visualgo.net/en/bst?slide=1"},(0,a.kt)("em",{parentName:"a"},"Binary Search Tree, AVL Tree - VisuAlgo")))),(0,a.kt)("p",null,"\u53ea\u8981\u7b26\u5408\u4e0a\u8ff0\u5b9a\u7fa9, \u7121\u8ad6\u6a39\u9577\u5f97\u5982\u4f55, \u90fd\u7b26\u5408 BST \u7684\u898f\u7bc4.",(0,a.kt)("br",{parentName:"p"}),"\n","BST \u5728\u641c\u5c0b\u8cc7\u6599\u4e0a\u6709 O(log N) \u8907\u96dc\u5ea6\u512a\u52e2, \u662f\u5f88\u5e38\u4f7f\u7528\u7684\u57fa\u790e\u8cc7\u6599\u7d50\u69cb."),(0,a.kt)("h2",{id:"data-struct"},"Data Struct"),(0,a.kt)("p",null,"\u4e00\u822c\u7528\u8cc7\u6599\u7d50\u69cb\u4f86\u8868\u793a\u4e8c\u5143\u6a39\u7bc0\u9ede\u6709\u5169\u7a2e\u65b9\u5f0f:"),(0,a.kt)("h3",{id:"w-parent"},"w/ parent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct node {\n    int value;\n    node *parent;\n    node *l_child;\n    node *r_child;\n}\n")),(0,a.kt)("h3",{id:"wo-parent"},"w/o parent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct node {\n    int value;\n    node *l_child;\n    node *r_child;\n}\n")),(0,a.kt)("p",null,"\u5169\u8005\u7684\u5dee\u5225\u81f3\u5728\u65bc\u7bc0\u9ede\u5b9a\u7fa9\u4e2d\u662f\u5426\u5305\u542b\u6307\u5411\u7236\u7bc0\u9ede\u7684\u5c6c\u6027, \u7bc0\u9ede\u9593\u7684\u9023\u7d50\u662f\u55ae\u5411\u9084\u662f\u96d9\u5411\u95dc\u4fc2."),(0,a.kt)("p",null,"\u5305\u542b\u7236\u7bc0\u9ede\u7684\u8cc7\u6599\u7d50\u69cb\u96d9\u5411\u9023\u7d50\u7684\u5c6c\u6027, \u5f9e\u4e8c\u5143\u6a39\u4e2d\u4efb\u4e00\u7bc0\u9ede\u5de1\u8a2a, \u7686\u53ef\u5b8c\u6574\u9084\u539f\u5b8c\u6574\u4e8c\u5143\u6a39\u7684\u8cc7\u6599.\n\u82e5\u6709\u9700\u8981, \u53ef\u4ee5\u5f9e\u4efb\u4f55\u4e00\u500b\u7bc0\u9ede\u958b\u59cb\u5c0b\u8a2a, \u7121\u9808\u6bcf\u4e00\u6b21\u90fd\u5fc5\u9808\u5f9e Root \u958b\u59cb\u5de1\u8a2a.\n\u4f46\u7576\u4fee\u6539\u4e8c\u5143\u6a39\u4e2d\u7684\u8cc7\u6599\u6642, \u9700\u8981\u6ce8\u610f\u7dad\u8b77\u7bc0\u9ede\u4e2d\u7684\u9023\u7d50\u95dc\u4fc2, \u5c24\u5176\u662f\u7236\u7bc0\u9ede\u7684\u9023\u7d50."),(0,a.kt)("p",null,"\u800c\u4e0d\u5305\u542b\u7236\u7bc0\u9ede\u7684\u7d50\u69cb\u4e2d, API \u547c\u53eb\u57fa\u672c\u4e0a\u90fd\u5fc5\u9808\u5f9e Root \u958b\u59cb\u5de1\u8a2a.\n\u4f46\u76f8\u5c0d\u4fee\u6539\u8cc7\u6599\u6642, \u53ea\u9700\u8981\u8655\u7406\u5b50\u7bc0\u9ede\u7684\u55ae\u5411\u9023\u7d50\u95dc\u4fc2, \u7a0b\u5f0f\u7d50\u69cb\u90fd\u6bd4\u8f03\u7c21\u55ae."),(0,a.kt)("p",null,"\u5169\u8005\u5404\u6709\u512a\u7f3a\u9ede, \u4f9d\u5be6\u52d9\u9700\u6c42\u6c7a\u5b9a. \u672c\u7bc7\u9078\u7528\u4e0d\u5305\u62ec\u7236\u9023\u7d50\u7684\u7d50\u69cb. "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type IBSTNode interface {\n  search(int) bool\n  insert(int)\n  remove(int) IBSTNode\n  findMin() int\n  findMax() int\n  findPredecessor(int) int\n  findSuccessor(int) int\n  inorder(*[]int)\n}\n\ntype BST struct {\n  root IBSTNode\n}\n\ntype BSTNode struct {\n  value int\n  left  *BSTNode\n  right *BSTNode\n}\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class BST {\n  constructor(data) {\n    this.root = null\n    if (typeof(data) === 'number') {\n      this.root = new BSTNode(data)\n    } else if (Array.isArray(data)) {\n      this.root = new BSTNode(data[0])\n      for (let i = 1; i < data.length; i++)\n        this.insert(data[i])\n    }\n  }\n}\n\nclass BSTNode {\n  constructor(data) {\n    this.value = data\n    this.left = null\n    this.right = null\n  }\n}\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class BST {\n  root: BSTNode | null\n\n  constructor(data: number | Array<number> | null) {\n    this.root = null\n    if (typeof(data) === 'number') {\n      this.root = new BSTNode(data)\n    } else if (Array.isArray(data)) {\n      this.root = new BSTNode(data[0])\n      for (let i = 1; i < data.length; i++)\n        this.insert(data[i])\n    }\n  }\n}\n\ntype IBSTNode = BSTNode | null\nexport class BSTNode {\n  value: number\n  left: IBSTNode\n  right: IBSTNode\n\n  constructor(data: number) {\n    this.value = data\n    this.left = null\n    this.right = null\n  }\n}\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class BST:\n    def __init__(self, data):\n        self._root = None\n        if isinstance(data, int):\n            self._root = BSTNode(data)\n        elif isinstance(data, list):\n            self._root = BSTNode(data[0])\n            for i in range(1, len(data), 1):\n                self.insert(data[i])\n\nclass BSTNode:\n    def __init__(self, data):\n        self.value = data\n        self.left = None\n        self.right = None\n")))),(0,a.kt)("h2",{id:"adt-basic-operate"},"ADT Basic Operate"),(0,a.kt)("p",null,"BST (and especially balanced BST like AVL Tree) is an efficient\ndata structure to implement a certain kind of Table (or Map)\nAbstract Data Type (ADT)."),(0,a.kt)("p",null,"A Table ADT must support at least the following three operations\nas efficient as possible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search(v) \u2014 determine if v exists in the ADT or not,"),(0,a.kt)("li",{parentName:"ul"},"Insert(v) \u2014 insert v into the ADT,"),(0,a.kt)("li",{parentName:"ul"},"Remove(v) \u2014 remove v from the ADT.")),(0,a.kt)("h3",{id:"searchv"},"Search(v)"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (n *BSTNode) search(val int) bool {\n  if n == nil { return false }\n  if n.value > val {\n    return n.left.search(val)\n  } else if n.value < val {\n    return n.right.search(val)\n  } else {\n    return true\n  }\n}\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  // class BSTNode\n  search(val) {\n    if (this.value === val)\n      return true\n    if (this.value > val)\n      return this.left === null ? false : this.left.search(val)\n    else\n      return this.right === null ? false : this.right.search(val)\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  // class BSTNode\n  public search(val: number): boolean {\n    if (this.value === val)\n      return true\n    if (this.value > val)\n      return this.left === null ? false : this.left.search(val)\n    else\n      return this.right === null ? false : this.right.search(val)\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    # class BSTNode\n    def search(self, val):\n        if self.value == val:\n            return True\n        if val < self.value:\n            return False if self.left == None else self.left.search(val)\n        else:\n            return False if self.right == None else self.right.search(val)\n\n")))),(0,a.kt)("h3",{id:"insertv"},"Insert(v)"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (bst *BST) Insert(val int) {\n  if bst.root == nil { return }\n  bst.root = bst.root.insert(val)\n}\n\nfunc (n *BSTNode) insert(val int) IBSTNode {\n  return n.insertHelper(val)\n}\n\nfunc (n *BSTNode) insertHelper(val int) *BSTNode {\n  if n == nil { return newBSTNode(val) }\n\n  if val < n.value { n.left = n.left.insertHelper(val) } \n  else { n.right = n.right.insertHelper(val) }\n  return n\n}\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  // class BST\n  insert(val) {\n    if (this.root === null) return\n    this.root = this.root.insert(val)\n  }\n\n  // class BSTNode\n  insert(val) {\n    return BSTNode._insertHelper(val, this)\n  }\n\n  static _insertHelper(val, node) {\n    if (node === null) return new BSTNode(val)\n\n    if (val < node.value)\n      node.left = BSTNode._insertHelper(val, node.left)\n    else\n      node.right = BSTNode._insertHelper(val, node.right)\n    return node\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  // class BST\n  insert(val: number) {\n    if (this.root === null) return\n    this.root = this.root.insert(val)\n  }\n\n  // class BSTNode\n  public insert(val: number): IBSTNode {\n    return BSTNode.insertHelper(val, this)\n  }\n\n  static insertHelper(val: number, node: IBSTNode): IBSTNode {\n    if (node === null) return new BSTNode(val)\n\n    if (val < node.value)\n      node.left = BSTNode.insertHelper(val, node.left)\n    else\n      node.right = BSTNode.insertHelper(val, node.right)\n    return node\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    # class BST\n    def insert(self, val):\n        if self._root is None:\n            self._root = BSTNode(val)\n        self._root = self._root.insert(val)\n\n    # class BSTNode\n    def insert(self, val):\n        return BSTNode.insert_helper(val, self)\n\n    @classmethod\n    def insert_helper(cls, val, node):\n        if node == None:\n            return BSTNode(val)\n\n        if val < node.value:\n            node.left = BSTNode.insert_helper(val, node.left)\n        else:\n            node.right = BSTNode.insert_helper(val, node.right)\n        return node \n")))),(0,a.kt)("h3",{id:"removev"},"Remove(v)"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (bst *BST) Remove(val int) {\n  if bst.root == nil { return }\n  bst.root = bst.root.remove(val)\n}\n\nfunc (n *BSTNode) remove(val int) IBSTNode {\n  return n.removeHelper(val)\n}\n\nfunc (n *BSTNode) removeHelper(val int) *BSTNode {\n  if n == nil { return nil }\n\n  if n.value > val {\n    n.left = n.left.removeHelper(val)\n  } else if n.value < val {\n    n.right = n.right.removeHelper(val)\n  } else {\n    if n.left != nil && n.right != nil {\n      successor := n.right.findMin()\n      n.value = successor\n      n.right = n.right.removeHelper(successor)\n    } else if n.left != nil {\n      n = n.left\n    } else if n.right != nil {\n      n = n.right\n    } else {\n      return nil\n    }\n  }\n  return n\n}\n\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  // class BST\n  remove(val) {\n    if (this.root === null) return\n    this.root = this.root.remove(val)\n  }\n\n  // class BSTNode\n  remove(val) {\n    return BSTNode._removeHelper(val, this)\n  }\n\n  static _removeHelper(val, node) {\n    if (node === null) return null\n\n    if (val < node.value) {\n      node.left = BSTNode._removeHelper(val, node.left)\n    } else if (node.value < val) {\n      node.right = BSTNode._removeHelper(val, node.right)\n    } else {\n      if ((node.left === null) && (node.right === null))\n        return null\n      else if (node.left === null)\n        result = node.right\n      else if (node.right === null)\n        result = node.left\n      else {\n        let successor = node.right.findMin()\n        node.value = successor\n        node.right = BSTNode._removeHelper(successor, node.right)\n      }\n    }\n    return node\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  // class BST\n  remove(val: number) {\n    if (this.root === null) return\n    this.root = this.root.remove(val)\n  }\n\n  // class BSTNode\n  public remove(val: number): IBSTNode {\n    return BSTNode.removeHelper(val, this)\n  }\n\n  static removeHelper(val: number, node: IBSTNode): IBSTNode {\n    if (node === null)\n      return null\n\n    if (val < node.value) {\n      node.left = BSTNode.removeHelper(val, node.left)\n    } else if (node.value < val) {\n      node.right = BSTNode.removeHelper(val, node.right)\n    } else {\n      if ((node.left === null) && (node.right === null))\n        return null\n      else if (node.left === null)\n        node = node.right\n      else if (node.right === null)\n        node = node.left\n      else {\n        let successor = node.right.findMin()\n        node.value = successor\n        node.right = BSTNode.removeHelper(successor, node.right)\n      }\n    }\n    return node\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    # class BST\n    def remove(self, val):\n        if self._root is None:\n            return\n        self._root = self._root.remove(val)\n\n    # class BSTNode\n    def remove(self, val):\n        return BSTNode.remove_helper(val, self)\n\n    @classmethod\n    def remove_helper(cls, val, node):\n        if node == None:\n            return None\n\n        if val < node.value:\n            node.left = BSTNode.remove_helper(val, node.left)\n        elif node.value < val:\n            node.right = BSTNode.remove_helper(val, node.right)\n        else:\n            if node.left == None and node.right == None:\n                return None\n            elif node.left == None:\n                node = node.right\n            elif node.right == None:\n                node = node.left\n            else:\n                successor = node.right.find_min()\n                node.value = successor\n                node.right = BSTNode.remove_helper(successor, node.right)\n        return node\n")))),(0,a.kt)("h2",{id:"find--travsal"},"Find & Travsal"),(0,a.kt)("h3",{id:"min--max"},"Min / Max"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (n *BSTNode) findMin() int {\n  if n.left == nil { return n.value } \n  else { return n.left.findMin() }\n}\n\nfunc (n *BSTNode) findMax() int {\n  if n.right == nil { return n.value } \n  else { return n.right.findMax() }\n}\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  findMin() {\n    return this.left === null ?  this.value : this.left.findMin()\n  }\n\n  findMax() {\n    return this.right === null ? this.value : this.right.findMax()\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  public findMin(): number {\n    return this.left === null ?  this.value : this.left.findMin()\n  }\n\n  public findMax(): number {\n    return this.right === null ? this.value : this.right.findMax()\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    def find_min(self):\n        return self.value if self.left == None else self.left.find_min()\n\n    def find_max(self):\n        return self.value if self.right == None else self.right.find_max()-\n")))),(0,a.kt)("h3",{id:"predecessor"},"Predecessor"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (n *BSTNode) findPredecessor(val int) int {\n  predecessor := NOTFOUND\n  node := n\n  for node != nil && node.value != val {\n    if node.value < val {\n      predecessor = node.value\n      node = node.right\n    } else { node = node.left }\n  }\n  if node == nil { return NOTFOUND }\n  if node.left != nil { return node.left.findMax() } \n  else { return predecessor }\n}\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  findPredecessor(val) {\n    let predecessor = NOT_FOUND\n    let node = this\n    while ((node !== null) && (node.value !== val)) {\n      if (node.value < val) {\n        predecessor = node.value\n        node = node.right\n      } else \n        node = node.left\n    }\n    if (node === null)\n      return NOT_FOUND\n    if (node.left !== null)\n      return node.left.findMax()\n    else\n      return predecessor\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  public findPredecessor(val: number): number{\n    return BSTNode.findPredecessor(val, this)\n  }\n\n  static findPredecessor(val: number, currentNode: IBSTNode): number {\n    let predecessor = NOT_FOUND\n    let node = currentNode\n    while ((node !== null) && (node.value !== val)) {\n      if (node.value < val) {\n        predecessor = node.value\n        node = node.right\n      } else {\n        node = node.left\n      }\n    }\n\n    if (node === null)\n      return NOT_FOUND\n    if (node.left !== null)\n      return node.left.findMax()\n    else\n      return predecessor\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    def find_predecessor(self, val):\n        predecessor = NOT_FOUND\n        node = self\n        while node != None and node.value != val:\n            if node.value < val:\n                predecessor = node.value\n                node = node.right\n            else:\n                node = node.left\n\n        if node == None:\n            return NOT_FOUND\n        if node.left != None:\n            return node.left.find_max()\n        else:\n            return predecessor\n")))),(0,a.kt)("h3",{id:"successor"},"Successor"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (n *BSTNode) findSuccessor(val int) int {\n  successor := NOTFOUND\n  node := n\n  for node != nil && node.value != val {\n    if node.value > val {\n      successor = node.value\n      node = node.left\n    } else { node = node.right }\n  }\n  if node == nil { return NOTFOUND }\n  if node.right != nil { return node.right.findMin() } \n  else { return successor }\n}\n\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  findSuccessor(val) {\n    let successor = NOT_FOUND\n    let node = this\n    while ((node !== null) && (node.value !== val)) {\n      if (node.value > val) {\n        successor = node.value\n        node = node.left\n      } else \n        node = node.right\n    }\n    if (node === null)\n      return NOT_FOUND\n    if (node.right !== null)\n      return node.right.findMin()\n    else\n      return successor\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  public findSuccessor(val: number): number{\n    return BSTNode.findSuccessor(val, this)\n  }\n\n  static findSuccessor(val: number, currentNode: IBSTNode): number {\n    let successor = NOT_FOUND\n    let node = currentNode\n    while ((node !== null) && (node.value !== val)) {\n      if (node.value > val) {\n        successor = node.value\n        node = node.left\n      } else {\n        node = node.right\n      }\n    }\n\n    if (node === null)\n      return NOT_FOUND\n    if (node.right !== null)\n      return node.right.findMin()\n    else\n      return successor\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    def find_successor(self, val):\n        successor = NOT_FOUND\n        node = self\n        while node != None and node.value != val:\n            if val < node.value:\n                successor = node.value\n                node = node.left\n            else:\n                node = node.right\n\n        if node == None:\n            return NOT_FOUND\n        if node.right != None:\n            return node.right.find_min()\n        else:\n            return successor\n")))),(0,a.kt)("h2",{id:"traversal"},"Traversal"),(0,a.kt)("h3",{id:"deep-first-traversal"},"Deep First Traversal"),(0,a.kt)("p",null,"... TBD..."),(0,a.kt)("h3",{id:"inorder"},"Inorder"),(0,a.kt)("p",null,"An Inorder Traversal of this BST to obtain a list of sorted\nintegers inside this BST."),(0,a.kt)("p",null,"Inorder Traversal is a recursive method whereby we visit\nthe left subtree first, exhausts all items in the left subtree,\nvisit the current root, before exploring the right subtree and\nall items in the right subtree. "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (bst *BST) Inorder() []int {\n  if bst.root == nil { return nil }\n  result := make([]int, 0)\n  bst.root.inorder(&result)\n  return result\n}\n\nfunc (n *BSTNode) inorder(buf *[]int) {\n  if n == nil { return }\n  n.left.inorder(buf)\n  *buf = append(*buf, n.value)\n  n.right.inorder(buf)\n}\n"))),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  inorder() {\n    let result = []\n    if (this.left !== null)\n      result = result.concat(this.left.inorder())\n    result.push(this.value)\n    if (this.right !== null)\n      result = result.concat(this.right.inorder())\n    return result\n  }\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  public inorder(): Array<number> {\n    let result: Array<number> = new Array()\n    if (this.left !== null)\n      result = result.concat(this.left.inorder())\n    result.push(this.value)\n    if (this.right !== null)\n      result = result.concat(this.right.inorder())\n    return result\n  }\n"))),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    def inorder(self):\n        result = []\n        if self.left != None:\n            result.extend(self.left.inorder())\n        result.append(self.value)\n        if self.right != None:\n            result.extend(self.right.inorder())\n        return result\n")))),(0,a.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("a",{parentName:"p",href:"/moco/docs/bootcamp/algo/heap"},"Binary Heap")," \u76f8\u6bd4, BST \u4e2d\u7a0b\u5f0f\u905e\u8ff4\u53ef\u80fd\u6703\u4fee\u6539\u5230\u7269\u4ef6\u672c\u8eab.\n\u547c\u53eb\u548c\u56de\u50b3\u7684\u7269\u4ef6\u8655\u7406\u4e0a\u9700\u8981\u6bd4\u8f03\u6ce8\u610f."),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://visualgo.net/en/bst"},"Binary Search Tree, AVL Tree - VisuAlgo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://levelup.gitconnected.com/58f9126eb36b"},"Binary Search Trees in Go. Introduction | by Puneeth S | Level Up Coding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://arsenekuo.com/post/2021/12/13/implementation-of-bst-in-javascript"},"\u7528 JavaScript \u5be6\u4f5c\u4e8c\u5143\u641c\u5c0b\u6a39\uff08Binary Search Tree\uff09 | Arsene's Alibi"))))}m.isMDXComponent=!0}}]);