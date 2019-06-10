# Adonis TCP Server/Client
> Custom TCP Server/Client Add-on For Adonis JS.

![Alt text](http://res.cloudinary.com/adonisjs/image/upload/q_100/v1497112678/adonis-purple_pzkmzt.svg "AdonisJS Logo")

## Setup
Start by installing it from npm.

```bash
adonis install https://bitbucket.org/olemediagroup/ussd.git

# yarn
adonis install https://bitbucket.org/olemediagroup/ussd.git --yarn
```

## Register provider
Register the provider inside `start/app.js` file.

```js
const providers = [
  '@ole-connect/ussd/Provider'
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
    platform: Env.get('USSD_PLATFORM', 'infobip'),
    msisdn: Env.get('USSD_SIMULATOR_MSISDN', '27716450629'),
    dial_string: Env.get('USSD_SIMULATOR_DIAL_STRING', '*120*310*1#'),
    routes: { 
      "*120*310#" : { screen: "signIn" }
    }
  }
```

## .ENV
You need to add the following .ENV settings, otherwise it will default

```bash
    ##########################################################
    # USSD
    ##########################################################
    USSD_PLATFORM = infobip
    USSD_SIMULATOR_MSISDN = 27716450629
    USSD_SIMULATOR_DIAL_STRING = *120*310*1#
```