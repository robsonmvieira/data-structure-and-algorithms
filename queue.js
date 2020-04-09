// FIFO
// Fist In Firs Out

function BankClients() {
  this.clients = []
}

BankClients.prototype.enqueue = function(client) {
  return this.clients.push(client)
}

BankClients.prototype.dequeue = function() {
  return this.clients.shift()
}

BankClients.prototype.size = function() {
  return this.clients.length
}

const log = (item) => console.log(item)

const itau = new BankClients();

// equeue
itau.enqueue('Bella')
itau.enqueue('Josh')
itau.enqueue('John')
itau.enqueue('Pedro')
itau.enqueue('Robert')
itau.enqueue('Marvin')

// show clients
log(itau.clients);

// dequeue
log(itau.dequeue());

// show size from queue
log(itau.size());

// show clients
log(itau.clients);