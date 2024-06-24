<template>
  <div 
        class="carousel-container my-4"
        @mouseenter="pauseCarousel"
        @mouseleave="resumeCarousel"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @touchmove="onDrag"
        @touchend="endDrag"
      >
        <div 
          class="carousel" 
          :style="{ 
            transform: `translateX(-${currentStartIndex * 200}px)`,
            transition: transitionStyle
          }"
          @transitionend="handleTransitionEnd"
        >
          <div class="slide-carousel" v-for="(skill, index) in extendedSkills" :key="index">
            <img :src="skill.src" :alt="skill.alt">
          </div>
        </div>
      </div>
</template>

<script>
export default{
    name: 'SkillsCarousel',
    data() {
    return {
      skills: [
        { src: '/img/html-logo.png', alt: 'html-logo' },
        { src: '/img/css-logo.png', alt: 'css-logo' },
        { src: '/img/bootstrap-logo.png', alt: 'bootstrap-logo' },
        { src: '/img/sass-logo.png', alt: 'sass-logo' },
        { src: '/img/js-logo.png', alt: 'js-logo' },
        { src: '/img/vue-logo.png', alt: 'vue-logo' },
        { src: '/img/vite-logo.png', alt: 'vite-logo' },
        { src: '/img/php-logo.png', alt: 'php-logo' },
        { src: '/img/laravel-logo.png', alt: 'laravel-logo' },
        { src: '/img/mysql-logo.png', alt: 'mysql-logo' },
        { src: '/img/phpmyadmin-logo.png', alt: 'phpmyadmin-logo' },
      ],
      currentStartIndex: 0,
      transitionStyle: 'transform 0.5s ease-in-out',
      interval: null,
      isDragging: false,
      startX: 0,
      startScroll: 0,
    };
  },
  computed: {
    numberOfSkills() {
      return this.skills.length;
    },
    extendedSkills() {
      return [
        ...this.skills,
        ...this.skills.slice(0, 5) // Clone the first 5 skills to the end
      ];
    },
  },
  methods: {
    scrollLeft() {
      this.currentStartIndex++;
      this.transitionStyle = 'transform 0.5s ease-in-out';
    },
    handleTransitionEnd() {
      if (this.currentStartIndex >= this.numberOfSkills) {
        this.transitionStyle = 'none';
        this.currentStartIndex = 0;
      }
    },
    pauseCarousel() {
      clearInterval(this.interval);
    },
    resumeCarousel() {
      this.interval = setInterval(this.scrollLeft, 3000);
    },
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.clientX || event.touches[0].clientX;
      this.startScroll = this.currentStartIndex * 200;
      this.transitionStyle = 'none';
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.endDrag);
    },
    onDrag(event) {
      if (this.isDragging) {
        const dx = (event.clientX || event.touches[0].clientX) - this.startX;
        const newIndex = this.startScroll - dx;
        this.currentStartIndex = newIndex / 200;
      }
    },
    endDrag() {
      if (this.isDragging) {
        this.isDragging = false;
        this.transitionStyle = 'transform 0.5s ease-in-out';
        this.currentStartIndex = Math.round(this.currentStartIndex);
        document.removeEventListener('mousemove', this.onDrag);
        document.removeEventListener('mouseup', this.endDrag);
      }
    },
  },
  mounted() {
    this.resumeCarousel();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
}
</script>

<style  lang="scss" scoped>
.carousel-container {
    overflow: hidden;
    width: 1000px; 
    margin: auto;
    cursor: grab;
  }
  
  .carousel {
    display: flex;
  }

  .slide-carousel {
    width: 200px;
    height: 200px;
    padding: 25px;
    flex-shrink: 0;
  }
  
  img {
    width: 100%;
    filter: drop-shadow(3px 3px 5px rgba(245, 203, 92, 0.5));
  }
  .carousel-container:active {
  cursor: grabbing;
}
</style>
