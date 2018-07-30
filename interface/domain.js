app.route.get('/condition', async function (req) {
  let condition = {
    height: {
      $lt: 100
    }
  }
  return await app.model.Block.count(condition)
})

// exist
app.route.get('/exist1', async function (req) {
let condition = {
  id: '9a5ec0669c79b9f5a1d5a4dbb2c200bc28c9ea829dbff71f41cbb2ad5a7d9b01'
}
return await app.model.Transaction.exists(condition)
})

// exists 2
app.route.get('/exist2', async function (req) {
  let condition = {
    str1: 'Nakamoto'
  }
  return await app.model.Account.exists(condition)
})

// findOne
app.route.get('/findone', async function (req) {
  let option = {
    condition: {
      str1: 'Nakamoto'
    }
  }
  return await app.model.Account.findOne(option)  
})


// findAll
app.route.get('/findall', async function (req) {
  let option = {
    condition: {
      delegate: 'db18d5799944030f76b6ce0879b1ca4b0c2c1cee51f53ce9b43f78259950c2fd'
    },
    fields: ['height', 'delegate'],
    sort: {
      height: -1
    },
    limit: 50,
    offset: 0
  }
  return await app.model.Block.findAll(option)
})

/*  query options  */

// hardcondition
app.route.get('/hardcondition', async function (req) {
  let option = {
    condition: {
      $and: {
        $or: {
          timestamp: 30000,
          delegate: '452df9213aedb3b9fed6db3e2ea9f49d3db226e2dac01828bc3dcd73b7a953b4'
        },
        height: {
          $lt: 244233,
          $gt: 200000
        },
        count: {
          $ne: 22
        }
      }
    }
  }
  return app.model.Block.findAll(option)
})

// fields1
app.route.get('/fields1', async function (req) {
  let option = {
    condition: {
      address: 'AHMCKebuL2nRYDgszf9J2KjVZzAw95WUyB'
    }
  }
  return await app.model.Balance.findOne(option)
})

// fields 2
app.route.get('/fields2', async function (req) {
  let option = {
    condition: {
      address: 'AHMCKebuL2nRYDgszf9J2KjVZzAw95WUyB'
    },
    fields: ['currency', 'balance']
  }
  return await app.model.Balance.findOne(option)
})

// sort asc
app.route.get('/sortasc', async function (req) {
  let option = {
    sort: {
      height: 1
    }
  }
  return await app.model.Block.findAll(options)
})

// sort desc
app.route.get('/sortdesc', async function (req) {
  let option = {
    sort: {
      height: -1
    }
  }
  return await app.model.Block.findAll(options)
})


// limit
app.route.get('/limit', async function (req) {
let option = {
  limit: 100
}
return await app.model.Block.findAll(option)
})

// offset1
app.route.get('/offset1', async function (req) {
let option = {
  offset: 0,
  sort: {
    height: 1
  }
}
return await app.model.Block.findAll(option)
})


// offset2
app.route.get('/offset2', async function (req) {

  let option = {
    offset: 50,
    sort: {
      height: 1
    }
  }
  return await app.model.Block.findAll(option)

})




















