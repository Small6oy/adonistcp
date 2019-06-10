'use strict'

// Declare Dependencies
const log = use('Logger');
const net = require('net');

// Init Global Variables
const tag = "TCPServer"

// Init Class
class TCPServer {

  constructor ({port, host}) {
    try {
        log.debug(`${tag} :: Initiating`);

        var textChunk = '';
        const server = net.createServer((socket) => {

          socket.on('data', (data)=>{
            textChunk = data.toString('utf8');
            console.log(textChunk);
          });

        })

        server.on('error', (err) => {
          throw err;
        });
        
        server.listen(port, host, () => {
          log.info(`${tag} :: listening on :: ${host}:${port}`);
        });

    } catch (ex) {
      log.error(`${tag} :: ${ex.message}`)
    }
  }

}
module.exports = TCPServer
