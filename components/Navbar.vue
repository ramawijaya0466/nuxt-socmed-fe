<template>
  <div class="navbar bg-base-100 mb-4 rounded-lg shadow">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">
        NUXT
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Trending</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Privacy</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div v-if="access_token == null">
        <button class="btn btn-primary w-24">LOGIN</button>
        <button class="btn btn-outline btn-light ml-2 w-24">REGISTER</button>
      </div>
      <div v-else>
        <label for="my-modal-3" class="btn btn-outline btn-light ml-2 w-24 modal-button">Logout</label>
      </div>
    </div>
    <ModalLogout />
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      access_token: window.localStorage.getItem('access_token'),
    }
  },
  methods: {
    logout() {
      alert('logout confirmation ...')
    },
  },
}
</script>
