
const id = 1373
const name = 'Viktor'
const list = [1, 2, 3]
const listAny = [1, 'foo', {}, []]
const me = { id, name }
const now = new Date()
const uniq = Symbol('uniq')

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
  id,
  name,
  list,
  listAny,
  me,
  now,
  uniq,
  sum,
  User
}
