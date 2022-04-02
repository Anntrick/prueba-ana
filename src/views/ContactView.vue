<template>
  <div class="contact">
    <form @submit.prevent="submit" @reset="onReset">
      <div>
        <label>Nombre:</label>
        <input v-model="cntName" />
      </div>

      <div>
        <label>Email:</label>
        <input v-model="cntEmail" />
      </div>

      <div>
        <label>Mensaje</label>
        <textarea v-model="cntMessage"></textarea>
      </div>

      <button type="submit">Enviar</button>
      <button type="reset">Borrar</button>
    </form>

    <!--{{$store.state.contacts}}-->
  </div>
</template>

<script>
// @ is an alias to /src
import store from '../store/index'

export default {
  name: 'ContactView',
  components: {
    
  },
  data() {
    return {
      cntName: "",
      cntEmail: "",
      cntMessage: "",
    };
  },
  computed: {
    formValid() {
      const { cntName, cntEmail, cntMessage } = this;
      return (
        cntName.length > 0 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(cntEmail) &&
        cntMessage.length > 0
      );
    },
  },
  methods: {
    onReset() {
      this.cntName = "";
      this.cntEmail = "";
      this.cntMessage = "";
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      store.commit('addContact', {'nombre': this.cntName, 'email': this.cntEmail, 'mensaje': this.cntMessage})
      
    }
  }
}
</script>

<style lang="scss">
form {
  width: 50%;
  margin: 40px auto;
  background-color: aliceblue;
  padding: 50px 0;
  min-width: 220px;


  label {
    font-weight: bold;
    display: block;
    text-align: left;
    margin-left: 10%;
  }

  input, textarea {
    width: 70%;
    margin: 5px 0;
  }

  button {
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.25;
    min-height: 3rem;
    position: relative;
    text-decoration: none;
    vertical-align: baseline;
    width: auto;
    padding: 0 15px;
  }


button:hover,
button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

}
</style>



