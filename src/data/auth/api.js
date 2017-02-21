// MOCK LOGIN
export function login (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        token: 'wefjbew89ewh8ew083208dhrbjuihs083832uhb',
        dateLoggedIn: Date.now(),
        name: 'Oliver Hunt'
      })
    }, 500)
  })
}
