<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {Navbar}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    text-align: center;
}

a {
    color: #000;
    text-decoration: none;
}

ul,
nav {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    list-style: none;
}

.l-constrained {
    position: relative;
    max-width: 1150px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
}

.border-title {
    position: relative;
    text-align: center;
    top: 4%;
}

@media only screen and (max-width: 479px) {
  .border-title {
    top: 20px;
}
}

.border-title span {
    position: relative;
    z-index: 2;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #fff;
}

.border-title:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: #000000;
    content: '';
}

.product-gallery {
    margin-bottom: 30px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 280px));
    justify-content: center;
    align-items: center;
    padding: 0px 5%;
}

img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
}

.text-container{
  padding: 4% 5%;
}

@media only screen and (min-width: 767px) {
  .text-container{
    padding: 2% 15%;
  }
}

</style>
