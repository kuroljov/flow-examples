async function findItemsInStock () {
  const items = await fetch('/api/items').then(res => res.json())

  // TODO: return items in stock only
  return items
}

export default findItemsInStock
