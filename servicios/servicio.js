
const swiper = new Swiper('.swiper1', {
  // Opciones de Swiper
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination1',
      clickable: true,

  },


});
var containerSwiper = new Swiper(".swiper2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
      el: ".swiper-pagination2",
      clickable: true,
  },
  autoplay: {
      delay: 3000, // Tiempo en milisegundos entre cada slide
      disableOnInteraction: false // Continúa el autoplay después de una interacción del usuario
  }, breakpoints: {
      // Cuando la pantalla tenga un ancho máximo de 768px (un valor común para considerar móvil)
      300: {
          slidesPerView: 1, // Muestra 2 slides por vista
      },
      800: {
          slidesPerView: 2
      },
      1200: {
          slidesPerView: 3
      }
  }
});

const iconMenu=document.querySelector(".menu input")
const navResposive=document.querySelector(".containerNav ")
iconMenu.addEventListener("click",()=>{
    if(iconMenu.checked==true){
        navResposive.classList.add("containerNavActive")
        iconMenu.classList.add("is-active")
    }
    else{
        navResposive.classList.remove("containerNavActive")
        iconMenu.classList.remove("is-active")
    }
    
     
     
     
  })


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.tagName === 'H3') {
          entry.target.classList.add('animate__animated', 'animate__backInLeft,,"animate__delay-1s"'); // Animación para h3
        } else if (entry.target.tagName === 'P') {
          entry.target.classList.add('animate__animated', 'animate__zoomIn',); // Animación para p
        }
        else if (entry.target.tagName === 'H1') {
            entry.target.classList.add('animate__animated', 'animate__backInLeft'); // Animación para p
          }
          else if (entry.target.tagName === 'H2') {
            entry.target.classList.add('animate__animated', 'animate__pulse'); // Animación para p
          }
          else if (entry.target.tagName === 'IMG') {
            entry.target.classList.add('animate__animated', 'animate__pulse',); // Animación para p
          }
          else if (entry.target.tagName === 'H6') {
            entry.target.classList.add('animate__animated', 'animate__zoomIn'); // Animación para p
          }
      }
    });
  });

  // Seleccionamos todos los elementos h2 y p
  const elements = document.querySelectorAll('h3, p ,h2,h1,img,h5,h6');
  
  elements.forEach((element) => {
    observer.observe(element);
  });