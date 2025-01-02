import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PaginationComponent from '@/components/common/PaginationComponent.vue'

describe('PaginationComponent', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {}
  }

  it('renders correct number of page buttons', () => {
    const wrapper = mount(PaginationComponent, {
      props: defaultProps
    })

    const pageButtons = wrapper.findAll('.pagination__page')
    expect(pageButtons).toHaveLength(5)
  })

  it('marks current page as active', () => {
    const wrapper = mount(PaginationComponent, {
      props: defaultProps
    })

    const activeButton = wrapper.find('.pagination__page--active')
    expect(activeButton.text()).toBe('1')
  })

  it('disables previous button on first page', () => {
    const wrapper = mount(PaginationComponent, {
      props: defaultProps
    })

    const prevButton = wrapper.find('.pagination__arrow')
    expect(prevButton.attributes('disabled')).toBeDefined()
  })

  it('disables next button on last page', () => {
    const wrapper = mount(PaginationComponent, {
      props: {
        ...defaultProps,
        currentPage: 5
      }
    })

    const buttons = wrapper.findAll('.pagination__arrow')
    const nextButton = buttons[1]
    expect(nextButton.attributes('disabled')).toBeDefined()
  })

  it('emits page change event when clicking page button', async () => {
    const onPageChange = vi.fn()
    const wrapper = mount(PaginationComponent, {
      props: {
        ...defaultProps,
        onPageChange
      }
    })

    const pageButtons = wrapper.findAll('.pagination__page')
    await pageButtons[1].trigger('click')

    expect(onPageChange).toHaveBeenCalledWith(2)
  })
})
