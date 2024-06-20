<template>
  <div id="about">
    <section>
      <h3 class="fw-bold">About me</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section id="skills" class="my-4">
      <h4 class="fw-bold">Skills</h4>
      <SkillsCarousel />
    </section>
  </div>
</template>

<script>
import SkillsCarousel from "../components/SkillsCarousel.vue"

export default {
  name: 'AboutView',
  components:{
    SkillsCarousel,
  }
};
</script>

<style scoped>

</style>
