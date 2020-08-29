# uni-template

uni-template: uni-app项目模板，实现各种基础功能

## 项目下载和运行

- 拉取项目代码

```bash
git clone https://github.com/fxss5201/uni-template.git
```

- 运行

需要安装 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 和 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

需要在 HBuilderX 工具 -> 设置 -> 运行配置 -> 小程序运行配置 -> 微信开发者工具路径 配置微信开发者工具安装路径。

在 HBuilderX 中打开， 运行 -> 运行到小程序模拟器 -> 微信开发者工具，会进入编译阶段，成功之后会在根目录下创建 unpackage 文件夹，之后会尝试打开微信开发者工具，如果打不开的话，将生成的小程序导入到微信开发者工具。

## 目录说明

1. components：组件文件，不用引入声明，直接使用。
2. pages：页面
   1. index：首页
3. static：静态资源
4. store：全局状态管理中心
5. unpackage：打包文件
6. .gitignore：忽略文件，暂时忽略 `unpackage` 文件
7. APP.vue：应用配置，用来配置App全局样式以及监听
8. main.js：Vue初始化入口文件
9. manifest.json：配置应用名称、appid、logo、版本等打包信息
10. pages.json：配置页面路由、导航条、选项卡等页面类信息
11. uni.scss：整体控制应用的风格，<https://uniapp.dcloud.io/collocation/uni-scss>
12. mixins：混入
13. utils：工具
14. config：配置文件
    1. index.js：类似于vue.config.js
    2. theme.js：配置在js中使用的主题配置
15. sitemap.json：配置页面是否被索引
16. package.json：npm相关，直接安装对应的库，和web一样引入使用
17. package-lock.json：npm相关
