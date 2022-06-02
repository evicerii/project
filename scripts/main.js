Vue.createApp({
    data() {
        return {
            src:["#","/img/main/firstSlide.jpg","/img/main/firstSlide.jpg","/img/main/firstSlide.jpg","/img/main/firstSlide.jpg","/img/main/firstSlide.jpg"]
        }
    }
}).mount('#slideListMain')

Vue.createApp({
    data() {
        return {
        }
    },
    renderTracked(){
            let indicatorListMain = document.getElementById('indicatorListMain');
            let firstSlide = indicatorListMain.querySelector('button');
            firstSlide.classList.add("active")
            firstSlide.setAttribute("aria-current","true");
    }
  }).mount('#indicatorListMain')
  