let getters = {
  isLoggedIn: function (state) {
    return state.isLogin
  },

  secret: function (state) {
    return state.userInfo.secret
  },
  address: function (state) {
    return state.userInfo.address
  },

  ownTransferableCoins: function (state) {
    let balances = state.userInfo.balances
    let coins = balances.map(function (val) {
      return {
        text: val.currency,
        value: val.currency
      }
    })
    return coins
  }
}

export default getters
