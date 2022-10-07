"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[927],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(t),u=p,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(k,s(s({ref:n},c),{},{components:t})):r.createElement(k,s({ref:n},c))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,s[1]=o;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9704:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var r=t(3117),p=t(102),a=(t(7294),t(3905)),s=["components"],o={title:"TypeScript",description:"Express + TypeScript",tags:["Node.js","Express","TypeScript"],date:new Date("2022-09-30T16:00:00.000Z"),image:"https://i.imgur.com/mErPwqL.png"},l="[Node.js] Express + TypeScript",i={unversionedId:"node.js/Express/express_typescript",id:"node.js/Express/express_typescript",title:"TypeScript",description:"Express + TypeScript",source:"@site/docs/node.js/Express/express_typescript.md",sourceDirName:"node.js/Express",slug:"/node.js/Express/express_typescript",permalink:"/moco/docs/node.js/Express/express_typescript",draft:!1,tags:[{label:"Node.js",permalink:"/moco/docs/tags/node-js"},{label:"Express",permalink:"/moco/docs/tags/express"},{label:"TypeScript",permalink:"/moco/docs/tags/type-script"}],version:"current",frontMatter:{title:"TypeScript",description:"Express + TypeScript",tags:["Node.js","Express","TypeScript"],date:"2022-09-30T16:00:00.000Z",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"tutorialSidebar",previous:{title:"Express CORS",permalink:"/moco/docs/node.js/Express/express_cors"},next:{title:"passport_fb",permalink:"/moco/docs/node.js/Express/passport_fb"}},c={},d=[{value:"\u5efa\u7acb\u5c08\u6848",id:"\u5efa\u7acb\u5c08\u6848",level:2},{value:"--yes",id:"--yes",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"tsconfig.json",id:"tsconfigjson",level:3},{value:"Express",id:"express",level:2},{value:"index.js",id:"indexjs",level:3},{value:"ts-node",id:"ts-node",level:3},{value:"\u7de8\u8b6f",id:"\u7de8\u8b6f",level:2},{value:"\u81ea\u52d5\u5316",id:"\u81ea\u52d5\u5316",level:2},{value:"pm2",id:"pm2",level:3},{value:"\u74b0\u5883\u8b8a\u6578",id:"\u74b0\u5883\u8b8a\u6578",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"fail in prod",id:"fail-in-prod",level:3},{value:"\u5c08\u6848\u6839\u76ee\u9304",id:"\u5c08\u6848\u6839\u76ee\u9304",level:4},{value:"copyfiles",id:"copyfiles",level:4},{value:"docker / packager",id:"docker--packager",level:4},{value:"See Also",id:"see-also",level:2},{value:"References",id:"references",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,p.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodejs-express--typescript"},"[Node.js]"," Express + TypeScript"),(0,a.kt)("p",null,"TypeScript \u7684\u578b\u5225\u548c\u5c6c\u6027\u5ba3\u544a, \u78ba\u5be6\u80fd\u6e1b\u5c11\u4e0d\u5c11 JavaScript \u958b\u767c\u6642\u5c0f\u5c0f\u758f\u5931\u5c0e\u81f4\u7684\u932f\u8aa4,\n\u5c24\u5176\u5728 API Server \u6642, \u63a5\u6536\u5ba2\u6236\u7aef\u8cc7\u6599\u82e5\u6c92\u6709\u9a57\u8b49\u578b\u5225, \u53ef\u80fd\u6703\u5c0e\u81f4\u610f\u5916\u932f\u8aa4\u767c\u751f.\n\u5229\u7528 TypeScript \u958b\u767c API Server \u662f\u500b\u4e0d\u932f\u7684\u4e3b\u610f."),(0,a.kt)("h2",{id:"\u5efa\u7acb\u5c08\u6848"},"\u5efa\u7acb\u5c08\u6848"),(0,a.kt)("p",null,"\u548c\u6240\u6709 Node.js \u5c08\u6848\u4e00\u6a23, \u4f7f\u7528 npm \u521d\u59cb\u5316\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e0d\u6703\u6709\u932f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\nyarn init\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," \u6307\u4ee4\u4f9d\u500b\u4eba\u7fd2\u6163\u64c7\u4e00\u5373\u53ef.")),(0,a.kt)("p",null,"\u6703\u9700\u8981\u586b\u5165\u4e00\u4e9b\u5c08\u6848\u7684\u76f8\u95dc\u8cc7\u8a0a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"package name")," \u8f38\u5165\u5c08\u6848\u540d\u7a31, \u9810\u8a2d\u4f7f\u7528\u8cc7\u6599\u593e\u540d\u7a31"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"version")," \u7248\u672c\u865f, \u9810\u8a2d 1.0.0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description")," \u5c08\u6848\u7684\u8a73\u7d30\u4ecb\u7d39, \u53ef\u4e0d\u586b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"entry point")," \u5c08\u6848\u7684\u7a0b\u5f0f\u8f09\u5165\u9ede, \u9810\u8a2d index.js"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"test command")," \u5c08\u6848\u6e2c\u8a66\u7528\u7684\u6307\u4ee4, \u53ef\u4e0d\u586b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"git repository")," \u8f38\u5165 git \u9060\u7aef\u4f4d\u5740, \u53ef\u4e0d\u586b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"keywords")," \u8f38\u5165\u5c08\u6848\u76f8\u95dc\u7684\u95dc\u9375\u5b57, \u53ef\u4e0d\u586b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"author")," \u8f38\u5165\u5c08\u6848\u4f5c\u8005\u540d\u7a31, \u53ef\u4e0d\u586b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"license")," \u6388\u6b0a\u76f8\u95dc, \u9810\u8a2d ISC")),(0,a.kt)("h3",{id:"--yes"},"--yes"),(0,a.kt)("p",null,"\u82e5\u5c08\u6848\u4e0d\u6703\u6709\u767c\u5e03 npm \u7684\u9700\u6c42, \u53ea\u60f3\u5feb\u901f\u7522\u751f ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4f86\u7ba1\u7406\u5957\u4ef6.\n\u53ef\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"--yes")," \u5feb\u901f\u5efa\u7acb\u9810\u8a2d\u503c\u5167\u5bb9\u5982\u4e0b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "name": "express-typescript",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "type": "module",\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"\u900f\u904e npm \u9032\u884c\u5b89\u88dd TypeScript. \u4f9d\u5be6\u969b\u9700\u6c42, \u901a\u5e38\u5efa\u8b70\u5168\u57df\u5b89\u88dd."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g typescript\nyarn global add typescript\n")),(0,a.kt)("p",null,"\u82e5\u771f\u7684\u6c92\u6709\u5176\u4ed6 TypeScript \u5c08\u6848\u958b\u767c\u9700\u6c42,\n\u4ee5\u5c08\u6848\u89d2\u5ea6\u4f86\u8aaa, TypeScript \u53ea\u662f\u958b\u767c\u4e0a\u9700\u8981, \u6b78\u5c6c\u65bc\u958b\u767c\u4f9d\u8cf4\u5957\u4ef6\u5373\u53ef."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i typescript --save-dev\nyarn add typescript --dev\n")),(0,a.kt)("h3",{id:"tsconfigjson"},"tsconfig.json"),(0,a.kt)("p",null,"\u8981\u900f\u904e TypeScript \u6307\u4ee4\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tsc init\n$ npx tsc init\n\nCreated a new tsconfig.json with:\n  target: es2016\n  module: commonjs\n  strict: true\n  esModuleInterop: true\n  skipLibCheck: true\n  forceConsistentCasingInFileNames: true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea\u5f9e\u591a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," \u4e4b\u5f8c, \u90e8\u5206 CLI \u5957\u4ef6\u6307\u4ee4\u53ef\u4ee5\u76f4\u63a5\u900f\u904e npx \u4f86\u57f7\u884c.\nnpx \u6703\u81ea\u52d5\u7ba1\u7406\u8207\u8655\u7406\u5957\u4ef6\u4f9d\u8cf4\u7684\u4e0b\u8f09\u7b49, \u4e0d\u4e00\u5b9a\u9700\u8981\u5b89\u88dd\u5168\u57df\u5957\u4ef6.")),(0,a.kt)("p",null,"\u5c08\u6848\u8cc7\u843d\u593e\u6703\u591a\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", \u9019\u500b\u6a94\u6848\u662f\u7528\u4f86\u8a2d\u5b9a\u7de8\u8b6f\u9078\u9805\u7684. \u8a73\u7d30\u8a2d\u5b9a\u53ef\u53c3\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig"},"\u5b98\u65b9\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "incremental": true,               // \u555f\u7528\u589e\u91cf\u7de8\u8b6f\n    "target": "ES2017",                // \u7de8\u8b6f\u6210\u6307\u5b9a\u7684 JavaScript \u7248\u672c\n    "module": "commonjs",              // \u6307\u5b9a\u7de8\u8b6f\u6210\u4f55\u7a2e\u6a21\u7d44\n    "declaration": true,               // \u7522\u751f \'.d.ts\' \u6a94\n    "sourceMap": true,                 // \u7522\u751f \'.map\' \u6a94\n    "outDir": "./dist",                // \u6307\u5b9a\u7de8\u8b6f\u5f8c\u7684\u6a94\u6848\u5b58\u653e\u9ede\n    "rootDir": "./src",                // \u8f09\u5165\u9ede\u7684\u4f4d\u7f6e\n    "removeComments": true,            // \u79fb\u9664\u8a3b\u89e3\n    "strict": true,                    // \u63a1\u7528\u56b4\u683c\u6a21\u5f0f\n    "baseUrl": "./src",                // \u6307\u5b9a\u532f\u5165\u6a94\u6848\u7684\u57fa\u6e96\u8def\u5f91\n    "esModuleInterop": true,           // \u517c\u5bb9\u6a21\u7d44\n    "experimentalDecorators": true,    // \u555f\u7528\u88dd\u98fe\u5668\n    "emitDecoratorMetadata": true      // \u63d0\u4f9b\u88dd\u98fe\u5668 metadata\n  },\n  "include": ["src/**/*.ts"],          // \u7d0d\u5165\u7de8\u8b6f\u7bc4\u570d\n  "exclude": ["node_modules", "dist"]  //\u4e0d\u7d0d\u5165\u7de8\u8b6f\u7bc4\u570d\n}\n')),(0,a.kt)("h2",{id:"express"},"Express"),(0,a.kt)("p",null,"\u5b89\u88dd Express:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm i express\n$ yarn add express\n\nyarn add v1.22.19\n[1/4] \ud83d\udd0d  Resolving packages...\n[2/4] \ud83d\ude9a  Fetching packages...\n[3/4] \ud83d\udd17  Linking dependencies...\n[4/4] \ud83d\udd28  Building fresh packages...\nsuccess Saved 1 new dependency.\ninfo Direct dependencies\n\u2514\u2500 express@4.18.1\ninfo All dependencies\n\u2514\u2500 express@4.18.1\n\u2728  Done in 0.88s.\n")),(0,a.kt)("p",null,"\u82e5\u6307\u4ee4\u9806\u5229\u57f7\u884c\u5b8c\u7562, \u53ef\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"dependencies")," \u591a\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"express"),", \u8868\u793a\u5b89\u88dd\u6210\u529f.\n\u63a5\u8457\u8981\u53d6\u5f97 Node.js \u8207 express \u7684 type \u5b9a\u7fa9\u6a94, \u5728\u958b\u767c\u6642\u80fd\u5920\u6e05\u695a\u77e5\u9053\u6709\u54ea\u4e9b\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @types/node @types/express --save-dev\nyarn add @types/node @types/express -D\n")),(0,a.kt)("h3",{id:"indexjs"},"index.js"),(0,a.kt)("p",null,"TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," \u539f\u59cb\u6a94\u9700\u7d93\u7de8\u8b6f\u5f8c\u624d\u53ef\u57f7\u884c, \u70ba\u65b9\u4fbf\u7de8\u8b6f\u8a2d\u7f6e, \u5efa\u8b70\u653e ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u8cc7\u6599\u593e\u4e0b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 src\n|   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import express from 'express';\n\nconst app = express();\n\napp.get('/', (req, res, next) => {\n    res.send('Hello, World!!');\n});\n\napp.listen(3000, () => console.log('http server is running at port 3000.'));\n")),(0,a.kt)("h3",{id:"ts-node"},"ts-node"),(0,a.kt)("p",null,"TypeScript \u7a0b\u5f0f\u7121\u6cd5\u76f4\u63a5\u900f\u904e Node.js \u4f86\u555f\u52d5\u5b83, \u5fc5\u9808\u8981\u7de8\u8b6f\u904e\u5f8c\u624d\u80fd\u900f\u904e Node.js \u555f\u52d5.\n\u4f46\u6bcf\u6b21\u8981\u6e2c\u8a66\u90fd\u8981\u57f7\u884c\u4e00\u6b21\u7de8\u8b6f\u5be6\u5728\u592a\u9ebb\u7169\u4e86, \u6240\u4ee5\u6211\u5011\u5b89\u88dd ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," \u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i ts-node --save-dev\nyarn add ts-node -D\n")),(0,a.kt)("p",null,"\u5b89\u88dd\u5b8c\u7562\u5f8c, \u53ef\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684\u914d\u7f6e\u4ee5\u900f\u904e npm \u7684\u8173\u672c\u4f86\u555f\u52d5 Express \u5c08\u6848.\n\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 script \u6b04\u4f4d\u6dfb\u52a0 start \u9805\u76ee:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'"scripts": {\n  "dev": "ts-node ./src/index.ts"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run dev\n$ yarn run dev\n\n$ ts-node ./src/index.ts\nhttp server is running at port 3000.\n")),(0,a.kt)("p",null,"\u555f\u52d5\u6210\u529f\u5f8c, \u53ef\u4ee5\u5728\u700f\u89bd\u5668\u4e2d\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \u4f86\u6aa2\u8996\u7d50\u679c."),(0,a.kt)("h2",{id:"\u7de8\u8b6f"},"\u7de8\u8b6f"),(0,a.kt)("p",null,"\u7562\u7adf ts-node \u4e26\u4e0d\u9069\u5408\u7528\u5728\u6b63\u5f0f\u74b0\u5883\u4e2d, \u9084\u662f\u9700\u8981\u7de8\u8b6f\u6210 JavaScript \u518d\u900f\u904e Node.js \u4f86\u555f\u52d5."),(0,a.kt)("p",null,"\u8981\u5982\u4f55\u5c0d\u5c08\u6848\u9032\u884c\u7de8\u8b6f\u5462? \u76f4\u63a5\u5728\u5c08\u6848\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," \u5373\u53ef\u7de8\u8b6f\u5c08\u6848.\ntsc \u6703\u4f9d ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u7684\u8a2d\u7f6e\u5f9e ",(0,a.kt)("strong",{parentName:"p"},"rootDir")," \u8b80\u53d6\u6240\u6709 .ts \u6a94, \u7de8\u8b6f\u5f8c\u8f38\u51fa\u5230 ",(0,a.kt)("strong",{parentName:"p"},"outDir")," \u4f4d\u7f6e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tsc\n$ node ./dist/index.js\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6307\u4ee4\u5373\u53ef\u7de8\u8b6f\u8207\u555f\u52d5 Express Server."),(0,a.kt)("p",null,"\u53ef\u4ee5\u628a\u76f8\u95dc\u547d\u4ee4\u5beb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," script \u88e1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n  "start": "npm run build && node ./dist/index.js",\n  "dev": "ts-node ./src/index.ts",\n  "build": "tsc"\n}\n')),(0,a.kt)("p",null,"\u6bcf\u6b21\u8981\u7de8\u8b6f\u4e26\u555f\u52d5\u6b63\u5f0f\u74b0\u5883\u5c31\u57f7\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,a.kt)("h2",{id:"\u81ea\u52d5\u5316"},"\u81ea\u52d5\u5316"),(0,a.kt)("p",null,"\u958b\u767c\u968e\u6bb5\u82e5\u6bcf\u6b21\u4fee\u6539\u7a0b\u5f0f, \u9700\u624b\u52d5\u505c\u6b62\u670d\u52d9\u518d\u555f\u52d5\u624d\u53ef\u66f4\u65b0. \u53ef\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemon")," \u5957\u4ef6\u4f86\u505a\u5230\u7a0b\u5f0f\u4fee\u6539\u5f8c\u81ea\u52d5\u91cd\u8f09\u7684\u7ba1\u7406."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i nodemon --save-dev\nyarn add nodemon -D\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodemon")," \u6703\u76e3\u770b\u8a72\u8cc7\u6599\u593e\u88e1\u6240\u6709\u6a94\u6848, \u82e5\u6a94\u6848\u6709\u66f4\u6539, \u5247\u6703\u81ea\u52d5\u91cd\u65b0\u57f7\u884c\u6307\u4ee4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n  "start": "npm run build && node ./dist/index.js",\n  "dev": "nodemon --exec ts-node ./src/index.ts",\n  "build": "tsc"\n}\n')),(0,a.kt)("p",null,"\u5982\u6b64\u4e00\u4f86, \u53ea\u9700\u8981\u57f7\u884c\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn run dev"),",\n\u7a0b\u5f0f\u4fee\u6539\u6642\u5c31\u6703\u81ea\u52d5\u91cd\u65b0\u8f09\u5165. "),(0,a.kt)("h3",{id:"pm2"},"pm2"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodemon")," \u9664\u4e86\u53ef\u4ee5\u76e3\u770b\u6a94\u6848\u8b8a\u5316\u5916, \u82e5 Node.js \u7a0b\u5f0f\u51fa\u932f, \u4e5f\u6703\u91cd\u65b0\u57f7\u884c\u6307\u4ee4, \u4ee5\u78ba\u4fdd\u670d\u52d9\u7e7c\u7e8c\u904b\u884c.\n\u800c\u5728\u6b63\u5f0f\u74b0\u5883\u4e0a, \u8f03\u5e38\u7528\u529f\u80fd\u8f03\u5f37\u5927\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2")," \u4f86\u53d6\u4ee3 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemon")," \u4f5c\u70ba\u932f\u8aa4\u91cd\u555f\u7684\u76e3\u63a7."),(0,a.kt)("h2",{id:"\u74b0\u5883\u8b8a\u6578"},"\u74b0\u5883\u8b8a\u6578"),(0,a.kt)("p",null,"\u958b\u767c\u74b0\u5883\u548c\u6b63\u5f0f\u74b0\u5883\u9577\u6703\u6709\u4e0d\u540c\u914d\u7f6e\u6a94, ",(0,a.kt)("inlineCode",{parentName:"p"},"dotenv")," \u9019\u500b\u5957\u4ef6\u53ef\u4ee5\u65b9\u4fbf\u7ba1\u7406\u74b0\u5883\u8b8a\u6578."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i dotenv\nyarn add dotenv\n")),(0,a.kt)("p",null,"\u901a\u5e38\u81f3\u5c11\u6703\u6709 ",(0,a.kt)("strong",{parentName:"p"},"development")," / ",(0,a.kt)("strong",{parentName:"p"},"production")," \u5169\u500b\u74b0\u5883:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n|   \u251c\u2500\u2500 index.ts\n|   \u2514\u2500\u2500 environments\n|       \u251c\u2500\u2500 development.env\n|       \u2514\u2500\u2500 production.env\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u900f\u904e npm \u7684\u8173\u672c\u50b3\u5165\u53c3\u6578\u4f86\u6307\u5b9a\u73fe\u5728\u7684\u74b0\u5883\u662f development \u9084\u662f production:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n  "start": "npm run build && NODE_ENV=production node ./dist/index.js",\n  "dev": "nodemon --exec NODE_ENV=development ts-node ./src/index.ts",\n  "build": "tsc"\n}\n')),(0,a.kt)("p",null,"\u6700\u5f8c\u8abf\u6574 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u7684\u5167\u5bb9, \u900f\u904e NODE_ENV \u53c3\u6578 \u8207 dotenv \u4f86\u9078\u5b9a\u74b0\u5883\u8b8a\u6578:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import express from 'express';\nimport path from 'path';\nimport dotenv from 'dotenv';\n\nconst app = express();\n\ndotenv.config({ path: path.resolve(__dirname, `./environments/${ process.env.NODE_ENV }.env`) });\n\napp.get('/', (req, res, next) => {\n    res.send('Hello, World!!');\n});\n\napp.listen(process.env.PORT, () => console.log(`http server is running at port ${ process.env.PORT }.`));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn run dev\nyarn run v1.22.19\n$ nodemon --exec NODE_ENV=development ts-node ./src/index.ts\n[nodemon] 2.0.20\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: ts,json\n[nodemon] starting `NODE_ENV=development ts-node ./src/index.ts`\nhttp server is running at port 3000.\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"fail-in-prod"},"fail in prod"),(0,a.kt)("p",null,"\u4f9d\u4e0a\u8ff0\u8a2d\u5b9a\u5728\u958b\u767c\u74b0\u5883\u4e0b\u57f7\u884c\u6c92\u554f\u984c, \u4f46\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," \u6703\u51fa\u73fe port undefined \u932f\u8aa4\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn start\nyarn run v1.22.19\n$ npm run build && NODE_ENV=production node ./dist/index.js\n\n> taostyler@1.0.0 build\n> tsc\n\nhttp server is running at port undefined.\n")),(0,a.kt)("p",null,"\u4e3b\u8981\u539f\u56e0\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"development.env")," \u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"production.env")," \u90fd\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"sec/environment")," \u8cc7\u6599\u593e\u4e0b,\n\u6e2c\u8a66\u6642\u57f7\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node ./src/index.ts")," \u53ef\u4ee5\u8b80\u5230\u76f8\u5c0d\u8def\u5f91\u4e0b\u7684\u74b0\u5883\u8a2d\u5b9a\u6a94,\n\u800c\u6b63\u5f0f\u74b0\u5883\u7684\u6307\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"node ./dist/index.js"),", \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"disc")," \u8cc7\u6599\u593e\u4e0b\u50c5\u6709\u88ab\u7de8\u8b6f\u5f8c\u7684 .js \u6a94,\n\u4e26\u4e0d\u5305\u542b\u5176\u4ed6\u8a2d\u5b9a\u6a94, \u975c\u614b\u8cc7\u6e90\u7b49... \u7a0b\u5f0f\u7121\u6cd5\u8b80\u5230\u5c0d\u61c9\u74b0\u5883\u914d\u7f6e\u6a94\u800c\u51fa\u932f."),(0,a.kt)("h4",{id:"\u5c08\u6848\u6839\u76ee\u9304"},"\u5c08\u6848\u6839\u76ee\u9304"),(0,a.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u4e4b\u4e00\u662f\u628a\u8a2d\u5b9a\u6a94\u548c\u975c\u614b\u8cc7\u6e90\u6a94\u632a\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u8cc7\u6599\u593e, \u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 env\n\u2502     \u251c\u2500\u2500 development.env\n\u2502     \u2514\u2500\u2500 production.env\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 static\n")),(0,a.kt)("p",null,"\u4fee\u6539\u7a0b\u5f0f, \u65b0\u589e ",(0,a.kt)("strong",{parentName:"p"},"ROOT")," \u5e38\u614b\u8b8a\u6578, \u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ROOT")," \u76f8\u5c0d\u8def\u5f91\u53bb\u8b80\u53d6\u74b0\u5883\u914d\u7f6e\u6a94\u6216\u5176\u4ed6\u8a2d\u5b9a\u6a94:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ROOT = path.resolve(__dirname, `../`)\ndotenv.config({ path: `${ ROOT }/config/env/${ process.env.NODE_ENV }.env`});\napp.set('ROOT', ROOT)\n")),(0,a.kt)("h4",{id:"copyfiles"},"copyfiles"),(0,a.kt)("p",null,"\u53e6\u4e00\u500b\u4f5c\u6cd5\u662f\u628a\u76f8\u95dc\u8cc7\u6e90\u6a94\u8907\u88fd\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"disc")," \u8cc7\u6599\u593e\u4e0b. \u4ee5\u7dad\u6301\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u8cc7\u6599\u593e\u4e0b\u76f8\u540c\u7684\u7d50\u69cb."),(0,a.kt)("p",null,"\u7136\u800c tsc \u4e0d\u652f\u63f4\u7de8\u8b6f\u6642\u5019\u9806\u4fbf\u8907\u88fd\u975e .ts \u6a94\u6848\u5230 disc \u8cc7\u6599\u593e, \u5fc5\u9808\u81ea\u5df1\u624b\u52d5\u8655\u7406\u76f8\u95dc\u6a94\u6848\u7684\u8907\u88fd.\n\u4f46\u53ef\u4ee5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4f86\u7c21\u5316\u76f8\u95dc\u6d41\u7a0b. \u8abf\u6574\u7bc4\u4f8b\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'// ...\n"scripts": {\n    "clean": "rimraf dist/",\n    "copy-files": "copyfiles -u 1 src/**/*.html src/**/*.css src/**/*.env src/**/*.json dist/",\n    "build": "yarn clean && tsc && yarn copy-files"\n},\n// ...\n')),(0,a.kt)("p",null,"\u9019\u908a\u7528\u4e86\u5169\u500b node package \u4f86\u7c21\u5316\u547d\u4ee4: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rimraf"},"rimraf")," The UNIX command rm -rf for node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/copyfiles"},"copyfiles"),", with a very descriptive name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev rimraf copyfiles\nyarn add -D rimraf copyfiles\n")),(0,a.kt)("p",null,"\u9019\u6a23\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm build")," \u6642\u9664\u4e86\u5c07 .ts \u6a94\u6848\u7de8\u8b6f\u6210 .js \u4e4b\u5916, \u4e5f\u6703\u628a\u76f8\u95dc\u8cc7\u6e90\u6a94\u4e00\u8d77\u8907\u88fd\u5230 disc \u8cc7\u6599\u593e\u4e0b,\n\u90e8\u7f72\u66f4\u65b0\u6642, \u76f4\u63a5\u66f4\u65b0 disc \u8cc7\u6599\u593e\u4e0b\u7684\u6a94\u6848\u5373\u53ef."),(0,a.kt)("p",null,"Ref: ",(0,a.kt)("a",{parentName:"p",href:"https://vccolombo.github.io/blog/tsc-how-to-copy-non-typescript-files-when-building/"},"tsc: How to copy non-TypeScript files when building - V\xedctor Colombo")),(0,a.kt)("h4",{id:"docker--packager"},"docker / packager"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u65b9\u6cd5\u9069\u5408\u5c08\u6848\u521d\u671f\u5c0d\u6b63\u5f0f\u74b0\u5883\u7684\u6e2c\u8a66\u4f7f\u7528, \u4f46\u9577\u671f\u66f4\u65b0\u7dad\u8b77\u7684\u5c08\u6848, \u6b63\u5f0f\u74b0\u5883\u901a\u5e38\u6703\u6709\u66f4\u56b4\u8b39\u7684\u898f\u7bc4.\n\u53ef\u80fd\u900f\u904e dockerfile \u6216\u5176\u4ed6\u7684\u6253\u5305\u5de5\u5177, \u4f9d\u5c08\u6848\u5be6\u969b\u898f\u7bc4\u800c\u5b9a, \u66ab\u4e0d\u8a0e\u8ad6."),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("p",null,"\u9664\u4e86\u4f9d\u672c\u6587\u5f9e\u96f6\u958b\u59cb\u5efa\u529b\u8207\u914d\u7f6e\u5c08\u6848\u5916,\n\u4e5f\u53ef\u4ee5\u5229\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typescript-express-starter"},"typescript-express-starter")," \u4e4b\u985e\u7684\u5957\u4ef6,\n\u6216\u76f4\u63a5\u6cbf\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/greenroach/express-ts-template"},"greenroach/express-ts-template")," \u4e4b\u985e\u7684\u6a23\u677f\u4f86\u5efa\u7acb\u5c08\u6848."),(0,a.kt)("p",null,"\u6587\u7ae0\u5167\u5bb9\u6b65\u9a5f\u53ef\u80fd\u56e0\u7248\u672c\u8fed\u4ee3\u5c0e\u81f4\u8a9e\u6cd5\u932f\u8aa4\u7b49, \u4f46\u76f8\u95dc\u5957\u4ef6\u82e5\u6709\u6301\u7e8c\u66f4\u65b0, \u4f7f\u7528\u5957\u4ef6\u6216\u6a23\u677f\u4f86\u5efa\u7acb\u5c08\u6848, \u4ecd\u662f\u4e0d\u932f\u7684\u9078\u64c7."),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10239787"},"[\u4eca\u665a\u6211\u60f3\u4f86\u9ede Express \u4f50 MVC \u5206\u5c64\u67b6\u69cb] DAY 04 - \u5efa\u7f6e\u5c08\u6848 - iT \u90a6\u5e6b\u5fd9::\u4e00\u8d77\u5e6b\u5fd9\u89e3\u6c7a\u96e3\u984c\uff0c\u62ef\u6551 IT \u4eba\u7684\u4e00\u5929")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/how-to-set-up-node-typescript-express/"},"How to set up TypeScript with Node.js and Express - LogRocket Blog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/roycechua/setup-a-node-express-api-with-typescript-2021-11o1"},"Setup a Node Express API with TypeScript (2021) - DEV Community \ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb"))))}u.isMDXComponent=!0}}]);