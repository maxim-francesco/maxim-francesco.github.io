// script.js

// Detectează scroll-ul
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


// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.ipdata.co/?api-key=a6e461d918eed3a6dba543973a4b11105af7fe95d7b7c4753e34e72a');

// request.setRequestHeader('Accept', 'application/json');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// };

// request.send();