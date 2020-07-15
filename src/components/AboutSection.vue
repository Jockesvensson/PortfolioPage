<template>
    <div id="about" class="l-constrained">
        <h2 class="border-title"><span>OM MIG</span></h2>
        <div class="about-wrapper">
            <div class="picture-container">
                <img :src="require(`@/assets/Jocke.jpg`)" alt="Profile picture" class="my-picture">
            </div>
            <div class="">
                <h3>Vem är jag?</h3>
            </div>
            <div class="text-container">
                Jag är en kille som nyligen har påbörat min resa inom utveckling.
                Jag söker nu ett jobb där jag kan fortsätta min resa och utvecklas vidare inom yrkesområdet.
                För tillfället håller jag på att lära mig Vue.JS.
                De områden inom utveckling som jag tycker är extra intressant är RPA/AI, frontäend same SQL/BI (datahantering/analys)
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            profileImage: '',
        }
    },
    methods: {
        showProfileImage() {
            this.profileImage = require('../assets/Jocke.jpg')
        },
    }
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 319px) {
    #about {
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
}

.about-wrapper {
    margin-top: 5%;
}

.picture-container{
    padding: 35px 0px 35px;
}

.my-picture{
    border-radius: 40%;
    height: 25%;
    width: 25%;
}

</style>