export const checkSessionIsAuth = () => {
    if (sessionStorage.hasOwnProperty('isAuth')) {
      return true
    }
    return false
  }