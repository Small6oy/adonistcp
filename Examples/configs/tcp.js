'use strict'

const Env = use('Env')

module.exports = {
  name: Env.get('APP_NAME', 'Adonis'),
  type: Env.get('TCP_TYPE', 1),
  port: Env.get('TCP_PORT', 1337),
  host: Env.get('TCP_HOST', '127.0.0.1')
}
