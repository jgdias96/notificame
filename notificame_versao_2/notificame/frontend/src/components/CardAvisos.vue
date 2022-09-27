<template>
    <div class="card" style="width: 18rem;">
  <div class="card-body" v-for="informacao of informacao" :key="informacao.id">
    <h5 class="card-title">{{informacao.nome}}</h5>
   <p class="card-text">{{ informacao.data.split("T")[0] }}</p> <!-- faz o split // 0 vai buscar o primeiro*/-->
    <p class="card-text">{{informacao.descricao}}</p>
    <a :href=informacao.attach download>Anexo</a>
  </div>
</div>
</template>

<script>
import Info from '../services/avisos'
export default {
  data () {
    return {
      informacao: []
    }
  },
  mounted () {
    Info.lista().then(res => {
      this.informacao = res.data
    })
  }
}
</script>
