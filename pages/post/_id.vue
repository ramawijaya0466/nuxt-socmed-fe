<template>
  <div class="container mx-auto" v-if="post">
    <Navbar />

    <div class="card bg-base-100 shadow mb-5 mx-48">
      <div class="card-body py-3 px-6">
        <h2 class="card-title">{{ post.email }}</h2>
        <small class="italic">{{ post.created_at }}</small>
        <p>{{ post.content }}</p>
        <hr class="my-3" />
        <div class="card-actions flex justify-between items-center">
          <div>
            <button
              @click="storeLike(post.id)"
              :class="like_dislikes.filter(item => item.type == 'LIKE' && item.user_id == profile.id).length > 0 ? 'btn btn-sm' : 'btn btn-sm btn-outline'">
              <span class="mr-1">
                {{ like_dislikes.filter(item => item.type == 'LIKE').length }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            </button>

            <button
              @click="storeDislike(post.id)"
              :class="like_dislikes.filter(item => item.type == 'DISLIKE' && item.user_id == profile.id).length > 0 ? 'btn btn-sm' : 'btn btn-sm btn-outline'">
              <span class="mr-1">
                {{ like_dislikes.filter(item => item.type == 'DISLIKE').length }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                />
              </svg>
            </button>

            <button class="btn btn-sm btn-outline">
              <span class="mr-1">
                {{ comments.length }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="comments && comments.length > 0">
      <div class="mb-5 mx-48">
        <p class="underline underline-offset-4 font-semibold italic">
          All comments & replies
        </p>
      </div>

      <div
        class="card bg-base-100 shadow mb-5 mx-48"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div class="card-body py-3 px-6">
          <h2 class="card-title">{{ comment.email }}</h2>
          <small class="italic">{{ comment.created_at }}</small>
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow mb-5 mx-48">
      <div class="card-body h-44 px-6 py-5">
        <textarea
          class="textarea textarea-primary h-full"
          placeholder="What's your thought?"
          v-model="content"
        ></textarea>
        <div class="flex justify-start">
          <button class="btn btn-sm btn-primary w-24" @click="sendComment">
            REPLY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DetailPostPage',

  middleware: 'authenticated',

  computed: mapState({
    post: (state) => state.post.singlePost.post,
    comments: (state) => state.post.singlePost.comments,
    like_dislikes: (state) => state.post.singlePost.like_dislikes,
    profile: state => state.authentication.profile
  }),

  data() {
    return {
      content: '',
    }
  },

  methods: {
    getSinglePost() {
      let payload = {
        id: this.$route.params.id,
      }
      this.$store.commit('post/clearPost')
      this.$store.dispatch('post/fetchSinglePost', payload)
    },

    sendComment() {
      let payload = {
        post_id: this.post.id,
        content: this.content,
      }
      this.$store.dispatch('comment/sendComment', payload).then(() => {
        this.getSinglePost()
        this.content = ''
      })
    },

    storeLike(postId) {
      let payload = {
        post_id: postId,
        type: 'LIKE'
      }
      this.$store.dispatch('like-dislike/storeLike', payload).then(() => {
        this.getSinglePost()
      })
    },

    storeDislike(postId) {
      let payload = {
        post_id: postId,
        type: 'DISLIKE'
      }
      this.$store.dispatch('like-dislike/storeDislike', payload).then(() => {
        this.getSinglePost()
      })
    },

    getUserLoginInfo() {
      this.$store.dispatch('authentication/profile')
    }
  },

  created() {
    this.getSinglePost()
    this.getUserLoginInfo()
  },
}
</script>
