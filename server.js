'use strict'

const Hapi = require('hapi')
const SocketIO = require('socket.io')

const server = Hapi.server({
  port: 8081,
  host: 'localhost'
})

const init = async () => {
  const io = SocketIO.listen(server.listener)

  io.on('connection', socket => {
    // socket.emit('msg')
    console.log('I work')
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()