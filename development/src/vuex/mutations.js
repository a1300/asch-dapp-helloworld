
let mutations = {
  setUserInfo: function (state, { secret, address, balances, nickname }) {
    state.userInfo.secret = secret
    state.userInfo.address = address
    state.userInfo.balances = balances
    state.userInfo.nickname = nickname
    state.isLogin = true
  },
  userLogout: function (state) {
    state.userInfo.secret = ''
    state.userInfo.address = ''
    state.userInfo.balances = []
    state.userInfo.nickname = ''

    state.isLogin = false
  },
  setNickname: function (state, { nickname }) {
    state.userInfo.nickname = nickname
  }
}

export default mutations
