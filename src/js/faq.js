// бібліотека Accordion вже завантажена, потрібно тільки використати згідно з документацією)))
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 1000,
  showMultiple: false,
  openOnInit: [0],
});

const accordionHeaders = document.querySelectorAll('.accordion-div');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const allItems = document.querySelectorAll('.accordion-item');
    const allContents = document.querySelectorAll('.acc-text');

    allItems.forEach(item => {
      item.classList.remove('active');
    });

    allContents.forEach(content => {
      if (content !== this.nextElementSibling) {
        content.style.display = 'none';
      }
    });

    const item = this.parentElement;
    const content = this.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      item.classList.add('active');
    }
  });
});
