"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[1244],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(6010),o=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,v=e.values,f=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),N=T.tabGroupChoices,w=T.setTabGroupChoices,S=(0,a.useState)(y),x=S[0],O=S[1],Z=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=N[f];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&O(I)}var B=function(e){var t=e.currentTarget,n=Z.indexOf(t),r=g[n].value;r!==x&&(A(t),O(r),null!=f&&w(f,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=Z.indexOf(e.currentTarget)+1;n=null!=(r=Z[a])?r:Z[0];break;case"ArrowLeft":var l,o=Z.indexOf(e.currentTarget)-1;n=null!=(l=Z[o])?l:Z[Z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:j,onFocus:B,onClick:B},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=n(5488),i=n(5162),u=["components"],s={title:"Binary Search Tree",tags:["study","algorithm","cs","leetcode"],date:new Date("2022-05-30T00:00:00.000Z"),categories:["algorithm"]},c="Binary Search Tree",p={unversionedId:"study/cs_algorithm/bst",id:"study/cs_algorithm/bst",title:"Binary Search Tree",description:"Binary Search Tree",source:"@site/docs/study/cs_algorithm/bst.md",sourceDirName:"study/cs_algorithm",slug:"/study/cs_algorithm/bst",permalink:"/moco/docs/study/cs_algorithm/bst",draft:!1,tags:[{label:"study",permalink:"/moco/docs/tags/study"},{label:"algorithm",permalink:"/moco/docs/tags/algorithm"},{label:"cs",permalink:"/moco/docs/tags/cs"},{label:"leetcode",permalink:"/moco/docs/tags/leetcode"}],version:"current",frontMatter:{title:"Binary Search Tree",tags:["study","algorithm","cs","leetcode"],date:"2022-05-30T00:00:00.000Z",categories:["algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Awesome Resources",permalink:"/moco/docs/study/cs_algorithm/awesome"},next:{title:"Binary Heap",permalink:"/moco/docs/study/cs_algorithm/heap"}},m={},d=[{value:"Data Struct",id:"data-struct",level:2},{value:"w/ parent",id:"w-parent",level:3},{value:"w/o parent",id:"wo-parent",level:3},{value:"ADT Basic Operate",id:"adt-basic-operate",level:2},{value:"Search(v)",id:"searchv",level:3},{value:"Insert(v)",id:"insertv",level:3},{value:"Remove(v)",id:"removev",level:3},{value:"BST Find",id:"bst-find",level:2},{value:"AVL Tree",id:"avl-tree",level:2},{value:"See Also",id:"see-also",level:2}],v={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binary-search-tree"},"Binary Search Tree"),(0,l.kt)("p",null,"Binary Search Tree \u57fa\u672c\u6982\u5ff5\u662f\u6bcf\u4e00\u500b\u7bc0\u9ede\u6700\u591a\u6709\u5de6\u53f3\u5404\u4e00\u500b\u5b50\u7bc0\u9ede,\n\u5de6\u5b50\u7bc0\u9ede\u7684\u503c\u5c0f\u65bc\u81ea\u8eab\u7bc0\u9ede\u7684\u503c, \u53f3\u5b50\u7bc0\u9ede\u5247\u5927\u65bc\u672c\u8eab."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A Binary Search Tree (BST) is a binary tree in which each vertex\nhas only up to 2 children that satisfies BST property:\nAll vertices in the left subtree of a vertex must hold a value\nsmaller than its own and all vertices in the right subtree of a\nvertex must hold a value larger than its own."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://visualgo.net/en/bst?slide=1"},(0,l.kt)("em",{parentName:"a"},"Binary Search Tree, AVL Tree - VisuAlgo")))),(0,l.kt)("p",null,"\u53ea\u8981\u7b26\u5408\u4e0a\u8ff0\u5b9a\u7fa9, \u7121\u8ad6\u6a39\u9577\u5f97\u5982\u4f55, \u90fd\u7b26\u5408 BST \u7684\u898f\u7bc4.",(0,l.kt)("br",{parentName:"p"}),"\n","BST \u5728\u641c\u5c0b\u8cc7\u6599\u4e0a\u6709 O(log N) \u8907\u96dc\u5ea6\u512a\u52e2, \u662f\u5f88\u5e38\u4f7f\u7528\u7684\u57fa\u790e\u8cc7\u6599\u7d50\u69cb."),(0,l.kt)("h2",{id:"data-struct"},"Data Struct"),(0,l.kt)("p",null,"\u4e00\u822c\u7528\u8cc7\u6599\u7d50\u69cb\u4f86\u8868\u793a\u4e8c\u5143\u6a39\u7bc0\u9ede\u6709\u5169\u7a2e\u65b9\u5f0f:"),(0,l.kt)("h3",{id:"w-parent"},"w/ parent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct node {\n    int value;\n    node *parent;\n    node *l_child;\n    node *r_child;\n}\n")),(0,l.kt)("h3",{id:"wo-parent"},"w/o parent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct node {\n    int value;\n    node *l_child;\n    node *r_child;\n}\n")),(0,l.kt)("p",null,"\u5169\u8005\u7684\u5dee\u5225\u81f3\u5728\u65bc\u7bc0\u9ede\u5b9a\u7fa9\u4e2d\u662f\u5426\u5305\u542b\u6307\u5411\u7236\u7bc0\u9ede\u7684\u5c6c\u6027, \u7bc0\u9ede\u9593\u7684\u9023\u7d50\u662f\u55ae\u5411\u9084\u662f\u96d9\u5411\u95dc\u4fc2."),(0,l.kt)("p",null,"\u5305\u542b\u7236\u7bc0\u9ede\u7684\u8cc7\u6599\u7d50\u69cb\u96d9\u5411\u9023\u7d50\u7684\u5c6c\u6027, \u5f9e\u4e8c\u5143\u6a39\u4e2d\u4efb\u4e00\u7bc0\u9ede\u5de1\u8a2a, \u7686\u53ef\u5b8c\u6574\u9084\u539f\u5b8c\u6574\u4e8c\u5143\u6a39\u7684\u8cc7\u6599.\n\u82e5\u6709\u9700\u8981, \u53ef\u4ee5\u5f9e\u4efb\u4f55\u4e00\u500b\u7bc0\u9ede\u958b\u59cb\u5c0b\u8a2a, \u7121\u9808\u6bcf\u4e00\u6b21\u90fd\u5fc5\u9808\u5f9e Root \u958b\u59cb\u5de1\u8a2a.\n\u4f46\u7576\u4fee\u6539\u4e8c\u5143\u6a39\u4e2d\u7684\u8cc7\u6599\u6642, \u9700\u8981\u6ce8\u610f\u7dad\u8b77\u7bc0\u9ede\u4e2d\u7684\u9023\u7d50\u95dc\u4fc2, \u5c24\u5176\u662f\u7236\u7bc0\u9ede\u7684\u9023\u7d50."),(0,l.kt)("p",null,"\u800c\u4e0d\u5305\u542b\u7236\u7bc0\u9ede\u7684\u7d50\u69cb\u4e2d, API \u547c\u53eb\u57fa\u672c\u4e0a\u90fd\u5fc5\u9808\u5f9e Root \u958b\u59cb\u5de1\u8a2a.\n\u4f46\u76f8\u5c0d\u4fee\u6539\u8cc7\u6599\u6642, \u53ea\u9700\u8981\u8655\u7406\u5b50\u7bc0\u9ede\u7684\u55ae\u5411\u9023\u7d50\u95dc\u4fc2, \u7a0b\u5f0f\u7d50\u69cb\u90fd\u6bd4\u8f03\u7c21\u55ae."),(0,l.kt)("p",null,"\u5169\u8005\u5404\u6709\u512a\u7f3a\u9ede, \u4f9d\u5be6\u52d9\u9700\u6c42\u6c7a\u5b9a. \u672c\u7bc7\u9078\u7528\u4e0d\u5305\u62ec\u7236\u9023\u7d50\u7684\u7d50\u69cb. "),(0,l.kt)("h2",{id:"adt-basic-operate"},"ADT Basic Operate"),(0,l.kt)("p",null,"BST (and especially balanced BST like AVL Tree) is an efficient\ndata structure to implement a certain kind of Table (or Map)\nAbstract Data Type (ADT)."),(0,l.kt)("p",null,"A Table ADT must support at least the following three operations\nas efficient as possible:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Search(v) \u2014 determine if v exists in the ADT or not,"),(0,l.kt)("li",{parentName:"ul"},"Insert(v) \u2014 insert v into the ADT,"),(0,l.kt)("li",{parentName:"ul"},"Remove(v) \u2014 remove v from the ADT.")),(0,l.kt)("h3",{id:"searchv"},"Search(v)"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (bst *BST) Search(v int) bool {\n    if bst.root == nil {\n        return false\n    }\n    if bst.root.search((v)) == nil {\n        return false\n    } else {\n        return true\n    }\n}\n\nfunc (n *Node) search(v int) *Node {\n    if n.value == v {\n        return n\n    }\n\n    if n.value > v {\n        if n.left == nil {\n            return nil\n        }\n        return n.left.search(v)\n    } else {\n        if n.right == nil {\n            return nil\n        }\n        return n.right.search(v)\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},""))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},""))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,l.kt)("h3",{id:"insertv"},"Insert(v)"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (bst *BST) Insert(v int) {\n    if bst.root == nil {\n        bst.root = &Node{v, nil, nil}\n    } else {\n        bst.root.insert(v)\n    }\n}\n\nfunc (n *Node) insert(v int) {\n    if n.value > v {\n        if n.left != nil {\n            n.left.insert(v)\n        } else {\n            n.left = &Node{v, nil, nil}\n        }\n    } else {\n        if n.right != nil {\n            n.right.insert(v)\n        } else {\n            n.right = &Node{v, nil, nil}\n        }\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},""))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},""))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,l.kt)("h3",{id:"removev"},"Remove(v)"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (bst *BST) Remove(v int) bool {\n    if bst.root == nil {\n        return false\n    }\n    if bst.root.remove(v) == nil {\n        return false\n    } else {\n        return true\n    }\n}\n\nfunc (n *Node) remove(v int) *Node {\n    if n == nil { return nil}\n    if n.value > v {\n        n.left = n.left.remove(v)\n        return n\n    }\n    if n.value < v {\n        n.right = n.right.remove(v)\n        return n\n    }\n\n    // n.value = v\n    if n.left == nil && n.right == nil { return nil }\n    if n.left == nil { return n.right }\n    if n.right == nil { return n.left }\n\n    successor := n.right.findMax()\n    n.value, successor.value = successor.value, n.value\n    n.right = n.right.remove(v)\n    return n\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},""))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},""))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,l.kt)("h2",{id:"bst-find"},"BST Find"),(0,l.kt)("h2",{id:"avl-tree"},"AVL Tree"),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://visualgo.net/en/bst"},"Binary Search Tree, AVL Tree - VisuAlgo"))))}f.isMDXComponent=!0}}]);