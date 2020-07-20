<template>
    <div id="welcome" class="welcome-container">
        <div class="welcome-wrapper">
            <div class="welcome-items">
                <div class="welcome-title">
                    <h2>Hej, mitt namn är <span class="highlight"> Joakim Svensson</span>.</h2>
                </div>
                <div class="welcome-text">
                    <h4>Nedan finner ni information om mig.</h4>
                </div>
                <div class="">
                    <button v-if="hover" class="read-more-btn" @click="gotoAbout()" @mouseover="handleHover(true)" @mouseleave="handleHover(false)">Läs mer <i class="glyphicon glyphicon-chevron-down"></i></button>
                    <button v-else class="read-more-btn" @click="gotoAbout()" @mouseover="handleHover(true)" @mouseleave="handleHover(false)">Läs mer <i class="glyphicon glyphicon-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    props: ['href'],
    data() {
        return {
            hover: false,
        }
    },
    methods: {
        handleHover(s)  {
            this.hover = s;
        },
        gotoAbout() {
            // document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
            const id = 'about';
            const yOffset = -40; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        },
    }
}
</script>

<style scoped lang="scss">

.glyphicon-chevron-down {
    position: relative;
    top: 2px;
    font-size: 14px;
}

.glyphicon-chevron-right {
    position: relative;
    font-size: 14px;
}

.welcome-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
}

.welcome-title {
    color: white;
}

.welcome-text {
    color: white;
    padding-bottom: 10px;
}

@media only screen and (max-width: 479px) {
    .welcome-title h2 {
        font-size: 24px;
    }
    .welcome-text h4 {
        font-size: 14px;
    }
}

.highlight {
    color: rgb(25, 150, 81);
}

.read-more-btn {
    height: 50px;
    width: 150px;
    font-size: 20px;
    background-color: black;
    color: white;
    border: 2px solid white;
}

.read-more-btn:hover {
    background-color: lightseagreen;
    border: 2px solid lightseagreen;
}

.read-more-btn:focus {
    outline: none;
}


</style>