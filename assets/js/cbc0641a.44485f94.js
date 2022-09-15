"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[3173],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,f=c["".concat(s,".").concat(p)]||c[p]||h[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3117),a=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),d=n(2466),u="tabList__CuJ",h="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,p=e.defaultValue,f=e.values,g=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==A&&!N.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),L=k.tabGroupChoices,V=k.setTabGroupChoices,T=(0,a.useState)(A),y=T[0],_=T[1],x=[],S=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var w=L[g];null!=w&&w!==y&&N.some((function(e){return e.value===w}))&&_(w)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),r=N[n].value;r!==y&&(S(t),_(r),null!=g&&V(g,String(r)))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;n=null!=(l=x[o])?l:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},N.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return x.push(e)},onKeyDown:H,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function p(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},3774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return p}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],d={title:"[DS] AVL Tree",tags:["bootcamp","algorithm","cs","leetcode"],date:new Date("2022-06-02T00:00:00.000Z"),categories:["algorithm"]},u="[DS] AVL Tree",h={unversionedId:"Bootcamp/Algorithm/avl",id:"Bootcamp/Algorithm/avl",title:"[DS] AVL Tree",description:"[DS] AVL Tree",source:"@site/docs/Bootcamp/Algorithm/avl.md",sourceDirName:"Bootcamp/Algorithm",slug:"/Bootcamp/Algorithm/avl",permalink:"/moco/docs/Bootcamp/Algorithm/avl",draft:!1,tags:[{label:"bootcamp",permalink:"/moco/docs/tags/bootcamp"},{label:"algorithm",permalink:"/moco/docs/tags/algorithm"},{label:"cs",permalink:"/moco/docs/tags/cs"},{label:"leetcode",permalink:"/moco/docs/tags/leetcode"}],version:"current",frontMatter:{title:"[DS] AVL Tree",tags:["bootcamp","algorithm","cs","leetcode"],date:"2022-06-02T00:00:00.000Z",categories:["algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Awesome Resources",permalink:"/moco/docs/Bootcamp/Algorithm/awesome"},next:{title:"[DS] Binary Search Tree",permalink:"/moco/docs/Bootcamp/Algorithm/bst"}},c={},p=[{value:"Feature",id:"feature",level:2},{value:"extends BST",id:"extends-bst",level:3},{value:"height(v)",id:"heightv",level:3},{value:"Method",id:"method",level:2},{value:"rebalance",id:"rebalance",level:3},{value:"rotate Left/Right",id:"rotate-leftright",level:3},{value:"insert(v)",id:"insertv",level:3},{value:"remove(v)",id:"removev",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"See Also",id:"see-also",level:2},{value:"AVL",id:"avl",level:3},{value:"Inheritance \u7e7c\u627f",id:"inheritance-\u7e7c\u627f",level:3}],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ds-avl-tree"},"[DS]"," AVL Tree"),(0,l.kt)("h2",{id:"feature"},"Feature"),(0,l.kt)("p",null,"A balanced BST is a BST that h = O(log N).\nAVL Tree (Adelson-Velskii & Landis, 1962) that is named after its\ninventor: Adelson-Velskii and Landis."),(0,l.kt)("p",null,"...detail TBD ..."),(0,l.kt)("h3",{id:"extends-bst"},"extends BST"),(0,l.kt)("p",null,"AVL Tree \u4ea6\u662f\u4e00\u7a2e BST, \u6240\u6709\u5c0d BST \u7684\u64cd\u4f5c\u90fd\u9069\u7528\u65bc AVL Tree.\n\u9069\u5408\u985e\u5225\u754c\u9762\u5c01\u88dd\u6982\u5ff5, \u64cd\u4f5c\u6642\u7121\u9808\u8003\u616e\u662f\u7531\u90a3\u4e00\u7a2e Tree \u5be6\u4f5c, \u900f\u904e\u985e\u5225\u5c01\u88dd\u754c\u9762\u64cd\u4f5c\u5373\u53ef. "),(0,l.kt)("p",null,"\u53e6\u4e00\u9ede\u5247\u662f\u5be6\u4f5c\u4e0a AVL Tree \u4e2d\u8a31\u591a\u51fd\u5f0f\u90fd\u53ef\u4ee5\u76f4\u63a5\u6cbf\u7528 BST \u754c\u9762,\n\u4e5f\u9069\u5408\u7528\u7e7c\u627f\u4ee5\u5229\u7a0b\u5f0f\u91cd\u8907\u4f7f\u7528\u8207\u7dad\u8b77."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type AVLNode struct {\n  value  int\n  height int\n  left   *AVLNode\n  right  *AVLNode\n}\n\nfunc newAVLNode(v int) *AVLNode {\n  return &AVLNode{\n    value:  v,\n    height: 1,\n    left:   nil,\n    right:  nil,\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class AVL extends BST {\n  constructor(data) {\n    super()\n    this.root = null\n    if (typeof(data) === 'number') {\n      this.root = new AVLNode(data)\n    } else if (Array.isArray(data)) {\n      this.root = new AVLNode(data[0])\n      for (let i = 1; i < data.length; i++)\n        this.insert(data[i])\n    }\n  }\n}\n\nclass AVLNode extends BSTNode {\n  constructor(data) {\n    super()\n    this.value = data\n    this.left = null\n    this.right = null\n    this.height = 1\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export class AVL extends BST {\n  constructor(data: number | Array<number>) {\n    super(null)\n    this.root = null\n    if (typeof (data) === 'number') {\n      this.root = new AVLNode(data)\n    } else if (Array.isArray(data)) {\n      this.root = new AVLNode(data[0])\n      for (let i = 1; i < data.length; i++)\n        this.insert(data[i])\n    }\n  }\n}\n\nexport class AVLNode extends BSTNode {\n  left: IAVLNode\n  right: IAVLNode\n  height: number\n\n  constructor(data: number) {\n    super(data)\n    this.left = null\n    this.right = null\n    this.height = 1\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class AVL(BST):\n    def __init__(self, data):\n        self.root = None\n        if isinstance(data, int):\n            self._root = AVLNode(data)\n        elif isinstance(data, list):\n            self._root = AVLNode(data[0])\n            for i in range(1, len(data), 1):\n                self.insert(data[i])\n\nclass AVLNode(BSTNode):\n    def __init__(self, data):\n        self.value = data\n        self.left = None\n        self.right = None\n        self.height = 1\n")))),(0,l.kt)("h3",{id:"heightv"},"height(v)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"height(v)"),": The number of edges on the path from vertex v down to\nits deepest leaf. This attribute is saved in each vertex so we can\naccess a vertex's height in ",(0,l.kt)("strong",{parentName:"p"},"O(1)")," without having to recompute it\nevery time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"v.height = -1 (if v is an empty tree)\nv.height = max(v.left.height, v.right.height) + 1 (otherwise)\n\n// Balance Factor\nv.bf = v.left.height - v.right.height\n")),(0,l.kt)("h2",{id:"method"},"Method"),(0,l.kt)("h3",{id:"rebalance"},"rebalance"),(0,l.kt)("p",null,"AVL Tree needs to check if still balance after modified"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"check balance factor of this and its children\n  case1: this.rotateRight\n  case2: this.left.rotateLeft, this.rotateRight\n  case3: this.rotateLeft\n  case4: this.right.rotateRight, this.rotateLeft\n  this is balanced\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (n *AVLNode) rotate() *AVLNode {\n  left := n.left.getHeight()\n  right := n.right.getHeight()\n  bf := left - right\n\n  if bf > 1 {\n    if n.left.left.getHeight() < n.left.right.getHeight() {\n      n.left = n.left.rotateLeft()\n    }\n    return n.rotateRight()\n  } else if bf < -1 {\n    if n.right.left.getHeight() > n.right.right.getHeight() {\n      n.right = n.right.rotateRight()\n    }\n    return n.rotateLeft()\n  } else {\n    n.updateHeight()\n    return n\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  // class AVLNode\n  static _rotate(node) {\n    let left = AVLNode._heightHelper(node.left)\n    let right = AVLNode._heightHelper(node.right)\n    let bf = left - right\n\n    if (bf > 1) {\n      if (AVLNode._heightHelper(node.left.left) < AVLNode._heightHelper(node.left.right))\n        node.left = AVLNode._rotateLeft(node.left)\n      return AVLNode._rotateRight(node)\n    } else if (bf < -1) {\n      if (AVLNode._heightHelper(node.right.left) > AVLNode._heightHelper(node.right.right))\n        node.right = AVLNode._rotateRight(node.right)\n      return AVLNode._rotateLeft(node)\n    } else {\n      node._updateHeight()\n      return node\n    }\n  }\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  static rotate(node: IAVLNode): IAVLNode {\n    let left = AVLNode.heightHelper(node!.left)\n    let right = AVLNode.heightHelper(node!.right)\n    let bf = left - right\n\n    if (bf > 1) {\n      if (AVLNode.heightHelper(node!.left!.left) < AVLNode.heightHelper(node!.left!.right))\n        node!.left = AVLNode.rotateLeft(node!.left)\n      return AVLNode.rotateRight(node)\n    } else if (bf < -1) {\n      if (AVLNode.heightHelper(node!.right!.left) > AVLNode.heightHelper(node!.right!.right))\n        node!.right = AVLNode.rotateRight(node!.right)\n      return AVLNode.rotateLeft(node)\n    } else {\n      node!.updateHeight()\n      return node\n    }\n  }\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    @classmethod\n    def rotate(cls, node):\n        left = AVLNode.height_helper(node.left)\n        right = AVLNode.height_helper(node.right)\n        bf = left - right\n\n        if bf > 1:\n            if AVLNode.height_helper(node.left.left) < AVLNode.height_helper(node.left.right):\n                node.left = AVLNode.rotate_left(node.left)\n            return AVLNode.rotate_right(node)\n        elif bf < -1:\n            if AVLNode.height_helper(node.right.left) > AVLNode.height_helper(node.right.right):\n                node.right = AVLNode.rotate_right(node.right)\n            return AVLNode.rotate_left(node)\n        else:\n            node.update_height()\n            return node\n")))),(0,l.kt)("h3",{id:"rotate-leftright"},"rotate Left/Right"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (n *AVLNode) rotateLeft() *AVLNode {\n  result := n.right\n  t := result.left\n\n  n.right = t\n  n.height--\n\n  result.left = n\n  return result\n}\n\nfunc (n *AVLNode) rotateRight() *AVLNode {\n  result := n.left\n  t := result.right\n\n  n.left = t\n  n.height--\n\n  result.right = n\n  return result\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  // class AVLNode\n  static _rotateLeft(node) {\n    let result = node.right\n    let t = result.left\n\n    node.right = t\n    node.height--\n\n    result.left = node\n    return result\n  }\n\n  static _rotateRight(node) {\n    let result = node.left\n    let t = result.right\n\n    node.left = t\n    node.height--\n\n    result.right = node\n    return result\n  }\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  // class AVLNode\n  static rotateLeft(node: IAVLNode): IAVLNode {\n    let result = node!.right\n    let t = result!.left\n\n    node!.right = t\n    node!.height--\n\n    result!.left = node\n    return result\n  }\n\n  static rotateRight(node: IAVLNode): IAVLNode {\n    let result = node!.left\n    let t = result!.right\n\n    node!.left = t\n    node!.height--\n\n    result!.right = node\n    return result\n  }\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    @classmethod\n    def rotate_left(cls, node):\n        result = node.right\n        t = result.left\n\n        node.right = t\n        node.height = node.height - 1\n\n        result.left = node\n        return result\n\n    @classmethod\n    def rotate_right(cls, node):\n        result = node.left\n        t = result.right\n\n        node.left = t\n        node.height = node.height - 1\n\n        result.right = node\n        return result\n")))),(0,l.kt)("h3",{id:"insertv"},"insert(v)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"insert v\nrebalance tree\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (n *AVLNode) insert(val int) IBSTNode {\n  return n.insertHelper(val)\n}\n\nfunc (n *AVLNode) insertHelper(val int) *AVLNode {\n  if n == nil { return newAVLNode(val) }\n\n  if n.value > val { n.left = n.left.insertHelper(val) } \n  else { n.right = n.right.insertHelper(val) }\n\n  return n.rotate()\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  // class AVLNode\n  insert(val) {\n    return AVLNode._insertHelper(val, this)\n  }\n\n  static _insertHelper(val, node) {\n    if (node === null)\n      return new AVLNode(val)\n    if (node.value > val)\n      node.left = AVLNode._insertHelper(val, node.left)\n    else\n      node.right = AVLNode._insertHelper(val, node.right)\n    return AVLNode._rotate(node)\n  }\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  // class AVLNode\n  public insert(val: number): IAVLNode {\n    return AVLNode.insertHelper(val, this)\n  }\n\n  static insertHelper(val: number, node: IAVLNode): IAVLNode {\n    if (node === null)\n      return new AVLNode(val)\n    if (node.value > val)\n      node.left = AVLNode.insertHelper(val, node.left)\n    else\n      node.right = AVLNode.insertHelper(val, node.right)\n    return AVLNode.rotate(node)\n  }\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    # class AVL\n    def insert(self, val):\n        if self._root is None:\n            self._root = AVLNode(val)\n        self._root = self._root.insert(val)\n\n    # class AVLNode\n    def insert(self, val):\n        return AVLNode.insert_helper(val, self)\n\n    @classmethod\n    def insert_helper(cls, val, node):\n        if node is None:\n            return AVLNode(val)\n        if val < node.value:\n            node.left = AVLNode.insert_helper(val, node.left)\n        else:\n            node.right = AVLNode.insert_helper(val, node.right)\n        return AVLNode.rotate(node)\n\n")))),(0,l.kt)("h3",{id:"removev"},"remove(v)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"remove v\nrebalance tree\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (n *AVLNode) remove(val int) IBSTNode {\n  return n.removeHelper(val)\n}\n\nfunc (n *AVLNode) removeHelper(val int) *AVLNode {\n  // remove v: same as BSTNode \n  // ,,,\n  return n.rotate()\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  remove (val) {\n    return AVLNode._removeHelper(val, this)\n  }\n\n  static _removeHelper(val, node) {\n    // remove v: same as BSTNode \n    // ...\n    return AVLNode._rotate(node)\n  }\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  public remove (val: number): IAVLNode {\n    return AVLNode.removeHelper(val, this)\n  }\n\n  static removeHelper(val:number, node: IAVLNode): IAVLNode {\n    // remove v: same as BSTNode \n    // ...\n    return AVLNode.rotate(node)\n  }\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    def remove(self, val):\n        return AVLNode.remove_helper(val, self)\n\n    @classmethod\n    def remove_helper(cls, val, node):\n        # remove v: same as BSTNode \n        # ...\n        return AVLNode.rotate(node)\n")))),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/moco/docs/Bootcamp/Algorithm/heap"},"Binary Heap")," \u4e00\u4e9b\u7279\u6027\u9069\u5408\u7df4\u7fd2\u8207\u89e3\u91cb Class \u4e2d\u7684 private / public / class method.\n\u800c BST / AVL Tree \u5247\u5f88\u9069\u5408 OOP \u4e2d\u7684\u7e7c\u627f\u548c\u5c01\u88dd\u6982\u5ff5. "),(0,l.kt)("p",null,"\u9019\u7bc7\u76e1\u91cf\u4ee5\u5404\u8a9e\u8a00\u4e2d\u539f\u751f\u6216\u6a21\u64ec\u7e7c\u627f\u7684\u65b9\u5f0f\u5be6\u4f5c AVL \u5c0d BST \u7684\u7e7c\u627f.\n\u800c\u9650\u65bc Golang \u7684\u7279\u6027, \u7e7c\u627f\u548c Overriding \u6703\u8b93\u7a0b\u5f0f\u8b8a\u5f97\u904e\u65bc\u8907\u96dc,\n\u53cd\u5012\u5931\u53bb Golang keep in simple \u54f2\u5b78, \u50c5\u7528 interface \u4f86\u5c01\u88dd AVL Tree Node."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("h3",{id:"avl"},"AVL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://visualgo.net/en/bst"},"Binary Search Tree, AVL Tree - VisuAlgo"))),(0,l.kt)("h3",{id:"inheritance-\u7e7c\u627f"},"Inheritance \u7e7c\u627f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Golang",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opensourcedoc.com/golang-programming/interface/"},"[Golang] \u7a0b\u5f0f\u8a2d\u8a08\u6559\u5b78\uff1a\u7528\u4ecb\u9762 (Interface) \u5be6\u8e10\u7e7c\u627f\u548c\u591a\u578b | \u958b\u6e90\u6280\u8853\u6559\u5b78\u7db2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learnku.com/articles/32295"},"\u79d2\u61c2 go \u8bed\u8a00\u7684\u7ee7\u627f | Go \u6280\u672f\u8bba\u575b"),"  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.gushiciku.cn/pl/2txm/zh-tw"},"Golang OOP\u3001\u7e7c\u627f\u3001\u7d44\u5408\u3001\u4ecb\u9762_Go\u8a9e\u8a00\u4e2d\u6587\u7db2 - MdEditor"))))))}g.isMDXComponent=!0}}]);