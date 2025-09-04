import './style.css'
// import { setupCounter } from './index.js'

/* SWIPER */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

/* AOS (Animate on Scroll) */
import AOS from 'aos';
import 'aos/dist/aos.css';

/* Init AOS */
AOS.init({ duration: 700, once: true });

/* Init Swiper when DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    autoplay: { delay: 3500 },
  });
});
