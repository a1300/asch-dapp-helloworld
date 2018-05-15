<template>
  <div class="background">
    <sui-grid centered vertical-align="middle">
      <sui-grid-column>

        <h2 is="sui-header" image>
          <sui-image src="static/images/logo.png"/>
          <sui-header-content>Log-in to your account</sui-header-content>
        </h2>

        <sui-form v-on:submit.prevent="onSubmit">
          <sui-segment stacked>
            <sui-form-field>
              <sui-input
              type="password"
              placeholder="Secret"
              icon="lock"
              icon-position="left"
              v-model="secret"
              :warning="$v.secret.$invalid" inverted />
            </sui-form-field>
            <!-- <sui-button @click="login" size="large" fluid>Login</sui-button> -->
            <sui-button @click="login" size="large" fluid animated class="primary"
                        :disabled="$v.secret.$invalid">
              <sui-button-content visible>Login</sui-button-content>
              <sui-button-content hidden>
                <sui-image height="20px" class="centered" src="static/images/logo.png"/>
              </sui-button-content>
            </sui-button>
          </sui-segment>
        </sui-form>
        <sui-message>No Asch account? <a href="https://mainnet.asch.net">Create one</a></sui-message>
      </sui-grid-column>
    </sui-grid>
  </div>

</template>

<script>
import { required } from 'vuelidate/lib/validators'
import aschJS from 'asch-js'
console.log(aschJS)
export default {
  name: 'login',
  data: function () {
    return {
      secret: ''
    }
  },
  methods: {
    login: async function () {
      console.log(this.$v.secret)

      // let that = this
      // let secret = this.secret
      // let succeeded = await this.$store.dispatch('getUserInfo', { that, secret, aschJS })
      // // test
      // debugger
      // console.log(this.$v)
      // if (succeeded) {
      //   this.$router.push('/')
      // } else {
      //   console.log('show some modal error massage')
      // }
    },
    onSubmit: function () {
      console.log('trying to prevent on submit')
    }
  },
  validations: {
    secret: {
      required
    }
  }
}
</script>

<style scoped>
 .background {
    height: 100vh;
    margin: 1em 0;
  }
  .grid {
    height: 100%;
  }
  .column {
    max-width: 450px;
    text-align: center !important;
  }
</style>
