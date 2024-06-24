<template>
  <main id="top">
    <section class="my-5">
      <h1 class="py-3 fw-bolder">MY PORTFOLIO</h1>
      <h4 class="fw-bold">Jr. Full-Stack Web Developer</h4>
    </section>

    <section class="my-5" id="about">
      <AboutView></AboutView>
    </section>

    <section class="my-5" id="projects">
      <AppProjects></AppProjects>
    </section>
  </main>
  
</template>

<script>
import AboutView from "/src/views/AboutView.vue";
import AppProjects from "/src/views/AppProjects.vue";

export default {
  name:'HomeView',
  components: {
    AboutView,
    AppProjects,
  },
    methods:{
    },
    mounted() {
      
    }
    }
</script>

<style lang="scss" scoped>
 @use '../assets/style/partials/variables.scss' as *;
main{
  background-color: var(--eerie-black);
  padding: 80px;
  color: var(--alabaster);
}
h1{
  color: var(--saffron);
  text-shadow: 5px 5px 10px black;
}
</style>



