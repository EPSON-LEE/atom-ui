// main.js
import Vue from "vue"
import atom_toast from "./atom-toast.vue" // 引入刚才的 toast 组件

let ToastConstructor = Vue.extend(atom_toast) // 这个在前面的前置知识内容里面有讲到
let instance

const Toast = function (options = {}) {
  instance = new ToastConstructor({
    data: options
  }); // 渲染组件
  document.body.appendChild(instance.$mount().$el); // 挂载到 body 下
};

["success", "error"].forEach(type => {
  Toast[type] = options => {
    options.type = type;
    return Toast(options);
  };
});


export default Toast;