document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('myModal');
    let btn = document.getElementById("signUp");
    let close = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    let modalGift = document.getElementById('myModalGift');
    let btnDetails = document.getElementById("btnDetails");
    let closeGift = document.getElementsByClassName("close")[1];

    btnDetails.onclick = function() {
        modalGift.style.display = "block";
    }

    closeGift.onclick = function() {
        modalGift.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modalGift) {
            modalGift.style.display = "none";
        }
    }
});