<template>
<footer id="contacts">
    <div class="p-4 text-center d-flex align-items-center justify-content-around flex-wrap">
      <section id="logos" class="d-flex justify-content-center align-items-center py-3 flex-wrap">
        <a href="https://github.com/GiorgioBolzoni"><img src="/img/github-logo.png" alt="logo-github" class="rounded-circle"></a>
        <a href="http://www.linkedin.com/in/giorgio-bolzoni"><img src="/img/linkedin-svgrepo-com.svg" alt="logo-linkedin" class="rounded-3" id="linkedin-logo"></a>
        <a href="https://drive.google.com/file/d/1ey1k3Bs23R0Hlwaf1Bp0Qqf7SKQKjiYW/view?usp=sharing"><img src="/img/cv-logo.png" alt="logo-cv" class="rounded-circle"></a>
      </section>
      <p class="mx-3"><i class="fa-solid fa-location-dot fs-4 me-3" style="color: #ffffff;"></i>Milano, Italy</p>
      <p class="py-3 d-flex align-items-center" id="email"><i class="fa-regular fa-envelope fs-4" style="color: #ffffff;"></i> <a class="mx-3">gbolzoni96@gmail.com</a></p>
    </div>
    <div class="text-center copyright pb-4">
        © 2024 Giorgio Bolzoni - All Rights Reserved.
    </div>
  </footer>
 </template>
 
 <script>
     export default {
         name:'AppFooter',
         data(){
             return{
                 
             }
         }
     }
 </script>
 
 <style lang="scss" scoped>
 @use '../assets/style/partials/variables' as *;
 footer{
  background-color: black;
  color: var(--e8eddfff);
  
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
p{
  color: var(--light-platinum);
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