"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[4660],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(4334),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),i=n(7294),r=n(4334),o=n(2389),l=n(7392),p=n(7094),c=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function s(e){var t,n,o=e.lazy,s=e.block,m=e.defaultValue,k=e.values,v=e.groupId,N=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=(0,p.U)(),S=A.tabGroupChoices,y=A.setTabGroupChoices,C=(0,i.useState)(b),O=C[0],w=C[1],R=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=S[v];null!=D&&D!==O&&g.some((function(e){return e.value===D}))&&w(D)}var P=function(e){var t=e.currentTarget,n=R.indexOf(t),a=g[n].value;a!==O&&(I(t),w(a),null!=v&&y(v,String(a)))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=R.indexOf(e.currentTarget)+1;n=null!=(a=R[i])?a:R[0];break;case"ArrowLeft":var r,o=R.indexOf(e.currentTarget)-1;n=null!=(r=R[o])?r:R[R.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},N)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return R.push(e)},onKeyDown:T,onFocus:P,onClick:P},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return i.createElement(s,(0,a.Z)({key:String(t)},e))}},3154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=n(5488),l=n(5162),p=["components"],c={title:"React Native CLI For macOS",description:"React Native CLI for macOS",tags:["ReactNative","DevEnv","Mac"],sidebar_position:1,date:new Date("2022-08-16T16:00:00.000Z"),image:"https://i.imgur.com/mErPwqL.png"},d=void 0,u={unversionedId:"ReactNative/env-setup/rn-env_rn-cli-mac",id:"ReactNative/env-setup/rn-env_rn-cli-mac",title:"React Native CLI For macOS",description:"React Native CLI for macOS",source:"@site/docs/ReactNative/env-setup/rn-env_rn-cli-mac.md",sourceDirName:"ReactNative/env-setup",slug:"/ReactNative/env-setup/rn-env_rn-cli-mac",permalink:"/moco/docs/ReactNative/env-setup/rn-env_rn-cli-mac",draft:!1,tags:[{label:"ReactNative",permalink:"/moco/docs/tags/react-native"},{label:"DevEnv",permalink:"/moco/docs/tags/dev-env"},{label:"Mac",permalink:"/moco/docs/tags/mac"}],version:"current",sidebarPosition:1,frontMatter:{title:"React Native CLI For macOS",description:"React Native CLI for macOS",tags:["ReactNative","DevEnv","Mac"],sidebar_position:1,date:"2022-08-16T16:00:00.000Z",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"tutorialSidebar",previous:{title:"Environment setup",permalink:"/moco/docs/category/environment-setup"},next:{title:"Running On iOS",permalink:"/moco/docs/ReactNative/env-setup/rn-env_ios-ipa"}},s={},m=[{value:"Installing iOS dependencies",id:"installing-ios-dependencies",level:2},{value:"Node &amp; Watchman",id:"node--watchman",level:3},{value:"Yarn",id:"yarn",level:4},{value:"Xcode",id:"xcode",level:3},{value:"Command Line Tools",id:"command-line-tools",level:4},{value:"iOS Simulator",id:"ios-simulator",level:4},{value:"CocoaPods",id:"cocoapods",level:3},{value:"Apple Silicon",id:"apple-silicon",level:4},{value:"Installing Android dependencies",id:"installing-android-dependencies",level:2},{value:"Node &amp; Watchman",id:"node--watchman-1",level:3},{value:"Yarn",id:"yarn-1",level:4},{value:"Java Development Kit",id:"java-development-kit",level:3},{value:"Android Studio",id:"android-studio",level:3},{value:"1. Install Android Studio",id:"1-install-android-studio",level:4},{value:"2. Install Android SDK",id:"2-install-android-sdk",level:4},{value:"3. ANDROID_SDK_ROOT",id:"3-android_sdk_root",level:4},{value:"React Native CLI",id:"react-native-cli",level:2},{value:"Create new application",id:"create-new-application",level:3},{value:"Using a specific version or template",id:"using-a-specific-version-or-template",level:3},{value:"Running your React Native application",id:"running-your-react-native-application",level:2},{value:"iOS App",id:"ios-app",level:3},{value:"on iOS device",id:"on-ios-device",level:4},{value:"Prepare Android device",id:"prepare-android-device",level:3},{value:"physical device",id:"physical-device",level:4},{value:"virtual device",id:"virtual-device",level:4},{value:"Android App",id:"android-app",level:3},{value:"Modifying your app",id:"modifying-your-app",level:2},{value:"Project src tree",id:"project-src-tree",level:3},{value:"That&#39;s it!",id:"thats-it",level:2},{value:"See Also",id:"see-also",level:2}],k={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"\u7db2\u8def\u8cc7\u8a0a\u56e0\u7248\u672c\u65b0\u820a\u8a2d\u5b9a\u6b65\u9a5f\u8207\u8aaa\u660e\u7565\u6709\u51fa\u5165, \u672c\u7bc7\u5728 `React Native 0.69` \u6642\u7de8\u5beb.\n\u5efa\u8b70\u4ee5\u5b98\u65b9\u6587\u4ef6\u70ba\u6e96, \u672c\u6587\u7d14\u4f5c\u70ba\u8a2d\u5b9a\u904e\u7a0b\u8207\u932f\u8aa4\u6392\u9664\u500b\u4eba\u7d00\u9304. \n"))),(0,r.kt)("h1",{id:"setting-up-the-react-native-cli-environment"},"Setting up the React Native CLI environment"),(0,r.kt)("p",null,"React Native \u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u5206\u6210 Expo CLI \u548c React Native CLI \u5169\u7a2e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Expo \u96c6\u6210\u4e86\u8a31\u591a React Native \u958b\u767c\u6240\u9700\u5de5\u5177, \u63d0\u4f9b\u5927\u90e8\u5206 App \u6240\u9700\u529f\u80fd, \u53ef\u4ee5\u5feb\u901f\u5efa\u5236\u57fa\u790e\u958b\u767c\u74b0\u5883.\n\u4e26\u53ef\u900f\u904e\u700f\u89bd\u5668\u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.dev"},"Snack")," \u4f86\u6aa2\u8996\u6e2c\u8a66 React Native App.\n\u7121\u9808\u82b1\u8cbb\u5927\u91cf\u6642\u9593\u8655\u7406 Xcode / Android Studio \u8a2d\u7f6e, \u5927\u5e45\u7c21\u5316\u958b\u767c\u524d\u7f6e\u4f5c\u696d, \u9069\u5408\u65b0\u624b\u5165\u9580.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Native CLI \u5247\u662f\u4f7f\u7528\u539f\u751f\u958b\u767c\u74b0\u5883\u4f86\u5efa\u69cb React Native App. \u4f9d OS \u548c\u767c\u884c\u7248\u672c\u7684\u4e0d\u540c,\n\u8a73\u7d30\u6b65\u9a5f\u4e5f\u4e0d\u76f8\u540c, \u9700\u8981\u8655\u7406 Xcode / Android Studio \u767c\u5e03\u74b0\u5883\u7684\u914d\u7f6e.\n\u7531 React Native CLI \u914d\u7f6e\u7684\u5c08\u6848, iOS / Android \u7684 App entry point \u662f\u5206\u958b\u7684,\n\u53ef\u4ee5\u5b89\u88dd\u5404\u81ea\u5e73\u53f0\u7684 Native packages / libries."))),(0,r.kt)("p",null,"\u5b98\u65b9\u5efa\u8b70\u5165\u9580\u65b0\u624b\u9069\u5408 Expo CLI, \u5f9e\u719f\u6089 React Native \u958b\u767c\u958b\u59cb, Expo \u74b0\u5883\u4ea6\u53ef\u9032\u884c\u591a\u6578 App \u529f\u80fd\u958b\u767c.\n\u800c React Native CLI \u5247\u662f\u8f03\u6709\u7d93\u9a57\u6216\u9700\u8981\u66f4\u9032\u63a5\u5e95\u5c64\u529f\u80fd\u7684\u958b\u767c\u8005\u4f7f\u7528."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Target OS")),(0,r.kt)(o.Z,{groupId:"target-os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"iOS",label:"iOS",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"installing-ios-dependencies"},"Installing iOS dependencies"),(0,r.kt)("p",null,"\u5fc5\u9808\u5b89\u88dd\u7684\u8edf\u9ad4\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Watchman"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Xcode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CocoaPods"),"."),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7de8\u8f2f\u5668\u4f86\u958b\u767c React Native App (js \u7a0b\u5f0f\u78bc),\n\u4f46\u4ecd\u9700\u8981\u5b89\u88dd Xcode \u4f86\u53d6\u5f97\u7de8\u8b6f iOS App \u6642\u6240\u9700\u8981\u7684\u5de5\u5177\u548c\u74b0\u5883."),(0,r.kt)("h3",{id:"node--watchman"},"Node & Watchman"),(0,r.kt)("p",null,"\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," \u4f86\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Watchman")," \u662f\u6700\u65b9\u4fbf\u7684."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install node\nbrew install watchman\n")),(0,r.kt)("p",null,"\u539f\u672c\u5c31\u6709\u5b89\u88dd Node \u7684\u8a71, \u8981\u6ce8\u610f React Native \u50c5\u652f\u63f4 Node 14 \u4ee5\u4e0a\u7684\u7248\u672c."),(0,r.kt)("p",null,"Watchman \u662f Facebook \u63d0\u4f9b\u7684\u6a94\u6848\u7cfb\u7d71\u7684\u8b8a\u66f4\u76e3\u63a7\u5de5\u5177, packager \u53ef\u4ee5\u76e3\u63a7\u6a94\u6848\u8b8a\u5316\u800c\u5373\u6642\u66f4\u65b0,\n\u56e0\u800c\u63d0\u5347\u958b\u767c\u6548\u7387."),(0,r.kt)("h4",{id:"yarn"},"Yarn"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," \u662f Facebook \u63d0\u4f9b\u7684 npm \u66ff\u4ee3\u5de5\u5177, \u4e0b\u8f09 npm package \u6642\u6548\u7387\u6bd4\u539f\u751f npm \u597d\u4e0a\u4e0d\u5c11.\nyarn \u5927\u591a\u6578\u7684\u547d\u4ee4\u4f7f\u7528\u90fd\u548c npm \u76f8\u540c, \u5b89\u88dd\u5b8c yarn \u5f8c\u5c31\u53ef\u4ee5\u7528 yarn \u53d6\u4ee3 npm \u4e86."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g yarn\n")),(0,r.kt)("h3",{id:"xcode"},"Xcode"),(0,r.kt)("p",null,"React Native \u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"Xcode")," 10 \u4ee5\u4e0a\u7684\u7248\u672c, \u76f4\u63a5\u5f9e ",(0,r.kt)("inlineCode",{parentName:"p"},"Mac App Store")," \u4e0b\u8f09\u5373\u53ef.\n\u5b89\u88dd\u8a2d\u5b9a Xcode \u6642, \u540c\u6642\u6703\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"Xcode IDE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Command Line Tools"),", \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"iOS Simulator"),".\n\u9019\u4e9b\u662f\u7de8\u8b6f\u548c\u6e2c\u8a66 iOS App \u7684\u5fc5\u8981\u5de5\u5177."),(0,r.kt)("h4",{id:"command-line-tools"},"Command Line Tools"),(0,r.kt)("p",null,"Xcode command line tools \u4e2d\u5305\u542b\u4e00\u4e9b\u5e38\u7528\u4e14\u5fc5\u5099\u7684\u5de5\u5177, \u4f8b\u5982 git \u7b49."),(0,r.kt)("p",null,"\u6253\u958b Xcode, \u78ba\u8a8d ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences > Locations > Command Line Tools")," \u9078\u55ae\u4e2d\u6aa2\u67e5\u662f\u5426\u6709\u67d0\u7248\u672c\u7684 Command Line Tools.\n\u901a\u5e38\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," \u6642\u540c\u6642\u6703\u5b89\u88dd Command Line Tools, \u9078\u55ae\u4e2d\u53ef\u4ee5\u76f4\u63a5\u9078\u64c7\u624d\u662f."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEX4BN1quNdGXWPnQ3kxcalrXbWkPLXcL2Ao0-szSghxKweB6-bafqNq7rdsdt6fiQtGXspQhH2jEUAu4_u11ZrZGp_cBe7uvrTpS4cg-D0o4jzWY-9TABBEgOToELvVq-fnk-29JAUc9Vkd_pzPk4vbdA=w800-no?authuser=0",alt:"Xcode CLI location"})),(0,r.kt)("h4",{id:"ios-simulator"},"iOS Simulator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Xcode > Preferences > Component"),", \u5373\u53ef\u4e0b\u8f09\u5b89\u88dd\u4e0d\u540c\u7248\u672c\u7684 iOS \u6a21\u64ec\u5668."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEU6id3WirII75Pbia_6pcTaHcPO3MV-_yyec6lyD-vZobguDKcg58sCroVPfdVW_x3rh7t1pXfuMrOJpa0cGEwt7HAp5c1fGJ8JcMXwfYDL5kK8OrMbibyc435mGXk903tZ9ZdOIltaaXM3PS1CAkeGWA=w800-no?authuser=0",alt:"iOS Simulator"})),(0,r.kt)("p",null,"\u82e5\u8981\u522a\u9664\u4e0d\u9700\u8981\u7684 iOS \u6a21\u64ec\u5668, \u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"/Library/Developer/CoreSimulator/Profiles/Runtimes")," \u88e1\u7528\u4e0d\u5230\u7684 Runtime \u522a\u6389\u5373\u53ef."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://levelup.gitconnected.com/how-to-remove-old-simulators-from-xcode-634111c3e94b"},"How To Remove Old Simulators From\xa0Xcode? | Level Up Coding"))),(0,r.kt)("h3",{id:"cocoapods"},"CocoaPods"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CocoaPods")," \u662f\u7528 Ruby \u6240\u958b\u767c\u7684\u5957\u4ef6\u7ba1\u7406\u5de5\u5177, \u7528\u4f86\u7ba1\u7406\u76f8\u95dc\u4f9d\u8cf4\u7684\u5957\u4ef6\u7b49.\nReact Native CLI 0.60 \u5f8c\u7684 iOS \u7248\u672c\u90fd\u9700\u8981 CocoaPods."),(0,r.kt)("p",null,"\u53ef\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"Ruby gem")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Homebrew")," \u4f86\u5b89\u88dd CocoaPods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo gem install cocoapods\n")),(0,r.kt)("p",null,"\u6216"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install cocoapods\n")),(0,r.kt)("p",null,"\u82e5\u6c92\u6709\u5b89\u88dd CocoaPods, React Native CLI \u5728\u5efa\u7acb\u5c08\u6848\u6642\u4ea6\u6703\u8df3\u51fa\u5b89\u88dd\u63d0\u793a\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714 CocoaPods (https://cocoapods.org/) is not installed. CocoaPods is necessary for the iOS project to run correctly. Do you want to install it? \n\u203a Yes, with Gem (sudo maybe need)\n\u203a Yes, with Homebrew\n\u2714 Installing CocoaPods\n\u2807 Installing CocoaPods dependencies (this may take a few minutes)\n")),(0,r.kt)("p",null,"\u5176\u4ed6\u76f8\u95dc\u8cc7\u8a0a, \u53ef\u53c3\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/using/getting-started.html"},"CocoaPods \u5b98\u7db2"),"."),(0,r.kt)("h4",{id:"apple-silicon"},"Apple Silicon"),(0,r.kt)("p",null,"Cocoapods \u76ee\u524d\u5728 Apple Silicon \u67b6\u69cb\u4e0a\u53ef\u80fd\u9084\u6709\u4e00\u4e9b\u554f\u984c.\n\u82e5\u5b89\u88dd pods \u4f9d\u8cf4\u51fa\u73fe\u554f\u984c, \u53ef\u4ee5\u5617\u8a66\u5f8c\u7e8c\u6307\u4ee4.\n\u9019\u6703\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"ffi")," \u5957\u4ef6, \u7528\u4ee5\u5b89\u88dd\u8207\u8f09\u5165 pods \u6642\u9078\u7528\u5408\u9069\u7684\u67b6\u69cb."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo arch -x86_64 gem install ffi\narch -x86_64 pod install\n")),(0,r.kt)("p",null,"\u6216\u662f\u900f\u904e Homwbrew \u5b89\u88dd CocoaPods \u6bd4\u8f03\u4e0d\u6703\u6709\u554f\u984c.")),(0,r.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,r.kt)("h2",{id:"installing-android-dependencies"},"Installing Android dependencies"),(0,r.kt)("p",null,"\u5fc5\u9808\u5b89\u88dd\u7684\u8edf\u9ad4\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Watchman"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JDK"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Android Studio"),"."),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7de8\u8f2f\u5668\u4f86\u958b\u767c React Native App (js \u7a0b\u5f0f\u78bc),\n\u4f46\u4ecd\u9700\u8981\u5b89\u88dd Android Studio \u4f86\u53d6\u5f97\u7de8\u8b6f Android App \u6642\u6240\u9700\u8981\u7684\u5de5\u5177\u548c\u74b0\u5883."),(0,r.kt)("h3",{id:"node--watchman-1"},"Node & Watchman"),(0,r.kt)("p",null,"\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," \u4f86\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Watchman")," \u662f\u6700\u65b9\u4fbf\u7684."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install node\nbrew install watchman\n")),(0,r.kt)("p",null,"\u539f\u672c\u5c31\u6709\u5b89\u88dd Node \u7684\u8a71, \u8981\u6ce8\u610f React Native \u50c5\u652f\u63f4 Node 14 \u4ee5\u4e0a\u7684\u7248\u672c."),(0,r.kt)("p",null,"Watchman \u662f Facebook \u63d0\u4f9b\u7684\u6a94\u6848\u7cfb\u7d71\u7684\u8b8a\u66f4\u76e3\u63a7\u5de5\u5177, packager \u53ef\u4ee5\u76e3\u63a7\u6a94\u6848\u8b8a\u5316\u800c\u5373\u6642\u66f4\u65b0,\n\u56e0\u800c\u63d0\u5347\u958b\u767c\u6548\u7387."),(0,r.kt)("h4",{id:"yarn-1"},"Yarn"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," \u662f Facebook \u63d0\u4f9b\u7684 npm \u66ff\u4ee3\u5de5\u5177, \u4e0b\u8f09 npm package \u6642\u6548\u7387\u6bd4\u539f\u751f npm \u597d\u4e0a\u4e0d\u5c11.\nyarn \u5927\u591a\u6578\u7684\u547d\u4ee4\u4f7f\u7528\u90fd\u548c npm \u76f8\u540c, \u5b89\u88dd\u5b8c yarn \u5f8c\u5c31\u53ef\u4ee5\u7528 yarn \u53d6\u4ee3 npm \u4e86."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g yarn\n")),(0,r.kt)("h3",{id:"java-development-kit"},"Java Development Kit"),(0,r.kt)("p",null,"\u5b98\u65b9\u63a8\u85a6\u4f7f\u7528 Homebrew \u5b89\u88dd\u7531 ",(0,r.kt)("em",{parentName:"p"},"Azul")," \u6240\u767c\u4f48, \u540d\u70ba ",(0,r.kt)("strong",{parentName:"p"},"Zulu")," \u7684 OpenJDK \u7248\u672c.\n\u9019\u500b\u7248\u672c\u540c\u6642\u652f\u63f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Intel")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Apple Silicon")," \u6676\u7247,\n\u5728 Apple Silicon \u67b6\u69cb\u7684 Mac \u4e0a\u7de8\u8b6f\u6642, \u6bd4\u8d77\u5176\u4ed6 JDK \u7248\u672c\u6709\u660e\u986f\u6548\u80fd\u512a\u52e2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew tap homebrew/cask-versions\nbrew install --cask zulu11\n")),(0,r.kt)("p",null,"React Native \u9700\u8981 JDK 11. \u53ef\u4ee5\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"javac -version")," \u547d\u4ee4\u78ba\u8a8d\u6a5f\u5668\u4e0a\u7684 JDK \u7248\u672c."),(0,r.kt)("h3",{id:"android-studio"},"Android Studio"),(0,r.kt)("h4",{id:"1-install-android-studio"},"1. Install Android Studio"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"\u4e0b\u8f09\u4e26\u5b89\u88dd Android Studio"),".\n\u7b2c\u4e00\u6b21\u6253\u958b Android Studio, \u6703\u8df3\u51fa\u5957\u4ef6\u5b89\u88dd\u7cbe\u9748.\n\u5728\u5b89\u88dd\u904e\u7a0b\u4e2d, \u78ba\u8a8d\u4ee5\u4e0b\u9805\u76ee\u6709\u52fe\u9078\u5b89\u88dd, Next \u7b49\u5019\u5b89\u88dd\u5b8c\u6210\u5373\u53ef."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android SDK"),(0,r.kt)("li",{parentName:"ul"},"Android SDK Platform"),(0,r.kt)("li",{parentName:"ul"},"Android Virtual Device")),(0,r.kt)("h4",{id:"2-install-android-sdk"},"2. Install Android SDK"),(0,r.kt)("p",null,"Android Studio \u5b89\u88dd\u7cbe\u9748\u9810\u8a2d\u5b89\u88dd\u6700\u65b0\u7248\u7684 Android SDK.\n\u800c\u76ee\u524d React Native native code \u9700\u8981 Android 12 (S) SDK \u7248\u672c.\n\u53ef\u4ee5\u900f\u904e SDK Manager \u624b\u52d5\u5b89\u88dd\u5c0d\u61c9\u7684\u7248\u672c."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Android Studio \u2192 More Actions \u2192 SDK Manager  ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEXmxh_PV1TE-uS-H_opQRZpfMnWyH9Xr9F_D-tgawjFcNgwCnC6Yru1bqvPgfjQt6rSrednbYfsnuxoyEXrL48VMKW0JdZLHeVlHirM6vddepk2R3GCd57hrR8-rniGXFTrB0JMHVYfKcnOfRc4cOYYIw=w800-no?authuser=0",alt:"Android Studio Welcome"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"or Android Studio Preferences \u2192 Appearance & Behavior \u2192 System Settings \u2192 Android SDK.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEUNeFOKI6cs7m88nIMZMJeo1Xx981A4iFhR7eBmSR9W_Yb_1MIiLuqFMqxv1_ZYjWOxrvJSMNUgLAmxvjrtztouUL097VlPbfLCTDRPjLla8ZUYvuyUcpU96X8kG3eSlRkahm4OxEEZTldX7bJTCxzIiQ=w800-no?authuser=0",alt:"Android Studio Preferences"})),(0,r.kt)("p",null,"\u5728 SDK Manager \u4e2d\u9078\u64c7 ",(0,r.kt)("em",{parentName:"p"},"SDK Platform"),", \u52fe\u9078 ",(0,r.kt)("em",{parentName:"p"},"Show Package Details"),".\n\u5c55\u958b ",(0,r.kt)("em",{parentName:"p"},"Android 12 (S)"),", \u52fe\u9078\u4ee5\u4e0b\u5143\u4ef6:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android SDK Platform 31"),(0,r.kt)("li",{parentName:"ul"},"Google APIs Intel x86 Atom System Image or\n(for Apple Silicon) Google APIs ARM 64 v8a System Image")),(0,r.kt)("p",null,"\u7136\u5f8c\u9078\u64c7 ",(0,r.kt)("em",{parentName:"p"},"SDK Tools"),", \u540c\u6a23\u52fe\u9078 ",(0,r.kt)("em",{parentName:"p"},"Show Package Details"),".\n\u5c55\u958b ",(0,r.kt)("em",{parentName:"p"},"Android SDK Build-Tools"),", \u52fe\u9078 React Native \u6240\u9700\u8981\u7684 31.0.0.\n\u4f9d\u500b\u4eba\u958b\u767c\u9700\u6c42, \u53ef\u540c\u6642\u5b89\u88dd\u591a\u500b\u7248\u672c."),(0,r.kt)("p",null,"\u52fe\u9078\u5b8c\u5f8c, ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply")," or 'OK' \u4ee5\u9032\u884c\u4e0b\u8f09\u5b89\u88dd\u5143\u4ef6."),(0,r.kt)("h4",{id:"3-android_sdk_root"},"3. ANDROID_SDK_ROOT"),(0,r.kt)("p",null,"React Native \u6703\u900f\u904e\u74b0\u5883\u8b8a\u6578\u4f86\u53d6\u5f97 Android SDK \u8def\u5f91\u4f86\u9032\u884c\u7de8\u8b6f\u6307\u4ee4,\n\u5728\u74b0\u5883\u8b8a\u6578\u4e2d\u52a0\u5165\u4ee5\u4e0b\u8a2d\u5b9a:",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f9d shell \u4e0d\u540c\u7de8\u8f2f ~/.bash_profile or ~/.zshrc \u6216\u5176\u4ed6\u500b\u4eba\u9069\u7528\u7684\u8a2d\u5b9a\u6a94."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_SDK_ROOT/emulator\nexport PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools\n")))),(0,r.kt)("h2",{id:"react-native-cli"},"React Native CLI"),(0,r.kt)("p",null,"React Native \u5c08\u6848\u9700\u8981\u5f15\u7528\u4e0d\u5c11\u76f8\u95dc\u5957\u4ef6, \u96d6\u7136\u53ef\u4ee5\u624b\u52d5\u523b\u5beb ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u7b49\u5c08\u6848\u57fa\u790e\u9805\u76ee,\n\u4f46\u6700\u65b9\u4fbf\u9084\u662f\u76f4\u63a5\u4f7f\u7528 React Native \u5167\u5efa\u7684\u547d\u4ee4\u5217\u6307\u4ee4\u5efa\u7acb\u65b0\u5c08\u6848."),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"\u95dc\u65bc React Native \u547d\u4ee4, \u904e\u5f80\u7248\u672c\u74b0\u5883\u8a2d\u7f6e\u6559\u5b78\u90fd\u662f\u5728\u672c\u5730\u7aef\u5168\u5c40\u5b89\u88dd `react-native-cli` \u5957\u4ef6.\n\u800c\u5b98\u65b9\u73fe\u5728\u5efa\u8b70 `npx react-native <command>` \u4f86\u9032\u884c CLI \u7684\u76f8\u95dc\u64cd\u4f5c.\n\n\u82e5\u66fe\u7d93\u5b89\u88dd\u904e react-native-cli \u547d\u4ee4\u5217\u5de5\u5177, \u9700\u5148\u79fb\u9664\u5df2\u907f\u514d\u885d\u7a81.\n`npm uninstall -g react-native-cli`\n"))),(0,r.kt)("h3",{id:"create-new-application"},"Create new application"),(0,r.kt)("p",null,"\u76f4\u63a5\u900f\u904e npx \u547d\u4ee4\u4f86\u5efa\u7acb AwesomeProject \u5c08\u6848.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx react-native init AwesomeProject\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u82e5\u8981\u628a React Native \u96c6\u6210\u5230\u65e2\u6709\u7684 App \u9805\u76ee, \u6d41\u7a0b\u5b8c\u5168\u4e0d\u540c.")),(0,r.kt)("h3",{id:"using-a-specific-version-or-template"},"Using a specific version or template"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"init")," \u9810\u8a2d\u6703\u5b89\u88dd\u6700\u65b0\u7248\u7684 React Native \u7248\u672c.\n\u82e5\u8981\u6307\u540d\u7279\u5b9a\u7248\u672c\u7684 React Native, \u5728\u6307\u4ee4\u5f8c\u9762\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"--version")," \u53c3\u6578:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx react-native init AwesomeProject --version X.XX.X\n")),(0,r.kt)("p",null,"\u4ea6\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--template")," \u4f86\u4f7f\u7528\u4e00\u4e9b\u5ba2\u88fd\u5316\u5c08\u6848\u6a23\u677f, \u4f8b\u5982\u652f\u63f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx react-native init AwesomeTSProject --template react-native-template-typescript\n")),(0,r.kt)("h2",{id:"running-your-react-native-application"},"Running your React Native application"),(0,r.kt)(o.Z,{groupId:"target-os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"iOS",label:"iOS",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"ios-app"},"iOS App"),(0,r.kt)("p",null,"\u5728\u5c08\u6848\u8cc7\u6599\u593e\u4e2d\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn ios")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native run-ios")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd AwesomeProject\nyarn ios\n# OR\nyarn react-native run-ios\n")),(0,r.kt)("p",null,"\u9019\u500b\u6307\u4ee4\u6703\u628a React Native \u5c08\u6848\u539f\u751f\u7684\u90e8\u5206\u9032\u884c\u7de8\u8b6f,\n\u540c\u6642\u518d\u53e6\u4e00\u500b\u547d\u4ee4\u5217\u8d77\u52d5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Metro")," \u670d\u52d9, \u5c0d js code \u7684\u90e8\u5206\u5373\u6642\u5c01\u88dd\u6253\u5305."),(0,r.kt)("p",null,"\u7de8\u8b6f\u6253\u5305\u5b8c\u6210\u5f8c, \u5c31\u53ef\u4ee5\u770b\u5230 iOS \u6a21\u64ec\u5668\u81ea\u52d5\u958b\u555f\u4e26\u57f7\u884c AwesomeProject \u5c08\u6848."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEVnph4k7HbleAAPMyLPSIg9Wth9g3td6Ur6IXF3SvAIJpWFlBbXIPhiDBNbLvZ-WiPtnqayqBBUOJdQqjMGwHKKJcE1FN8DXmcox9A1_7DmIXNQ4ZbdzFVY5ejE0oT6xlk7i-Tc4nXnsUtyzOp-cl2Wnw=w800-no",alt:null})),(0,r.kt)("p",null,"\u521d\u6b21\u958b\u555f\u5c08\u6848\u5b8c\u6210\u7de8\u8b6f\u5f8c, \u958b\u767c\u671f\u9593\u4fdd\u6301 metro \u8996\u7a97, \u5247 js \u4fee\u6539\u7684\u9805\u76ee\u53ef\u5373\u6642\u88ab\u6253\u5305\u8f09\u5165.\n\u65e5\u5f8c\u518d\u5ea6\u958b\u555f\u5c08\u6848\u6642, \u82e5\u6c92\u6709\u4fee\u6539 iOS \u8cc7\u6599\u593e\u4e0b\u7684\u6a94\u6848, \u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," \u4ee5\u5feb\u901f\u958b\u555f\u5c08\u6848.\n\u800c iOS \u8cc7\u6599\u593e\u4e2d\u4e0b\u7684\u6a94\u6848\u82e5\u6709\u66f4\u52d5, \u5247\u9700\u518d\u6b21\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn ios")," \u91cd\u65b0\u7de8\u8b6f\u539f\u751f\u9805\u76ee. "),(0,r.kt)("h4",{id:"on-ios-device"},"on iOS device"),(0,r.kt)("p",null,"iOS \u5c08\u6848\u9805\u76ee\u8173\u672c\u6703\u81ea\u52d5\u5728 iOS \u6a21\u64ec\u5668\u4e2d\u958b\u555f\u5c08\u6848, \u53ef\u76f4\u63a5\u5229\u7528 iOS \u6a21\u64ec\u5668\u4e2d\u9032\u884c\u958b\u767c\u6e2c\u8a66.\n\u82e5\u8981\u5728\u88dd\u7f6e\u4e0a\u57f7\u884c, \u53e6\u53c3\u8003",(0,r.kt)("a",{parentName:"p",href:"#"},"\u5728 iOS \u88dd\u7f6e\u57f7\u884c"),".")),(0,r.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"prepare-android-device"},"Prepare Android device"),(0,r.kt)("p",null,"\u5fc5\u9808\u6e96\u5099\u4e00\u50f9 Android \u88dd\u7f6e\u4f86\u57f7\u884c React Native Android app.\nAndroid \u88dd\u7f6e\u4e26\u4e0d\u9650\u4f7f\u7528\u5be6\u9ad4\u624b\u6a5f, Android \u6a21\u64ec\u5668\u6216\u900f\u904e\u5b98\u65b9 AVD \u5efa\u7acb\u865b\u64ec\u88dd\u7f6e\u4ea6\u53ef."),(0,r.kt)("h4",{id:"physical-device"},"physical device"),(0,r.kt)("p",null,"\u4f7f\u7528 Android \u5be6\u9ad4\u624b\u6a5f\u9032\u884c\u958b\u767c\u6e2c\u8a66, \u628a USB \u9023\u63a5\u624b\u6a5f\u548c\u96fb\u8166,\n\u8ddf\u8457\u5404\u624b\u5b98\u65b9\u6a5f\u8aaa\u660e, \u6253\u958b\u958b\u767c\u8005\u6a21\u5f0f, \u78ba\u8a8d ADB \u53ef\u4ee5\u6b63\u78ba\u8b58\u5225\u88dd\u98fe\u5373\u53ef."),(0,r.kt)("h4",{id:"virtual-device"},"virtual device"),(0,r.kt)("p",null,"\u5728 Android Studio \u4e2d, \u6253\u958b AVD Manager \u4f86\u9078\u64c7\u53ef\u7528\u7684\u865b\u64ec\u88dd\u7f6e.\n\u6216\u5275\u5efa\u4e00\u500b\u65b0\u7684\u865b\u64ec\u88dd\u7f6e\u4f86\u9032\u884c\u958b\u767c."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Create Virtual Device...")," > \u9078\u64c7\u559c\u6b61\u7684\u624b\u6a5f\u6a21\u7248 (\u87a2\u5e55\u5927\u5c0f, dpi... \u7b49) >\n",(0,r.kt)("inlineCode",{parentName:"p"},"S API Level 31")," > Finish \u5373\u53ef. \u865b\u64ec\u88dd\u7f6e\u5efa\u7acb\u5b8c\u6210\u5f8c\u53ef\u5148\u884c\u555f\u52d5\u4e00\u6b21, \u8b93\u88dd\u7f6e\u904b\u884c\u5fc5\u8981\u521d\u59cb\u5316\u8a2d\u5b9a."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEXFgkEImSTaYQmWs5VZzdHR3MnDVxrYIfsv1rhrYixMWcGnkQJ7xm33ZOaA7GbtbG40b2Yl-FdpFpYyo45zUUf5dMy7oKjjABWv1Tb2LSQjdfg5zhrHgm3Kkgr9Irj985fM_HyOxN2dX6RI6lGZKf40JA=w800-no?authuser=0",alt:"AVD manager"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEXV8tr6CQ9MGXW550g1VTGLhfBA_6Fz8BxVv6ELg3_Jz8ge1h-qn4onIXKTlv_UEYc1Jl_pCunfpbhIsvsz0JMqcNhSHfXQSZXibCyzCE4tuV-DtEExdbOWjyoGDrSmhEcViQCkSyR_PaiZ9VOSRAYfRw=w600-no?authuser=0",alt:"AVD"})),(0,r.kt)("h3",{id:"android-app"},"Android App"),(0,r.kt)("p",null,"\u7121\u8ad6\u4f7f\u7528\u5be6\u9ad4\u624b\u6a5f\u6216\u4f7f\u7528\u865b\u64ec\u88dd\u7f6e, \u9700\u78ba\u8a8d ",(0,r.kt)("inlineCode",{parentName:"p"},"ADB")," \u53ef\u4ee5\u6b63\u78ba\u8b58\u5225\u88dd\u7f6e, \u624d\u53ef\u9032\u884c\u958b\u767c\u6e2c\u8a66."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEWZgtaODXoQcIde7PYuksSnT1S2bkrBz5bCQN9DipoSr2d8D9Am8RBU-HosroZSotVJ9UgYe8L9Z1IcFMvTDnhHahBRDFVnF3A8xgLUWwxAGLQG_Ff0gIfd1SfOUTcEKubmlUxsm9OuQS3UoIB66oTkVA=w458-h244-no?authuser=0",alt:"adb devices"})),(0,r.kt)("p",null,"\u57f7\u884c React Native Android app \u548c iOS \u985e\u4f3c,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd AwesomeProject\nyarn android\n# OR\nyarn react-native run-android\n")),(0,r.kt)("p",null,"\u9019\u6642\u5019\u6703\u958b\u59cb\u7de8\u8b6f\u5c08\u6848, \u7de8\u8b6f\u5b8c\u6210\u5f8c\u6703\u81ea\u52d5\u5728\u6e2c\u8a66\u88dd\u7f6e\u4e0a\u57f7\u884c\u5c08\u6848 App.\n\u7b2c\u4e00\u6b21\u57f7\u884c\u6642, \u9700\u8981\u4e0b\u8f09\u5927\u91cf\u76f8\u95dc\u5957\u4ef6\u4f9d\u8cf4, \u6703\u82b1\u4e0a\u597d\u4e9b\u6642\u9593.\n\u7de8\u8b6f\u6210\u529f\u5f8c, \u9664\u975e\u7248\u672c\u66f4\u65b0\u7b49, \u4e00\u822c\u4f86\u66f8\u5594\u65e5\u5f8c\u7121\u9808\u518d\u4e0b\u8f09\u4e86."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEW6RebevudFVEIpTlgQr63t3oHsrjIF4ncYJQ5gGFPWIOyCQrBdXrjyrLUr3G6fN7r6cwu9T4PjWqKA0kICg1OQ0r1XgDJO7ieC1HIb8eWRbuAplp6Y0-V3OEz_DzWg8aF-2jNQ17sXHhLjLyHI9xIr-w=w800-no?authuser=0",alt:"React Native Android app"})))),(0,r.kt)("h2",{id:"modifying-your-app"},"Modifying your app"),(0,r.kt)("p",null,"\u5c08\u6848\u53ef\u4ee5\u6b63\u78ba\u5728\u6a21\u64ec\u5668\u4e0a\u958b\u555f\u5f8c, \u74b0\u5883\u5b89\u88dd\u5c31\u5b8c\u6210, \u53ef\u4ee5\u958b\u59cb\u7de8\u8f2f\u958b\u767c React Native App \u4e86."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8f2f ",(0,r.kt)("inlineCode",{parentName:"li"},"App.js")," \u4efb\u4f55\u6587\u5b57\u7de8\u8f2f\u5668\u7686\u53ef."),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6a21\u64ec\u5668\u4e0a\u91cd\u65b0\u8f09\u5165\u9801\u9762. ",(0,r.kt)("inlineCode",{parentName:"li"},"iOS \u2318-R")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"Android R")," \u5373\u53ef\u770b\u5230\u4fee\u6539\u5f8c\u7684\u9801\u9762.")),(0,r.kt)("h3",{id:"project-src-tree"},"Project src tree"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Project Structure\n\n.\n\u251c\u2500\u2500 App.js  # App root component\uff0c\u6240\u6709JS code\u7531\u9019\u88e1\u958b\u59cb\n\u251c\u2500\u2500 android/  # Android native project\n\u251c\u2500\u2500 app.json  # React Native app config\n\u251c\u2500\u2500 index.js  # App entry point\n\u251c\u2500\u2500 ios/  # iOS native project\n\u251c\u2500\u2500 node_modules/  # JS libraries\n\u251c\u2500\u2500 package.json  # JS dependencies\n\u2514\u2500\u2500 yarn.lock\n")),(0,r.kt)("h2",{id:"thats-it"},"That's it!"),(0,r.kt)("p",null,"Congratulations! You've successfully run and modified your first React Native app."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,"\u63a5\u624b\u7684\u5c08\u6848\u662f React Native 0.53 \u7248\u672c, \u6709\u4e9b\u74b0\u5883\u8a2d\u7f6e\u6709\u6240\u4e0d\u540c.\n\u7db2\u8def\u8cc7\u8a0a\u56e0\u7248\u672c\u65b0\u820a\u8a2d\u5b9a\u6b65\u9a5f\u8207\u8aaa\u660e\u7565\u6709\u51fa\u5165, \u672c\u6587\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"React Native 0.69")," \u6642\u7de8\u5beb."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/environment-setup"},"Setting up the development environment")," |\n",(0,r.kt)("a",{parentName:"li",href:"https://reactnative.cn/docs/environment-setup"},"\u642d\u5efa\u5f00\u53d1\u73af\u5883 \xb7 React Native \u4e2d\u6587\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jablog.site/docs/react-native/setup/"},"\u5efa\u7f6e React Native \u958b\u767c\u74b0\u5883 | \u5091\u90e8\u843d Jablog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://carsonwah.github.io/15221461803635.html"},"React Native\u6559\u5b78 Part 1 - \u8a73\u76e1\u65b0\u624b\u5165\u9580 - Carson's Tech Note"))))}v.isMDXComponent=!0}}]);