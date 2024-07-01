<template>
    <section id="about" class="my-5">
      <h3 class="fw-bold text-center">About me</h3>
      <div class=" row align-items-center my-4 gy-5">
        <aside class=" col-12 col-lg-8 col-md-6 text-center text-sm-start">
        Ho completato un bootcamp intensivo in Full Stack Web Development, durante il quale ho acquisito conoscenze pratiche e teoriche nello sviluppo software, coprendendo sia il Front-end che il Back-end attraverso l'uso di diversi framework e linguaggi di programmazione. Questo percorso mi ha permesso di sviluppare competenze nella gestione del database e delle API.
        <br><br>
        Durante il mio percorso formativo presso Boolean, ho costruito solide fondamenta nello sviluppo web, affinando le mie abilità tecniche e ampliando la mia conoscenza in vari aspetti dello sviluppo software. Sono sempre alla ricerca di opportunità per migliorare e crescere professionalmente.
        <br><br>
        Amo viaggiare, praticare sport, cucinare e scoprire sempre cose nuove. 
        <br><br>
        Per maggiori dettagli non esitare a contattarmi. 
        </aside>
          <div class="col-12 col-lg-4 col-md-6 d-flex justify-content-center"><img id="fotocv" src="/img/fotocv.jpg" alt="fotocv.jpg"></div>
      </div>
    </section>

    <section id="skills" class="my-5">
      <h3 class="fw-bold text-center">Skills</h3>
      <SkillsCarousel />
    </section>
</template>

<script>
import SkillsCarousel from "../components/SkillsCarousel.vue"

export default {
  name: 'AboutView',
  components:{
    SkillsCarousel,
  }
};
</script>

<style scoped>
#fotocv{
  max-width: 300px;
  border-radius: 100%;
}
</style>
