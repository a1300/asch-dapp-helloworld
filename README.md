# Asch Dapp Helloworld

## Architecture
This Dapp consists of two parts:
1. The Backend part: This is the Dapp running on the sidechain.
    * The Dapp is normally running on your localnet on your machine on port 4096 (`http://localhost:4096`).
    * The Dapp is identified with an __unique Id__ (e.g. a7ef9cd0707fe94f583334d434e39570113a43e3647c8ee730bf21ec2fe08c87) and can be accessed via `http://localhost:4096/api/dapps/a7ef9cd0707fe94f583334d434e39570113a43e3647c8ee730bf21ec2fe08c87/some_endpoint`
    * You get the unique Id after installing the Dapp on the localnet.
2. The Frontend part:
    * This is the Vue.js frontend in the `development` folder.
    * The Vue.js frontend can be started with the command `npm run dev` and runs on `http://localhost:8080`.




## Install Backend

To install the backend part of the Dapp on your localnet follow very carefully the the instructions in [Tutorial](https://github.com/AschPlatform/asch/blob/master/docs/dapp_docs/1_hello_en.md).

After the tutorial you should have a folder structure like this.
```
root
└───asch
        app.js
        aschd
        ...
    └───dapps
        └───<dapp Id>
               README.md
               config.json
               dapp.json
               genesis.json
               init.js
           └───contract
                   domain.js
           └───interface
                   domain.js
                   helloworld.js
           └───model
                   domain.js
           └───development
                   Vue.js Frontend
                   ...
                   ...
```


## Check environment

Be sure to have the asch-dapp installed in your localnet ([tutorial](https://github.com/AschPlatform/asch/blob/master/docs/dapp_docs/1_hello_en.md)). Normally the localnet is running on `http://localhost:4096`. If the this Dapp was successfully installed, then you should see a directory with a long name in `asch/dapps/<long Id>`.

Open your browser and type `http://localhost:4096/api/dapps/<dapp Id>/transactions`, now you should get some JSON response. First step is done. The Dapp functions as our backend. Now we need something we can interact with, a webapp. Now let's start the local development server and get the frontend part up and running.

## Start local frontened server
In the `asch/dapps/<dapp Id>/development` folder is a demo Vue.js project. The Vue.js frontend runs usually on `http://localhost:8080` it access our dapp on `http://localhost:4096/api/dapps/<dappId>/`.

Change directory to the development folder. 

`cd development`

Install all packages.

`npm install`.

To start the web server.

`npm run dev`.

You need to set your `<dapp Id>` in `development/config/dev.env.js` so that the web frontend can access the sidechain.

## Test Frontend
Now open your browser and type `http://localhost:8080` to access the webapp. If everything was configured correct, you should see no errors in the browser-console.

## Use the Dapp
In order to use all functionality of the dapp, you need to deposit XAS to your dapp.

```
# Locate your asch-cli folder
# Run
asch-cli dapps --deposit
```



## Dapp master account
```
    address: AHMCKebuL2nRYDgszf9J2KjVZzAw95WUyB
    secret: sentence weasel match weather apple onion release keen lens deal fruit matrix
    publicKey: a7cfd49d25ce247568d39b17fca221d9b2ff8402a9f6eb6346d2291a5c81374c
```

## Dapp delegates
These five delegates are responsible for the creation of new blocks. The delegates public keys are stored in `config.json`
```json
[ 
  { 
    "address": "AN1yKK47P3MtD5ZgHYoncGQ1gCn4p2vGAC",
    "secret": "flame bottom dragon rely endorse garage supply urge turtle team demand put",
    "publicKey": "db18d5799944030f76b6ce0879b1ca4b0c2c1cee51f53ce9b43f78259950c2fd" 
  },
  { 
    "address": "AGeeCmSVLDNbtMqqpJchQZakchwzpuje1P",
    "secret": "thrive veteran child enforce puzzle buzz valley crew genuine basket start top",
    "publicKey": "590e28d2964b0aa4d7c7b98faee4676d467606c6761f7f41f99c52bb4813b5e4" 
  },
  { 
    "address": "A7NWaYUkpa543hdTsfw57AoZAgCBr2NFY6",
    "secret": "black tool gift useless bring nothing huge vendor asset mix chimney weird",
    "publicKey": "bfe511158d674c3a1e21111223a49770bee93611d998e88a5d2ea3145de2b68b"
  },
  { 
    "address": "ABU1G2pQFMGa7c1GiAPYCQuUhiPHdvCSB2",
    "secret": "ribbon crumble loud chief turn maid neglect move day churn share fabric",
    "publicKey": "7bbf62931cf3c596591a580212631aff51d6bc0577c54769953caadb23f6ab00" 
  },
  { 
    "address": "AG1A3ojeLAMZySaZWTkg49jcoVCV7FCKXF",
    "secret": "scan prevent agent close human pair aerobic sad forest wave toe dust",
    "publicKey"": "452df9213aedb3b9fed6db3e2ea9f49d3db226e2dac01828bc3dcd73b7a953b4" 
  } 
]
```


--------------

# Help
If something is not working for you. Don't hesitate, create a issue on [aschplatform/asch-dapp-helloworld](https://github.com/aschplatform/asch-dapp-helloworld) and we will help you.
