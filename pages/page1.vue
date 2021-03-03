<template>
  <div class="page">
    <div id="question-block">
      <label for="dates" class="title">Please enter dates separated by commas :</label>
      <b-form-input type="text" v-model="dates" @keyup.enter="getDatesPost"> </b-form-input>
      <div class="history-moment">
        <h1>A MOMENT OF HISTORY</h1>
        <p>You entered {{datesArrayLength}} dates...</p>
      </div>
    </div>
    <div v-if="datesExist">
      <post v-for="date of datesPostsList" 
      :title="date.title"
      :description="date.description"
      :key="date.id"/>
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
      dates: null,
      datesArray: [],
      datesPostsInfos: {
        title: null,
        description: null
      },
      datesPostsList: [],
      datesArrayLength: 0,
      datesExist: false,
      link: null
    }
  },

  async fetch() {
            this.datesPostsInfos.decription= await fetch(this.link).then(res => res.json())
  },

  methods: {
    getLink(date) {
      return 'numbersapi.com/' + date + '/date'
    },
    
    getDatesPost() {
      this.datesArray = this.dates.split(',');
      this.datesArrayLength = this.datesArray.length;
      if(this.datesArrayLength !== 0) {
        this.datesExist = true;
        
        for(let i = 0; i < this.datesArrayLength; i++ ){
          this.link = this.getLink(this.datesArray[i]);
          console.log(this.link);
          this.datesPostsInfos.title = this.datesArray[i];
          this.datesPostsInfos.description =  this.$fetch();
          this.datesPostsList.push(this.datesPostsInfos);
          console.log(this.datesPostsList);
          
          }
        }
        
      }
      
    }

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
