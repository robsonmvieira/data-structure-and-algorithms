// LIFO
// Last In First Out

function Bag() {
  this.store = []
}

Bag.prototype.save = function(item) {
  this.store.push(item)
}

Bag.prototype.remove =function() {
  return this.store.pop()
}

Bag.prototype.size = function() {
  return this.store.length
}

const netshoes = new Bag();

// add new item
netshoes.save('shoes')
netshoes.save('bags')
netshoes.save('squeezes')

// consulting a size of stack
netshoes.size()

// removing a item from stack
console.log(netshoes.remove())