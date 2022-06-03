Vue.createApp({
    data() {
        return {
            navLinks:['Home','AboutUs','Portfolio','Features','Blog','Prices','Shortcodes','Contact'],
            url:["#","#Home","#AboutUs","#Portfolio","#Features","#Blog","#Prices","#Shortcodes","#Contact"]
        }
    }
  }).mount('#mainNav')