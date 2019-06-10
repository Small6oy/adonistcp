'use strict'

// Declare Dependencies
const log = use('Logger');
const net = require('net');

// Init Global Variables
const tag = "TCPClient"
let client;
let app_name;
let ipaddress;
let is_connected = false;

// Init Class
class TCPClient {

  connect ({port, host, name}) {
    try {
        log.debug(`${tag} :: Initiating`);

        client = net.createConnection({ port, host }, () => {
          log.info(`${tag} :: connected to :: ${host}:${port}`);
          is_connected = true
          app_name = name
          port = port
          host = host
          ipaddress = client.address().address
        });

        client.on('data', (data) => {
          log.debug(`${tag} :: data :: ${data.toString()}`)
          // client.end();
        });

        client.on('end', () => {
          log.debug(`${tag} :: Disconnected from server`)
        });

        client.on('close', ()=>{
          log.debug(`${tag} :: Connection closed`)
          is_connected = false
          client.setTimeout(10000, ()=>{
            log.debug(`${tag} :: Reconnecting`)
            this.connect({port, host, name})
          })
        });

        client.on('error', (error)=>{
          log.error(`${tag} :: ${error.message}`)
        });

    } catch (ex) {
      log.error(`${tag} :: ${ex.message}`)
    }
  }

  write(data){
    try {
      log.debug(`${tag} :: write :: ${JSON.stringify(data)}`);

      if(!is_connected){
        log.debug(`${tag} :: Client not connected`)
        return
      }

      let app_data = {
        application: {
          name: app_name,
          ipaddress
        }
      };
  
      let log_data = Object.assign(app_data, data);
      client.write(JSON.stringify(log_data));  
    } catch (ex) {
        log.error(`${tag} :: write :: ${ex.message}`);
        throw ex;
    }
  }

}
module.exports = TCPClient
