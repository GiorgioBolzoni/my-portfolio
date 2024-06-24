<template>
  <h3 class="text-center">
    PROGETTI
  </h3>
  <ul class="d-flex justify-content-center my-4">
    <li><button>Front End</button></li>
    <li><button>Back End</button></li>
    <li><button>Full Stack</button></li>
  </ul>
  <div class="projects-container">
      <div v-for="(project, index) in projects" :key="index" class="card m-2">
        <img :src="project.src" :alt="project.alt" class="project-img"/>
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ project.name }}</h5>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'AppProjects',
    data() {
      return {
        projects: [ 
          {name: 'Spotify Web', stack: 'Front End', src: '/img/spotify.png', alt: 'spotify_img'},
          {name: 'Whatsapp', stack: 'Front End', src: '/img/whatsapp.png', alt: 'whatsapp_img'},
          {name: 'Comics', stack: 'Front End', src: '/img/comics.png', alt: 'comics_img'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
 @use '../assets/style/partials/variables.scss' as *;

  button{
    background-color: var(--black-ff);
    border: 3px solid var(--saffron);
    margin: 5px;
    width: 150px;
    color: var(--e5e5e5ff);
    border-radius: 10px;
    padding: 5px;
    font-weight: bold;

    &:hover{
      background-color: var(--saffron);
      color: var(--black-ff);
      border-color: var(--black-ff);
    }
  }
  .projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 300px;
  border: 1px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 8px var(--saffron);
  text-align: center;
  background-color: var(--oxford-blue);
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
    transition: transform 0.4s ease-out;
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
</style>