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

// DOES NOT WORK!!!
// {"error":"Error: Unknown operator \"timestamp\"","success":false}
/*
  $or and $and does not work with
  findAll, findOne
  $or and $and works with count(*), vexists(),
*/
// hardcondition
app.route.get('/hardcondition', async function (req) {
  let condition = {
    $or: {
      timestamp: 0,
      delegate: '452df9213aedb3b9fed6db3e2ea9f49d3db226e2dac01828bc3dcd73b7a953b4'
    }
  }
  return await app.model.Block.count(condition)
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
  return await app.model.Block.findAll(option)
})

// sort desc
app.route.get('/sortdesc', async function (req) {
  let option = {
    sort: {
      height: -1
    }
  }
  return await app.model.Block.findAll(option)
})


// limit
app.route.get('/limit', async function (req) {
  let option = {
    limit: 3
  }
  return await app.model.Block.findAll(option)
})

// offset1
app.route.get('/offset1', async function (req) {
  let option = {
    offset: 0,
    limit: 50,
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
    limit: 50,
    sort: {
      height: 1
    }
  }
  return await app.model.Block.findAll(option)
})





















/*    QUERY OPERATORS */

/* AND */

app.route.get('/and', async function (req) {

  let options = {
    condition: {
      height: 1,
      timestamp: 0
    }
  }
  return await app.model.Block.findAll(options)

})

app.route.get('/equal1', async function (req) {

  let options = {
    condition: {
      str1: 'liangpeili'
    }
  }
  return await app.model.Account.findOne(options)

})

app.route.get('/equal2', async function (req) {

  let options = {
    condition: {
      str1: {
        $eq: 'liangpeili'
      }
    }
  }
  return await app.model.Account.findOne(options)

})


app.route.get('/notequal', async function (req) {

  let options = {
    condition: {
      address: {
        $ne: 'AHMCKebuL2nRYDgszf9J2KjVZzAw95WUyB'
      }
    }
  }
  return await app.model.Account.findAll(options)

})


app.route.get('/like', async function (req) {
  
  let option = {
    condition: {
      str1: {
        $like: 'a%'
      }
    }
  }
  return await app.model.Account.findAll(option)  

})

// NOT LIKE
app.route.get('/notlike', async function (req) {

  let option = {
    condition: {
      str1: {
        $nLike: 'z%'
      }
    }
  }
  return await app.model.Account.findAll(option)

})

// LESS THAN
app.route.get('/lessthan', async function (req) {

  let options = {
    condition: {
      height: {
        $lt: 10
      }
    }
  }
  return await app.model.Block.findAll(option)

})

//LESS THAN OR EQUAL
app.route.get('/lessthanorequal', async function (req) {

  let options = {
    condition: {
      height: {
        $lte: 20
      }
    }
  }
  return await app.model.Block.findAll(option)

})

//GREATER THAN
app.route.get('/gt', async function (req) {

  let options = {
    condition: {
      height: {
        $gt: 30
      }
    }
  }
  return await app.model.Block.findAll(option)

})


// GREATER THAN OR EQUAL

app.route.get('/gte', async function (req) {

  let options = {
    condition: {
      height: {
        $gte: 40
      }
    }
  }
  return await app.model.Block.findAll(option)

})


// where in
app.route.get('/wherein', async function (req) {

  let num = [1, 2, 3]
  let option = {
    condition: {
      height: { 
        $in: num
      }
    }
  }
  return await app.model.Block.findAll(option)

})

// where not in
app.route.get('/wherenotin', async function (req) {

  let num = [4, 5]
  let option = {
    condition: {
      height: {
        $nin: num
      }
    }
  }
  return await app.model.Block.findAll(option)

})

// is null 1
app.route.get('/isnull1', async function (req) {

  let option = {
    condition: {
      str1: {
        $is: null
      }
    }
  }
  return await app.model.Account.findAll(option)

})

// is null 2
app.route.get('/isnull2', async function (req) {

  let option = {
    condition: {
      str1: {
        $null: true
      }
    }
  }
  return await app.model.Account.findAll(option)

})


// IS NOT NULL 1
app.route.get('/isnotnull1', async function (req) {

  let option = {
    condition: {
      str1: {
        $isNot: null
      }
    }
  }
  return await app.model.Account.findAll(option)

})

// IS NOT NULL 2
app.route.get('/isnotnull2', async function (req) {

  let option = {
    condition: {
      str1: {
        $null: false
      }
    }
  }
  return await app.model.Account.findAll(option)  

})

// between
app.route.get('/between', async function (req) {

  let option = {
    condition: {
      height: {
        $between: [1, 10]
      }
    }
  }
  return await app.model.Block.findAll(option)  

})



