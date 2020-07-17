<template>
    <div class="footer-wrapper">
        <div class="site-footer-btn-container">
            <div class="">
                <button class="site-footer-btn" @click="gotoHome()"><i class="glyphicon glyphicon-chevron-up"></i></button>
            </div>
        </div>
        <div class="site-footer-copyright">
            Joakim Svensson © 2020
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    },
    methods: {
        gotoHome() {
            document.querySelector("#welcome").scrollIntoView({ behavior: 'smooth' });
        },
    }
}
</script>

<style scoped lang="scss">

.footer-wrapper {
    border: 1px solid black;
    background-color: black;
}

.site-footer-btn-container {
    height: 40px;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
}

.site-footer-btn {
    margin-top: 0px;
    border: none;
    font-size: 20px;
    background-color: lightseagreen;
    color: white;
}

.site-footer-copyright {
    height: 40px;
    justify-content: center;
    text-align: center;
    color: #ffffff;
}

</style>