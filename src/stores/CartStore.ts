import { defineStore } from 'pinia'
import { productService, type Product } from '@/services/api/productService'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image_url: string
  vat: string
}

interface CartState {
  items: CartItem[]
  products: Product[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    products: []
  }),

  getters: {
    totalItems: (state): number => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice: (state): number => {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    getItemById: state => {
      return (itemId: number) => state.items.find(item => item.id === itemId)
    },
    getAllProducts: state => {
      return state.products
    }
  },

  actions: {
    async fetchProducts() {
      try {
        const products = await productService.getProducts()
        this.products = products
      } catch (error) {
        console.error('Error fetching products:', error)
        throw error
      }
    },

    addItem(product: Product, quantity: number = 1) {
      const existingItem = this.items.find(i => i.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: quantity,
          image_url: product.image_url,
          vat: product.vat
        })
      }
    },

    removeItem(itemId: number) {
      const index = this.items.findIndex(item => item.id === itemId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(itemId: number, quantity: number) {
      const item = this.items.find(i => i.id === itemId)
      if (item) {
        item.quantity = Math.max(0, quantity)
        if (item.quantity === 0) {
          this.removeItem(itemId)
        }
      }
    },

    clearCart() {
      this.items = []
    }
  }
})
