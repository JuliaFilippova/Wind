function openCity(evt, citySlider) {
  let i, tabslider, tablinks;
  tabslider = document.getElementsByClassName("window-slider_tab");
  for (i = 0; i < tabslider.length; i++) {
    tabslider[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("window-tabs__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(citySlider).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity(evt, cityPopular) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("product-list");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("pagination-btn__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityPopular).style.display = "block";
  evt.currentTarget.className += " active";
}

$(function () {
//SLIDER SWIPER
  if($('#slide-window').length) { 
    let swiper = new Swiper('#slide-window, .swiper-container', {
      slidesPerView: 1,
      loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2
        },
        // when window width is >= 768px
        1200: {
          slidesPerView: 3
        }
        // return enableSwiper (); // запустить для маленького разрешения
      },
    });
  };
});

$(document).ready(function() {
    $('.faq-list__question').click(function() {

        if ($(this).parent().is('.faq_open')) {
            $(this).closest('.faq-list__item').find('.faqDropdown').slideUp();
            $(this).closest('.faq-list__item').removeClass('faq_open');
        } else {
            $('.faqDropdown').slideUp();
            $('.faq-list__item').removeClass('faq_open');
            $(this).closest('.faq-list__item').find('.faqDropdown').slideDown();
            $(this).closest('.faq-list__item').addClass('faq_open');
        }

    });

    
});
$(".faq-open").on("click", function () {
        $(this).toggleClass("active");
      });