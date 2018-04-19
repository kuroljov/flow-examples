
const n = 42
const name = 'Dordrud'
const list = [1, 2, 3]
const listAny = [1, 'foo', {}, [], null]
const now = new Date()
const uniq = Symbol('uniq')
const nothing = undefined
const dog = { name }

function sum (a, b) {
  return a + b
}

class User {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get name () {
    return `${this.firstName} ${this.lastName}`
  }
}

export {
  n,
  name,
  list,
  listAny,
  nothing,
  dog,
  now,
  uniq,
  sum,
  User
}
