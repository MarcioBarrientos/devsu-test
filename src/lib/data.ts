import { Product } from './types'

export const fetchProductos = async () => {
  try {
    const response = await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products', {
      headers: {
        'authorId': '1'
      }
    })
    return await response.json() as Product[]
  } catch (e) {
    return []
  }
}
