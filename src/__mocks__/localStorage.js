// eslint-disable-next-line import/prefer-default-export
export const localStorageMock = (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value
    },
    clear() {
      store = {}
    },
    removeItem(key) {
      delete store[key]
    },
  }
})()
