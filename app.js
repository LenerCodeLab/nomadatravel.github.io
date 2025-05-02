feather.replace();

const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");

links.forEach((item) => {
  item.addEventListener("click", () => {
    navResposive.classList.remove("containerNavActive");
    iconMenu.checked = false;
  });
});
function actualizarEnlaceActivo() {
  let enlaceActualizado = false;

  sections.forEach((section) => {
    if (enlaceActualizado) return;

    const sectionId = section.getAttribute("id");

    // Verifica si la sección está en la vista
    if (isSectionInView(section)) {
      const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
      links.forEach((link) => link.classList.remove("linkActivo"));
      if (activeLink) {
        activeLink.classList.add("linkActivo");
      }
      enlaceActualizado = true; // Indicamos que hemos actualizado un enlace
    }
  });
}

// Función revisada para detectar si una sección está parcialmente visible
function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const margin = 90;
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return rect.top < window.innerHeight - margin && rect.bottom > margin;
}

// Escuchar el evento de scroll para actualizar el enlace activo
window.addEventListener("scroll", actualizarEnlaceActivo);

// Llamar la función inicialmente para asegurar que el enlace correcto esté activo al cargar la página
actualizarEnlaceActivo();

const navbar = document.querySelector(".navContainer"); // Seleccionamos el primer elemento

const iconMenu = document.querySelector(".menu input");

const whatsapp = document.querySelector(".whatsappFixed");
// const myForm = document.getElementById('myForm');
const navResposive = document.querySelector(".containerNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navbar.classList.add("navActive");
  } else {
    navbar.classList.remove("navActive");
  }
});

whatsapp.addEventListener("click", () => {
  formData.classList.add("formDataActive");
});
iconMenu.addEventListener("click", () => {
  if (iconMenu.checked == true) {
    navResposive.classList.add("containerNavActive");
  } else {
    navResposive.classList.remove("containerNavActive");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.tagName === "H2") {
        entry.target.classList.add("animate__animated", "animate__backInLeft"); // Animación para h3
      } else if (entry.target.tagName === "P") {
        entry.target.classList.add("animate__animated", "animate__zoomIn"); // Animación para p
      } else if (entry.target.tagName === "H1") {
        entry.target.classList.add("animate__animated", "animate__zoomIn"); // Animación para p
      } else if (entry.target.tagName === "H3") {
        entry.target.classList.add("animate__animated", "animate__backInLeft"); // Animación para p
      }
    }
  });
});

// Seleccionamos todos los elementos h2 y p
const elements = document.querySelectorAll("h3, p,h2,h1");

elements.forEach((element) => {
  observer.observe(element);
});
