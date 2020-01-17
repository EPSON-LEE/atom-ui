
### webpack 4 mode 属性

webpack4 新增 mode 属性，默认是 development / production, 下面是默认配置

```
development:

process.env.NODE_ENV 的值设为 development
默认开启以下插件，充分利用了持久化缓存。参考基于 webpack 的持久化缓存方案

NamedChunksPlugin ：以名称固化 chunk id
NamedModulesPlugin ：以名称固化 module id

production:

process.env.NODE_ENV 的值设为 production
默认开启以下插件，其中 SideEffectsFlagPlugin 和 UglifyJsPlugin 用于 tree-shaking


FlagDependencyUsagePlugin ：编译时标记依赖
FlagIncludedChunksPlugin ：标记子chunks，防子chunks多次加载
ModuleConcatenationPlugin ：作用域提升(scope hosting),预编译功能,提升或者预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度
NoEmitOnErrorsPlugin ：在输出阶段时，遇到编译错误跳过
OccurrenceOrderPlugin ：给经常使用的ids更短的值
SideEffectsFlagPlugin ：识别 package.json 或者 module.rules 的 sideEffects 标志（纯的 ES2015 模块)，安全地删除未用到的 export 导出
UglifyJsPlugin ：删除未引用代码，并压缩

```
### [什么是 vue-loader](https://vue-loader.vuejs.org/zh/)

```
vue-loader是webpack中的一个loader，他会将*.vue文件变成*.bundle.js，然后放入浏览器中运行。 简而言之，提供了我们使用.vue这种方式去编写vue组件的能力。

一个单vue文件包含了 template style script 这三个标签。因此vue-loader在将.vue编译输出为bundle.js的过程中也调用了四个小的loader

selector (内置style-loader)
style-compiler
template-compiler
babel-loader
什么是vue-temp
```

### [什么是 vue-template-compiler](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler/)

简单的说明vue-template-compiler的作用

```
his package can be used to pre-compile Vue 2.0 templates into render functions to avoid runtime-compilation overhead and CSP restrictions. In most cases you should be using it with vue-loader, you will only need it separately if you are writing build tools with very specific needs.

vue-template-compiler会把 Vue 的template模板语法转换为render函数， 避免了运行过程中的编译和CSP(内容安全策略的限制，eg 不能使用new Function() 对表达式求值)。通常情况下会配合vue-loader一起使用。
```

### 文档编写

[](https://zhuanlan.zhihu.com/p/65174076)