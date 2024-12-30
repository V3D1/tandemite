import products from '@/data/products.json'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const mapImagePath = (imagePath: string): string => {
  return new URL(`../../assets/images/${imagePath.split('/').pop()}`, import.meta.url).href
}

export interface Product {
  id: number
  title: string
  price: number
  image_url: string
  vat: string
}

export const productService = {
  async getProducts(): Promise<Product[]> {
    await delay(500)
    return products.map(product => ({
      ...product,
      image_url: mapImagePath(product.image_url)
    }))
  },

  async getProductById(id: number): Promise<Product | undefined> {
    await delay(300)
    const product = products.find(product => product.id === id)
    return product
      ? {
          ...product,
          image_url: mapImagePath(product.image_url)
        }
      : undefined
  }
}
