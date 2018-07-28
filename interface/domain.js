app.route.get('/domain/:address',  async function (req) {
  let result = await app.model.Domain.findOne({
      condition: { address: req.params.address }
  })
  return result
})

app.route.get('/domain/suffix/:suffix',  async function (req) {
  let result = await app.model.Domain.findAll({
      condition: { suffix: req.params.suffix }
  })
  return result
})


app.route.get('/a1300', async function (req) {
  let option = {
    condition: {
      str1: 'a1300'
    }
  }
  return await app.model.Account.findOne(option)
})

app.route.get('/Nakamoto', async function (req) {
  let option = {
    condition: {
      str1: 'Nakamoto'
    }
  }
  return await app.model.Account.findOne(option)
})

app.route.get('/balance', async function (req) {
  return await app.model.Balance.schema
})

app.route.get('/block', async function (req) {
  return await app.model.Block.schema
})


app.route.get('/deposit', async function (req) {
  return await app.model.Deposit.schema
})


app.route.get('/roundfee', async function (req) {
  return await app.model.RoundFee.schema
})


app.route.get('/transaction', async function (req) {
  return await app.model.Transaction.schema
})

app.route.get('/transfer', async function (req) {
  return await app.model.Transfer.schema
})

app.route.get('/variable', async function (req) {
  return await app.model.Variable.schema
})

