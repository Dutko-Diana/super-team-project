// бібліотека swiper завантажена:
import Swiper from 'swiper';
import 'swiper/css';
// додав ізітост
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// запит на сервер
async function fetchReviews() {
      try {
        const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
        
        if (!response.ok) {
          iziToast.error({
            title: 'Error',
            message: 'Not Found',
            position: 'topRight',
          });
          throw new Error('Not Found');
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          createReviews(data); 
        } else {
          console.error("Data format is incorrect");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

// формуємо картки
function createReviews(images) {
      const reviewContainer = document.getElementById('gallery-container');

      images.forEach(({ avatar_url, author, review }) => {
        const imgCard = document.createElement('div');
        imgCard.classList.add('review-gallery-item');
        
        imgCard.innerHTML = `
          <div class="review-gallery-link">
            <img src="${avatar_url}" alt="${author}'s avatar" class="avatar"/>
            <div class="review-info">
              <h3 class='review-author'>${author}</h3>
              <p class='review-text'><b>Review:</b> ${review}</p>
            </div>
          </div>
        `;
        
        reviewContainer.appendChild(imgCard); 
      });
    }
// грузимо при завантаженні
window.onload = fetchReviews;
    
// свайпер
