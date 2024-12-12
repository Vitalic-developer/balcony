document.addEventListener('DOMContentLoaded', function () {
    // Функция для управления модальным окном
    function setupModal(modalId, triggerSelector, closeSelector) {
        let modal = document.getElementById(modalId);
        if (!modal) return;

        let buttons = document.querySelectorAll(triggerSelector);
        let close = document.querySelector(closeSelector);

        if (buttons.length > 0) {
            buttons.forEach(function (btn) {
                btn.onclick = function () {
                    modal.style.display = "block";
                }
            });
        }

        if (close) {
            close.onclick = function () {
                modal.style.display = "none";
            }
        }
        //обработчик для закрытия при клике вне его области
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
    // Первое модальное окно (myModal)
    setupModal('myModal', '.signUp', '#myModal .close');
    // Второе модальное окно (myModalGift)
    setupModal('myModalGift', '#btnDetails', '#myModalGift .close');
    // Третье модальное окно (vacancyModal)
    setupModal('vacancyModal', '#vacancy', '#vacancyModal .close');
});



//slider
document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: '5', //
        spaceBetween: 20, // Расстояние между слайдами
        loop: true, //
        autoplay: {
            delay: 3500, //
            disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.swiper-container-2', {
        slidesPerView: '4', // Количество слайдов на экране по умолчанию
        spaceBetween: 20, // Расстояние между слайдами
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            920: {
                slidesPerView: 3,
            },
            770: {
                slidesPerView: 2,
            },
            360: {
                slidesPerView: 1,
            },
        },
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.getElementById("dropdownBtn");
    var dropdownContent = document.getElementById("myDropdown");
    var arrowIcon = document.getElementById("arrowIcon");

    if (dropdownBtn && dropdownContent && arrowIcon) {
        dropdownBtn.addEventListener('click', function () {
            toggleDropdown();
        });

        // Закрытие раскрывающегося списка при клике вне его области
        document.addEventListener('click', function (event) {
            var dropdown = document.querySelector('.dropdown');
            var isClickInside = dropdown.contains(event.target);

            if (!isClickInside && dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                arrowIcon.classList.remove('rotate-180');
            }
        });

        function toggleDropdown() {
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                arrowIcon.classList.remove('rotate-180');
            } else {
                dropdownContent.style.display = "block";
                arrowIcon.classList.add('rotate-180');
            }
        }
    } else {
        console.error("Элементы dropdownBtn, dropdownContent или arrowIcon не найдены");
    }
});

//burger
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const headerUl = document.querySelector('.header ul');
    const burgerIcon = document.getElementById('burgerIcon');
    const closeIcon = document.getElementById('icon_close');

    burger.addEventListener('click', function () {
        headerUl.classList.toggle('active');
        burgerIcon.style.display = headerUl.classList.contains('active') ? 'none' : 'block';
        closeIcon.style.display = headerUl.classList.contains('active') ? 'block' : 'none';
    });
});

//до после подгрузка картинок
document.querySelectorAll('.before_after-block').forEach((block, blockIndex) => {
    const cards = block.querySelectorAll('.card_ba');

    cards.forEach(card => {
        const imageType = card.textContent.trim() === 'До' ? 'before' : 'after';
        card.style.backgroundImage = `url('img/before-after/${imageType}-${blockIndex + 1}.jpg')`;
    });
});

//шаги подгрузка картинок
document.querySelectorAll('.process_card').forEach((card, index) => {
    const cardBa = card.querySelector('.card_ba');
    cardBa.style.backgroundImage = `url('img/step/step-${index + 1}.jpg')`;
});







document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        { selector: '.reveal-2', visibleCount: 3, displayStyle: 'flex' }, // Используем flex для .reveal-2
        { selector: '.reveal', visibleCount: 9, displayStyle: 'block' }, // Используем block для .reveal
        { selector: '.video_card', visibleCount: 3, displayStyle: 'block' } // Используем block для .video_card
    ];

    const showMoreButton = document.querySelector('.see_all button');

    sections.forEach(({ selector, visibleCount, displayStyle }) => {
        const items = document.querySelectorAll(selector);
        let visibleItems = visibleCount;

        // Показываем первые visibleCount элементов
        for (let i = 0; i < visibleItems; i++) {
            if (items[i]) {
                items[i].style.display = displayStyle; // Устанавливаем displayStyle (flex или block)
            }
        }

        // Обработчик клика на кнопку "Показать больше"
        showMoreButton.addEventListener('click', function () {
            for (let i = visibleItems; i < visibleItems + visibleCount; i++) {
                if (items[i]) {
                    items[i].style.display = displayStyle; // Устанавливаем displayStyle (flex или block)
                }
            }
            visibleItems += visibleCount;
        });
    });
});










