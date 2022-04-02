<template>
  <div class="autor">
    <h1>Sobre el autor</h1>
    <div class="autorContent">
      <div class="autorText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dui eget sem convallis pulvinar. 
          Pellentesque non lorem et nulla vestibulum elementum. Aliquam erat volutpat. Sed consectetur egestas 
          enim, id hendrerit felis maximus nec. Integer rutrum pharetra pulvinar. Vivamus quam risus, fermentum 
          et nisl at, euismod dapibus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut 
          porttitor facilisis interdum. In hac habitasse platea dictumst.
        </p>
        <p>
          Etiam quis aliquet odio. Fusce libero orci, fermentum lacinia sem ut, semper ullamcorper metus. Nunc 
          ligula nisl, dignissim quis consectetur sit amet, laoreet sit amet lacus. Integer finibus egestas dapibus. 
          Duis eget consectetur augue. In consequat ipsum neque, et accumsan elit viverra vitae. Mauris faucibus 
          egestas orci, nec dignissim nisl lacinia ac. Vestibulum convallis ut lacus vel rhoncus.
        </p>
        <p>
          Nulla placerat maximus dui vitae vulputate. Curabitur in semper sem, vel dapibus sapien. Ut sodales mattis 
          neque eu faucibus. Sed vitae augue nec felis posuere cursus sit amet in quam. Morbi id purus mi. Mauris 
          ipsum tellus, tincidunt quis semper at, commodo et mi. Quisque nec tellus pulvinar, tempor ligula in, 
          vestibulum tortor. Donec a ipsum blandit, varius orci id, lacinia nisi. Duis neque magna, congue at orci 
          nec, mollis facilisis orci. Proin condimentum faucibus sem eget rhoncus. Mauris at aliquet elit. Pellentesque 
          condimentum cursus condimentum. Sed eget quam at dui euismod pharetra et at risus.
        </p>
      </div>
      <img src="../assets/imgAutor.jpg" alt="Imagen del autor" />
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AutorView'
}
</script>

<style lang="scss">

  .autorContent {
    display: flex;
     flex-flow: row wrap;

    img {
      width: 45%;
      min-width: 300px;
    }
  }

  .autorText {
    padding: 2%;
    width: 50%;
    min-width: 400px;
  }
</style>