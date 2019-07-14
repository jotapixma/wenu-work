<template>
  <div id="app" class="container-fluid">
    <Filters></Filters>
    <Paginate></Paginate>
    <Player></Player>
    <Paginate></Paginate>
  </div>
</template>

<script>
import Paginate from './components/Paginate.vue'
import Player from './components/Player.vue'
import Filters from './components/Filters.vue'


export default {
  name: 'app',
  components: {
    Paginate,
    Player,
    Filters
  }
}
</script>

<style lang="scss" scoped>
  
</style>

