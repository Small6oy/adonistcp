'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class TCP extends ServiceProvider {
  
  register () {
    this.app.singleton('TCP', () => {
      const Config = this.app.use('Adonis/Src/Config');
      const TCP = require('./src');
      return new TCP(Config)
    })
  }

  boot(){
    this.app.use('TCP');
  }
}

module.exports = TCP
