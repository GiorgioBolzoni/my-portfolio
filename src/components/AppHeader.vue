<template>
    <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link class="navbar-brand mb-0 h1 me-5" to="/">
          <h2 class="fw-bold">Giorgio Bolzoni</h2>
        </router-link>
        <div id="menu">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
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
                <router-link class="nav-link" :to="{ path: '/', hash: '#contacts' }">Contact</router-link>
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
    height: 80px;
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
  }
  </style>
  