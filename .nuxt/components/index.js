export { default as Details } from '../../components/Details.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Option } from '../../components/Option.vue'
export { default as PSPDFKitContainer } from '../../components/PSPDFKitContainer.vue'
export { default as Slider } from '../../components/Slider.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
