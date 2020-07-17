<template>
    <div class="portfolio-container">
        <div class="l-constrained">
            <div id="portfolio-wrapper">
                <h2 class="border-title"><span>PROJEKT</span></h2>
                <div class="text-container text-portfolio">
                    Nedan finner ni några av de projekt som jag har gjort.
                    Denna sektion kommer att fyllas på allt eftersom jag har något nytt att visa.
                </div>

                <div class="filter-container">
                    <div class="filter-wrapper">
                        <button class="filter-btn" @click="showAll()">Allt</button>
                        <button class="filter-btn" @click="showVue()">Vue.JS</button>
                        <button class="filter-btn" @click="showFlutter()">Flutter/Dart</button>
                        <button class="filter-btn" @click="showAsp()">ASP.NET</button>
                        <button class="filter-btn" @click="showHtml()">HTML/jQuery</button>
                    </div>
                </div>
                
                <ul class="product-gallery">
                <div id="product-item-portfolio" class="product-item" v-for="(item, index) in filteredData" :key="index">
                    <li>
                    <div class="product-item__img" @mouseover="showItemIndex = index" @mouseleave="showItemIndex = null">
                        <img class="overlay" :src="item.imageStart" alt="Product image" @click="away()">
                        <transition name="slide-down">
                        <div class="text-top-container" v-show="showItemIndex === index">
                            <div class="product-item__title">{{item.name}}</div>
                            <div class="product-item__price">{{item.language}}</div>
                        </div>
                        </transition>
                        <transition name="slide-up">
                        <div class="bottom-btn-container" v-show="showItemIndex === index">
                            <button class="bottom-btn" @click="showInfo(index)">Se mer</button>
                        </div>
                        </transition>
                    </div>
                    </li>
                </div>
                </ul>
            </div>

            <div class="modal-window-container" v-show="showModal">
                <div class="">
                    <transition-group name="fade" tag="div">
                    <div v-for="i in [currentIndex]" :key="i">
                        <img :src="currentImage" alt="Product image" class="image-wrapper">
                    </div>
                    </transition-group>
                    <!-- <img :src="itemInfo.imageInfo" alt="Product image" class="image-wrapper"> -->
                    <!-- buttons are not active right now, they will be active if I make a image gallery -->
                    <button class="left-btn"><i class="glyphicon glyphicon-chevron-left"></i></button>
                    <button class="right-btn"><i class="glyphicon glyphicon-chevron-right"></i></button>
                    <div class="info-wrapper">
                        <div class="item-info-title">{{itemInfo.title}}</div>
                        <div class="item-info-description">{{itemInfo.description}}</div>
                        <div class="item-info-github">
                            <a class="" @click="openGitHubUrl()">Länk till Github</a>
                        </div>
                        <div class="item-info-homepage">
                            <button class="open-homepage" @click="openHomePageUrl()">Till hemsidan</button><span class="close-modal" @click="closeModal()">X</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            show: true,
            showItemIndex: null,
            showModal: false,
            itemInfo: [],
            imageNumber: '',
            isPopup: true,
            currentIndex: 0,
            currentFilterValue: '',
            // Used for image gallery for the animation
            // timer: null,
        }
    },
    // This will be used to be able to have a image slide gallery
    // mounted() {
    //     this.startSlide();
    // },
    computed: {
        items() {
            return this.$store.getters.getItems;
        },
        currentImage() {
            // I can use this when i have more images than one.
            // return this.images[Math.abs(this.currentIndex) % this.images.length];
            return this.itemInfo.imageInfo;
        },
        filteredData() {
            var self = this;
            if (this.currentFilterValue != undefined && this.currentFilterValue != '') {
                return this.items.filter(function(d) {
                    return d.language.indexOf(self.currentFilterValue) != -1;
                });
            } else {
                return this.items;
            }
        }
    },
    methods: {
        showAll() {
            this.currentFilterValue = ''
            console.log(this.currentFilterValue)
        },
        showVue() {
            this.currentFilterValue = 'Vue.JS'
            console.log(this.currentFilterValue)
        },
        showFlutter() {
            this.currentFilterValue = 'Flutter/Dart'
            console.log(this.currentFilterValue)
        },
        showAsp() {
            this.currentFilterValue = 'ASP.NET'
            console.log(this.currentFilterValue)
        },
        showHtml() {
            this.currentFilterValue = 'HTML/CSS/jQuery'
            console.log(this.currentFilterValue)
        },
        away() {
            this.showModal = false;
            document.getElementById('welcome').style.opacity = '1';
            document.getElementById('portfolio-wrapper').style.opacity = '1';
            document.getElementById('about').style.opacity = '1';
            document.getElementById('contact').style.opacity = '1';
        },
        showInfo(index) {
            console.log(index);
            document.getElementById('welcome').style.opacity = '0.3';
            document.getElementById('portfolio-wrapper').style.opacity = '0.3';
            document.getElementById('about').style.opacity = '0.3';
            document.getElementById('contact').style.opacity = '0.3';
            this.itemInfo = this.$store.getters.getItems[index];
            this.showModal = !this.showModal;
            return this.itemInfo;
            
        },
        openGitHubUrl() {
            window.open(this.itemInfo.githubLink, '_blank');
        },
        openHomePageUrl() {
            window.open(this.itemInfo.websiteLink, '_blank');
        },
        closeModal() {
            this.showModal = false;
            document.getElementById('welcome').style.opacity = '1';
            document.getElementById('portfolio-wrapper').style.opacity = '1';
            document.getElementById('about').style.opacity = '1';
            document.getElementById('contact').style.opacity = '1';
        },
        // This will be used to be able to have a image slide gallery
        // startSlide() {
        //     this.timer = setInterval(this.next, 1000);
        // },
        // prevImage() {
        //     this.currentIndex -= 1;
        //     console.log(this.currentIndex);
        // },
        // nextImage() {
        //     this.currentIndex += 1;
        //     console.log(this.currentIndex);
        // },
    }
}
</script>

