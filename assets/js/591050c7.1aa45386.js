"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[1539],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),o=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},m=function(n){var e=o(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,s=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),c=o(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return t?r.createElement(f,u(u({ref:e},m),{},{components:t})):r.createElement(f,u({ref:e},m))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,u=new Array(l);u[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:a,u[1]=i;for(var o=2;o<l;o++)u[o]=t[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(7294),a=t(6010),l="tabItem_Ymn6";function u(n){var e=n.children,t=n.hidden,u=n.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,u),hidden:t},e)}},5488:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(3117),a=t(7294),l=t(6010),u=t(2389),i=t(7392),s=t(7094),o=t(2466),m="tabList__CuJ",p="tabItem_LNqP";function c(n){var e,t,u=n.lazy,c=n.block,d=n.defaultValue,f=n.values,g=n.groupId,h=n.className,b=a.Children.map(n.children,(function(n){if((0,a.isValidElement)(n)&&"value"in n.props)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=f?f:b.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),k=(0,i.l)(x,(function(n,e){return n.value===e.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(e=null!=d?d:null==(t=b.find((function(n){return n.props.default})))?void 0:t.props.value)?e:b[0].props.value;if(null!==y&&!x.some((function(n){return n.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+x.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,s.U)(),v=j.tabGroupChoices,I=j.setTabGroupChoices,N=(0,a.useState)(y),T=N[0],w=N[1],S=[],Z=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=v[g];null!=A&&A!==T&&x.some((function(n){return n.value===A}))&&w(A)}var O=function(n){var e=n.currentTarget,t=S.indexOf(e),r=x[t].value;r!==T&&(Z(e),w(r),null!=g&&I(g,String(r)))},E=function(n){var e,t=null;switch(n.key){case"ArrowRight":var r,a=S.indexOf(n.currentTarget)+1;t=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var l,u=S.indexOf(n.currentTarget)-1;t=null!=(l=S[u])?l:S[S.length-1]}null==(e=t)||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},x.map((function(n){var e=n.value,t=n.label,u=n.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(n){return S.push(n)},onKeyDown:E,onFocus:O,onClick:O},u,{className:(0,l.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":T===e})}),null!=t?t:e)}))),u?(0,a.cloneElement)(b.filter((function(n){return n.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(n,e){return(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==T})}))))}function d(n){var e=(0,u.Z)();return a.createElement(c,(0,r.Z)({key:String(e)},n))}},4901:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),u=t(5488),i=t(5162),s=["components"],o={title:"Sorting",tags:["study","algorithm","cs","leetcode"],date:new Date("2022-05-26T00:00:00.000Z"),categories:["algorithm"]},m=void 0,p={unversionedId:"study/cs_algorithm/sorting",id:"study/cs_algorithm/sorting",title:"Sorting",description:"Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix) - VisuAlgo",source:"@site/docs/study/cs_algorithm/sorting.md",sourceDirName:"study/cs_algorithm",slug:"/study/cs_algorithm/sorting",permalink:"/moco/docs/study/cs_algorithm/sorting",draft:!1,tags:[{label:"study",permalink:"/moco/docs/tags/study"},{label:"algorithm",permalink:"/moco/docs/tags/algorithm"},{label:"cs",permalink:"/moco/docs/tags/cs"},{label:"leetcode",permalink:"/moco/docs/tags/leetcode"}],version:"current",frontMatter:{title:"Sorting",tags:["study","algorithm","cs","leetcode"],date:"2022-05-26T00:00:00.000Z",categories:["algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Binary Heap",permalink:"/moco/docs/study/cs_algorithm/heap"},next:{title:"[IEEE] TinyLFU",permalink:"/moco/docs/study/cs-os_tilylfu"}},c={},d=[{value:"Bubble",id:"bubble",level:2},{value:"Selection",id:"selection",level:2},{value:"Insertion",id:"insertion",level:2},{value:"Merge",id:"merge",level:2},{value:"Quick (Random Quick Sort)",id:"quick-random-quick-sort",level:2},{value:"Counting",id:"counting",level:2}],f={toc:d};function g(n){var e=n.components,t=(0,a.Z)(n,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://visualgo.net/en/sorting"},"Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix) - VisuAlgo")),(0,l.kt)("h2",{id:"bubble"},"Bubble"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Compare a pair of adjacent items (a, b),"),(0,l.kt)("li",{parentName:"ol"},"Swap that pair if the items are out of order (in this case, when a > b),"),(0,l.kt)("li",{parentName:"ol"},"Repeat Step 1 and 2 until we reach the end of array\n(the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing),"),(0,l.kt)("li",{parentName:"ol"},"By now, the largest item will be at the last position.\nWe then reduce N by 1 and repeat Step 1 until we have N = 1.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"time complex: O(N^2) ")),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Bubble(nums []int) []int {\n    len := len(nums)\n    for i := 0; i < len-1; i++ {\n        for j := 0; j < len-1-i; j++ {\n            if nums[j] > nums[j+1] {\n                nums[j], nums[j+1] = nums[j+1], nums[j]\n            }\n        }\n    }\n    return nums\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (nums) {\n  for (let i = 0; i < nums.length - 1; i++) {\n    for (let j = 1; j < nums.length - i; j++) {\n      if (nums[j - 1] > nums[j]) {\n        let tmp = nums[j - 1]\n        nums[j - 1] = nums[j]\n        nums[j] = tmp\n      }\n    }\n  }\n  return nums\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function Bubble (nums: Array<number>): Array<number> {\n  for (let i = nums.length; i > 0; i--) {\n    for (let j = 1; j < i; j++) {\n      if (nums[j - 1] > nums[j]) {\n        let tmp = nums[j - 1]\n        nums[j - 1] = nums[j]\n        nums[j] = tmp\n      }\n    }\n  }\n  return nums\n}\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sort(nums):\n  for i in range(len(nums)):\n    for j in range(0, len(nums) - i - 1):\n      if nums[j] > nums[j + 1]:\n        tmp = nums[j]\n        nums[j] = nums[j + 1]\n        nums[j + 1] = tmp\n  return nums\n")))),(0,l.kt)("h2",{id:"selection"},"Selection"),(0,l.kt)("p",null,"Given an array of N items and L = 0, Selection Sort will:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Find the position X of the smallest item in the range of ","[L...N\u22121]",","),(0,l.kt)("li",{parentName:"ol"},"Swap X-th item with the L-th item,"),(0,l.kt)("li",{parentName:"ol"},"Increase the lower-bound L by 1 and repeat Step 1 until L = N-2.")),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Selection(nums []int) []int {\n    len := len(nums)\n    for i := len-1; i > 0; i-- {\n        max := nums[0]\n        minIdx := 0\n        for j := 0; j < i; j++ {\n            if nums[j] > max {\n                max = nums[j]\n                minIdx = j\n            }\n        }\n        nums[i], nums[maxIdx] = nums[maxIdx], nums[i]\n    }\n    return nums\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (nums) {\n  for (let i = nums.length - 1; i > 0; i--) {\n    let max = nums[0]\n    let idx = 0\n    for (let j = 0; j <= i; j++) {\n      if (nums[j] > max) {\n        max = nums[j]\n        idx = j\n      }\n    }\n    nums[idx] = nums[i]\n    nums[i] = max\n  }\n  return nums\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function Selection (nums: Array<number>): Array<number> {\n  for (let i = nums.length - 1; i >= 0; i--) {\n    let max = nums[0]\n    let idx = 0\n    for (let j = 0; j <= i; j++) {\n      if (nums[j] > max) {\n        max = nums[j]\n        idx = j\n      }\n    }\n    nums[idx] = nums[i]\n    nums[i] = max\n  }\n  return nums\n}\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sort(nums):\n  for i in range (len(nums) - 1, 0, -1):\n    maxValue = nums[0]\n    idx = 0\n    for j in range(0, i + 1):\n      if nums[j] > maxValue:\n        maxValue = nums[j]\n        idx = j\n    nums[idx] = nums[i]\n    nums[i] = maxValue\n  return nums\n")))),(0,l.kt)("h2",{id:"insertion"},"Insertion"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start with one card in your hand,"),(0,l.kt)("li",{parentName:"ol"},"Pick the next card and insert it into its proper sorted order,"),(0,l.kt)("li",{parentName:"ol"},"Repeat previous step for all cards.")),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Insertion(nums []int) []int {\n    len := len(nums)\n    for i := 1; i < len; i++ {\n        for j := i; j > 0; j-- {\n            if nums[j-1] > nums[j] {\n                nums[j-1], nums[j] = nums[j], nums[j-1]\n            } else {\n                continue\n            }\n        }\n    }\n    return nums\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (nums) {\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = i; j >= 0; j--) {\n      if (nums[j] < nums[j - 1]) {\n        let tmp = nums[j]\n        nums[j] = nums[j - 1]\n        nums[j - 1] = tmp\n      }\n    }\n  }\n  return nums\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function Insertion (nums: Array<number>): Array<number> {\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = i; j > 0; j--) {\n      if (nums[j - 1] > nums[j]) {\n        let tmp = nums[j]\n        nums[j] = nums[j - 1]\n        nums[j - 1] = tmp\n      }\n    }\n  }\n  return nums\n}\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sort(nums):\n  for i in range(1, len(nums)):\n    for j in range(i, 0, -1):\n      if nums[j - 1] > nums[j]:\n        tmp = nums[j - 1]\n        nums[j - 1] = nums[j]\n        nums[j] = tmp\n  return nums\n")))),(0,l.kt)("h2",{id:"merge"},"Merge"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Merge each pair of individual element (which is by default, sorted) into sorted arrays of 2 elements,"),(0,l.kt)("li",{parentName:"ol"},"Merge each pair of sorted arrays of 2 elements into sorted arrays of 4 elements,\nRepeat the process...,"),(0,l.kt)("li",{parentName:"ol"},"Final step: Merge 2 sorted arrays of N/2 elements (for simplicity of this discussion, we assume that N is even) to obtain a fully sorted array of N elements.")),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Merge(nums []int) []int {\n    length := len(nums)\n    if length <= 1 {\n        return nums\n    }\n    middle := int(length / 2)\n    return merge(Merge(nums[:middle]), Merge(nums[middle:]))\n}\n\nfunc merge(left, right []int) []int {\n    result := make([]int, len(left)+len(right))\n\n    i := 0\n    for len(left) > 0 && len(right) > 0 {\n        if left[0] < right[0] {\n            result[i] = left[0]\n            left = left[1:]\n        } else {\n            result[i] = right[0]\n            right = right[1:]\n        }\n        i++\n    }\n\n    for j := 0; j < len(left); j++ {\n        result[i] = left[j]\n        i++\n    }\n    for j := 0; j < len(right); j++ {\n        result[i] = right[j]\n        i++\n    }\n\n    return result\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (nums) {\n  return sort(nums)\n}\n\nfunction sort (nums) {\n  if (nums.length <= 1) {\n    return nums\n  }\n\n  let middle = Math.floor(nums.length / 2)\n\n  return merge(sort(nums.slice(0, middle)), sort(nums.slice(middle, nums.length)))\n}\n\nfunction merge (left, right) {\n  let result = []\n  while ((left.length !== 0) && (right.length !== 0)) {\n    if (left[0] < right[0]) {\n      result.push(left[0])\n      left = left.slice(1)\n    } else {\n      result.push(right[0])\n      right = right.slice(1)\n    }\n  }\n\n  result = result.concat(left)\n  result = result.concat(right)\n  return result\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function Merge (nums: Array<number>): Array<number> {\n  return sort(nums)\n}\n\nfunction sort (nums: Array<number>): Array<number> {\n  if (nums.length <= 1)\n    return nums\n\n  let middle = Math.floor(nums.length / 2)\n\n  return merge(sort(nums.slice(0, middle)), sort(nums.slice(middle, nums.length)))\n}\n\nfunction merge (left: Array<number>, right: Array<number>): Array<number> {\n  let result: Array<number> = []\n\n  while ((left.length > 0) && (right.length > 0)) {\n    if (left[0] < right[0]) {\n      result.push(left[0])\n      left = left.slice(1)\n    } else {\n      result.push(right[0])\n      right = right.slice(1)\n    }\n  }\n\n  result = result.concat(left)\n  result = result.concat(right)\n  return result\n}\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sort(nums):\n  if len(nums) <= 1:\n    return nums\n\n  middle = len(nums) // 2\n  left = nums[:middle]\n  right = nums[middle:]\n\n  return merge(sort(left), sort(right))\n\ndef merge(left, right):\n  l = 0\n  r = 0\n  result = []\n\n  while l < len(left) and r < len(right):\n    if left[l] < right[r]:\n      result.append(left[l])\n      l += 1\n    else:\n      result.append(right[r])\n      r += 1\n\n  while l < len(left):\n    result.append(left[l])\n    l += 1\n  while r < len(right):\n    result.append(right[r])\n    r += 1\n\n  return result\n")))),(0,l.kt)("h2",{id:"quick-random-quick-sort"},"Quick (Random Quick Sort)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Divide step"),(0,l.kt)("br",{parentName:"li"}),"Choose an item p (known as the pivot)\nThen partition the items of a","[i..j]"," into three parts: a","[i..m-1]",", a","[m]",", and a","[m+1..j]",".\na","[i..m-1]"," (possibly empty) contains items that are smaller than (or equal to) p.\na","[m]"," = p, i.e., index m is the correct position for p in the sorted order of array a.\na","[m+1..j]"," (possibly empty) contains items that are greater than (or equal to) p.\nThen, recursively sort the two parts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Conquer step"),(0,l.kt)("br",{parentName:"li"}),"Don't be surprised... We do nothing :O!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Random Quick Sort"),(0,l.kt)("br",{parentName:"li"}),"Same as Quick Sort except just before executing the partition algorithm, it randomly select the pivot between a","[i..j]"," instead of always choosing a","[i]"," (or any other fixed index between ","[i..j]",") deterministically.")),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Quick(nums []int) []int {\n    quick(&nums, 0, len(nums)-1)\n    return nums\n}\n\nfunc quick(nums *[]int, pivotIdx, endIdx int) {\n    storeIdx := pivotIdx + 1\n    for i := pivotIdx + 1; i <= endIdx; i++ {\n        if (*nums)[i] < (*nums)[pivotIdx] {\n            (*nums)[i], (*nums)[storeIdx] = (*nums)[storeIdx], (*nums)[i]\n            storeIdx++\n        }\n    }\n    (*nums)[pivotIdx], (*nums)[storeIdx-1] = (*nums)[storeIdx-1], (*nums)[pivotIdx]\n\n    if pivotIdx < storeIdx-2 {\n        quick(nums, pivotIdx, storeIdx-2)\n    }\n    if storeIdx < endIdx {\n        quick(nums, storeIdx, endIdx)\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (nums) {\n  return sort(nums, 0, nums.length - 1)\n}\n\nfunction sort (nums, pivotIdx, endIdx) {\n  swap(nums, 0, Math.floor(Math.random() * (endIdx - pivotIdx + 1)))\n  let idx = pivotIdx + 1\n  for (let i = pivotIdx + 1; i <= endIdx; i++) {\n    if (nums[i] < nums[pivotIdx]) {\n      swap(nums, i, idx)\n      idx++\n    }\n  }\n  swap(nums, pivotIdx, idx - 1)\n\n  if (pivotIdx < idx - 2) {\n    sort(nums, pivotIdx, idx - 2)\n  }\n  if (idx < endIdx) {\n    sort(nums, idx, endIdx)\n  }\n\n  return nums\n}\n\nfunction swap (nums, i, j) {\n  let tmp = nums[i]\n  nums[i] = nums[j]\n  nums[j] = tmp\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function Quick (nums: Array<number>): Array<number> {\n  return sort(nums, 0, nums.length - 1)\n}\n\nfunction sort(nums: Array<number>, pivotIdx: number, endIdx: number): Array<number> {\n  let storeIdx = pivotIdx + 1\n  for (let i = storeIdx; i <= endIdx; i++) {\n    if (nums[i] < nums[pivotIdx]) {\n      swap(nums, i, storeIdx)\n      storeIdx++\n    }\n  }\n  swap(nums, pivotIdx, storeIdx - 1)\n\n  if (pivotIdx < storeIdx - 2)\n    sort(nums, pivotIdx, storeIdx -2)\n  if (storeIdx < endIdx)\n    sort(nums, storeIdx, endIdx)\n\n  return nums\n}\n\nfunction swap (nums: Array<number>, i: number, j: number) {\n  let tmp = nums[i]\n  nums[i] = nums[j]\n  nums[j] = tmp\n}\n"))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sort(nums):\n  return quickSort(nums, 0, len(nums) - 1)\n\ndef quickSort(nums, pivot, end):\n  store = pivot + 1\n  for i in range (store, end + 1):\n    if nums[pivot] > nums[i]:\n      swap(nums, i, store)\n      store += 1\n  swap(nums, pivot, store - 1)\n\n  if pivot < store - 2:\n    quickSort(nums, pivot, store - 2)\n  if store < end:\n    quickSort(nums, store, end)\n\n  return nums\n\ndef swap(nums, i, j):\n  tmp = nums[i]\n  nums[i] = nums[j]\n  nums[j] = tmp\n")))),(0,l.kt)("h2",{id:"counting"},"Counting"),(0,l.kt)("p",null,"Assumption: If the items to be sorted are Integers with small range, we can count the frequency of occurrence of each Integer (in that small range) and then loop through that small range to output the items in sorted order."),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Counting(nums []int) []int {\n    length := len(nums)\n    max := 0\n    for i := 0; i < length; i++ {\n        if nums[i] > max {\n            max = nums[i]\n        }\n    }\n\n    count := make([]int, max+1)\n    for i := 0; i < length; i++ {\n        count[nums[i]]++\n    }\n\n    idx := 0\n    for i := 0; i < max+1; i++ {\n        for j := 0; j < count[i]; j++ {\n            nums[idx] = i\n            idx++\n        }\n    }\n    return nums\n}\n"))),(0,l.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (nums) {\n  let max = 0\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] > max)\n      max = nums[i]\n  }\n\n  let count = new Array(max + 1).fill(0)\n  for (let i = 0; i < nums.length; i++) {\n    count[nums[i]]++\n  }\n\n  let result = []\n  for (let i = 0; i <= max; i++) {\n    for (let j = 0; j < count[i]; j++) {\n      result.push(i)\n    }\n  }\n  return result\n}\n"))),(0,l.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function Counting (nums: Array<number>): Array<number> {\n  let max = 0\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] > max)\n      max = nums[i]\n  }\n\n  let counting: Array<number> = new Array(max + 1).fill(0)\n  for (let i = 0; i < nums.length; i++) {\n    counting[nums[i]]++\n  }\n\n  let result: Array<number> = []\n  for (let i = 0; i < counting.length; i++) {\n    for (let j = 0; j < counting[i]; j++) {\n      result.push(i)\n    }\n  }\n  return result\n}\n")))))}g.isMDXComponent=!0}}]);