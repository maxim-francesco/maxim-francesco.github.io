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

const projectsDiv = document.getElementById("projects");

// fetch("sections.json").then(response => response.json()).then(values => values.forEach(value => {
//     const htmlItem = `<div id="${value.id}">
//                 <h2>${value.name}</h2>
//                 <div>
//                     <img src="img/${value.imgsrc}">    
//                     <div>
//                         <p>${value.description}</p>
//                         <p style="margin-top: 20px;"> 
                            // <a href="https://francescomaxim.github.io/${value.link}/" style="color: blue;" target="_blank">
                            //     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-link icons" viewBox="0 0 16 16">
                            //         <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                            //         <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
                            //       </svg>
                            // </a>
                            // <a href="https://github.com/francescomaxim/${value.link}" style="color: blue;" target="_blank">
                            //     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github icons" viewBox="0 0 16 16">
                            //         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            //       </svg>
                            // </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>`;
//         projectsDiv.insertAdjacentHTML('beforeend', htmlItem);
// }));

const slideIndices = { 'slideshow1': 1, 'slideshow2': 1, 'slideshow3': 1, 'slideshow4': 1, 'slideshow5': 1 };

    function changeSlide(n, slideshowId) {
        showSlide(slideIndices[slideshowId] += n, slideshowId);
    }

    function currentSlide(n, slideshowId) {
        showSlide(slideIndices[slideshowId] = n, slideshowId);
    }

    function showSlide(n, slideshowId) {
        const slides = document.querySelectorAll(`#${slideshowId} .slide`);
        const dots = document.querySelectorAll(`#dots${slideshowId.slice(-1)} .dot`);

        if (n > slides.length) { slideIndices[slideshowId] = 1 }
        if (n < 1) { slideIndices[slideshowId] = slides.length }

        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

        slides[slideIndices[slideshowId] - 1].style.display = "block";
        dots[slideIndices[slideshowId] - 1].className += " active";
    }

    function initSlideshows() {
        for (const slideshowId in slideIndices) {
            showSlide(slideIndices[slideshowId], slideshowId);
        }
    }

    initSlideshows();