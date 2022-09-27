<template>
    <div @Load="Todos" class="card" style="width: 18rem;">
  <div class="card-body" v-for="informacao of informacao" :key="informacao.id">
    <h5 class="card-title">{{informacao.nome}}</h5>
   <p class="card-text">{{ informacao.data.split("T")[0] }}</p> <!-- faz o split // 0 vai buscar o primeiro*/-->
    <p class="card-text">{{informacao.descricao}}</p>
    <a :href=informacao.attach download>Anexo</a>
  </div>
</div>
<button @Click="Todos">Todos</button>
<button @Click="Avisos">Avisos</button>
<button @Click="Outros">Outros</button>
</template>

<script>
import axios from 'axios'
export default {
  name: 'listInfo',
  data () {
    return {
      informacao: []
    }
  },
  methods: {
    Todos () {
      axios.get('https://desolate-coast-33795.herokuapp.com/informacao')
        .then((response) => {
          console.log(response.data)
          this.informacao = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    Avisos () {
      axios.get('https://desolate-coast-33795.herokuapp.com/informacao/categoria/1')
        .then((response) => {
          console.log(response.data)
          this.informacao = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    Outros () {
      axios.get('https://desolate-coast-33795.herokuapp.com/informacao/categoria/4')
        .then((response) => {
          console.log(response.data)
          this.informacao = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
