"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[2656],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),o=n(2389),i=n(7392),u=n(7094),c=n(2466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,g=e.values,f=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,G=(0,r.useState)(y),O=G[0],E=G[1],x=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=T[f];null!=P&&P!==O&&k.some((function(e){return e.value===P}))&&E(P)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==O&&(S(t),E(a),null!=f&&N(f,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;n=null!=(l=x[o])?l:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(5488),i=n(5162),u=["components"],c={title:"Get Started",description:"Get Started",tags:["Go","newbie"],date:new Date("2022-05-24T16:00:00.000Z"),image:"https://i.imgur.com/mErPwqL.png"},s="[Go] Get started with Go",d={unversionedId:"golang/go_get-started",id:"golang/go_get-started",title:"Get Started",description:"Get Started",source:"@site/docs/golang/go_get-started.md",sourceDirName:"golang",slug:"/golang/go_get-started",permalink:"/moco/docs/golang/go_get-started",draft:!1,tags:[{label:"Go",permalink:"/moco/docs/tags/go"},{label:"newbie",permalink:"/moco/docs/tags/newbie"}],version:"current",frontMatter:{title:"Get Started",description:"Get Started",tags:["Go","newbie"],date:"2022-05-24T16:00:00.000Z",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"tutorialSidebar",previous:{title:"Goroutine",permalink:"/moco/docs/golang/go-tour/go-tour_goroutine"},next:{title:"go-std-lib_strconv",permalink:"/moco/docs/golang/package/go-std-lib_strconv"}},p={},m=[{value:"Get started",id:"get-started",level:2},{value:"Helo World",id:"helo-world",level:3},{value:"External package",id:"external-package",level:3},{value:"relative path",id:"relative-path",level:4},{value:"Environment",id:"environment",level:2},{value:"GOPATH",id:"gopath",level:3},{value:"IDE Setting",id:"ide-setting",level:2},{value:"Goland",id:"goland",level:3},{value:"VS Code",id:"vs-code",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"See Also",id:"see-also",level:2},{value:"Get Started",id:"get-started-1",level:3},{value:"Module",id:"module",level:3}],g={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"go-get-started-with-go"},"[Go]"," Get started with Go"),(0,l.kt)("h2",{id:"get-started"},"Get started"),(0,l.kt)("h3",{id:"helo-world"},"Helo World"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// hello.go\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("hello world")\n}\n')),(0,l.kt)("p",null,"Go CLI \u57f7\u884c\u7684\u5207\u5165\u9ede ",(0,l.kt)("inlineCode",{parentName:"p"},"package main")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"func main()"),", \u5426\u5247\u6703\u5831\u932f\u5982\u4e0b."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run ./main.go\npackage command-line-arguments is not a main package\n\n$ go run ./main.go\n# command-line-arguments\nruntime.main_main\xb7f: function main is undeclared in the main package\n")),(0,l.kt)("h3",{id:"external-package"},"External package"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"init mod",label:"init mod",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go mod init example/hello\ngo: creating new go.mod: module example/hello\n\n$ cat go.mod\nmodule example/hello\n\ngo 1.18\n"))),(0,l.kt)(i.Z,{value:"main.go",label:"main.go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "example/hello/foo"\n    "fmt"\n)\n\nfunc main() {\n    fmt.Println(foo.Foo())\n}\n'))),(0,l.kt)(i.Z,{value:"foo/foo.go",label:"foo/foo.go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package foo\n\nfunc Foo() string {\n    return "this is foo package unfer hello"\n}\n'))),(0,l.kt)(i.Z,{value:"test",label:"test",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run ./main.go\nthis is foo func\n")))),(0,l.kt)("h4",{id:"relative-path"},"relative path"),(0,l.kt)("p",null,"Go \u540c\u8cc7\u6599\u593e\u5167\u6240\u6709\u6a94\u6848\u5c6c\u65bc\u76f8\u540c package, \u82e5\u8981\u62c6\u6210\u4e0d\u540c package \u5fc5\u9808\u653e\u7f6e\u4e0d\u540c\u8cc7\u6599\u593e.",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728 Go Module \u6b63\u5f0f\u5c0e\u5165\u5f8c, Go \u4e0d\u518d\u652f\u63f4\u76f8\u5c0d\u8def\u5f91\u5f15\u7528 package,\npackage \u9700\u653e\u5728 Module \u4e4b\u4e0b, \u900f\u904e Module \u532f\u5165.\n\u76f4\u63a5\u5920\u904e\u76f8\u5c0d\u8def\u5f91\u532f\u5165 package \u6703\u5831\u932f\u5982\u4e0b: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ go run ./main.go\nmain.go:4:2: "./foo" is relative, but relative import paths are not supported in module mode\n')),(0,l.kt)("h2",{id:"environment"},"Environment"),(0,l.kt)("h3",{id:"gopath"},"GOPATH"),(0,l.kt)("p",null,"...TBD..."),(0,l.kt)("h2",{id:"ide-setting"},"IDE Setting"),(0,l.kt)("h3",{id:"goland"},"Goland"),(0,l.kt)("p",null,"...TBD..."),(0,l.kt)("h3",{id:"vs-code"},"VS Code"),(0,l.kt)("p",null,"...TBD..."),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("p",null,"\u5f9e\u982d\u958b\u59cb\u4e86\u89e3\u8a9e\u8a00\u6709\u500b\u660e\u986f\u597d\u8655.\n\u904e\u53bb\u5728\u516c\u53f8\u958b\u767c\u7dad\u8b77\u5c08\u6848\u6642, \u6709\u6642\u6703\u592a\u904e\u65bc follow \u5c08\u6848 SOP, \u4ee5\u53ca\u76f8\u95dc Scripts,\n\u5373\u4f7f\u9019\u4e9b SOP scripts \u662f\u81ea\u5df1\u7de8\u5beb\u7dad\u8b77,\n\u4f46\u9577\u671f\u4e0b\u4f86\u6709\u4e9b\u8173\u672c\u5167\u5bb9\u50c5\u70ba\u4e86\u89e3\u6c7a\u7576\u4e0b\u554f\u984c\u800c\u4fee\u6539, \u5ffd\u7565\u4e86\u8a9e\u8a00\u80cc\u5f8c\u57fa\u790e\u7684\u898f\u7bc4\u7b49.\n\u800c\u81ea\u5df1\u904e\u65bc\u7fd2\u6163\u4f7f\u7528\u9019\u4e9b\u8173\u672c, \u4e5f\u5fd8\u4e86\u5982\u4f55 From scratch."),(0,l.kt)("p",null,"\u91cd\u65b0\u4e86\u89e3\u8a9e\u8a00\u57fa\u790e\u898f\u7bc4\u5f8c, \u4e5f\u8a31\u65e5\u5f8c\u8981\u518d\u88fd\u4f5c SCP scripts,\n\u6703\u66f4\u6e05\u695a\u81ea\u5df1\u5728\u505a\u4e9b\u4ec0\u9ebc, \u6e05\u695a\u5fc5\u8981\u8207\u4e0d\u5fc5\u8981, \u5beb\u51fa\u66f4\u5b8c\u5584\u7684 SOP scripts."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("h3",{id:"get-started-1"},"Get Started"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://go.dev/doc/tutorial/getting-started"},"Tutorial: Get started with Go - The Go Programming Language"))),(0,l.kt)("h3",{id:"module"},"Module"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://iter01.com/638052.html"},"Go\u8a9e\u8a00\u91cd\u65b0\u958b\u59cb\uff0cGo Modules \u7684\u524d\u4e16\u4eca\u751f\u8207\u57fa\u672c\u4f7f\u7528 | IT\u4eba")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10217414"},"go modules \u7d42\u65bc\u4e0d\u6703\u518d\u88abGOPATH\u7d81\u6b7b\u4e86 - iT \u90a6\u5e6b\u5fd9::\u4e00\u8d77\u5e6b\u5fd9\u89e3\u6c7a\u96e3\u984c\uff0c\u62ef\u6551 IT \u4eba\u7684\u4e00\u5929")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zamhuang.medium.com/4185df23442a"},"\u3010Golang\u3011\u9084\u5728\u628a library \u653e\u5728\u5c08\u6848\u88e1\uff1f\u8a72\u8ddf\u4e0a\u4f7f\u7528 Go Module \u4e86\uff01 | by Zam Huang | Medium"))))}f.isMDXComponent=!0}}]);