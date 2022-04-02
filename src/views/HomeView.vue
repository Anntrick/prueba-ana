<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <post-card :title="post.title" :body="post.body" :id="post.id">
      </post-card>
       --v
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '../store/index'
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      posts: store.state.posts[0]
    }
  },
  components: {
    PostCard
  },
  methods: {

    
  },
  beforeMount(){
    store.dispatch('addPosts')
  }

  

}
</script>
