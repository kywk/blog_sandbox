"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[5577],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,f=d["".concat(o,".").concat(c)]||d[c]||h[c]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),r=a(7294),l=a(6010),i=a(2389),s=a(7392),o=a(7094),p=a(2466),u="tabList__CuJ",h="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,c=e.defaultValue,f=e.values,m=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),w=y.tabGroupChoices,N=y.setTabGroupChoices,_=(0,r.useState)(x),T=_[0],D=_[1],L=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==T&&v.some((function(e){return e.value===S}))&&D(S)}var E=function(e){var t=e.currentTarget,a=L.indexOf(t),n=v[a].value;n!==T&&(O(t),D(n),null!=m&&N(m,String(n)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=L.indexOf(e.currentTarget)+1;a=null!=(n=L[r])?n:L[0];break;case"ArrowLeft":var l,i=L.indexOf(e.currentTarget)-1;a=null!=(l=L[i])?l:L[L.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return L.push(e)},onKeyDown:I,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8525:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return c}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=a(5488),s=a(5162),o=["components"],p={title:"[DS] Binary Heap",tags:["bootcamp","algorithm","cs","leetcode"],date:new Date("2022-05-26T00:00:00.000Z"),categories:["algorithm"]},u="[DS] Binary (Max) Heap",h={unversionedId:"bootcamp/cs_algorithm/heap",id:"bootcamp/cs_algorithm/heap",title:"[DS] Binary Heap",description:"[DS] Binary (Max) Heap",source:"@site/docs/bootcamp/cs_algorithm/heap.md",sourceDirName:"bootcamp/cs_algorithm",slug:"/bootcamp/cs_algorithm/heap",permalink:"/moco/docs/bootcamp/cs_algorithm/heap",draft:!1,tags:[{label:"bootcamp",permalink:"/moco/docs/tags/bootcamp"},{label:"algorithm",permalink:"/moco/docs/tags/algorithm"},{label:"cs",permalink:"/moco/docs/tags/cs"},{label:"leetcode",permalink:"/moco/docs/tags/leetcode"}],version:"current",frontMatter:{title:"[DS] Binary Heap",tags:["bootcamp","algorithm","cs","leetcode"],date:"2022-05-26T00:00:00.000Z",categories:["algorithm"]},sidebar:"tutorialSidebar",previous:{title:"[DS] Graph",permalink:"/moco/docs/bootcamp/cs_algorithm/graph"},next:{title:"[ALGO] Sorting",permalink:"/moco/docs/bootcamp/cs_algorithm/sorting"}},d={},c=[{value:"1-based Compact Array",id:"1-based-compact-array",level:2},{value:"Basic Operation",id:"basic-operation",level:2},{value:"siftUp",id:"siftup",level:3},{value:"siftDown",id:"siftdown",level:3},{value:"Method",id:"method",level:2},{value:"Create",id:"create",level:3},{value:"O(N log N)",id:"on-log-n",level:4},{value:"O(N)",id:"on",level:4},{value:"Insert",id:"insert",level:3},{value:"ExtractMax",id:"extractmax",level:3},{value:"UpdateKey(i, newv)",id:"updatekeyi-newv",level:3},{value:"Delete(i)",id:"deletei",level:3},{value:"Heap Sort",id:"heap-sort",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"See Also",id:"see-also",level:2},{value:"Heap",id:"heap",level:3},{value:"Class \u985e\u5225",id:"class-\u985e\u5225",level:3}],f={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ds-binary-max-heap"},"[DS]"," Binary (Max) Heap"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Binary Max Heap property: The parent of each vertex - except the root - contains value greater than the value of that vertex. This is an easier-to-verify definition than the following alternative definition: The value of a vertex - except the leaf/leaves - must be greater than the value of its one (or two) child(ren)."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://visualgo.net/en/heap"},(0,l.kt)("em",{parentName:"a"},"Binary Heap (Priority Queue) - VisuAlgo")))),(0,l.kt)("h2",{id:"1-based-compact-array"},"1-based Compact Array"),(0,l.kt)("p",null,"we can implement basic binary tree traversal operations with simple index manipulations (with help of bit shift manipulation):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"parent(i) = i>>1, index i divided by 2 (integer division),"),(0,l.kt)("li",{parentName:"ol"},"left(i) = i<<1, index i multiplied by 2,"),(0,l.kt)("li",{parentName:"ol"},"right(i) = (i<<1)+1, index i multiplied by 2 and added by 1.")),(0,l.kt)("h2",{id:"basic-operation"},"Basic Operation"),(0,l.kt)("h3",{id:"siftup"},"siftUp"),(0,l.kt)("p",null,"siftUp swaps a node that is too large with its parent\n(thereby moving it up) until it is no larger than the node above it. "),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (h *Heap) siftUp(idx int) {\n    parent := idx >> 1\n    for idx > 1 && (*h)[idx] > (*h)[parent] {\n        (*h)[idx], (*h)[parent] = (*h)[parent], (*h)[idx]\n        idx = parent\n        parent = idx >> 1\n    }\n}\n"))),(0,l.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  siftUp(idx) {\n    let parent = idx >> 1\n    while ((idx > 1) && (this.data[idx] > this.data[parent])) {\n      this.swap(idx, parent)\n      idx = parent\n      parent = idx >> 1\n    }\n  }\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  siftUp(idx: number) {\n    let parent = idx >> 1\n    while ((idx > 1) && (this._data[idx] > this._data[parent])) {\n      this.swap(idx, parent)\n      idx = parent\n      parent = idx >> 1\n    }\n  }\n"))),(0,l.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"  def __siftUp(self, idx):\n    parent = idx >> 1\n    while idx > 1 and self.__data[idx] > self.__data[parent]:\n      self.__swap(idx, parent)\n      idx = parent\n      parent = idx >> 1\n")))),(0,l.kt)("h3",{id:"siftdown"},"siftDown"),(0,l.kt)("p",null,"siftDown swaps a node that is too small with its largest child\n(thereby moving it down) until it is at least as large as both nodes\nbelow it."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (h *Heap) siftDown(idx int) {\n    isLChildLarger := false\n    isRChildLarger := false\n\n    left := idx << 1\n    if left < len(*h) {\n        if (*h)[left] > (*h)[idx] {\n            isLChildLarger = true\n        }\n    }\n\n    right := left + 1\n    if right < len(*h) {\n        if (*h)[right] > (*h)[idx] {\n            isRChildLarger = true\n        }\n    }\n\n    if isLChildLarger && isRChildLarger {\n        if (*h)[right] > (*h)[left] {\n            (*h)[right], (*h)[idx] = (*h)[idx], (*h)[right]\n            h.siftDown(right)\n        } else {\n            (*h)[left], (*h)[idx] = (*h)[idx], (*h)[left]\n            h.siftDown(left)\n        }\n    } else if isRChildLarger {\n        (*h)[right], (*h)[idx] = (*h)[idx], (*h)[right]\n        h.siftDown(right)\n    } else if isLChildLarger {\n        (*h)[left], (*h)[idx] = (*h)[idx], (*h)[left]\n        h.siftDown(left)\n    }\n}\n"))),(0,l.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  siftDown(idx) {\n    let isLeftLarger = false\n    let isRightLarger = false\n\n    let left = idx<<1\n    if ((left < this.data.length) &&\n        (this.data[left] > this.data[idx]))\n      isLeftLarger = true\n\n    let right = left + 1\n    if ((right < this.data.length) &&\n        (this.data[right] > this.data[idx]))\n      isRightLarger = true\n\n    if (isLeftLarger && isRightLarger) {\n      if (this.data[right] > this.data[left]) {\n        this.swap(right, idx)\n        this.siftDown(right)\n      } else {\n        this.swap(left, idx)\n        this.siftDown(left)\n      }\n    } else if (isLeftLarger) {\n      this.swap(left, idx)\n      this.siftDown(left)\n    } else if (isRightLarger) {\n      this.swap(right, idx)\n      this.siftDown(right)\n    }\n  }\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  siftDown(idx: number) {\n    let isLeftLarger = false\n    let isRightLarger = false\n\n    let left = idx << 1\n    if ((left < this._data.length) &&\n        (this._data[left] > this._data[idx]))\n      isLeftLarger = true\n\n    let right = left + 1\n    if ((right < this._data.length) &&\n        (this._data[right] > this._data[idx]))\n      isRightLarger = true\n\n    if (isLeftLarger && isRightLarger) {\n      if (this._data[left] > this._data[right]) {\n        this.swap(left, idx)\n        this.siftDown(left)\n      } else {\n        this.swap(right, idx)\n        this.siftDown(right)\n      }\n    } else if (isLeftLarger) {\n      this.swap(left, idx)\n      this.siftDown(left)\n    } else if (isRightLarger) {\n      this.swap(right, idx)\n      this.siftDown(right)\n    }\n  }\n"))),(0,l.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"  def __siftDown(self, idx):\n    leftLarger = False\n    rightLarger = False\n\n    left = idx << 1\n    if left < len(self.__data) and self.__data[left] > self.__data[idx]:\n      leftLarger = True\n\n    right = left + 1\n    if right < len(self.__data) and self.__data[right] > self.__data[idx]:\n      rightLarger = True\n\n    if leftLarger and rightLarger:\n      if self.__data[left] > self.__data[right]:\n        self.__swap(left, idx)\n        self.__siftDown(left)\n      else:\n        self.__swap(right, idx)\n        self.__siftDown(right)\n    elif leftLarger:\n      self.__swap(left, idx)\n      self.__siftDown(left)\n    elif rightLarger:\n      self.__swap(right, idx)\n      self.__siftDown(right)\n")))),(0,l.kt)("h2",{id:"method"},"Method"),(0,l.kt)("p",null,"All Binary Max Heap method could be finish by combination of basic operation."),(0,l.kt)("h3",{id:"create"},"Create"),(0,l.kt)("h4",{id:"on-log-n"},"O(N log N)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start from an empty Binary Max Heap")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (i = 0; i < A.length; ++i)\n  Insert(A[i]) \n")),(0,l.kt)("h4",{id:"on"},"O(N)"),(0,l.kt)("p",null,"The input array A as it is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (i = A.length/2; i >= 1; --i)\n  siftDown(i)\n")),(0,l.kt)("h3",{id:"insert"},"Insert"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (h *Heap) Insert(num int) {\n    *h = append(*h, num)\n    h.siftUp(len(*h) - 1)\n}\n"))),(0,l.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  insert(num) {\n    this.data.push(num)\n    this.siftUp(this.data.length - 1)\n  }\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  insert(num: number) {\n    this._data.push(num)\n    this.siftUp(this._data.length - 1)\n  }\n"))),(0,l.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"  def insert(self, num):\n    self.__data.append(num)\n    self.__siftUp(len(self.__data) - 1)\n")))),(0,l.kt)("h3",{id:"extractmax"},"ExtractMax"),(0,l.kt)("p",null,"Because we promote a leaf vertex to the root vertex of a Binary Max Heap,\nit will very likely violates the Max Heap property.\n",(0,l.kt)("inlineCode",{parentName:"p"},"ExtractMax()")," operation then fixes Binary Max Heap property from\nthe root ",(0,l.kt)("strong",{parentName:"p"},"downwards")," by comparing the current value with\nthe its child/the larger of its two children (if necessary). "),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func (h *Heap) ExtractMax() (int, error) {\n    if len(*h) < 1 {\n        return 0, fmt.Errorf("Empty Heap")\n    }\n\n    result := (*h)[1]\n    (*h)[1] = (*h)[len(*h)-1]\n    *h = (*h)[:len(*h)-1]\n    h.siftDown(1)\n    return result, nil\n}\n'))),(0,l.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  extractMax() {\n    if (this.data.length < 1)\n      return null\n\n    let result = this.data[1]\n    this.data[1] = this.data[this.data.length - 1]\n    this.data.pop()\n    this.siftDown(1)\n    return result\n  }\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  extractMax(): number {\n    if (this._data.length < 1)\n      return Number.NEGATIVE_INFINITY\n\n    let result = this._data[1]\n    this._data[1] = this._data[this._data.length - 1]\n    this._data.pop()\n    this.siftDown(1)\n    return result\n  }\n"))),(0,l.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'  def extractMax(self):\n    if len(self.__data) < 1:\n       raise Exception("Sorry, no numbers")\n\n    result = self.__data[1]\n    self.__data[1] = self.__data[len(self.__data) - 1]\n    self.__data.pop()\n    self.__siftDown(1)\n    return result\n')))),(0,l.kt)("h3",{id:"updatekeyi-newv"},"UpdateKey(i, newv)"),(0,l.kt)("p",null,"If the index i of the value is known, we can do the following simple strategy: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Simply update A","[i]"," = newv "),(0,l.kt)("li",{parentName:"ol"},"call both shiftUp(i) and shiftDown(i)",(0,l.kt)("br",{parentName:"li"}),"only at most one operation will be triggered.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"A[i] = newv; // let oldv = A[i]\nshiftup(i); // if newv > oldv\nshiftdown(i); // if newv < oldv\n")),(0,l.kt)("h3",{id:"deletei"},"Delete(i)"),(0,l.kt)("p",null,"Let A","[i]"," become the new max one and fix the Heap, then ExtractMax()."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"A[i] = A[1]+1; \nsiftUp(i); // new max/root\nExtractMax(); // now easy to delete\n")),(0,l.kt)("h2",{id:"heap-sort"},"Heap Sort"),(0,l.kt)("p",null,"HeapSort() operation (assuming the Binary Max Heap has been created in O(N)) is very easy.\nSimply call the O(log N) ExtractMax() operation N times. "),(0,l.kt)("p",null,"Simple Analysis: HeapSort() clearly runs in ",(0,l.kt)("strong",{parentName:"p"},"O(N log N)"),"\n\u2014 an optimal comparison-based sorting algorithm."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Sort(nums []int) []int {\n  h := NewHeap()\n  h.Create(nums)\n  result := make([]int, len(nums))\n  for i := len(nums) - 1; i >= 0; i-- {\n    result[i], _ = h.ExtractMax()\n  }\n  return result\n}\n"))),(0,l.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  static sort(nums) {\n    let h = new Heap(nums)\n    let result = new Array(nums.length)\n    for (let i = nums.length - 1; i >= 0; i--)\n      result[i] = h.extractMax()\n    return result\n  }\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"  static sort(nums: Array<number>): Array<number> {\n    let h = new Heap(nums)\n    let result = new Array(nums.length)\n    for (let i = nums.length - 1; i >= 0; i--)\n      result[i] = h.extractMax()\n    return result\n  }\n"))),(0,l.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"  @classmethod\n  def sort(cls, nums):\n    h = Heap(nums)\n    result = [None] * len(nums)\n    for i in range(len(nums) - 1, -1, -1):\n      result[i] = h.extractMax()\n    return result\n")))),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("p",null,"\u9019\u6b21\u7279\u5225\u4f7f\u7528\u985e\u5225\u4f86\u5be6\u4f5c Binary Heap.\nHeap \u4e2d siftUp / siftDown \u7684\u64cd\u4f5c\u6027\u8cea\u8f03\u504f\u5411 class \u5167 private method.\nInsert / ExtractMax / UpdateKey / Delete \u662f\u504f\u5411 public method \u7684\u64cd\u4f5c.\n\u800c HeapSort \u5247\u975e\u5e38\u9069\u5408\u7528 class methos \u4f86\u5be6\u4f5c."),(0,l.kt)("p",null,"\u8d81\u9019\u6a5f\u6703\u7df4\u7fd2 Go / JS / Python \u5e7e\u7a2e\u8a9e\u8a00\u4e2d\u7684\u985e\u5225\u5beb\u6cd5\u3121.\nOOP \u7684\u89c0\u5ff5\u548c\u80fd\u529b\u5728\u5c08\u6848\u958b\u767c\u5f88\u5be6\u7528, \u719f\u6089\u5982\u4f55\u5be6\u4f5c\u6216\u6a21\u64ec OOP \u7684\u64cd\u4f5c\u4ee5\u53ca\u76f8\u95dc\u9650\u5236,\n\u662f\u91cd\u8981\u7684\u57fa\u790e."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("h3",{id:"heap"},"Heap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://visualgo.net/en/heap"},"Binary Heap (Priority Queue) - VisuAlgo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34329942"},"algorithm - siftUp and siftDown operation in heap for heapifying an array - Stack Overflow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/9755721/"},"algorithm - How can building a heap be O(n) time complexity? - Stack Overflow"))),(0,l.kt)("h3",{id:"class-\u985e\u5225"},"Class \u985e\u5225"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pjchender.dev/javascript/js-class/"},"[JS] JavaScript \u985e\u5225\uff08Class\uff09 | PJCHENder \u672a\u6574\u7406\u7b46\u8a18")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://willh.gitbook.io/typescript-tutorial/advanced/class"},"\u985e\u5225 - TypeScript \u65b0\u624b\u6307\u5357")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://yltang.net/tutorial/python/15/"},"\u7b2c 15 \u7ae0 \u7269\u4ef6\u8207\u985e\u5225 - Python")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.learncodewithmike.com/2020/01/python-class.html"},"[Python\u7269\u4ef6\u5c0e\u5411]\u6dfa\u8ac7Python\u985e\u5225(Class)"))))}m.isMDXComponent=!0}}]);