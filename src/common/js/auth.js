import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(name,psd,id,phone) {
  return Cookies.set(TokenKey, name,psd,id,phone)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

