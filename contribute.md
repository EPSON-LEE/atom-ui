
##Contribute

###目录结构

以「Button」组件完成后目录结构后的参考：

```
.
├── app.vue                             // 组件展示区域，以后会迁移到 markdown
├── components                          // 具体组件
│   └── atom-button                     // 按钮组件
│       ├── index.js                    // 装载函数
│       └── src
│           ├── atom-button-content.vue // 按钮内部显示区块
│           └── atom-button.vue         // 按钮外部处理区块
├── index.js                            // 示例配置入口，以后会迁移到 markdown
├── styles                              // 样式入口  
│   ├── animation                       // 动画样式入口
│   ├── component                       // 样式组件入口
│   │   ├── button.scss                 // 组件样式
│   │   └── index.scss                  // 组件样式
│   ├── custom.scss                     // 自定义样式变量      
│   ├── index.scss                      // 组件样式汇总 reset.css 和 全局 mixins 组件和模块组件
│   ├── mixins.scss                     // 组件中的 minxins  
│   └── theme                           // 样式主题
│       ├── color.scss                  // 颜色变量
│       ├── index.scss                  // 所有样式的入口
│       └── mixins.scss                 // 全局样式 minxins
└── utils                               // 工具函数
    ├── directives                      // 全局指令
    ├── icons                           // 全局图标
    ├── mixins                          // 全局 mixins 函数
    │   └── Colorable.js                // colorable mixins
    └── tools                           // 工具函数
```
