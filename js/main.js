function openSlider(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("window-slider_tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("window-tabs__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
window.onload = () => {
    document.getElementById('window-slider_one').style.display = 'block';
    document.getElementById('tabRehau').style.display = 'block'
}

function openProduct(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("product-list");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("pagination-btn__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function() {
    $('.faq-list__question').click(function() {
      $('.faq-list__question').not(this).children('.faq-open').removeClass('active');
      $(this).children('.faq-open').toggleClass("active");

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