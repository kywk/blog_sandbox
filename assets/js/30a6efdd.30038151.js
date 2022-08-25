"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[1849],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),f=o,k=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1853:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={title:"\u639b\u8f09 EFI \u78c1\u5340",description:"Mount EFI",tags:["Mac","hackintosh"],hide_table_of_contents:!0,date:new Date("2021-05-14T06:56:41.000Z"),image:"https://lh3.googleusercontent.com/pw/ACtC-3fnLstA2rsbmbt0hI7IWqhfzOU17UzGFO6pEIfoC2_x_l526rOlZ3_p4RbWvVFWlT6uMlnPMzjCSxDILtn7Er5Ch0JPYJReE0BhmCXqJh6TsqrygLrL17dcz1Dyq3eJ7MZhHDqQhvWbX3zJvneD1CRanA=w800-no?authuser=0"},c="[Mac] \u639b\u8f09 EFI \u78c1\u5340\u65b9\u5f0f",u={unversionedId:"mac/hackintosh_mount-efi-partition",id:"mac/hackintosh_mount-efi-partition",title:"\u639b\u8f09 EFI \u78c1\u5340",description:"Mount EFI",source:"@site/docs/mac/hackintosh_mount-efi-partition.md",sourceDirName:"mac",slug:"/mac/hackintosh_mount-efi-partition",permalink:"/moco/docs/mac/hackintosh_mount-efi-partition",draft:!1,tags:[{label:"Mac",permalink:"/moco/docs/tags/mac"},{label:"hackintosh",permalink:"/moco/docs/tags/hackintosh"}],version:"current",frontMatter:{title:"\u639b\u8f09 EFI \u78c1\u5340",description:"Mount EFI",tags:["Mac","hackintosh"],hide_table_of_contents:!0,date:"2021-05-14T06:56:41.000Z",image:"https://lh3.googleusercontent.com/pw/ACtC-3fnLstA2rsbmbt0hI7IWqhfzOU17UzGFO6pEIfoC2_x_l526rOlZ3_p4RbWvVFWlT6uMlnPMzjCSxDILtn7Er5Ch0JPYJReE0BhmCXqJh6TsqrygLrL17dcz1Dyq3eJ7MZhHDqQhvWbX3zJvneD1CRanA=w800-no?authuser=0"},sidebar:"tutorialSidebar",previous:{title:"Catalina on MBA 2011",permalink:"/moco/docs/mac/hackintosh_mba2011"},next:{title:"iftop \u5b89\u88dd\u5931\u6557\u89e3\u6c7a",permalink:"/moco/docs/mac/mac_install-iftop"}},p={},s=[{value:"EFI \u7cfb\u7d71\u78c1\u5340",id:"efi-\u7cfb\u7d71\u78c1\u5340",level:2},{value:"diskutil",id:"diskutil",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:s};function f(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mac-\u639b\u8f09-efi-\u78c1\u5340\u65b9\u5f0f"},"[Mac]"," \u639b\u8f09 EFI \u78c1\u5340\u65b9\u5f0f"),(0,a.kt)("h2",{id:"efi-\u7cfb\u7d71\u78c1\u5340"},"EFI \u7cfb\u7d71\u78c1\u5340"),(0,a.kt)("p",null,"EFI\u7cfb\u7d71\u78c1\u789f\u5206\u5272\u5340\u662f\u4ec0\u9ebc?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"EFI \u7cfb\u7d71\u5206\u5272\u5340\u662f\u4e00\u500b FAT \u6216 FAT32 \u683c\u5f0f\u7684\u78c1\u789f\u5206\u5272\u5340. UEFI \u97cc\u9ad4\u53ef\u5f9e ESP \u52a0\u8f09 EFI \u555f\u52d5\u7a0b\u5f0f\u6216\u8005 EFI \u61c9\u7528\u7a0b\u5f0f."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-tw/%E7%B5%B1%E4%B8%80%E5%8F%AF%E5%BB%B6%E4%BC%B8%E9%9F%8C%E9%AB%94%E4%BB%8B%E9%9D%A2"},"\u7dad\u57fa\u767e\u79d1"))),(0,a.kt)("p",null,"EFI \u5206\u5272\u5340\u6709\u4ec0\u9ebc? \u5b83\u5305\u542b\u4e86 4 \u500b\u4e3b\u8981\u90e8\u5206\uff1a\u555f\u52d5\u7a0b\u5f0f, \u88dd\u7f6e\u9a45\u52d5\u7a0b\u5f0f, \u7cfb\u7d71\u5de5\u5177\u5957\u4ef6, \u8cc7\u6599\u6a94.\n\u9ed1\u860b\u679c\u80fd\u6b63\u78ba\u5728\u975e\u5b98\u65b9\u6a5f\u578b\u4e0a\u57f7\u884c, \u4e3b\u8981\u5c31\u662f\u900f\u904e EFI \u63d0\u4f9b\u76f8\u5bb9\u65bc\u5b98\u65b9\u6a5f\u578b\u7684\u9a45\u52d5\u7a0b\u5f0f."),(0,a.kt)("p",null,"\u800c EFI \u78c1\u5340\u96d6\u7136\u53ea\u662f\u500b\u6a19\u6e96\u7684 FAT/FAT32 \u5206\u5272\u5340, \u4f46\u5728 macOS \u9810\u8a2d\u662f\u4e0d\u6703\u88ab\u639b\u8f09\u7684.\n\u5f88\u591a\u9ed1\u860b\u679c\u8a2d\u5b9a\u5de5\u5177\u6703\u63d0\u4f9b\u639b\u8f09 EFI \u78c1\u5340\u7684\u529f\u80fd."),(0,a.kt)("p",null,"\u4f46\u7562\u7adf EFI \u78c1\u5340\u5c31\u662f\u500b\u6a19\u6e96\u7684 FAT/FAT32 \u78c1\u5340, macOS \u5167\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"diskutil")," \u5c31\u53ef\u4ee5\u639b\u8f09 EFI \u78c1\u5340\u4e86."),(0,a.kt)("h2",{id:"diskutil"},"diskutil"),(0,a.kt)("p",null,"diskutil \u662f macOS \u5167\u5efa\u7684 CLI \u5de5\u5177\u4e4b\u4e00.\nmacOS \u4e0a\u8ddf\u78c1\u789f\u64cd\u4f5c\u76f8\u95dc\u8edf\u9ad4, \u96d6\u6709\u8457\u4e0d\u540c UI \u8a2d\u8a08\u8207\u64cd\u4f5c\u6d41\u7a0b\u5916,\n\u5e95\u5c64\u5927\u591a\u662f\u547c\u53eb diskutil \u4f86\u5b8c\u6210\u78c1\u789f\u63a7\u5236\u52d5\u4f5c."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u627e\u51fa EFI \u78c1\u5340")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ diskutil list\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6307\u4ee4\u6703\u5217\u51fa\u6240\u6709\u7684\u78c1\u789f\u6a5f\u8207\u5206\u5272, \u9019\u88e1\u7684\u78c1\u789f\u6a5f\u4e0d\u50c5\u662f\u5be6\u9ad4\u786c\u789f, \u4e5f\u5305\u542b\u865b\u64ec\u786c\u789f\u5340.\n\u82e5\u6709\u5df2\u639b\u8f09\u7684 dmg \u6a94, \u4e5f\u6703\u6210\u5217\u51fa\u4f86."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/ACtC-3efwBMRjxRXpq_kljt8z-wfD6Eu5KSBvoA1URPrJk_HvCn9Uu86QndonRL52vvHJW1HTm_3pQsaKoELES87vsszgGCjCKjUhnVfhEn3tzUooooZDfONSZgVTt3iXtVNVS0lHqIAIA6w-WaPYfB1w5QdfQ=w576-h241-no?authuser=0",alt:null})),(0,a.kt)("p",null,"\u6a19\u6e96 ",(0,a.kt)("inlineCode",{parentName:"p"},"GUID_partition_scheme")," \u5206\u5272\u7684\u78c1\u789f, \u6703\u5305\u542b\u4e00\u500b EFI \u78c1\u5340\u548c\u5176\u4ed6\u78c1\u5340.\n\u8a18\u4f4f EFI \u78c1\u5340\u6700\u5f8c\u9762\u7684\u8b58\u5225\u4ee3\u78bc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u639b\u8f09 EFI \u78c1\u5340")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo diskutil mount <EFI_IDENTIFIER>\n")),(0,a.kt)("p",null,"\u9019\u500b\u6307\u4ee4\u6703\u639b\u8f09 macOS \u6240\u652f\u63f4\u7684\u6a94\u6848\u7cfb\u7d71, \u9810\u8a2d\u639b\u8f09\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/Volume/PARTITION_NAME")," \u8cc7\u6599\u593e.\nEFI \u78c1\u5340\u70ba FAT/FAT32 \u6a94\u6848\u7cfb\u7d71, \u662f macOS \u9810\u8a2d\u652f\u63f4\u7684\u683c\u5f0f, \u6240\u4ee5\u6703\u88ab\u639b\u8f09\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/Volume/EFI"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/ACtC-3d4IQyZxA_CSiDhyw_aj4s2wRmsmrnYs2LsC0HlpC2Sf-lPxYTxaczp84XdWeHlRpkekyCd_PFrAtnks3EWiTa1spZTZuKJ2hc8eB-WCcFLQqHRFuUZfBUYhaPFMjFUoU1eEkOAl8WGWHJxMTmNsHF5Lg=w463-h95-no?authuser=0",alt:null})),(0,a.kt)("p",null,"\u639b\u8f09\u5b8c\u5f8c\u5c31\u53ef\u4ee5\u7528\u4efb\u4f55\u5de5\u5177\u53bb\u8655\u7406 EFI \u7684\u8a2d\u5b9a\u914d\u7f6e\u6a94\u4e86."),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.itread01.com/content/1546611722.html"},"MacOS \u78c1\u789f\u7ba1\u7406\u5de5\u5177 diskutil \u4ecb\u7d39"))))}f.isMDXComponent=!0}}]);