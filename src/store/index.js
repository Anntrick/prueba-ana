import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    contacts: []
  },
  getters: {
  },
  mutations: {
    addPosts(state, data) {
      state.posts.push(data)
    }
  },
  actions: {
    async addPosts(context) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      context.commit("addPosts", data);
    }

  },
  modules: {
  }
})
