<template>
  <div>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 class="text-lg font-bold">Logout</h3>
        <p class="py-4">
          Are you sure want to logout from this application?
        </p>

        <button class="btn btn-sm btn-primary w-24 mr-1" @click="logout">Sure</button>
        <button class="btn btn-sm btn-danger w-24">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalLogoutComponent',
  data() {
    return {
      access_token: window.localStorage.getItem('access_token'),
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('authentication/logout')
        .then(() => {
          window.localStorage.removeItem('access_token')
          window.localStorage.removeItem('token_type')
          this.$router.push('/login')
        })
    }
  }
}
</script>
