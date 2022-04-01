<template>
  <header>
    Prueba Ana
     <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/autor">Autor</router-link> |
      <router-link to="/contact">Contacto</router-link>
    </nav>
  </header> 
  <router-view/>
  <footer>Ana del Pino - 2022</footer>
</template>

<style lang="scss">

 body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1a8ff3;
  color: white;
  padding-left: 30px;
}

footer {
  display: block;
  height: 30px;
  background-color: #1a8ff3;
  color: white;
  margin-top: auto;
  padding-top: 15px;
}

nav {
  padding: 20px 30px;
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>