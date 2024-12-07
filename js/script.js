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

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
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
        if (event.target === modalGift) {
            modalGift.style.display = "none";
        }
    }
});

//slider
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: '5', // Количество слайдов на экране
        spaceBetween: 20, // Расстояние между слайдами
        loop: true, // Бесконечный цикл
        autoplay: {
            delay: 3500, // Автопрокрутка с задержкой в 2.5 секунды
            disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
        },
    });
});
