<template>
  <b-container class="animated fadeIn mt-3">
    <b-alert variant="danger" :show="isFailure" dismissible @dismissed="isFailure=false">
      {{ errorMessage }}
    </b-alert>

    <b-card class="mt-3 mx-3 d-flex align-items-center justify-content-center">
      <b-card-body>
        <b-form name="login" @submit.prevent="login()">
          <h1 class="h3 text-center mb-3">Login</h1>

          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="email" placeholder="Email" v-model="form.email"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="password" placeholder="Password" v-model="form.password"></b-form-input>
            </b-input-group>
          </b-form-group>

          <div class="text-center">
            <b-button class="px-4" type="submit" variant="primary">Login</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'login',
  layout: 'clean',

  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      isFailure: false,
      errorMessage: ''
    }
  },

  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', { data: this.form })

      } catch (e) {
        console.log(e)
        this.isFailure = true
        this.errorMessage = 'EmailかPasswordが間違っています'
      }
    }
  }
}
</script>