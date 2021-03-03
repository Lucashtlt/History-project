<template>
  <div class="page">
    <h1>List of all dates</h1>
    <div v-if="datesExist">
      <post v-for="date of datesPostsList" 
      :key="date.id"/>
      {{datesPostsList.title}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import post from '../components/post.vue';

export default Vue.extend({
  components: { post },
  data () {
    return {
      datesPostsList: this.$store.state.datesPostsList,
    }
  },



})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 40;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 1px;
}

input {
  border: none;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#question-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 30%;
}

.history-moment{
  height: 100px ;
  width: 70%;
  background-color: black;
  margin: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.history-moment h1{
  font-size: 30px;
  font-weight: 100;
}

.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;

}
</style>
