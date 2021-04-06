import jwt_decode from 'jwt-decode'
import { $authHost } from './index'

export const createBasketDevice = async (deviceId) => {
  const { id } = jwt_decode(localStorage.getItem('token'))
  const { data } = await $authHost.post('api/basket', { userId: id, deviceId })
  return data
}

export const deleteBasketDevice = async (id) => {
  const { data } = await $authHost.delete('api/basket', { id })
  return data
}

export const clearBasket = async () => {
  const { id } = jwt_decode(localStorage.getItem('token'))
  const { data } = await $authHost.delete('api/basket', { id })
  return data
}
