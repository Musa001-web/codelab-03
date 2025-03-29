const storagePrefix = 'memmcol_'

const storage = {
  getToken: () => {
    try {
      return JSON.parse(
        window.localStorage.getItem(`${storagePrefix}token`) as string
      )
    } catch (e) {
      return e;
    }
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`)
  },
  getUserData: () => {
    try {
      return JSON.parse(
        window.localStorage.getItem(`${storagePrefix}data`) as string
      )
    } catch (e) {
      return e
    }
  },
  setUserData: (data: string) => {
    window.localStorage.setItem(`${storagePrefix}data`, JSON.stringify(data))
  },
  clearUserData: () => {
    window.localStorage.removeItem(`${storagePrefix}data`)
  },
}

export default storage