"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[1761],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),l=a(6010),i=a(2389),o=a(7392),s=a(7094),u=a(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),w=x.tabGroupChoices,N=x.setTabGroupChoices,T=(0,r.useState)(b),O=T[0],Z=T[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==O&&y.some((function(e){return e.value===j}))&&Z(j)}var D=function(e){var t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==O&&(I(t),Z(n),null!=f&&N(f,String(n)))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=E.indexOf(e.currentTarget)+1;a=null!=(n=E[r])?n:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;a=null!=(l=E[i])?l:E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},6437:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=a(5488),o=a(5162),s=["components"],u={title:"Binary Heap",tags:["study","algorithm","cs","leetcode"],date:new Date("2022-05-26T00:00:00.000Z"),categories:["algorithm"]},p="Binary (Max) Heap",c={unversionedId:"study/cs_algorithm/heap",id:"study/cs_algorithm/heap",title:"Binary Heap",description:"Binary (Max) Heap",source:"@site/docs/study/cs_algorithm/heap.md",sourceDirName:"study/cs_algorithm",slug:"/study/cs_algorithm/heap",permalink:"/moco/docs/study/cs_algorithm/heap",draft:!1,tags:[{label:"study",permalink:"/moco/docs/tags/study"},{label:"algorithm",permalink:"/moco/docs/tags/algorithm"},{label:"cs",permalink:"/moco/docs/tags/cs"},{label:"leetcode",permalink:"/moco/docs/tags/leetcode"}],version:"current",frontMatter:{title:"Binary Heap",tags:["study","algorithm","cs","leetcode"],date:"2022-05-26T00:00:00.000Z",categories:["algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Awesome Resources",permalink:"/moco/docs/study/cs_algorithm/awesome"},next:{title:"Sorting",permalink:"/moco/docs/study/cs_algorithm/sorting"}},d={},m=[{value:"1-based Compact Array",id:"1-based-compact-array",level:2},{value:"Basic Operation",id:"basic-operation",level:2},{value:"siftUp",id:"siftup",level:3},{value:"siftDown",id:"siftdown",level:3},{value:"Method",id:"method",level:2},{value:"Create",id:"create",level:3},{value:"O(N log N)",id:"on-log-n",level:4},{value:"O(N)",id:"on",level:4},{value:"Insert",id:"insert",level:3},{value:"ExtractMax",id:"extractmax",level:3},{value:"UpdateKey(i, newv)",id:"updatekeyi-newv",level:3},{value:"Delete(i)",id:"deletei",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binary-max-heap"},"Binary (Max) Heap"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Binary Max Heap property: The parent of each vertex - except the root - contains value greater than the value of that vertex. This is an easier-to-verify definition than the following alternative definition: The value of a vertex - except the leaf/leaves - must be greater than the value of its one (or two) child(ren)."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://visualgo.net/en/heap"},(0,l.kt)("em",{parentName:"a"},"Binary Heap (Priority Queue) - VisuAlgo")))),(0,l.kt)("h2",{id:"1-based-compact-array"},"1-based Compact Array"),(0,l.kt)("p",null,"we can implement basic binary tree traversal operations with simple index manipulations (with help of bit shift manipulation):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"parent(i) = i>>1, index i divided by 2 (integer division),"),(0,l.kt)("li",{parentName:"ol"},"left(i) = i<<1, index i multiplied by 2,"),(0,l.kt)("li",{parentName:"ol"},"right(i) = (i<<1)+1, index i multiplied by 2 and added by 1.")),(0,l.kt)("h2",{id:"basic-operation"},"Basic Operation"),(0,l.kt)("h3",{id:"siftup"},"siftUp"),(0,l.kt)("p",null,"siftUp swaps a node that is too large with its parent\n(thereby moving it up) until it is no larger than the node above it. "),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (h *Heap) siftUp(idx int) {\n    parent := idx >> 1\n    for idx > 1 && (*h)[idx] > (*h)[parent] {\n        (*h)[idx], (*h)[parent] = (*h)[parent], (*h)[idx]\n        idx = parent\n        parent = idx >> 1\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},""))),(0,l.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},""))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,l.kt)("h3",{id:"siftdown"},"siftDown"),(0,l.kt)("p",null,"siftDown swaps a node that is too small with its largest child\n(thereby moving it down) until it is at least as large as both nodes\nbelow it."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (h *Heap) siftDown(idx int) {\n    isLChildLarger := false\n    isRChildLarger := false\n\n    left := idx << 1\n    if left < len(*h) {\n        if (*h)[left] > (*h)[idx] {\n            isLChildLarger = true\n        }\n    }\n\n    right := left + 1\n    if right < len(*h) {\n        if (*h)[right] > (*h)[idx] {\n            isRChildLarger = true\n        }\n    }\n\n    if isLChildLarger && isRChildLarger {\n        if (*h)[right] > (*h)[left] {\n            (*h)[right], (*h)[idx] = (*h)[idx], (*h)[right]\n            h.siftDown(right)\n        } else {\n            (*h)[left], (*h)[idx] = (*h)[idx], (*h)[left]\n            h.siftDown(left)\n        }\n    } else if isRChildLarger {\n        (*h)[right], (*h)[idx] = (*h)[idx], (*h)[right]\n        h.siftDown(right)\n    } else if isLChildLarger {\n        (*h)[left], (*h)[idx] = (*h)[idx], (*h)[left]\n        h.siftDown(left)\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"}),(0,l.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"}),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"method"},"Method"),(0,l.kt)("p",null,"All Binary Max Heap method could be finish by combination of basic operation."),(0,l.kt)("h3",{id:"create"},"Create"),(0,l.kt)("h4",{id:"on-log-n"},"O(N log N)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start from an empty Binary Max Heap")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (i = 0; i < A.length; ++i)\n  Insert(A[i]) \n")),(0,l.kt)("h4",{id:"on"},"O(N)"),(0,l.kt)("p",null,"The input array A as it is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (i = A.length/2; i >= 1; --i)\n  siftDown(i)\n")),(0,l.kt)("h3",{id:"insert"},"Insert"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (h *Heap) Insert(num int) {\n    *h = append(*h, num)\n    h.siftUp(len(*h) - 1)\n}\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"fmt.Println(h)","fmt.Println(h)":!0},""))),(0,l.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},""))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,l.kt)("h3",{id:"extractmax"},"ExtractMax"),(0,l.kt)("p",null,"Because we promote a leaf vertex to the root vertex of a Binary Max Heap,\nit will very likely violates the Max Heap property.\n",(0,l.kt)("inlineCode",{parentName:"p"},"ExtractMax()")," operation then fixes Binary Max Heap property from\nthe root ",(0,l.kt)("strong",{parentName:"p"},"downwards")," by comparing the current value with\nthe its child/the larger of its two children (if necessary). "),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func (h *Heap) ExtractMax() (int, error) {\n    if len(*h) < 1 {\n        return 0, fmt.Errorf("")\n    }\n\n    result := (*h)[1]\n    (*h)[1] = (*h)[len(*h)-1]\n    *h = (*h)[:len(*h)-1]\n    h.siftDown(1)\n    return result, nil\n}\n'))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},""))),(0,l.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},""))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,l.kt)("h3",{id:"updatekeyi-newv"},"UpdateKey(i, newv)"),(0,l.kt)("p",null,"If the index i of the value is known, we can do the following simple strategy: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Simply update A","[i]"," = newv "),(0,l.kt)("li",{parentName:"ol"},"call both shiftUp(i) and shiftDown(i)",(0,l.kt)("br",{parentName:"li"}),"only at most one operation will be triggered.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"A[i] = newv; // let oldv = A[i]\nshiftup(i); // if newv > oldv\nshiftdown(i); // if newv < oldv\n")),(0,l.kt)("h3",{id:"deletei"},"Delete(i)"),(0,l.kt)("p",null,"Let A","[i]"," become the new max one and fix the Heap, then ExtractMax()."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"A[i] = A[1]+1; shiftup(i); // new max/root\nExtractMax(); // now easy to delete\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://visualgo.net/en/heap"},"Binary Heap (Priority Queue) - VisuAlgo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34329942"},"algorithm - siftUp and siftDown operation in heap for heapifying an array - Stack Overflow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/9755721/"},"algorithm - How can building a heap be O(n) time complexity? - Stack Overflow"))))}f.isMDXComponent=!0}}]);