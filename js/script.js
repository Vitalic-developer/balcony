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




//до после
document.querySelectorAll('.before_after-block').forEach((block, blockIndex) => {
    const cards = block.querySelectorAll('.card_ba');

    cards.forEach(card => {
        const imageType = card.textContent.trim() === 'До' ? 'before' : 'after';
        card.style.backgroundImage = `url('img/before-after/${imageType}-${blockIndex + 1}.jpg')`;
    });
});

//шаги
document.querySelectorAll('.process_card').forEach((card, index) => {
    const cardBa = card.querySelector('.card_ba');
    cardBa.style.backgroundImage = `url('img/step/step-${index + 1}.jpg')`;
});

//before-after
document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.before_after-block');
    const showMoreButton = document.querySelector('.see_all button');
    let visibleBlocks = 3; // Количество видимых блоков изначально

    // Скрываем все блоки, кроме первых трех
    blocks.forEach((block, index) => {
        if (index >= visibleBlocks) {
            block.style.display = 'none';
        }
    });

    // Обработчик клика на кнопку "Показать больше"
    showMoreButton.addEventListener('click', function() {
        for (let i = visibleBlocks; i < visibleBlocks + 3; i++) {
            if (blocks[i]) {
                blocks[i].style.display = 'flex'; // Показываем следующие три блока
            }
        }
        visibleBlocks += 3; // Увеличиваем счетчик видимых блоков
    });
});

//our-works
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card_ow');
    const showMoreBtn = document.getElementById('show_more_btn-works');
    let visibleCards = 9; // Количество видимых карточек по умолчанию

    // Показываем первые 9 карточек
    for (let i = 0; i < visibleCards; i++) {
        if (cards[i]) {
            cards[i].style.display = 'block';
        }
    }

    // Обработчик клика на кнопку "Показать больше"
    showMoreBtn.addEventListener('click', function() {
        for (let i = visibleCards; i < visibleCards + 9; i++) {
            if (cards[i]) {
                cards[i].style.display = 'block';
            }
        }
        visibleCards += 9;
    });
});

//our-works-4
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video_card');
    const showMoreBtn = document.getElementById('show_more_btn-video-works');
    let visibleVideos = 3; // Количество видимых видео по умолчанию

    // Показываем первые 3 видео
    for (let i = 0; i < visibleVideos; i++) {
        if (videos[i]) {
            videos[i].style.display = 'block';
        }
    }

    // Обработчик клика на кнопку "Показать больше"
    showMoreBtn.addEventListener('click', function () {
        // Показываем оставшиеся видео
        for (let i = visibleVideos; i < videos.length; i++) {
            if (videos[i]) {
                videos[i].style.display = 'block';
            }
        }
    });
});


//reviews
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video_card');
    const showMoreBtn = document.getElementById('show_more_btn-video-reviws');
    let visibleVideosReviews = 3; // Количество видимых видео по умолчанию

    // Показываем первые 3 видео
    for (let i = 0; i < visibleVideosReviews; i++) {
        if (videos[i]) {
            videos[i].style.display = 'block';
        }
    }
    showMoreBtn.addEventListener('click', function () {

        for (let i = visibleVideosReviews; i < visibleVideosReviews + 3; i++) {
            if (videos[i]) {
                videos[i].style.display = 'block';
            }
        }
        visibleVideosReviews += 3; // Увеличиваем счетчик видимых видео
        if (visibleVideosReviews >= videos.length) {
            showMoreBtn.style.display = 'none';
        }
    });
});







