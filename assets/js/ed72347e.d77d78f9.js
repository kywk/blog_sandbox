"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[7224],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),b=r,m=f["".concat(u,".").concat(b)]||f[b]||p[b]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],c={title:"The Future of the GitLab Web IDE",description:"2022.05.24 The Future of the GitLab Web IDE",authors:"kywk",tags:["gitlab"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},u=void 0,l={permalink:"/moco/news/2022/05/24/gitlab-web-ide",source:"@site/news/2022/05-24-gitlab-web-ide.md",title:"The Future of the GitLab Web IDE",description:"2022.05.24 The Future of the GitLab Web IDE",date:"2022-05-24T00:00:00.000Z",formattedDate:"2022\u5e745\u670824\u65e5",tags:[{label:"gitlab",permalink:"/moco/news/tags/gitlab"}],readingTime:1.33,truncated:!0,authors:[{name:"kywk",title:"Site Maintainer",url:"https://github.io/kywk",imageURL:"https://github.com/kywk.png",key:"kywk"}],frontMatter:{title:"The Future of the GitLab Web IDE",description:"2022.05.24 The Future of the GitLab Web IDE",authors:"kywk",tags:["gitlab"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},nextItem:{title:"Awesome Resources",permalink:"/moco/news/awesome"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/blog/2022/05/23/the-future-of-the-gitlab-web-ide/"},"GitLab \u767c\u8868\u65b0 WebIDE \u7684\u7279\u8272\u8207\u6574\u5408\u8aaa\u660e"),",\n\u662f\u4ee5 VS Code \u6838\u5fc3\u5f15\u64ce ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco"),"\n\u958b\u767c\u6574\u5408\u800c\u4f86\u7684."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Web IDE is built on top of the fantastic open source project, Monaco.\nWhat made Monaco a great choice as the foundation of the Web IDE\nis also what makes it more difficult to address all these concerns holistically.\nMonaco is just that: a foundation. We have to implement all these workflows\nand features ourselves. Meanwhile, another open source project has been\nlaser-focused on delivering a lovable IDE on top of Monaco.")),(0,a.kt)("p",null,"VS Code \u78ba\u5be6\u662f Microsoft \u8fd1\u5e74\u4f86\u6700\u53d7\u6b61\u8fce\u80af\u5b9a\u7684\u7522\u54c1\u5c08\u6848.\n\u4ee5 VS Code \u70ba\u57fa\u790e\u6574\u5408\u958b\u767c\u5176\u5be6\u5408\u7406. \u4f46\u56e0\u5fae\u8edf\u540c\u6642\u64c1\u6709 GitHub, \u6574\u4ef6\u4e8b\u8b8a\u5f97\u6709\u8da3."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's interesting to me that GitLab is adopting a Microsoft product\n(VS Code) and Microsoft owns a significant competitor in GitHub.\nNothing intelligent to say about that other than to wish\nI'd been a fly on the wall for the discussions about that.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=31487079"},"Hacker News"),"\n\u4e0a\u8a31\u591a\u8a0e\u8ad6\u70ba\u4f55 GitHub \u8eab\u70ba GitLab \u6700\u5927\u7684\u5c0d\u624b, GitLab \u537b\u9078\u7528\u4e86\u5c0d\u624b\u6bcd\u516c\u53f8\u7684\u5c08\u6848\u4f5c\u70ba\u6838\u5fc3\u529f\u80fd.\n\u9806\u4fbf\u628a\u66fe\u7d93\u88ab GitHub \u865f\u7a31\u7684 21 \u4e16\u7d00 IDE - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/atom/atom"},"Atom")," \u6293\u51fa\u4f86\u97ad\u5c4d\u4e00\u4e0b."))}b.isMDXComponent=!0}}]);