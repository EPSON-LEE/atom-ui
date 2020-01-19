<script>
  import Colorable from "utils/mixins/Colorable"
  import AtomButtonContent from "./atom-button-content.vue"

  const prefixCls = 'atom-button';

  export default {
    name: prefixCls,
    component: {
      AtomButtonContent
    },
    mixins: [
      Colorable
    ],
    directive: {

    },
    props: {
      /*
       * 按钮尺寸
       * 
       * @ type {String}
       */
      size: {
        type: String,
        default: () => "medium"
      },
      /*
       * 按钮颜色 
       *
       * @type {String}
       */
      color: {
        type: String
      },
      /*
       * 将类型应用于按钮 - 它不会影响链接
       *
       * @type {Boolean}
       */
      type: {
        type: String,
        default: 'button'
      },
      /*
       * 禁用该按钮并阻止其操作
       *
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /*
       * 激活涟漪效果
       *
       * @type {Boolean}
       */
      ripple: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      // 涟漪效果
      rippleWorks() {
        return !this.disabled
      },
      // 判断是否激活按钮
      activeButton() {
        if (this.isActive) {
          return `${prefixCls}--active`
        }
      },
      // 统一样式计算
      classes() {
        return {
          // [`${prefixCls}--raised`]: !this.flat,
          [`${prefixCls}--flat`]: this.flat,
          [`${prefixCls}--depressed`]: (this.depressed && !this.flat) || this.outline,
          [`${prefixCls}--icon`]: this.icon,
          [`${prefixCls}--outline`]: this.outline,
          [`${prefixCls}--${this.size}`]: true
        }
      },
      computedRipple() {
        return this.ripple
      }
    },
    mounted() {

    },
    beforeDestroy() {

    },
    data() {
      return {
        /*
        * 波纹效果激活
        *
        * @type {Boolean}
        */
        rippleActive: false,
        /*
        * 按钮是否激活状态
        *
        * @type {Boolean}
        */
        isActive: false
      }
    },
    render(createElement) {
      // 创建虚拟 dom
      const buttonContent = createElement(AtomButtonContent, {}, this.$slots.default)

      //  button 属性
      let buttonAttrs = {
        staticClass: prefixCls,
        class: {
          'isMobile': this.mobile,
          'ivu-button-active': this.isActive,
          ...this.classes
        },
        data: {
          mobile: false
        },
        attrs: {
          ...this.attrs,
          disabled: this.disabled,
          type: !this.href && (this.type || 'button')
        },
        directives: [
          // {
          //   name: 'ripple',
          //   value: this.computedRipple
          // }
        ],
        on: {
          click: (event) => {
            this.$emit('click', this)
          }
        }
      }

      let _tag = 'button'
      const setColor = this.setBackgroundColor
      return createElement(_tag, setColor(this.color, buttonAttrs), [buttonContent])
    }
  }
</script>