
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU / SIDEBAR (3 pages)
  ========================= */
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });
  }

  if (closeBtn && sidebar && overlay) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  if (overlay && sidebar) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }


  /* =========================
     FORMULAIRE PLIABLE (PAGE 1)
  ========================= */
  const toggleBtn = document.getElementById("toggleForm");
  const formContainer = document.getElementById("appointmentForm");

  if (toggleBtn && formContainer) {
    toggleBtn.addEventListener("click", () => {
      formContainer.classList.toggle("open");
    });
  }

/* =========================
   LIGHTBOX GALERIE (PAGE 1 & 3)
========================= */
const images = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close");

if (images.length && lightbox && lightboxImg) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.classList.remove("zoomed"); // retire le zoom si déjà actif
      lightbox.classList.add("active");
    });
  });
}

if (closeLightbox && lightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}

// click sur overlay pour fermer lightbox
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      lightboxImg.classList.remove("zoomed"); // retire zoom à la fermeture
    }
  });
}

// CLICK SUR IMAGE POUR ZOOM/DEZOOM
if (lightboxImg) {
  lightboxImg.addEventListener("click", () => {
    lightboxImg.classList.toggle("zoomed");
  });
}

});
