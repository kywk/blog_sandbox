---
title: "TSC Error"
tags: [TypeScript]

date: 2022-05-27
categories: [typescript]
---

[TypeScript] tsc Error Troubleshooting
======================================

> 本篇雜記收錄開發過程中較為特別 tsc error 及問題排除...


error TS2304: Cannot find name 'process'
----------------------------------------

``` shell
error TS2304: Cannot find name 'process'
```

You need to make sure that the type definitions for Node are available. 
The way to do this depends on which version of TypeScript you are using.

``` shell
$ npm install --save-dev @types/node
```

__ref__
-   [javascript - Read arguments from command line - error TS2304: Cannot find name 'process' - Stack Overflow](https://stackoverflow.com/questions/35551185/read-arguments-from-command-line-error-ts2304-cannot-find-name-process)
