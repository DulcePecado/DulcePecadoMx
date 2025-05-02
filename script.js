// Función para activar y desactivar el menú en dispositivos pequeños (hamburguesa)
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Inicialización de partículas con "particles.js"
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff" // Color blanco para simular migas de pan
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Carrusel de testimonios adaptado a móvil y escritorio
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

function changeTestimonial() {
  testimonialItems.forEach(item => item.classList.remove('active'));
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  testimonialItems[currentIndex].classList.add('active');

  // Desplazamiento
  const itemWidth = testimonialItems[currentIndex].offsetWidth;
  testimonialTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Inicializar el primer testimonio
testimonialItems.forEach((item, index) => {
  item.classList.toggle('active', index === 0);
});

setInterval(changeTestimonial, 5000);

// Detectar ancho para ajustar visibilidad central (solo en escritorio)
function updateActiveItem() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    // Solo 1 activo en móvil
    testimonialItems.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
  } else {
    // Detectar elemento más centrado en escritorio
    const center = window.innerWidth / 2;
    testimonialItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      item.classList.toggle('active', Math.abs(center - itemCenter) < rect.width / 2);
    });
  }
}

window.addEventListener('resize', updateActiveItem);
setInterval(updateActiveItem, 300);

// Menú hamburguesa funcional
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});





const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
let index = 0;

function updateCarousel() {
  container.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});
