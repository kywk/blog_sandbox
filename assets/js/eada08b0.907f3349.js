"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[9335],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,c(c({ref:e},u),{},{components:n})):r.createElement(d,c({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7124:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],i={title:"iftop \u5b89\u88dd\u5931\u6557\u89e3\u6c7a",tags:["Mac"],date:new Date("2020-12-07T08:48:04.000Z"),categories:["mac"]},l="[Mac] iftop \u5b89\u88dd\u5931\u6557\u8207\u89e3\u6c7a\u65b9\u5f0f",p={unversionedId:"mac/mac_install-iftop",id:"mac/mac_install-iftop",title:"iftop \u5b89\u88dd\u5931\u6557\u89e3\u6c7a",description:"\u6e2c\u8a66 Rclone \u4f3a\u670d\u6a5f\u7aef\u50b3\u8f38\u6642\u767c\u89ba macOS \u4e26\u7121 iftop \u6307\u4ee4, \u7fd2\u6163\u6027\u5730\u7528 brew \u5b89\u88dd\u4e86.",source:"@site/docs/mac/mac_install-iftop.md",sourceDirName:"mac",slug:"/mac/mac_install-iftop",permalink:"/moco/docs/mac/mac_install-iftop",draft:!1,tags:[{label:"Mac",permalink:"/moco/docs/tags/mac"}],version:"current",frontMatter:{title:"iftop \u5b89\u88dd\u5931\u6557\u89e3\u6c7a",tags:["Mac"],date:"2020-12-07T08:48:04.000Z",categories:["mac"]},sidebar:"tutorialSidebar",previous:{title:"\u522a\u9664 Installer \u6620\u50cf\u6a94",permalink:"/moco/docs/mac/mac-note_remove-installer-dmg"},next:{title:"shadowsocks setup",permalink:"/moco/docs/mac/mac_install-shadowsocks"}},u={},s=[],m={toc:s};function f(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mac-iftop-\u5b89\u88dd\u5931\u6557\u8207\u89e3\u6c7a\u65b9\u5f0f"},"[Mac]"," iftop \u5b89\u88dd\u5931\u6557\u8207\u89e3\u6c7a\u65b9\u5f0f"),(0,a.kt)("p",null,"\u6e2c\u8a66 Rclone \u4f3a\u670d\u6a5f\u7aef\u50b3\u8f38\u6642\u767c\u89ba macOS \u4e26\u7121 iftop \u6307\u4ee4, \u7fd2\u6163\u6027\u5730\u7528 brew \u5b89\u88dd\u4e86."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ brew install iftop\n...\n...\niftop requires root privileges so you will need to run `sudo iftop`.\nYou should be certain that you trust any software you grant root privileges.\n")),(0,a.kt)("p",null,"\u5b89\u88dd\u5b8c\u6210\u5f8c\u63d0\u793a iftop \u9019\u500b\u6307\u4ee4\u9700\u8981\u7528 root \u6b0a\u9650\u57f7\u884c."),(0,a.kt)("p",null,"\u7136\u800c\u4f7f\u7528 sudo iftop \u4e4b\u5f8c\u537b\u51fa\u73fe command not found \u7684\u932f\u8aa4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$sudo iftop\nsudo: iftop: command not found\n")),(0,a.kt)("p",null,"\u4e0a\u7db2\u67e5\u4e86\u67e5, \u770b\u5230\u9019\u7bc7 ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/hl449006540/article/details/86753227"},"\u4e00\u6b21macbook\u5b89\u88c5iftop\u5931\u8d25\u7684\u7ecf\u5386\u53ca\u89e3\u51b3\u65b9\u5f0f_\u5077\u61d2\u7684\u52a0\u83f2-CSDN\u535a\u5ba2"),(0,a.kt)("br",{parentName:"p"}),"\n","\u8ddf\u8457\u8a72\u6587\u6558\u8ff0\u4e00\u4e00\u78ba\u8a8d\u5f8c, \u767c\u89ba\u6211\u96fb\u8166\u4e0a\u53ea\u5b58\u5728\u8457 sbin \u4e0d\u5728 path \u74b0\u5883\u8b8a\u6578\u7684\u554f\u984c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo vim /etc/paths\n")),(0,a.kt)("p",null,"\u6253\u958b\u5f8c\u767c\u89ba\u88e1\u9762\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),", \u4f46\u6c92\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/sbin"),".",(0,a.kt)("br",{parentName:"p"}),"\n","\u624b\u52d5\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/sbin")," \u52a0\u5165, \u5b58\u6a94, \u91cd\u555f\u7d42\u7aef\u6a5f."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/ACtC-3dGa69B3UVBKt_TYzNt4-nTxPn8WbSfDK1nVlQ7PXOXDIwwV9pQbliqr6_vH69TMj-FOUY26BG_CiFLDHo6pXTGOE6dtYMESpYQD-8jucaCbnZ3qObEMzdsFbm62I_Omdvzz-Q_unLNo2CVRxQPkyDsAw=w1208-h894-no?authuser=0",alt:null})),(0,a.kt)("p",null,"\u6210\u529f.\n\u7d00\u9304\u4e4b."))}f.isMDXComponent=!0}}]);