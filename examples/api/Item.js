// @flow

export type Id = string

export type Item = {
  id: Id,
  name: string,
  desc: Array<string>,
  brand: Id,
  quantity: number,
}
