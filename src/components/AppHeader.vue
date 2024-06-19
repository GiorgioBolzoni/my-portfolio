<template>

    <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand mb-0 h1 me-5" href="#"><h2 class="fw-bold">Giorgio Bolzoni</h2></a>
            <div id="menu">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
 </nav>
 </template>
 
 <script>
     export default {
         name:'AppHeader',
         data(){
             return{
                 
             }
         }
     }
 </script>
 
 <style lang="scss" scoped>
 @use '../assets/style/partials/variables' as *;
    nav{
        height: 80px ;
        background-color: var(--black-ff) ;
        box-shadow: 0 1px 15px var(--saffron);
        color: var(--light-platinum); 
        position: fixed;
        z-index: 1000;
        width:100vw;
        
        li:hover{
            cursor: pointer;
        }
        .navbar-brand{
            color: var(--light-platinum);
        }
        li a:hover{
            color: var(--saffron) !important;
        }
    }
    
 </style>