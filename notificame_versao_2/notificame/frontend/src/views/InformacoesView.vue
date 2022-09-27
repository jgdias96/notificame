<template>
  <div class="home">
    <Cardamos tipo = 'informacoes'/>
  </div>
</template>
<script>
import Cardamos from '../components/CardOutros.vue'
export default {
  name: 'App',
  components: {
    Cardamos
  },
  methods: {
    search (val) {
    }
  }
}
</script>
