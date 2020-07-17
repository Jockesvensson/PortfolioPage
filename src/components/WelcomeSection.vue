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
                    <button class="read-more-btn" @click="gotoAbout()" @mouseover="handleHover(true)" @mouseleave="handleHover(false)">Läs mer {{message}}</button>
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
    computed: {
        message() {
            return this.hover === true ? "🠋" : "🠊";
        },
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
}

.highlight {
    color: rgb(25, 150, 81);
}

.read-more-btn{
    height: 50px;
    width: 150px;
    font-size: 20px;
    background-color: black;
    color: white;
    border: 2px solid white;
}

.read-more-btn:hover{
    background-color: lightseagreen;
    border: 2px solid lightseagreen;
}


</style>