import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconComponent from '@/components/common/IconComponent.vue'

describe('IconComponent', () => {
  const mockIconPath = '/path/to/icon.svg'

  it('renders properly with default props', () => {
    const wrapper = mount(IconComponent, {
      props: {
        iconPath: mockIconPath
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(mockIconPath)
    expect(img.attributes('width')).toBe('20')
    expect(img.attributes('height')).toBe('20')
  })

  it('applies custom size when provided', () => {
    const customSize = 32
    const wrapper = mount(IconComponent, {
      props: {
        iconPath: mockIconPath,
        size: customSize
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('width')).toBe(customSize.toString())
    expect(img.attributes('height')).toBe(customSize.toString())
  })

  it('handles aria attributes correctly', () => {
    const ariaLabel = 'Test icon'
    const wrapper = mount(IconComponent, {
      props: {
        iconPath: mockIconPath,
        ariaLabel
      }
    })

    const span = wrapper.find('span')
    expect(span.attributes('aria-label')).toBe(ariaLabel)
    expect(span.attributes('aria-hidden')).toBe('false')
    expect(span.attributes('role')).toBe('img')
  })

  it('hides from screen readers when no ariaLabel provided', () => {
    const wrapper = mount(IconComponent, {
      props: {
        iconPath: mockIconPath
      }
    })

    const span = wrapper.find('span')
    expect(span.attributes('aria-hidden')).toBe('true')
  })
})
