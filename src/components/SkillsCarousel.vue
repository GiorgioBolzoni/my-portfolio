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
        transform: `translateX(-${currentStartIndex * slideWidth}px)`,
        transition: transitionStyle
      }"
      @transitionend="handleTransitionEnd"
      ref="carousel"
    >
      <div class="slide-carousel" v-for="(skill, index) in extendedSkills" :key="index">
        <img :src="skill.src" :alt="skill.alt">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SkillsCarousel',
  data() {
    return {
      skills: [
        { src: '/my-portfolio/img/html-logo.png', alt: 'html-logo' },
        { src: '/my-portfolio/img/css-logo.png', alt: 'css-logo' },
        { src: '/my-portfolio/img/bootstrap-logo.png', alt: 'bootstrap-logo' },
        { src: '/my-portfolio/img/sass-logo.png', alt: 'sass-logo' },
        { src: '/my-portfolio/img/js-logo.png', alt: 'js-logo' },
        { src: '/my-portfolio/img/vue-logo.png', alt: 'vue-logo' },
        { src: '/my-portfolio/img/vite-logo.png', alt: 'vite-logo' },
        { src: '/my-portfolio/img/php-logo.png', alt: 'php-logo' },
        { src: '/my-portfolio/img/laravel-logo.png', alt: 'laravel-logo' },
        { src: '/my-portfolio/img/mysql-logo.png', alt: 'mysql-logo' },
        { src: '/my-portfolio/img/phpmyadmin-logo.png', alt: 'phpmyadmin-logo' },
        { src: '/my-portfolio/img/react-logo.png', alt: 'react-logo' },
        { src: '/my-portfolio/img/tailwind-logo.png', alt: 'tailwind-logo' },
      ],
      currentStartIndex: 0,
      transitionStyle: 'transform 0.5s ease-in-out',
      interval: null,
      isDragging: false,
      startX: 0,
      startScroll: 0,
      slideWidth: 200, 
      slidesPerView: 5, // Numero di slide visibili su schermi larghi
    };
  },
  computed: {
    numberOfSkills() {
      return this.skills.length;
    },
    extendedSkills() {
      return [
        ...this.skills,
        ...this.skills.slice(0, 5) // Clona le prime slides alla fine per il loop
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
      this.startScroll = this.currentStartIndex * this.slideWidth;
      this.transitionStyle = 'none';
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.endDrag);
    },
    onDrag(event) {
      if (this.isDragging) {
        const dx = (event.clientX || event.touches[0].clientX) - this.startX;
        const newIndex = this.startScroll - dx;
        this.currentStartIndex = newIndex / this.slideWidth;
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
    updateSlideWidth() {
      const containerWidth = this.$refs.carousel.offsetWidth;
      if (containerWidth >= 1200) {
        this.slidesPerView = 5;
      } else if (containerWidth >= 768) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 1;
      }
      this.slideWidth = containerWidth / this.slidesPerView;
    },
  },
  mounted() {
    this.updateSlideWidth();
    this.resumeCarousel();
    window.addEventListener('resize', this.updateSlideWidth);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.updateSlideWidth);
  },
};
</script>


<style lang="scss" scoped>
.carousel-container {
  overflow: hidden;
  width: 100%; // Utilizza tutta la larghezza disponibile
  margin: auto;
  cursor: grab;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide-carousel {
  flex-shrink: 0;
  padding: 20px; // Ridotto padding per adattarsi alla larghezza inferiore delle slide
  box-sizing: border-box; // Considera il padding nel calcolo della larghezza
  width: calc(100% / 5);
}

img {
  width: 100%;
  height: auto;
  filter: drop-shadow(3px 3px 5px rgba(245, 203, 92, 0.5));
}

.carousel-container:active {
  cursor: grabbing;
}

@media (max-width: 1200px) {
  .slide-carousel {
    width: calc(100% / 5); // Mostra 5 slide alla volta su schermi larghi
  }
}

@media (max-width: 768px) {
  .slide-carousel {
    width: calc(100% / 2); // Mostra 2 slide alla volta su schermi medi
  }
}

@media (max-width: 480px) {
  .slide-carousel {
    width: 100%; // Mostra 1 slide alla volta su schermi più piccoli
  }
}
</style>

