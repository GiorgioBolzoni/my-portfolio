<template>
  <main>
    <section class="mt-5">
      <h2>MY PORTFOLIO</h2>
      <h3>Aspiring Web Developer</h3>
    </section>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
 @use '../assets/style/partials/variables.scss' as *;
main{
  background-color: var(--eerie-black);
  height: 100vh;
  padding: 80px;
  color: var(--light-platinum);
}
h2{
  color: var(--saffron);
  text-shadow: 5px 5px 10px black;
}
h3{
  text-shadow: 5px 5px 10px black;
}
// main {
//   background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
// 	background-size: 800% 800%;
// 	animation: gradient 15s ease infinite;
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
</style>

