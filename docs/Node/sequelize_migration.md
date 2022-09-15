---
#id: kywk-moco
title: "Sequelize Migration"
description: Sequelize Migration
tags: [Node.js, Sequelize]

#sidebar_position: 1
#sidebar_label: Easy
#sidebar_class_name: green

hide_table_of_contents: true

date: 2022-09-15T00:00:00+08:00
image: https://i.imgur.com/mErPwqL.png
---

Sequelize Migration
===================

Sequelize 是 Node.js 下相當主流的 ORM 套件.
ORM 使用與否的爭論大概也和 `Space VS Tab`, `Vi VS Emacs` ... 一樣的永無止盡.
不過 Sequelize 2 之後推出 sequelize-cli 中的 Migration 功能, 
確實能解決程式開發階段對資料庫操作的常見困擾:

- 出問題回不到上個版本？
- 忘記做了哪些修改？
- 改了schema沒人知道？



什麼是 Migraiton ?
-----------------

- __Migration__ 是用來描述「資料庫的結構掌什麼樣子」的檔案, 會隨著專案開發過程中對資料庫的修改而逐漸增加.
- 可以理解成資料庫格式變更的版本控制.

![migration files](https://lh3.googleusercontent.com/pw/AL9nZEXTj9J5V07uQ7uWqG_O5kIuauTbX5mOu-pJ8RqJDe5CEPgkF4tHAR294BcbwsGbKdu0NbOqNCik91U8vG-fUtBbt6jVSr6tMuzjaQOIs5ZWTrx59xYN5phxsHd4GPEyX7oDNLn6KAT8Kr4u2f-dAO4lRg=w600-no?authuser=0)

### 可以幹嘛 ###

- 紀錄操作過程
- 降低人為操作錯誤的可能
- 環境部署或是更換資料庫的時候，快速達成同步
- 錯誤發生時，可以快速回到正確的版本



環境安裝
-------

### sequelize-cli ###

sequelize-cli 可系統全域安裝或安裝在專案項目, 依實際需求而定.
``` shell
npm install --save-dev sequelize-cli 
```
亦直接透過 `npx sequelize ` 執行.

### Project bootstrapping ###

``` shell
npx sequelize-cli init
```

This will create following folders

- `config`, contains config file, which tells CLI how to connect with database
- `models`, contains all models for your project
- `migrations`, contains all migration files
- `seeders`, contains all seed files

![tree](https://lh3.googleusercontent.com/pw/AL9nZEVtWoXHl5m1PaPaMRoSgGYsCk8GxIE78CKElbigXOZj63pXqjmkjyDwnH-Vkk1cErjHsB_xFg_CJsdt6a5l2f-7_8wM046gAZDPcZK2Gc0-6LxwLxATYh81BU5m2V1NE_EscAE3DeLFXH1mb0JntUErkw=w314-no?authuser=0)




基本使用指令
---------

``` 
Sequelize CLI [Node: 16.17.0, CLI: 6.4.1, ORM: 6.21.6]

sequelize <command>

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file
  sequelize migration:create                  Generates a new migration file
  sequelize model:generate                    Generates a model and its migration
  sequelize model:create                      Generates a model and its migration
  sequelize seed:generate                     Generates a new seed file
  sequelize seed:create                       Generates a new seed file

Options:
  --version  Show version number                                                           [boolean]
  --help     Show help
```






See Also
--------

雖然 Migration 是 Sequelize 所推出的, 但 sequelize-cli 可獨立使用.
使用 Sequelize Migration 來管理專案資料庫格式架構和程式中是否使用 Sequelize ORM 並無關係.

不喜使用 ORM 的開發者或既有的專案, 無須改變存取資料庫的方式,
程式可以不透過 Sequelize ORM, 自行處理資料庫存取介面.
專案也可以不依賴 `qequelize-cli`, 
直接透過 `npx sequelize COMMAND [OPTIONS]` 來執行 Sequelize Migration.

### Reference ###

- [Migrations | Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
- [Sequelize Migration - 《Chris 技術筆記》](https://dwatow.github.io/2018/09-24-sequelize/sequelize-migration/)
- [透過 sequelize 來達成 DB Schema Migration - HackMD](https://hackmd.io/@TSMI_E7ORNeP8YBbWm-lFA/ryCtaVW_M?print-pdf)
