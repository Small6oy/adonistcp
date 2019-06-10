'use strict'

// Declare Dependencies
const log = use('Logger');

// Init Global Variables
const tag = "TCP"
const TCPClient = require('./TCPClient');
const TCPServer = require('./TCPServer');

// Init Class
class TCP {

  constructor (Config) {
    try {
        log.debug(`${tag} :: Initiating`);

        const settings = Config.get('tcp')
        if (!settings) {
          throw new Error(`Specify TCP settings under config/tcp file`)
        }

        // TCP Endpoint
        let port = settings.port;
        let host = settings.host;
        let type = settings.type;
        let name = settings.name;

        if(type == 1) return new TCPServer({port, host})
        return new TCPClient({port, host, name})

    } catch (ex) {
      log.error(`${tag} :: ${ex.message}`)
    }
  }

}
module.exports = TCP
