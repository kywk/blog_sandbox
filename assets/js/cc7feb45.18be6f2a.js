"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[7294],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return t?o.createElement(h,c(c({ref:n},m),{},{components:t})):o.createElement(h,c({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7223:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),c=["components"],i={title:"Location Changer",description:"Change OS X\u2019s network location based on the name of Wi-Fi network",tags:["Mac","tips"],hide_table_of_contents:!0,date:new Date("2022-08-24T16:00:00.000Z"),image:"https://i.imgur.com/mErPwqL.png"},l="[Mac] \u81ea\u52d5\u4f9d Wifi \u540d\u7a31\u66f4\u6539\u7db2\u8def\u4f4d\u7f6e",s={unversionedId:"machintosh/mac_location-changer",id:"machintosh/mac_location-changer",title:"Location Changer",description:"Change OS X\u2019s network location based on the name of Wi-Fi network",source:"@site/docs/machintosh/mac_location-changer.md",sourceDirName:"machintosh",slug:"/machintosh/mac_location-changer",permalink:"/moco/docs/machintosh/mac_location-changer",draft:!1,tags:[{label:"Mac",permalink:"/moco/docs/tags/mac"},{label:"tips",permalink:"/moco/docs/tags/tips"}],version:"current",frontMatter:{title:"Location Changer",description:"Change OS X\u2019s network location based on the name of Wi-Fi network",tags:["Mac","tips"],hide_table_of_contents:!0,date:"2022-08-24T16:00:00.000Z",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"tutorialSidebar",previous:{title:"shadowsocks setup",permalink:"/moco/docs/machintosh/mac_install-shadowsocks"},next:{title:"\u88fd\u4f5c macOS \u5b89\u88dd ISO",permalink:"/moco/docs/machintosh/mac_make-installer-iso"}},m={},p=[],u={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mac-\u81ea\u52d5\u4f9d-wifi-\u540d\u7a31\u66f4\u6539\u7db2\u8def\u4f4d\u7f6e"},"[Mac]"," \u81ea\u52d5\u4f9d Wifi \u540d\u7a31\u66f4\u6539\u7db2\u8def\u4f4d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/eprev/locationchanger/"},"eprev/locationchanger: Change OS X\u2019s network location based on the name of Wi-Fi network"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://razeen.me/posts/auto-change-network-location-base-on-name-of-wifi/"},"Mac OS \u81ea\u52a8\u6839\u636e WI-FI \u540d\u5b57\u6539\u53d8\u7f51\u7edc\u4f4d\u7f6e - Razeen`s Blog")),(0,a.kt)("p",null,"To remove locationchanger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Unload and remove launch agent\nlaunchctl unload -w ~/Library/LaunchAgents/LocationChanger.plist\nrm ~/Library/LaunchAgents/LocationChanger.plist\n\n# Remove locationchanger binary\nsudo rm /usr/local/bin/locationchanger\n\n# Remove config\nrm ~/.locations/locations.conf\n\n# Remove logs\nrm ~/Library/Logs/LocationChanger.log\n")))}f.isMDXComponent=!0}}]);