
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollBtn = document.getElementById("scrollBtn");
    // Afișează butonul dacă scroll-ul depășește 20px de la partea de sus
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Funcție pentru a merge înapoi la partea de sus a paginii când se face click pe buton
function topFunction() {
    document.body.scrollTop = 0; // Pentru Safari
    document.documentElement.scrollTop = 0; // Pentru Chrome, Firefox, IE și Opera
}
