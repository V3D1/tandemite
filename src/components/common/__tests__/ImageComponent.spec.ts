import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ImageComponent from '@/components/common/ImageComponent.vue'

describe('ImageComponent', () => {
  it('renders properly with required props', () => {
    const wrapper = mount(ImageComponent, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test image'
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/test-image.jpg')
    expect(img.attributes('alt')).toBe('Test image')
  })

  it('applies width and height when provided', () => {
    const wrapper = mount(ImageComponent, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test image',
        width: '100px',
        height: '100px'
      }
    })

    const imageWrapper = wrapper.find('.image-wrapper')
    expect(imageWrapper.attributes('style')).toContain('width: 100px')
    expect(imageWrapper.attributes('style')).toContain('height: 100px')
  })

  it('adds lazy loading attribute when lazy prop is true', () => {
    const wrapper = mount(ImageComponent, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test image',
        lazy: true
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('loading')).toBe('lazy')
  })
})
