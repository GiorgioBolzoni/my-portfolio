<template>
  <h3 class="text-center fw-bold">
    PROGETTI
  </h3>
  <div class="row justify-content-center my-4">
    <button @click="setFilter('')" class="col-lg-3 col-sm-6 col-12">All</button>
    <button @click="setFilter('Front End')"  class="col-lg-3 col-sm-6 col-12">Front End</button>
    <button @click="setFilter('Back End')"  class="col-lg-3 col-sm-6 col-12">Back End</button>
    <button @click="setFilter('Full Stack')"  class="col-lg-3 col-sm-6 col-12">Full Stack</button>
  </div>
  <transition-group name="project" tag="div" class="projects-container row">
    <div v-for="(project, index) in filteredProjects" :key="project.name" class="card m-2 col-lg-3 col-sm-4 col-8">
      <img :src="project.src" :alt="project.alt" class="project-img"/>
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ project.name }}</h5>
      </div>
      <div class="card-links" v-if="project.link || project.link2">
        <a v-if="project.link && !project.link2" :href="project.link" target="_blank" class="link-icon"><i class="fa-solid fa-link" style="color: #f5cb5c;"></i></a>
        <div v-else class="dropdown">
          <span class="link-icon"><i class="fa-solid fa-link" style="color: #f5cb5c;"></i></span>
          <div class="dropdown-content">
            <a :href="project.link" target="_blank"><span>Front Office</span></a>
            <a :href="project.link2" target="_blank"><span>Back Office</span></a>
          </div>
        </div>
      </div>
      <div>
        <p class="card-text px-2 mx-2 fw-bold">{{ project.technology }}</p>
      </div>
      <button class="go-to-site-button" @click="goToSite(project.site)">Vai al sito</button>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'AppProjects',
  data() {
    return {
      projects: [
        {name: 'Deliveroo', stack: 'Full Stack', src: '/my-portfolio/img/deliveboo.gif', alt: 'deliveboo.gif', technology: 'Vue.js | Laravel | MySql | Sass | Bootstrap | Axios', link: 'https://github.com/giuliamari04/Deliveboo', link2: 'https://github.com/leonardomastrangelo/laravel_deliveboo', site: ''},
        {name: 'Booleansgate', stack: 'Full Stack', src: '/my-portfolio/img/booleansgate.gif', alt: 'booleansgate.gif', technology: 'Vue.js | Laravel | MySql | Sass | Bootstrap | Axios', link: 'https://github.com/Eecodev/vite-booleansgate', link2: 'https://github.com/giovannimegliola/booleansgate', site: ''},
        {name: 'Tic Tac Toe', stack: 'Front End', src: '/my-portfolio/img/tris.gif', alt: 'tic-tac-toe.gif', technology: 'React | CSS', link: 'https://github.com/GiorgioBolzoni/02-tic-tac-toe-starting-project', site: 'https://66852b1b9cd465e47d766bf4--tic-tac-toe-giorgio-bolzoni.netlify.app/'},
        {name: 'Project Management', stack: 'Front End', src: '/my-portfolio/img/proj-management.gif', alt: 'proj-management.gif', technology: 'React | Tailwind', link: 'https://github.com/GiorgioBolzoni/06-projects-management-application', site: 'https://the-projects-management-app.netlify.app/'},
        {name: 'Gobike', stack: 'Front End', src: '/my-portfolio/img/bike.gif', alt: 'gobike.gif', technology: 'Vue.js | Sass | Bootstrap | API', link: 'https://github.com/GiorgioBolzoni/proj-html-vuejs', site: 'https://app.netlify.com/sites/gobike/overview'},
        {name: 'Pokédex', stack: 'Front End', src: '/my-portfolio/img/pokedex.gif', alt: 'pokedex.gif', technology: 'Vue.js | Sass | Bootstrap | Axios', link: 'https://github.com/GiorgioBolzoni/vue-pokedex', site: 'https://pokedex-giorgio-bolzoni.netlify.app'},
        {name: 'Spotify Web', stack: 'Front End', src: '/my-portfolio/img/spotify.png', alt: 'spotify_img', technology: 'HTML | CSS', link: 'https://github.com/GiorgioBolzoni/html-css-spotifyweb', site: 'https://spotify-web-giorgio-bolzoni.netlify.app/'},        
        {name: 'Netflix', stack: 'Front End', src: '/my-portfolio/img/boolflix.gif', alt: 'boolflix.gif', technology: 'Vue.js | Vuex | API', link: 'https://github.com/GiorgioBolzoni/vite-boolflix', site: 'https://boolflix-giorgio-bolzoni.netlify.app'},
        {name: 'Whatsapp', stack: 'Front End', src: '/my-portfolio/img/whatsapp.png', alt: 'whatsapp_img', technology: 'HTML | CSS | JavaScript', link: 'https://github.com/GiorgioBolzoni/vue-boolzapp', site: 'https://boolzapp-giorgio-bolzoni.netlify.app'},
        {name: 'Comics', stack: 'Back End', src: '/my-portfolio/img/comics.png', alt: 'comics_img', technology: 'PHP | Laravel | Sass | API', link: 'https://github.com/GiorgioBolzoni/laravel-comics', site: '' },
      ],
      filter: ''
    }
  },
  computed: {
    filteredProjects() {
      if (this.filter) {
        return this.projects.filter(project => project.stack === this.filter);
      }
      return this.projects;
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
    goToSite(site) {
      if (site) {
        window.open(site, "_blank");
      } else {
        alert('Il sito sarà disponibile a breve');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

button {
  background-color: black;
  border: 3px solid var(--saffron);
  margin: 5px;
  width: 150px;
  min-width: 150px;
  color: var(--alabaster);
  border-radius: 10px;
  padding: 5px;
  font-weight: bold;

  &:hover {
    background-color: var(--saffron);
    color: black;
    border-color: black;
  }
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  border: 1px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 8px var(--saffron);
  text-align: center;
  background-color: black;
  cursor: pointer;
  padding: 0;
  min-width: 200px;
  position: relative;

  &:hover {
    transform: scale(1.15);
    transition: transform 0.4s ease-out;

    .card-text {
      opacity: 1;
      transform: translateY(0);
    }

    img {
      opacity: 0.8;
    }

    .go-to-site-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 1.2rem;
  color: var(--saffron);
  margin: 0;
}

.card-text {
  font-size: 0.8rem;
  position: absolute;
  color: var(--saffron);
  z-index: 800;
  bottom: 20%;
  left: 5%;
  background-color: rgba(0, 0, 0, 0.514);
  transform: translateX(-50%) translateY(10px);
  opacity: 0;
  transition: all 0.4s ease-out;
}

.card-links {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 900;
}

.link-icon {
  font-size: 1.5rem;
  color: var(--saffron);
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.288);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  font-size: 0.6rem;
  z-index: 1;
  right: 0;
  border: 1px solid var(--saffron);

}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  padding: 8px 16px;
  text-decoration: none;
  color: var(--saffron);

  display: block;
}

.dropdown-content a:hover {
  background-color: var(--saffron);
  color: var(--eerie-black);
  
}

.project-enter-active, .project-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-enter-from, .project-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

.project-leave-from, .project-enter-to {
  transform: scale(1);
  opacity: 1;
}

.project-move {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.go-to-site-button {
  position: absolute;
  bottom: 50%;
  right: 25%;
  transform: translate(-50%, -50%) translateY(10px);
  opacity: 0;
  background-color: var(--saffron);
  color: var(--eerie-black);
  border: none;
  box-shadow: 3px 3px 8px black;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.4s ease-out;
}
</style>
