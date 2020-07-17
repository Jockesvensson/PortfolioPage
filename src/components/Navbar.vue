<template>
    <div class="site-nav-wrapper">
        <div class="nav site-nav">
            <li class="nav-text-home nav-items" @click="gotoHome()">HEM</li>
            <li class="nav-text nav-items" @click="gotoAbout()">OM</li>
            <li class="nav-text nav-items" @click="gotoPortfolio()">PORTFOLIO</li>
            <li class="nav-text nav-items" @click="gotoContact()">KONTAKT</li>
        </div>
        <div class="container-btn">
            <button class="site-nav-small-btn" @click="toggle = !toggle"><img :src="require(`@/assets/hamburgericon.png`)" alt="hamburger icon"></button>
        </div>
        <div class="site-nav-small-wrapper">
        <transition name="slide">
            <div class="site-nav-small" v-if="toggle">
            <li class="nav-text-home nav-items-small" @click="gotoHome()">HEM</li>
            <li class="nav-text nav-items-small" @click="gotoAbout()">OM</li>
            <li class="nav-text nav-items-small" @click="gotoPortfolio()">PORTFOLIO</li>
            <li class="nav-text nav-items-small" @click="gotoContact()">KONTAKT</li>
            </div>
        </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            toggle: false,
        }
    },
    methods: {
        gotoHome() {
            // document.querySelector("#welcome").scrollIntoView({ behavior: 'smooth' });
            const id = 'welcome';
            const yOffset = -50; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
            this.toggle = false;
        },
        gotoAbout() {
            // document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
            const id = 'about';
            const yOffset = -40; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
            this.toggle = false;
        },
        gotoPortfolio() {
            // document.querySelector("#portfolio").scrollIntoView({ behavior: 'smooth' });
            const id = 'portfolio';
            const yOffset = -40; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
            this.toggle = false;
        },
        gotoContact() {
            // document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' });
            const id = 'contact';
            const yOffset = -39; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
            this.toggle = false;
        },
    }

}
</script>

<style scoped lang="scss">

.site-nav-wrapper {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    font-size: 16px;
    background-color: #1b242f;
}


.site-nav-small-wrapper {
    position:relative;
    overflow: hidden;
}

.site-nav-small {
    margin-top: 10px;
    padding-right: 20px;
    border-bottom: 3px solid #04c2c9;
}

.site-nav-small li{
    margin: 0px 0px 5px 10px;
    list-style-type: none;
    text-align: left;
}

.slide-enter-active {
    // transition: all .6s ease;
    opacity: 1;
}

.slide-leave-active {
    opacity: 0;
}

.slide-enter, .slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.site-nav {
    height: 40px;
    justify-content: center;
    text-align: center;
    border-bottom: 3px solid #04c2c9;
}

@media only screen and (max-width: 479px) {
    .site-nav{
        display: none !important;
    }
}

.nav-items{
    margin: 0;
    padding: 9px;
    display: flex;
    text-align: center;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
}

.nav-items-small{
    margin: 0;
    padding: 2px 0px 2px 9px;
    display: flex;
    text-align: center;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
}

.nav-text-home {
    color: rgb(25, 150, 81);
}

.nav-text {
    color: white;
}

.nav-text:hover,
.nav-text-home:hover {
    color: red;
}

.container-btn{
    text-align: left;
    padding: 5px 0px 0px 10px;
    height: 40px;
    border-bottom: 3px solid #04c2c9;
}

@media only screen and (min-width: 479px) {
    .container-btn {
        display: none !important;
    }
}

.site-nav-small-btn {
    margin-bottom: 10px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    background-color: #1b242f;
}

.site-nav-small-btn:focus {
    outline:0;
}

@media only screen and (min-width: 479px) {
    .site-nav-small {
        display: none !important;
    }
    .site-nav-small-wrapper {
        display: none !important;
    }
    .site-nav-small-btn{
        display: none;
    }
}

</style>