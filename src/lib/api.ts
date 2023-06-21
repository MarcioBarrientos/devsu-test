import { Product } from './types'
const URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros'
const AUTHOR_ID = '1'

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${URL}/bp/products`, {
      headers: {
        'authorId': AUTHOR_ID
      }
    })
    return await response.json() as Product[]
  } catch (e) {
    return []
  }
}

export const deleteProduct = async (id: string) => {
  try {
    const response = await fetch(`${URL}/bp/products?id=${id}`, {
      method: 'DELETE',
      headers: {
        'authorId': AUTHOR_ID
      }
    })
    return await response.json()
  } catch (e) {
    return []
  }
}

export const updateProduct = async (product: Partial<Product>) => {
  try {
    const response = await fetch(`${URL}/bp/products`, {
      method: 'PUT',
      headers: {
        'authorId': AUTHOR_ID
      },
      body: JSON.stringify(product)
    })
    return await response.json()
  } catch (e) {
    return []
  }
}

export const createProduct = async (product: Partial<Product>) => {
  try {
    const response = await fetch(`${URL}/bp/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorId': AUTHOR_ID
      },
      body: JSON.stringify(product)
    })
    return await response.json()
  } catch (e) {
    return []
  }
}

export const verifyProductId = async (id: string) => {
  try {
    const response = await fetch(`${URL}/bp/products/verification?id=${id}`, {
      headers: {
        'authorId': AUTHOR_ID
      }
    })
    return await response.json()
  } catch (e) {
    return []
  }
}
