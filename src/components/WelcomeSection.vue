<template>
    <div id="welcome" class="welcome-container">
        <div class="welcome-wrapper">
            <div class="welcome-items">
            <div class="">
                <h2>Hej, mitt namn är Joakim Svensson.</h2>
            </div>
            <div class="">
                <h4>Nedan finner ni information om mig.</h4>
            </div>
            <div class="">
                <button class="read-more-btn" @click="gotoAbout()">Läs mer <i class="glyphicon glyphicon-chevron-down"></i></button>
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

        }
    },
    methods: {
        gotoAbout() {
            // document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
            const id = 'about';
            const yOffset = -50; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped lang="scss">

.welcome-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.read-more-btn{
    height: 50px;
    width: 150px;
    font-size: 20px;
    background-color: lightblue;
    color: black;
    border: 2px solid black;
}

.read-more-btn:hover{
    background-color: lightgreen;
}

</style>