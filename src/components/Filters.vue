<template>
  <div class="container">
    <h5 class="text-center m-3">Search your character!</h5>
    <div class="row justify-content-center">
      <img alt="Rick Morty" src="@/assets/rickmorty.png" id="morty">
    </div>
    <div class="row">
      <div class="col-4">
        <h5 class="text-center">Filter by state</h5>
        <div class="box-filter">
          <div class="row ml-1 justify-content-center align-items-center m-2">
            <span>Alive</span>
            <input type="radio" id="two" value="alive" class="ml-1" v-model="status" @change="currentStatus">
            <span class="ml-3">Dead</span>
            <input type="radio" id="one" value="dead" class="ml-1" v-model="status" @change="currentStatus">
            <span class="ml-3">Unknown</span>
            <input type="radio" id="three" value="unknown" class="ml-1" v-model="status" @change="currentStatus">
          </div>
        </div>
      </div>
      <div class="col-4">
        <h5 class="text-center">Filter by gender</h5>
        <div class="box-filter">
          <div class="row ml-1 justify-content-center align-items-center m-2">
            <span class="ml-3">Male</span>
            <input type="radio" id="four" value="male" class="ml-1" v-model="gender" @change="currentGender">
            <span class="ml-3">Female</span>
            <input type="radio" id="five" value="female" class="ml-1" v-model="gender" @change="currentGender">
            <span class="ml-3">Genderless</span>
            <input type="radio" id="six" value="genderless" class="ml-1" v-model="gender" @change="currentGender">
            <span class="ml-3">Unknown</span>
            <input type="radio" id="seven" value="unknown" class="ml-1" v-model="gender" @change="currentGender">   
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex flex-column">
          <h5>Enter the character name</h5>
          <input type="text" @change="singleCharacter" v-model="character">
        </div>
      </div>
    </div>  
  </div>
</template>

export default {
<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'Filters',
  computed: {
    ...mapState(['info','page','players'])
  },
  data() {
    return {
      status: 'alive',
      gender: 'male',
      character: ''
    }
  },
  methods: {
    ...mapActions(['getPlayersByGender','getPlayersStatus','searchSinglePlayer']),
    currentStatus() {
      this.getPlayersStatus(this.status)
      console.log(this.status);
    },
    currentGender() {
      this.getPlayersByGender(this.gender)
      console.log(this.gender);
    },
    singleCharacter() {
      this.searchSinglePlayer(this.character);
      console.log(this.character)
    }
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  
  .box-filter{
    border: 2px solid rgba(8, 14, 13,0.9);
    padding: 5px;
  }
  #morty {
    animation: bobble 8s infinite;
    max-width: 120px;
  }
  @keyframes bobble {
    0% {
      transform: translateX(10px); 
      // transform: rotate(0deg);
    }

    50% {
      transform: translateX(40px);
      // transform: rotate(180deg);
    }

    100% {
      transform: translateX(10px);
      // transform: rotate(360deg);
    }
  }

</style>

