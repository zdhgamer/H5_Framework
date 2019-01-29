# 基于Egret游戏引擎实现的H5游戏框架
1. 结构
   基础结构采用TS语言的PurMVC结构
2. 运行
   Egret5.X 语言TS
3. 功能
3.1 热更新  
    热更新采用Egret平台提供的方案，在打包代码的时候把代码和资源进行crc32码重命名  
    版本打包代码参考scripts/resplugin.ts文件，该代码采用插件形式  
    热更新在加载的时候，加载自定义的加载模块，实现每次请求h5界面都是最新资源  
    版本控制解析代码参考src/VersionManager.ts文件，  
    参考：[官方参考地址](http://developer.egret.com/cn/github/egret-docs/extension/RES/RESVersion/index.html)  
    开发模式下：完全注释掉src/VersionManager.ts，运行游戏，即可不在版本控制下使用该框架  
    发行模型下：打开src/VersionManager.ts的注释，将H5_Framework/assetsmanager下的三个文件全部复制到lib/modules/assetsmanager覆盖即可实现，热更新资源的加载  
3.2 websocket网络通信  
   通信采用官方提供的WebSocket库实现，消息内容为：  
   消息id（4字节）+protobuf消息体  
   框架采用js版本的protobuf作为消息结构  
   该框架下使用protobuf方式如下：  
   0：安装插件，首先安装nodejs  
    npm install protobufjs@6.8.4 -g  
    npm install @egret/protobuf -g  
    1：首先打开项目的跟目录  
    2：执行命令（# 将代码和项目结构拷贝至项目中）：  
        pb-egret add  
    3：编写proto文件，执行命令（# 将 protofile 文件放在 egret-project/protobuf/protofile 文件夹中）：
        pb-egret generate  
    4:改动tsconfig.json，加入下面代码：  
        "include": [
        "src",
        "libs",
        "protobuf/**/*.d.ts"
        ],
    5：在项目的index.html中引入下面代码  
        <script type="text/javascript" src="../protobuf/library/protobuf-library.js"></script>  
        <script type="text/javascript" src="../protobuf/bundles/protobuf-bundles.js"></script>  
3.3 微信授权登陆  
    采用微信测试公众号实现游戏的授权登陆  
    参考链接：[官方论坛帖子](https://bbs.egret.com/forum.php?mod=viewthread&tid=30252&highlight=%E6%8E%88%E6%9D%83)  
    本框架提供go语言实现的服务器代码在H5_Framework/wxexample问价夹下，服务器端采用Beego框架实现  
3.4 http通信  
    封装引擎api，提供更加方便的http请求  
3.5 音效管理  
    封装原有api  
3.6 UI管理  
    方便子界面的增加和移除  
3.7 UI适配  
    UI适配  
3.8 资源加载进度条显示  
    代码在src/Game/ExmlTS/ResLoadingUI.ts  
。。。。  

