document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById('myModal');
    let btn = document.getElementById("signUp");
    let close = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    close.onclick = function () {
        modal.style.display = "none";
    }

    let modalGift = document.getElementById('myModalGift');
    let btnDetails = document.getElementById("btnDetails");
    let closeGift = document.getElementsByClassName("close")[1];

    btnDetails.onclick = function () {
        modalGift.style.display = "block";
    }

    closeGift.onclick = function () {
        modalGift.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        } else if (event.target === modalGift) {
            modalGift.style.display = "none";
        }
    }
});

//slider
document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: '5', // Количество слайдов на экране
        spaceBetween: 20, // Расстояние между слайдами
        loop: true, // Бесконечный цикл
        autoplay: {
            delay: 3500, // Автопрокрутка с задержкой в 2.5 секунды
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







