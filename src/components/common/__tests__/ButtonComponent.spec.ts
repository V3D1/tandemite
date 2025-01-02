import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComponent from '@/components/common/ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(ButtonComponent, {
      slots: {
        default: 'Test Button'
      }
    })

    expect(wrapper.text()).toBe('Test Button')
    expect(wrapper.classes()).toContain('button--primary')
    expect(wrapper.classes()).toContain('button--medium')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        variant: 'secondary'
      }
    })

    expect(wrapper.classes()).toContain('button--secondary')
  })

  it('applies correct size class', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        size: 'large'
      }
    })

    expect(wrapper.classes()).toContain('button--large')
  })

  it('applies full width class when fullWidth prop is true', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        fullWidth: true
      }
    })

    expect(wrapper.classes()).toContain('button--full-width')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(ButtonComponent)
    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('has correct type attribute', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        type: 'submit'
      }
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })
})
