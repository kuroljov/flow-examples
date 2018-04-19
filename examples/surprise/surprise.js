import Node from './Node'

function getClosestNode (socket, query) {
  let node = new Node({ socket })

  for (let n = 0, len = query.length; n < len; n++) {
    const char = query[n]

    if (!node.socket[char]) {
      return
    }

    node = node.socket[char]
  }

  return node
}

export default getClosestNode
