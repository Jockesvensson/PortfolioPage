<template>
  <div class="">
    <div id="welcome"><Welcome/></div>
    <div id="about"><About/></div>
    <div id="portfolio"><Portfolio/></div>
    <div id="contact"><Contact/></div>
    <div id="footer"><Footer/></div>
  </div>
</template>

<script>
import Portfolio from '../components/PortfolioSection'
import Welcome from '../components/WelcomeSection'
import About from '../components/AboutSection'
import Contact from '../components/ContactSection'
import Footer from '../components/Footer'
export default {
  name: 'HomePage',
  components: {Portfolio, Welcome, About, Contact, Footer},
  data() {
    return {

    }
  },
  

}
</script>

<style scoped>

</style>
