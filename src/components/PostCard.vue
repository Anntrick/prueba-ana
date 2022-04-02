<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h5">
        {{title}}
      </div>
    </div>
    <div class="card-body">
      {{body.slice(0,100)}}
    </div>
    <div class="card-footer">
      <a :href="url">Leer más</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: String,
    body: String,
    id: Number
  },
  data () {
    return {
      url: "post/" + this.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card-body {
    padding: 15px 0;
    p {
      margin: 0;
    }
  }

  .card-footer {
    padding: 15px 0;
  }

  .card-header {
    background-color: #b1b1b1;
    color: white;
    width: 100%;
    display: block;
    padding: 8px 0;
  }

  .card {
    background: #fff;
    border: 0.05rem solid #dadee4;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 15px auto;
  }
</style>
