<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <post-card :title="post.title" :body="post.body" :id="post.id">
      </post-card>
       
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
      posts: "Loading..."
    }
  },
  components: {
    PostCard
  },
  methods: {

    
  },
  beforeMount(){
    store.dispatch('addPosts')
  },
  created() {
    const unsubscribe = store.subscribe((mutation, state) => {
      if(mutation.type == "addPosts"){
        this.posts = state.posts
      }
    })
    console.log(unsubscribe)
  },
  beforeDestroy() {
    this.unsubscribe();
  }

}
</script>
