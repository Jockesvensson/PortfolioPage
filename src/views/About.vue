<template>
  <div class="">
    <Welcome/>
    <About/>
    <Portfolio/>
    <Contact/>
  </div>
</template>

<script>
import Portfolio from '../components/PortfolioSection'
import Welcome from '../components/WelcomeSection'
import About from '../components/AboutSection'
import Contact from '../components/ContactSection'
export default {
  name: 'HomePage',
  components: {Portfolio, Welcome, About, Contact},
  data() {
    return {

    }
  },
  

}
</script>
