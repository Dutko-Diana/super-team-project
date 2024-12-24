// бібліотека swiper завантажена:
import Swiper from 'swiper';
import 'swiper/css';
// додав ізітост
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


const reviewContainer = document.getElementById('gallery-container');
// запит на сервер
async function fetchReviews() {
   const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
  return response.data;
}

async function reviews() {
   try {
    const review = await fetchReviews();
    createReviews(review);

   } catch (error) {
     reviewContainer.innerHTML = '<p class="error-message">Not found</p>'
   return iziToast.error({
        title: 'Error',
        message: 'Not Found',
        position: 'topRight',
        backgroundColor: 'red',
        theme: 'dark',
        overlay: false,
        titleColor: 'white',
        messageColor: 'white',
        overlayColor: 'rgba(0, 0, 0, 0.6)',
      });
    }
}
 
reviews();

// формуємо картки
function createReviews(images) {
  images.forEach(({ avatar_url, author, review }) => {
    const imgCard = document.createElement('li');
    imgCard.classList.add('review-gallery-item', 'swiper-slide');

    imgCard.innerHTML = `
            <img src="${avatar_url}" alt="${author}'s avatar" class="avatar"/>
              <h3 class='review-author'>${author}</h3>
              <p class='review-text'>${review}</p>
        `;

    reviewContainer.appendChild(imgCard);
  });
}

// свайпер
const swiper = new Swiper('.reviews-container.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
    disabledClass: 'swiper-button-disabled',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
});

