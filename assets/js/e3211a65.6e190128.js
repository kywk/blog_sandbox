"use strict";(self.webpackChunkkywk_moco=self.webpackChunkkywk_moco||[]).push([[4297],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],o={title:"Sequelize: Migration Seeds",description:"Sequelize Migration Seeds",tags:["Node.js","ORM","Sequelize"],date:new Date("2022-09-14T16:00:00.000Z"),image:"https://i.imgur.com/mErPwqL.png"},s="Sequelize Migration",u={unversionedId:"Node.js/sequelize_migration",id:"Node.js/sequelize_migration",title:"Sequelize: Migration Seeds",description:"Sequelize Migration Seeds",source:"@site/docs/Node.js/sequelize_migration.md",sourceDirName:"Node.js",slug:"/Node.js/sequelize_migration",permalink:"/moco/docs/Node.js/sequelize_migration",draft:!1,tags:[{label:"Node.js",permalink:"/moco/docs/tags/node-js"},{label:"ORM",permalink:"/moco/docs/tags/orm"},{label:"Sequelize",permalink:"/moco/docs/tags/sequelize"}],version:"current",frontMatter:{title:"Sequelize: Migration Seeds",description:"Sequelize Migration Seeds",tags:["Node.js","ORM","Sequelize"],date:"2022-09-14T16:00:00.000Z",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"tutorialSidebar",previous:{title:"Sequelize: Migration",permalink:"/moco/docs/Node.js/sequelize_migration-seeds"},next:{title:"TypeScript",permalink:"/moco/docs/category/typescript"}},p={},m=[{value:"\u4ec0\u9ebc\u662f Migraiton ?",id:"\u4ec0\u9ebc\u662f-migraiton-",level:2},{value:"\u64cd\u4f5c\u884c\u70ba",id:"\u64cd\u4f5c\u884c\u70ba",level:3},{value:"\u53ef\u4ee5\u5e79\u561b",id:"\u53ef\u4ee5\u5e79\u561b",level:3},{value:"\u74b0\u5883\u5b89\u88dd\u8207\u8a2d\u7f6e",id:"\u74b0\u5883\u5b89\u88dd\u8207\u8a2d\u7f6e",level:2},{value:"sequelize-cli",id:"sequelize-cli",level:3},{value:"Project bootstrapping",id:"project-bootstrapping",level:3},{value:"configure",id:"configure",level:3},{value:"\u57fa\u672c\u4f7f\u7528\u6307\u4ee4",id:"\u57fa\u672c\u4f7f\u7528\u6307\u4ee4",level:2},{value:"\u6307\u4ee4\u5217\u8868",id:"\u6307\u4ee4\u5217\u8868",level:3},{value:"\u6a94\u6848\u67b6\u69cb",id:"\u6a94\u6848\u67b6\u69cb",level:2},{value:"Query Interface \u5e38\u7528\u65b9\u6cd5",id:"query-interface-\u5e38\u7528\u65b9\u6cd5",level:3},{value:"SQL \u8a9e\u6cd5",id:"sql-\u8a9e\u6cd5",level:3},{value:"\u9032\u968e\u4f7f\u7528",id:"\u9032\u968e\u4f7f\u7528",level:2},{value:"\u56de\u6714\u7248\u672c",id:"\u56de\u6714\u7248\u672c",level:3},{value:"\u8cc7\u6599\u8868\u95dc\u806f",id:"\u8cc7\u6599\u8868\u95dc\u806f",level:3},{value:"Hook",id:"hook",level:3},{value:"See Also",id:"see-also",level:2},{value:"Reference",id:"reference",level:3}],d={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sequelize-migration"},"Sequelize Migration"),(0,l.kt)("p",null,"Sequelize \u662f Node.js \u4e0b\u76f8\u7576\u4e3b\u6d41\u7684 ORM \u5957\u4ef6.\nORM \u4f7f\u7528\u8207\u5426\u7684\u722d\u8ad6\u5927\u6982\u4e5f\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Space VS Tab"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Vi VS Emacs")," ... \u4e00\u6a23\u7684\u6c38\u7121\u6b62\u76e1."),(0,l.kt)("p",null,"\u800c Sequelize 2 \u4e4b\u5f8c\u63a8\u51fa sequelize-cli \u4e2d\u7684 Migration \u529f\u80fd,\n\u900f\u904e\u4e00\u6b21\u53c8\u4e00\u6b21\u7684\u7dad\u8b77\u6a94, \u78ba\u4fdd\u79fb\u690d\u6642\u6709\u76f8\u540c\u7684\u5efa\u69cb\u904e\u7a0b,\n\u78ba\u5be6\u80fd\u89e3\u6c7a\u7a0b\u5f0f\u958b\u767c\u968e\u6bb5\u5c0d\u8cc7\u6599\u5eab\u64cd\u4f5c\u7684\u5e38\u898b\u56f0\u64fe:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51fa\u554f\u984c\u56de\u4e0d\u5230\u4e0a\u500b\u7248\u672c\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u5fd8\u8a18\u505a\u4e86\u54ea\u4e9b\u4fee\u6539\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u6539\u4e86 schema \u6c92\u4eba\u77e5\u9053\uff1f")),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f-migraiton-"},"\u4ec0\u9ebc\u662f Migraiton ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Migration")," \u662f\u7528\u4f86\u63cf\u8ff0 \u300c\u8cc7\u6599\u5eab\u7684\u7d50\u69cb\u638c\u4ec0\u9ebc\u6a23\u5b50\u300d \u7684\u6a94\u6848, \u96a8\u8457\u5c08\u6848\u958b\u767c\u904e\u7a0b\u4e2d\u5c0d\u8cc7\u6599\u5eab\u7684\u4fee\u6539\u800c\u9010\u6f38\u589e\u52a0."),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7406\u89e3\u6210\u8cc7\u6599\u5eab\u683c\u5f0f\u8b8a\u66f4\u7684\u7248\u672c\u63a7\u5236.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEXTj9J5V07uQ7uWqG_O5kIuauTbX5mOu-pJ8RqJDe5CEPgkF4tHAR294BcbwsGbKdu0NbOqNCik91U8vG-fUtBbt6jVSr6tMuzjaQOIs5ZWTrx59xYN5phxsHd4GPEyX7oDNLn6KAT8Kr4u2f-dAO4lRg=w600-no?authuser=0",alt:"migration files"})),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u884c\u70ba"},"\u64cd\u4f5c\u884c\u70ba"),(0,l.kt)("p",null,"Migration \u662f\u62ff\u4f86\u8b8a\u52d5\u8cc7\u6599\u8868\u7684, \u6240\u4ee5\u6703\u6709\u5e7e\u7a2e\u52d5\u4f5c\u5728\u9019\u88e1\u8655\u7406."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u8cc7\u6599\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u6b04\u4f4d"),(0,l.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u8cc7\u6599\u8868\u95dc\u806f")),(0,l.kt)("h3",{id:"\u53ef\u4ee5\u5e79\u561b"},"\u53ef\u4ee5\u5e79\u561b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7d00\u9304\u64cd\u4f5c\u904e\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u4eba\u70ba\u64cd\u4f5c\u932f\u8aa4\u7684\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u74b0\u5883\u90e8\u7f72\u6216\u662f\u66f4\u63db\u8cc7\u6599\u5eab\u7684\u6642\u5019\uff0c\u5feb\u901f\u9054\u6210\u540c\u6b65"),(0,l.kt)("li",{parentName:"ul"},"\u932f\u8aa4\u767c\u751f\u6642\uff0c\u53ef\u4ee5\u5feb\u901f\u56de\u5230\u6b63\u78ba\u7684\u7248\u672c")),(0,l.kt)("h2",{id:"\u74b0\u5883\u5b89\u88dd\u8207\u8a2d\u7f6e"},"\u74b0\u5883\u5b89\u88dd\u8207\u8a2d\u7f6e"),(0,l.kt)("h3",{id:"sequelize-cli"},"sequelize-cli"),(0,l.kt)("p",null,"sequelize-cli \u53ef\u7cfb\u7d71\u5168\u57df\u5b89\u88dd\u6216\u5b89\u88dd\u5728\u5c08\u6848\u9805\u76ee, \u4f9d\u5be6\u969b\u9700\u6c42\u800c\u5b9a."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev sequelize-cli \n")),(0,l.kt)("p",null,"\u4ea6\u76f4\u63a5\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"npx sequelize ")," \u57f7\u884c."),(0,l.kt)("h3",{id:"project-bootstrapping"},"Project bootstrapping"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx sequelize-cli init\n")),(0,l.kt)("p",null,"This will create following folders"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"config"),", contains config file, which tells CLI how to connect with database"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"models"),", contains all models for your project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"migrations"),", contains all migration files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"seeders"),", contains all seed files")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pw/AL9nZEVtWoXHl5m1PaPaMRoSgGYsCk8GxIE78CKElbigXOZj63pXqjmkjyDwnH-Vkk1cErjHsB_xFg_CJsdt6a5l2f-7_8wM046gAZDPcZK2Gc0-6LxwLxATYh81BU5m2V1NE_EscAE3DeLFXH1mb0JntUErkw=w314-no?authuser=0",alt:"tree"})),(0,l.kt)("h3",{id:"configure"},"configure"),(0,l.kt)("p",null,"\u4fee\u6539 config/config.json \u88e1\u982d\u9023\u63a5 DB \u7684\u76f8\u95dc\u914d\u7f6e. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'"development": {\n    "username": "user",\n    "password": "password",\n    "database": "database name",\n    "host": "127.0.0.1",\n    "dialect": "mysql"\n  },\n')),(0,l.kt)("p",null,"\u8a2d\u5b9a\u5b8c\u5f8c\u5373\u53ef\u5229\u7528 sequelize \u4f86\u64cd\u4f5c DB. \u5982\u65b0\u5efa\u4e00\u5f35 user table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sequelize model:generate --name user --attributes name:string,mail:string\n")),(0,l.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528\u6307\u4ee4"},"\u57fa\u672c\u4f7f\u7528\u6307\u4ee4"),(0,l.kt)("p",null,"\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u53ef\u65b0\u589e migration, \u4e26\u4e14\u60f3\u597d migration message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sequelize migration:create --name <migration message>\n")),(0,l.kt)("p",null,"\u5c31\u6703\u7522\u751f\u6a94\u6848 ",(0,l.kt)("inlineCode",{parentName:"p"},"migrations/<YYYYMMDDHHMMSS>-<migration message>.js"),".\n\u7528\u81ea\u5df1\u7fd2\u6163\u7684\u7de8\u8f2f\u5668\u53bb\u4fee\u6539 js, \u642d\u914d ",(0,l.kt)("a",{parentName:"p",href:"https://sequelize.org/docs/v6/other-topics/query-interface/"},"Query Interface")," \u8a9e\u6cd5\u53bb\u5efa\u7acb\u6216\u8abf\u6574\u8cc7\u6599\u5eab Schema \u4fee\u6539."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sequelize db:migrate\n")),(0,l.kt)("p",null,"\u9019\u500b\u6307\u4ee4\u6703\u81ea\u52d5\u57f7\u884c\u5230\u6700\u5f8c\u4e00\u500b migration.js \u6a94\u6848\u88e1\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"up()"),", \u70ba\u8cc7\u6599\u5eab\u6b04\u4f4d\u9010\u6b21\u4fee\u6539\u8abf\u6574\u904e\u7a0b."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sequelize db:migrate:undo\n")),(0,l.kt)("p",null,"\u5247\u57f7\u884c js \u6a94\u6848\u88e1\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"down()"),", \u5167\u5bb9\u70ba\u5c0d\u61c9\u4fee\u6539\u7684\u9084\u539f\u8a9e\u6cd5."),(0,l.kt)("h3",{id:"\u6307\u4ee4\u5217\u8868"},"\u6307\u4ee4\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Sequelize CLI [Node: 16.17.0, CLI: 6.4.1, ORM: 6.21.6]\n\nsequelize <command>\n\nCommands:\n  sequelize db:migrate                        Run pending migrations\n  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps\n  sequelize db:migrate:status                 List the status of all migrations\n  sequelize db:migrate:undo                   Reverts a migration\n  sequelize db:migrate:undo:all               Revert all migrations ran\n  sequelize db:seed                           Run specified seeder\n  sequelize db:seed:undo                      Deletes data from the database\n  sequelize db:seed:all                       Run every seeder\n  sequelize db:seed:undo:all                  Deletes data from the database\n  sequelize db:create                         Create database specified by configuration\n  sequelize db:drop                           Drop database specified by configuration\n  sequelize init                              Initializes project\n  sequelize init:config                       Initializes configuration\n  sequelize init:migrations                   Initializes migrations\n  sequelize init:models                       Initializes models\n  sequelize init:seeders                      Initializes seeders\n  sequelize migration:generate                Generates a new migration file\n  sequelize migration:create                  Generates a new migration file\n  sequelize model:generate                    Generates a model and its migration\n  sequelize model:create                      Generates a model and its migration\n  sequelize seed:generate                     Generates a new seed file\n  sequelize seed:create                       Generates a new seed file\n\nOptions:\n  --version  Show version number                                                           [boolean]\n  --help     Show help\n")),(0,l.kt)("h2",{id:"\u6a94\u6848\u67b6\u69cb"},"\u6a94\u6848\u67b6\u69cb"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"up()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"down()")," \u90fd\u56de\u50b3 promise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="migration-<DATA>-<MESSAGE>.js"',title:'"migration-<DATA>-<MESSAGE>.js"'},"'use strict';\n\nmodule.exports = {\n  up: (queryInterface, Sequelize) => {\n    // \u8981\u589e\u52a0\u5167\u5bb9\u7684\u52d5\u4f5c\n  },\n\n  down: (queryInterface, Sequelize) => {\n    // \u8981\u6e1b\u5c11\u5167\u5bb9\u7684\u52d5\u4f5c\n  }\n};\n")),(0,l.kt)("h3",{id:"query-interface-\u5e38\u7528\u65b9\u6cd5"},"Query Interface \u5e38\u7528\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u8cc7\u6599\u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u8cc7\u6599\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"createTable(tableName, attributes, options)")),(0,l.kt)("li",{parentName:"ul"},"\u522a\u9664\u8cc7\u6599\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"dropTable(tableName, options)")),(0,l.kt)("li",{parentName:"ul"},"\u522a\u9664\u6240\u6709\u8cc7\u6599\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"dropAllTables(options)")),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u547d\u540d\u8cc7\u6599\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"renameTable(before, after, options)")),(0,l.kt)("li",{parentName:"ul"},"\u986f\u793a\u8cc7\u6599\u8868\u9663\u5217 ",(0,l.kt)("inlineCode",{parentName:"li"},"showAllTables(options)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tableNames \u7684 datatype Array"))),(0,l.kt)("li",{parentName:"ul"},"\u986f\u793a\u8cc7\u6599\u8868 schema ",(0,l.kt)("inlineCode",{parentName:"li"},"describeTable(tableName, options)")))),(0,l.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u6b04\u4f4d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u6b04\u4f4d ",(0,l.kt)("inlineCode",{parentName:"li"},"addColumn(tableName, attributeName, dataTypeOrOptions, options)")),(0,l.kt)("li",{parentName:"ul"},"\u522a\u9664\u6b04\u4f4d ",(0,l.kt)("inlineCode",{parentName:"li"},"removeColumn(tableName, attributeName, options)")),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6b04\u4f4d\u8a2d\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"changeColumn(tableName, attributeName, dataTypeOrOptions, options)")),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u547d\u540d\u6b04\u4f4d ",(0,l.kt)("inlineCode",{parentName:"li"},"renameColumn(tableName, attrNameBefore, attrNameAfter, options)")))),(0,l.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u7d22\u5f15(\u8cc7\u6599\u8868\u5c6c\u6027\u7684\u529f\u80fd)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u7d22\u5f15 ",(0,l.kt)("inlineCode",{parentName:"li"},"addIndex(tableName, attributes, options)")),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u7d22\u5f15 ",(0,l.kt)("inlineCode",{parentName:"li"},"removeIndex(tableName, indexNameOrAttributes, options)"))))),(0,l.kt)("h3",{id:"sql-\u8a9e\u6cd5"},"SQL \u8a9e\u6cd5"),(0,l.kt)("p",null,"\u9664\u4e86\u547c\u53eb Query Interface \u5916, \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"queryInterface.sequelize.query(SQL \u8a9e\u6cd5)")," \u7684\u7528\u6cd5,\n\u53ef\u4ee5\u76f4\u63a5\u57f7\u884c SQL \u8a9e\u6cd5, \u88dc\u8db3 Query Interface \u65b9\u6cd5\u7684\u4e0d\u8db3.\n\u6216\u56e0\u6545\u4e0d\u60f3\u900f\u904e Sequelize ORM \u8a9e\u6cd5\u6642, \u53ef\u76f4\u63a5\u4f7f\u7528\u6a19\u6e96 SQL \u4f86\u66f4\u6539\u8cc7\u6599\u5eab Schema."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"up: (queryInterface, Sequelize) => {\n  return queryInterface.method(\n      //...\n    }).then(() => {\n      queryInterface.sequelize.query(`UPDATE table SET column=field`)\n    })\n}\n")),(0,l.kt)("h2",{id:"\u9032\u968e\u4f7f\u7528"},"\u9032\u968e\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u56de\u6714\u7248\u672c"},"\u56de\u6714\u7248\u672c"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5efa\u7acb\u4e5f\u53ef\u4ee5\u56de\u6eaf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sequelize db:migrate:undo  \u4e00\u6b21\u9000\u4e00\u500b\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"sequelize db:migrate:undo:all \u9000\u5230\u521d\u59cb\u72c0\u614b"),(0,l.kt)("li",{parentName:"ul"},"sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-user.js \u9000\u5230\u6307\u5b9a\u7248\u672c")),(0,l.kt)("h3",{id:"\u8cc7\u6599\u8868\u95dc\u806f"},"\u8cc7\u6599\u8868\u95dc\u806f"),(0,l.kt)("p",null,"\u5728 queryInterface.createTable / addColumn \u4e2d,\n\u5728 attributes \u5b9a\u7fa9\u6b04\u4f4d\u7684\u7269\u4ef6\u4e2d, \u5beb reference \u6c7a\u5b9a\u8cc7\u6599\u5eab\u8b8a\u52d5\u5f8c, \u95dc\u806f\u662f\u5426\u5b58\u5728."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"return queryInterface.addColumn(\n  'tableName',\n  'fieldName',\n  {\n    type: Sequelize.INTEGER.UNSIGNED,\n    references: {\n      model: 'tableName',\n      key: 'fieldName'\n    },\n    onDelete: 'SET NULL',\n    onUpdate: 'CASCADE'\n    //...\n  })\n},\n")),(0,l.kt)("h3",{id:"hook"},"Hook"),(0,l.kt)("p",null,"\u7576\u547c\u53eb add/set \u51fd\u6578\u6642, beforeUpdate/afterUpdate \u4e5f\u6703\u57f7\u884c.\n\u552f\u4e00\u53ef\u4ee5\u57f7\u884c beforeDestroy/afterDestroy \u7684\u65b9\u5f0f, \u5c31\u662f\u8a2d\u5b9a associations \u5c6c\u6027 onDelete: \u2018cascade\u2019.\n\u53c3\u8003: ",(0,l.kt)("a",{parentName:"p",href:"http://docs.sequelizejs.com/manual/tutorial/hooks.html"},"http://docs.sequelizejs.com/manual/tutorial/hooks.html")),(0,l.kt)("p",null,"\u547c\u53eb association \u6642\u8a2d\u5b9a hook \u9078\u9805, ex: ",(0,l.kt)("inlineCode",{parentName:"p"},"onUpdate"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onDelete"),".\n\u9810\u8a2d\u6240\u6709\u7684\u95dc\u806f, \u66f4\u65b0\u7528 CASCADE, \u522a\u9664\u7528 SET NULL, \u9664\u4e86 n:m \u95dc\u806f, \u7528 CASCADE \u522a\u9664."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"RESTRICT"),", \u540c NO ACTION"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"CASCADE"),", \u540c\u6b65 update/delete \u66f4\u65b0\u5b50\u8868 foreign key"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"NO ACTION"),", \u4e0d\u5141\u8a31\u4e3b\u8868 update/delete"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"SET DEFAULT"),", \u5b50\u8868 foreign key \u8a2d\u70ba default (Innodb not use)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"SET NULL"),", \u5b50\u8868 foreign key \u8a2d\u70ba null")),(0,l.kt)("p",null,"Available constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UNIQUE",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"queryInterface.addConstraint('Users', ['email'], {\n  type: 'unique',\n  name: 'custom_unique_constraint_name'\n});  \n"))),(0,l.kt)("li",{parentName:"ul"},"DEFAULT (MSSQL only)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"queryInterface.addConstraint('Users', ['roles'], {\n  type: 'default',\n  defaultValue: 'guest'\n});\n"))),(0,l.kt)("li",{parentName:"ul"},"CHECK (MySQL - Ignored by the database engine)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"queryInterface.addConstraint('Users', ['roles'], {\n  type: 'check',\n  where: {\n     roles: ['user', 'admin', 'moderator', 'guest']\n  }\n});\n"))),(0,l.kt)("li",{parentName:"ul"},"FOREIGN KEY",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"queryInterface.addConstraint('Posts', ['username'], {\n  type: 'foreign key',\n  name: 'custom_fkey_constraint_name',\n  references: { //Required field\n    table: 'target_table_name',\n    field: 'target_column_name'\n  },\n  onDelete: 'cascade',\n  onUpdate: 'cascade'\n});\n"))),(0,l.kt)("li",{parentName:"ul"},"PRIMARY KEY",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"queryInterface.addConstraint('Users', ['username'], {\n   type: 'primary key',\n   name: 'custom_primary_constraint_name'\n});\n")))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("p",null,"\u96d6\u7136 Migration \u662f Sequelize \u6240\u63a8\u51fa\u7684, \u4f46 sequelize-cli \u53ef\u7368\u7acb\u4f7f\u7528.\n\u4f7f\u7528 Sequelize Migration \u4f86\u7ba1\u7406\u5c08\u6848\u8cc7\u6599\u5eab\u683c\u5f0f\u67b6\u69cb\u548c\u7a0b\u5f0f\u4e2d\u662f\u5426\u4f7f\u7528 Sequelize ORM \u4e26\u7121\u95dc\u4fc2."),(0,l.kt)("p",null,"\u4e0d\u559c\u4f7f\u7528 ORM \u7684\u958b\u767c\u8005\u6216\u65e2\u6709\u7684\u5c08\u6848, \u7121\u9808\u6539\u8b8a\u5b58\u53d6\u8cc7\u6599\u5eab\u7684\u65b9\u5f0f,\n\u7a0b\u5f0f\u53ef\u4ee5\u4e0d\u900f\u904e Sequelize ORM, \u81ea\u884c\u8655\u7406\u8cc7\u6599\u5eab\u5b58\u53d6\u4ecb\u9762.\n\u5c08\u6848\u4e5f\u53ef\u4ee5\u4e0d\u4f9d\u8cf4 ",(0,l.kt)("inlineCode",{parentName:"p"},"qequelize-cli"),",\n\u76f4\u63a5\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"npx sequelize COMMAND [OPTIONS]")," \u4f86\u57f7\u884c Sequelize Migration."),(0,l.kt)("h3",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sequelize.org/docs/v6/other-topics/migrations/"},"Migrations | Sequelize"),(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("a",{parentName:"li",href:"https://sequelize.org/docs/v6/other-topics/query-interface/"},"Query Interface")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dwatow.github.io/2018/09-24-sequelize/sequelize-migration/"},"Sequelize Migration - \u300aChris \u6280\u8853\u7b46\u8a18\u300b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackmd.io/@TSMI_E7ORNeP8YBbWm-lFA/ryCtaVW_M?print-pdf"},"\u900f\u904e sequelize \u4f86\u9054\u6210 DB Schema Migration - HackMD"))))}c.isMDXComponent=!0}}]);