# Adonis TCP Server/Client
> Custom TCP Server/Client Add-on For Adonis JS.

![Alt text](http://res.cloudinary.com/adonisjs/image/upload/q_100/v1497112678/adonis-purple_pzkmzt.svg "AdonisJS Logo")

## Setup
Start by installing it from npm.

```bash
adonis install https://github.com/Small6oy/adonistcp.git

# yarn
adonis install https://github.com/Small6oy/adonistcp.git --yarn
```

## Register provider
Register the provider inside `start/app.js` file.

```js
const providers = [
  'adonistcp/Provider'
]
```

That's all :)

## Config
There is only one config setting, that is to define the environments in which the mongo should run.

You have to create the `config/ussd.js` file and the following setting.

```js
  'use strict'

  const Env = use('Env')

  module.exports = {
    name: Env.get('APP_NAME', 'Adonis'),
    type: Env.get('TCP_TYPE', 1),
    port: Env.get('TCP_PORT', 1337),
    host: Env.get('TCP_HOST', '127.0.0.1')
  }
```

## .ENV
You need to add the following .ENV settings, otherwise it will default

```bash
    ##########################################################
    # USSD
    ##########################################################
    APP_NAME = Adonis ##Defaults to Adonis
    TCP_TYPE = 1 or 2 ##1 For Server ##2 For Client
    TCP_PORT = 1337 ## Defaults to 1337
    TCP_HOST = localhost ## Defaults to localhost
```