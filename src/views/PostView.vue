<template>
  <div class="post">
    post page
  </div>
</template>

<script>
// @ is an alias to /src
//import store from '../store/index'

export default {
  name: 'PostView',
  components: {
    
  },
  data () {
    return {
      //id: 0,
      //post: {}
    }
  },
  created() {
    //this.id = this.$route.params.id
   // this.post = store.state.posts[0][this.$route.params.id]
  }
}
</script>
