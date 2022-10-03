<template>
  <div class="card bg-base-100 shadow mb-5">
    <div class="card-body h-44 px-6 py-5">
      <textarea
        class="textarea textarea-primary h-full"
        placeholder="What's your thought?"
        v-model="content"
      ></textarea>
      <div class="flex justify-start">
        <button class="btn btn-sm btn-primary w-24" @click="sendPost">SEND</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSendPostComponent',
  data() {
    return {
      content: null
    }
  },
  methods: {
    sendPost() {
      let payload = {
        content: this.content
      }
      this.$store.dispatch('post/sendPost', JSON.stringify(payload))
        .then(() => {
          this.$store.dispatch('post/fetchManyPost')
          this.content = null
        })
    }
  }
}
</script>
