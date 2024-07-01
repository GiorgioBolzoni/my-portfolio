<template>
  <nav class="navbar navbar-expand-lg px-4 flex-wrap" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand mb-0 h1 me-5" to="/">
        <h2 class="fw-bold">Giorgio Bolzoni</h2>
      </router-link>
      <div class="img-container">
        <img src="/img/duck.png" style="width: 100px;" alt="duck.png">
        <div class="help-message">Per qualsiasi problema seleziona la voce del menù "Contacts", seleziona il metodo di contatto più comodo per te e sarò felice di aiutarti!</div>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse collapse-horizontal" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#top' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#about' }">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#projects' }">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#contacts' }">Contacts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

nav {
  min-height: 80px;
  background-color: black;
  box-shadow: 0 1px 15px var(--saffron);
  color: var(--alabaster);
  position: fixed;
  z-index: 1000;
  width: 100vw;

  li:hover {
    cursor: pointer;
  }

  .navbar-brand {
    color: var(--alabaster);
  }

  li a:hover {
    color: var(--saffron) !important;
  }

  .nav-link:focus {
    color: var(--saffron) !important;
    font-weight: bold;
  }

  .img-container {
    position: relative;
    display: inline-block;
    cursor: help;

    .help-message {
      display: none;
      position: absolute;
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--saffron);
      opacity: 80% !important;
      color: black;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 3px 3px 10px rgb(0, 0, 0);
      white-space: nowrap;
      z-index: 1000;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover .help-message {
      display: block;
      opacity: 1;
    }
  }
  @media (max-width: 1390px) {
    .img-container .help-message {
      white-space: normal;
      max-width: 90vw;  // Assicurati che la help-message non superi il 90% della larghezza dello schermo
    }
  }

}
</style>
