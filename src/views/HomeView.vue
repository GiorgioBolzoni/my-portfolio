<template>
  <main>
    <section class="mt-5">
      <h1 class="py-3 fw-bolder">MY PORTFOLIO</h1>
      <h4 class="fw-bold">Jr. Full-Stack Web Developer</h4>
    </section>
    <section class="my-5">
      <AboutView></AboutView>
    </section>
  </main>

  <footer class="p-4 text-center d-flex align-items-center justify-content-around">
    <section id="logos" class="d-flex justify-content-center align-items-center py-3">
      <a href=""><img src="/img/github-logo.png" alt="logo-github" class="rounded-circle"></a>
      <a href="http://www.linkedin.com/in/giorgio-bolzoni"><img src="/img/linkedin-svgrepo-com.svg" alt="logo-linkedin" class="rounded-3" id="linkedin-logo"></a>
      <img src="/img/cv-logo.png" alt="logo-cv" class="rounded-circle">
    </section>
    <p class="py-3 d-flex align-items-center" id="email"><i class="fa-regular fa-envelope fs-4" style="color: #ffffff;"></i> <a class="mx-3">gbolzoni96@gmail.com</a></p>
  </footer>
  <div class="text-center copyright pb-4">
                © 2024 Giorgio Bolzoni - All Rights Reserved.
            </div>
</template>

<script>
import AboutView from "/src/views/AboutView.vue";

export default {
  name:'HomeView',
  components: {
    AboutView,
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
  height: 100vh;
  padding: 80px;
  color: var(--light-platinum);
}
h1{
  color: var(--saffron);
  text-shadow: 5px 5px 10px black;
}
h4{
}
// main {
//   background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
// 	background-size: 800% 800%;
// 	  animation: gradient 15s ease infinite;
//   padding: 0.5rem;
//   height: 100lvh;
// }


// @keyframes gradient {
// 	0% {
// 		background-position: 0% 50%;
// 	}
// 	50% {
// 		background-position: 100% 50%;
// 	}
// 	100% {
// 		background-position: 0% 50%;
// 	}
// }
footer{
  background-color: var(--black-ff);
  color: var(--light-platinum);
}
#logos{

  img{
    max-width: 50px;
    max-height: 50px;
    margin: 10px;
    overflow: hidden;
    
 


    &:hover{
      cursor: pointer;
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	    background-size: 800% 800%;
	    animation: gradient 5s ease infinite;
      overflow: hidden;
    }
  }
}
#linkedin-logo{
    border: 2px solid var(--light-platinum);
    padding: 3px;
  }  

#email{
  a{
    cursor: pointer;
    text-decoration: none;
    color: var(--light-platinum);
    &:hover{
      color: var(--saffron);
    }
  }
}
.copyright{
  color: var(--light-platinum);
}


// MEDIA QUERY:

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>

