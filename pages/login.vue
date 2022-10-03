<template>
  <div class="hero min-h-screen bg-base-200 px-32">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
              v-model="email"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              v-model="password"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      let payload = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('authentication/login', payload)
        .then(() => {
          this.$router.push('/')
        })
    },
    // profile() {
    //   let payload = {
    //     access_token: localStorage.getItem('access_token'),
    //     token_type: localStorage.getItem('token_type'),
    //   }
    //   this.$store.dispatch('authentication/profile', payload)
    // },
  },
}
</script>
