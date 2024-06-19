<template>
  <AppHeader id="headerApp"></AppHeader>

  
    <HomeView></HomeView>
  
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
  
  import {store} from "./data/store";
  import AppHeader from './components/AppHeader.vue';
  import HomeView from './views/HomeView.vue';

  export default {
    components:{
      AppHeader,
      HomeView,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
    },
    mounted() {
      
    }
    }

</script>

<style  lang="scss" scoped>
  #headerApp{
    margin-top: 0;
    border: none;
  }
</style>
