"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[9079],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,y=f["".concat(i,".").concat(m)]||f[m]||u[m]||l;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),l=(n(7294),n(3905)),a=["components"],s={title:"TSC Error",tags:["TypeScript"],date:new Date("2022-05-27T00:00:00.000Z"),categories:["typescript"]},i="[TypeScript] tsc Error Troubleshooting",p={unversionedId:"TypeScript/ts_tsc-error",id:"TypeScript/ts_tsc-error",title:"TSC Error",description:"\u672c\u7bc7\u96dc\u8a18\u6536\u9304\u958b\u767c\u904e\u7a0b\u4e2d tsc error \u53ca\u554f\u984c\u6392\u9664...",source:"@site/docs/TypeScript/ts_tsc-error.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts_tsc-error",permalink:"/moco/docs/TypeScript/ts_tsc-error",draft:!1,tags:[{label:"TypeScript",permalink:"/moco/docs/tags/type-script"}],version:"current",frontMatter:{title:"TSC Error",tags:["TypeScript"],date:"2022-05-27T00:00:00.000Z",categories:["typescript"]},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/moco/docs/TypeScript/ts_get-started"},next:{title:"Python",permalink:"/moco/docs/category/python"}},c={},u=[{value:"TS2304: Cannot find name &#39;process&#39;",id:"ts2304-cannot-find-name-process",level:2},{value:"TS2345: Type &#39;T1&#39; is not assignable to type &#39;T2&#39;",id:"ts2345-type-t1-is-not-assignable-to-type-t2",level:2},{value:"null",id:"null",level:3},{value:"TS2531: Object is possibly &#39;null&#39;",id:"ts2531-object-is-possibly-null",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"typescript-tsc-error-troubleshooting"},"[TypeScript]"," tsc Error Troubleshooting"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u96dc\u8a18\u6536\u9304\u958b\u767c\u904e\u7a0b\u4e2d tsc error \u53ca\u554f\u984c\u6392\u9664...")),(0,l.kt)("h2",{id:"ts2304-cannot-find-name-process"},"TS2304: Cannot find name 'process'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"error TS2304: Cannot find name 'process'\n")),(0,l.kt)("p",null,"You need to make sure that the type definitions for Node are available.\nThe way to do this depends on which version of TypeScript you are using."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install --save-dev @types/node\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ref: ",(0,l.kt)("a",{parentName:"em",href:"https://stackoverflow.com/questions/35551185/read-arguments-from-command-line-error-ts2304-cannot-find-name-process"},"javascript - Read arguments from command line - error TS2304: Cannot find name 'process' - Stack Overflow"))),(0,l.kt)("h2",{id:"ts2345-type-t1-is-not-assignable-to-type-t2"},"TS2345: Type 'T1' is not assignable to type 'T2'"),(0,l.kt)("h3",{id:"null"},"null"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ref: ",(0,l.kt)("a",{parentName:"em",href:"https://bobbyhadz.com/blog/typescript-type-null-is-not-assignable-to-type"},"Solve - Type 'null' is not assignable to type in TypeScript | bobbyhadz"))),(0,l.kt)("h2",{id:"ts2531-object-is-possibly-null"},"TS2531: Object is possibly 'null'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"error TS2531: Object is possibly 'null'.\n")),(0,l.kt)("p",null,"ts \u5728\u7de8\u8b6f\u6642\u8a3a\u65b7\u5230\u7269\u4ef6\u53ef\u80fd\u6703\u7232 null, \u6240\u4ee5\u7d66\u51fa\u4e86\u9019\u6a23\u4e00\u500b\u63d0\u793a: \u5c0d\u8c61\u53ef\u80fd\u7232 null."),(0,l.kt)("p",null,"\u96d6\u53ef\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"strictNullChecks = false")," \u8b93\u7de8\u8b6f\u5668\u4e0d\u6aa2\u67e5 null,\n\u4f46\u5c08\u6848\u7ba1\u7406\u4e0a\u9084\u662f\u61c9\u8a72\u56b4\u8b39\u4e00\u4e9b\u770b\u5f85."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'files is defined to be FileList | null so it can be null.\nYou should either check for null (using an if) or\nuse a "Non-null assertion operator" (!) if you are sure it is not null:')),(0,l.kt)("p",null,"\u5982\u679c\u7a0b\u5f0f\u6d41\u7a0b\u4e2d, \u7269\u4ef6\u53ef\u80fd\u70ba null \u7684\u8a71, \u61c9\u8a72\u8981\u5728\u8b80\u53d6\u7269\u4ef6\u503c\u4e4b\u524d, \u5148\u5224\u65b7\u662f\u5426\u70ba null."),(0,l.kt)("p",null,"\u82e5\u7a0b\u5f0f\u6d41\u7a0b\u53ef\u4ee5\u78ba\u5b9a\u7269\u4ef6\u4e0d\u6703\u662f null \u7684\u8a71, \u89e3\u6c7a\u65b9\u5f0f\u662f\u5728\u7269\u4ef6\u4e4b\u5f8c\u52a0\u4e00\u500b ! .\n\u9a5a\u5606\u865f\u5728 ts \u7de8\u8b6f\u5668\u4e2d, \u662f\u7269\u4ef6 not null \u7684\u65b7\u8a00\u64cd\u4f5c\u7b26,\n\u7de8\u8b6f\u5668\u770b\u5230\u9019\u500b\u7b26\u865f, \u4e0d\u6703\u5728\u7de8\u8b6f\u6642\u6aa2\u67e5\u662f\u5426\u70ba null."),(0,l.kt)("p",null,"! \u53ea\u662f\u544a\u8a34\u7de8\u8b6f\u5668\u5728\u7de8\u8b6f\u4e0d\u8981\u6aa2\u67e5\u662f\u5426\u53ef\u80fd\u70ba null,\n\u958b\u767c\u6642\u8981\u78ba\u8a8d\u6d41\u7a0b\u4e0a\u4e0d\u6703\u9020\u6210 null \u624d\u53ef\u4f7f\u7528, \u5426\u5247\u5be6\u969b\u57f7\u884c\u9084\u662f\u6703\u51fa\u932f."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ref: ",(0,l.kt)("a",{parentName:"em",href:"https://stackoverflow.com/questions/49431880/ts2531-object-is-possibly-null"},"angular - TS2531: Object is possibly 'null' - Stack Overflow"))))}m.isMDXComponent=!0}}]);