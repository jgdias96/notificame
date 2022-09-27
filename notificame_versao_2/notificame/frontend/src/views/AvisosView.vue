<template>
  <div class="home">
    <Cardamos tipo = 'avisos'/>
  </div>
</template>
<script>
import Cardamos from '../components/CardAvisos.vue'
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
