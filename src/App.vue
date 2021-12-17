<template>
  <div class="container">
    <TableCompany></TableCompany>
  </div>
  <div class="container1">
    <!-- <TableRoutes></TableRoutes> -->
  </div>
</template>

<script>
import TableCompany from '@/components/table/TableCompany'
// import TableRoutes from './components/table/TableRoutes.vue'

export default {
  name: 'App',
  components: {
    TableCompany,
    // TableRoutes

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
  margin-top: 60px;
}
.container {
  display: flex;
  justify-content: center;
}
.container1 {
  display: flex;
  justify-content: center;
  margin: 600px;
}
</style>