<style scoped lang="scss">

.filter-container {
    vertical-align: middle;
    text-align: center;
    margin-bottom: 20px;
}

.filter-wrapper {
    display: inline-block;
}

.filter-btn {
    margin: 0px 5px;
    padding: 0px 20px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #f5f5f5;
}

@media only screen and (max-width: 767px) {
    .filter-btn {
        padding: 0px 5px;
        font-size: 12px;
    }
}

.filter-btn:focus {
    outline:0;
    color: white;
    background: black;
}


.slide-down-enter-active {
    transition: all 1s ease;
}

.slide-down-leave-active {
    transition: all .1s ease;
}

.slide-down-enter, .slide-down-leave-to {
    transform: translateY(-60%);
    opacity: 0;
}

.slide-up-enter-active {
    transition: all 1s ease;
}

.slide-up-leave-active {
    transition: all .1s ease;
}

.slide-up-enter, .slide-up-leave-to {
    transform: translateY(60%);
    opacity: 0;
}

.border-title span {
    background: #f5f5f5;
}

.left-btn {
    position: absolute;
    top: 29%;
    left: 0%;
    text-align: center;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
}

.right-btn {
    position: absolute;
    top: 29%;
    right: 0%;
    text-align: center;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
}

.left-btn:focus,
.right-btn:focus {
    outline:0;
}

.portfolio-container {
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
}

@media only screen and (min-width: 767px) {
    #portfolio-wrapper {
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
}

.text-portfolio {
    margin-top: 5%;
    margin-bottom: 20px;
}

.image-wrapper {
    border: 1px solid lightgray;
}

a {
    cursor: pointer;
    color: blue;
}

.modal-window-container {
    position: fixed;
    top: 40px;
    z-index: 3;
    background-color: white; 
}

@media only screen and (max-width: 319px) {
  .modal-window-container {
      top: 0%;
  }  
  .image-wrapper {
      border: none;
  }
  .info-wrapper {
      border: none;
  }
}

@media only screen and (min-width: 300px) and (max-width: 479px) {
  .modal-window-container {
      height: 100vh;
      top: 0%;
  }
  .image-wrapper {
      border: none;
  }
  .info-wrapper {
      border: none;
  }
}

@media only screen and (min-width: 479px) {
  .modal-window-container {
      margin: 0px 5%;
      border: 1px solid black;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1040px) {
  .modal-window-container {
      margin: 0px 20%;
  }
}

@media only screen and (min-width: 1040px) {
  .modal-window-container {
      position: fixed;
      width: 500px;
      max-height: 70vh;
      margin: 5% auto;
      left: 0;
      right: 0;
  }
}

#product-item-portfolio {
    position: relative;
    text-align: center;
}

.overlay {
    max-width: 100%;
    height: 200px;
    display: block;
    margin: 0 auto;
}

.product-item__img {
    background: #ffffff;
}

.product-item__img:hover {
    background: #f5f5f5;
    .overlay {
        opacity: 0;
    }
}

.text-top-container {
    position: absolute;
    bottom: 60%;
    width: 100%;
    font-size: 18px;
}

.bottom-btn-container {
    position: absolute;
    bottom: 10%;
    width: 100%;
}

.bottom-btn {
    height: 30px;
    width: 100px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    color: #008CBA;
    border: 2px solid #008CBA;
}

.bottom-btn:hover {
    color: green;
    border: 2px solid green;
}

.item-info-title {
    text-align: left;
    padding: 0px 15px;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
}

.product-item__price {
    color: red;
}

@media only screen and (max-width: 767px) {
  .item-info-title {
    font-size: 16px;
  }
}

.item-info-description {
    text-align: left;
    padding: 0px 15px;
    margin: 10px 0px 10px 0px;
    font-size: 12px;
}

.item-info-github {
    text-align: left;
    padding: 0px 15px;
}

.item-info-homepage {
    position: relative;
    text-align: left;
    padding: 0px 15px;
    width: 100%;
    margin: 40px 0px 10px 0px;
}

@media only screen and (min-width: 300px) and (max-width: 479px) {
  .item-info-homepage {
    position: absolute;
    bottom: 0px;
  }
}

.open-homepage {
    height: 40px;
    width: 120px;
    font-size: 16px;
    background-color: lightblue;
    color: white;
    border: 2px solid lightblue;
}

.close-modal {
    position: absolute;
    right: 20px;
    top: 7px;
    font-size: 20px;
    cursor: pointer;
}

</style>