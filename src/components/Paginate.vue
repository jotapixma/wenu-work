
<template>
  <nav class="pagination justify-content-center m-4" role="navegation" aria-label="pagination">
    <a class="pagination-previous" @click="getPlayersPreviousPage">Ir Atras</a>
    <button class="button btn-success">{{page}}</button>
    <a class="pagination-next" @click="getPlayersNextPage">Siguiente</a>
  </nav>
</template>

<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'Paginate',
  computed: {
    ...mapState(['info','page'])
  },
  methods:{
    ...mapMutations(['nextPagePlayers']),
    ...mapActions(['getPlayersNextPage', 'getPlayersPreviousPage'])
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .pagination-previous,.pagination-next {
    cursor: pointer; color:blue !important;
    margin: 0 15px; 
  }
</style>