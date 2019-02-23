'use strict'

const Hapi = require('hapi')
const SocketIO = require('socket.io')

const server = Hapi.server({
  port: 8081,
  host: 'localhost'
})

const init = async () => {
  await server.start()

  const io = SocketIO.listen(server.listener)

  io.sockets.on('connection', (socket) => {
    socket.emit({ msg: 'welcome' })
  })

  console.log(`Server running at: ${server.info.uri}`)
}

init()