<template>
  <AppHeader class="rambla" id="headerApp"></AppHeader>

  
    <HomeView class="rambla"><router-view></router-view></HomeView>
  
  
  <AppFooter class="rambla" id="contacts"></AppFooter>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
  
  import {store} from "./data/store";
  import AppHeader from './components/AppHeader.vue';
  import HomeView from './views/HomeView.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components:{
      AppHeader,
      HomeView,
      AppFooter,
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
