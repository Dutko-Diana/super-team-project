document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("thankYouModal");
    var closeButton = document.querySelector(".close-button");
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Збираємо дані з форми
        var formData = new FormData(form);

        // Перевірка, чи всі поля заповнені
        if (!form.checkValidity()) {
            alert('Будь ласка, заповніть всі обов\'язкові поля.');
            return;
        }

        // Відправка POST запиту на сервер
        fetch('https://portfolio-js.b.goit.study/api/request', { // Замініть URL на ваш endpoint
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                // Деталізована помилка
                return response.json().then(errorData => {
                    throw new Error('Помилка при створенні заявки: ' + (errorData.message || 'Невідома помилка'));
                });
            }
            return response.json();
        })
        .then(data => {
            // Успішне створення заявки
            modal.style.display = "flex";
            form.reset(); // Очищення форми
        })
        .catch(error => {
            if (error.message === 'Failed to fetch') {
                alert('Відсутнє інтернет-з\'єднання. Перевірте ваше підключення і спробуйте знову.');
            } else if (error.message.includes('Помилка при створенні заявки')) {
                alert('Сталася помилка при надсиланні заявки. Будь ласка, перевірте введені дані і спробуйте знову. Деталі: ' + error.message);
            } else {
                alert('Сталася непередбачувана помилка. Будь ласка, спробуйте знову пізніше.');
            }
        });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
