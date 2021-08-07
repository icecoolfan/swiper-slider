$(document).ready(function(){
    const swiper = new Swiper('.swiper-container', {
       pagination: {
            el: '.swiper-pagination',
          },
     scrollbar: {
            el: '.swiper-scrollbar',
          },
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }, 
        
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        
        }) ; 


    });
