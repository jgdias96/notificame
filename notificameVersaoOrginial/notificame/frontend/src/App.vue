<template>
  <TopNav />
  <SidebarMenuAkahon />
<router-view/>
</template>
<script>
import TopNav from './components/TopNav.vue'
import SidebarMenuAkahon from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    TopNav,
    SidebarMenuAkahon
  },
  methods: {
    search (val) {
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
