Vue.createApp({
    data() {
        return {
            src:["img/main/firstSlide.jpg","img/main/firstSlide.jpg","img/main/firstSlide.jpg","img/main/firstSlide.jpg","img/main/firstSlide.jpg"]
        }
    }
}).mount('#slideListMain')

Vue.createApp({
    data() {
        return {
        }
    },
    mounted(){
    let indicatorListMain = document.getElementById('indicatorListMain');
    let firstSlide = indicatorListMain.querySelector('button');
    firstSlide.classList.toggle("active")
    firstSlide.setAttribute("aria-current","true");

    
    let slide = document.getElementById('slideListMain');
    let item = slide.querySelector('.carousel-item');
    item.classList.toggle('active');
    }
  }).mount('#indicatorListMain')
  