
<template>
  <div class="text-center">
   
    <h3 class="title text-center">Personajes</h3>
    <div class="row">
      <div class="col-2" v-for="player of players" :key="player.id">
        <div class="players-card">
          <div class="card-body">
            <div class="img">
              <img class="img-fluid" :src="player.image" alt="">
            </div>
            <div class="text-card">
              <h6 class="name-card">{{player.name}}</h6>
              <p class="status-card"> {{player.status}}</p>
              <span class="gender-card"> {{player.gender}} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'Player',
  computed: {
    ...mapState(['players'])
  },
  methods:{
    ...mapMutations(['llenarPlayers']),
    ...mapActions(['getPlayers']),
  },
  props: {
    msg: String
  },
  mounted() {
    this.getPlayers()
  }
}
</script>

<style lang="scss" scoped>
    
   .players-card {
     background-color: rgba(8, 14, 13,0.9); border-radius: 10px;
    text-align: center;
    .card-body { border-radius: 10px; margin: 5px 0;
      .img {
        width: 110px;
        margin: 0 auto;
        img {
          border-radius: 5rem;
          border: 1px solid rgba(37, 53, 158, 0.8);
        }
      }
      .text-card {
        .gender-card,.name-card,.status-card{
          color: #C9CACF;
        }
        .name-card {
          margin-bottom: 0;
          padding-top: 15px;
          font-weight: bold;
          min-height: 60px; 
          overflow: hidden;
        }
        .status-card{
          margin-bottom: 0;
          padding-top: 5px;
        }
        .gender-card{
          font-weight: 500;
          color: rgba(46, 167, 160, 0.8);
        }
      
      }
    }
  }
</style>