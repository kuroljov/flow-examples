// @flow

import type { Item } from './Item'

async function findItemsInStock (): Promise<Array<Item>> {
  const items: Array<Item> = await fetch('/api/items').then(res => res.json())

  // TODO: return items in stock only
  return items
    .filter(item => item.quantity)
}

export default findItemsInStock
