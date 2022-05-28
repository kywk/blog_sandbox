"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[3982],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8432:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={title:"Git: Remote branch check",tags:["git"],image:"https://lh3.googleusercontent.com/pw/ACtC-3djQkrvy1aqdMWCu9oEoqndQVIiLE9G5ZtlbDehi8_UcJ9pYib4aWForkHYHSu1voqdKMnCowTwGh1MXSnGeNrFwXRaOUCMD8s4rCZ4IuzWXIZ2khQ8KiJyT6SYlbLrnYYqONwaPZxlR8rReuWWMO7SYw=w8000-no?authuser=0",date:new Date("2021-04-12T07:13:11.000Z"),categories:["git"]},l="[Git] check if remote branch exists on a given remote repository",s={unversionedId:"CLI/git_remote-branch-check",id:"CLI/git_remote-branch-check",title:"Git: Remote branch check",description:"\u5c08\u6848\u8981\u5e6b\u4e00\u4e9b\u820a\u9805\u76ee\u5c0e\u5165 GitLab CI/CD,",source:"@site/docs/CLI/git_remote-branch-check.md",sourceDirName:"CLI",slug:"/CLI/git_remote-branch-check",permalink:"/moco/docs/CLI/git_remote-branch-check",draft:!1,tags:[{label:"git",permalink:"/moco/docs/tags/git"}],version:"current",frontMatter:{title:"Git: Remote branch check",tags:["git"],image:"https://lh3.googleusercontent.com/pw/ACtC-3djQkrvy1aqdMWCu9oEoqndQVIiLE9G5ZtlbDehi8_UcJ9pYib4aWForkHYHSu1voqdKMnCowTwGh1MXSnGeNrFwXRaOUCMD8s4rCZ4IuzWXIZ2khQ8KiJyT6SYlbLrnYYqONwaPZxlR8rReuWWMO7SYw=w8000-no?authuser=0",date:"2021-04-12T07:13:11.000Z",categories:["git"]},sidebar:"tutorialSidebar",previous:{title:"Git: Add empty folder",permalink:"/moco/docs/CLI/git_add-empty-folder"},next:{title:"GNU: Tar \u52a0\u5bc6\u6253\u5305",permalink:"/moco/docs/CLI/gnu_encript-tarball"}},u={},p=[],m={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-check-if-remote-branch-exists-on-a-given-remote-repository"},"[Git]"," check if remote branch exists on a given remote repository"),(0,i.kt)("p",null,"\u5c08\u6848\u8981\u5e6b\u4e00\u4e9b\u820a\u9805\u76ee\u5c0e\u5165 GitLab CI/CD,\n\u6848\u4f8b\u662f\u6709\u591a\u500b\u9805\u76ee\u9700\u53c3\u8003\u53e6\u4e00\u500b Git \u5171\u7528\u5143\u4ef6\u9805\u76ee, \u901a\u5e38\u6703\u7528 Git SubModule \u4f86\u5f15\u7528\u5171\u7528\u5143\u4ef6\u9805\u76ee.\n\u4f46\u56e0\u820a\u9805\u76ee\u65e2\u6709\u958b\u767c\u6d41\u7a0b\u8207\u7248\u63a7\u7ba1\u7406\u5df2\u4e45, \u6709\u4e9b\u9700\u6c42\u5be6\u4f5c\u5c31\u96e3\u4ee5\u8f03\u6b63\u78ba\u7684\u65b9\u5f0f\u9032\u884c."),(0,i.kt)("p",null,"\u8a72\u6848\u4f8b\u4e2d\u7684\u7ba1\u7406\u6d41\u7a0b\u662f: \u958b\u767c\u6642, \u4e3b\u8981\u529f\u80fd\u548c\u5171\u7528\u5143\u4ef6\u9805\u76ee\u90fd\u5efa\u7acb\u76f8\u540c\u540d\u7a31\u7684 branch, (Ex: BR-A001)\n\u82e5\u5171\u7528\u5143\u4ef6\u6709\u66f4\u65b0. \u5247 build \u6642\u9700 checkout \u5171\u7528\u5143\u4ef6\u7684 BR-A001 \u5206\u652f\u9032\u884c\u7de8\u8b6f.\n\u82e5\u5171\u7528\u5143\u4ef6\u6c92\u6709\u66f4\u65b0, \u5247\u4ee5 master \u70ba\u4e3b."),(0,i.kt)("p",null,"\u56e0\u6b64, \u9700\u5728\u547d\u4ee4\u5217\u6a21\u5f0f\u4e0b\u77e5\u9053\u67d0\u500b\u7279\u5b9a\u540d\u7a31\u7684 Branch \u662f\u5426\u5b58\u5728."),(0,i.kt)("p",null,"\u627e\u4e86\u4e00\u4e0b, \u539f\u4f86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ls-remote")," \u914d\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"--exit-code")," \u53ef\u4ee5\u5f97\u77e5\u67d0\u500b branch-name \u662f\u5426\u5b58\u5728\u9060\u7aef repos \u4e0a.\n",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-ls-remote"},"\u5b98\u65b9\u8aaa\u660e")," \u5982\u4e0b:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'  --exit-code\nExit with status "2" when no matching refs are found in the remote repository. Usually the command exits with status "0" to indicate it successfully talked with the remote repository, whether it found any matching refs.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UNiX-like Shell")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git ls-remote --exit-code --heads origin <branch-that-exists-in-origin>\n=> return 0\n\n$ git ls-remote --exit-code --heads origin <branch-that-not-exists-origin>\n=> return 2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PowerShell")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$ if (git ls-remote --exit-code --heads origin <branch-that-exists-in-origin>) { $true } else \n{ $false }\n")),(0,i.kt)("p",null,"Ref: ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/8223906/how-to-check-if-remote-branch-exists-on-a-given-remote-repository"},"git - How to check if remote branch exists on a given remote repository? - Stack Overflow")))}h.isMDXComponent=!0}}]);