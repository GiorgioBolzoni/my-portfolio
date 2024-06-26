<template>
  <main id="top"> 
    <section class="my-5 container">
      <h1 class="py-3 fw-bolder">MY PORTFOLIO</h1>
      <h4 class="fw-bold">
        {{ displayText }}
      </h4>
    </section>

    <section class="my-5 container" id="about">
      <AboutView></AboutView>
    </section>

    <section class="my-5 container" id="projects">
      <AppProjects></AppProjects>
    </section>
  </main>
</template>

<script>
import AboutView from "/src/views/AboutView.vue";
import AppProjects from "/src/views/AppProjects.vue";

export default {
  name: 'HomeView',
  components: {
    AboutView,
    AppProjects,
  },
  data() {
    return {
      text: 'Jr. Full-Stack Web Developer',
      displayText: '',
      index: 0,
      typingInterval: null,
      resetTimeout: null,
    };
  },
  methods: {
    startTyping() {
      this.index = 0;
      this.displayText = '';
      this.typingInterval = setInterval(this.typeLetter, 80);
    },
    typeLetter() {
      if (this.index < this.text.length) {
        this.displayText += this.text[this.index];
        this.index++;
      } else {
        clearInterval(this.typingInterval);
        this.resetTimeout = setTimeout(this.startTyping, 3000);
      }
    },
  },
  mounted() {
    this.startTyping();
  },
  beforeDestroy() {
    clearInterval(this.typingInterval);
    clearTimeout(this.resetTimeout);
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

main {
  background-color: var(--eerie-black);
  padding: 80px;
  color: var(--alabaster);
}

h1 {
  color: var(--saffron);
  text-shadow: 5px 5px 10px black;
}

h4 {
  display: inline;
  &::after {
    content: '|';
    animation: blink 1s step-start infinite;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
