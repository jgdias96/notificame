<template>
  <div class="home">
    <Cardamos />
  </div>
</template>
<script>
import Cardamos from '../components/CardItem.vue'
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
