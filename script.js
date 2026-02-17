
/* ============================
   MENU ET OVERLAY
============================ */
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const menuCloseBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

if (menuBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });
}

if (menuCloseBtn && sidebar && overlay) {
  menuCloseBtn.addEventListener("click", () => {
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

/* ============================
   FORMULAIRE PLIABLE
============================ */
const btn = document.getElementById("toggleForm");
const form = document.getElementById("appointmentForm");

if (btn && form) {
  btn.addEventListener("click", () => {
    if (form.style.maxHeight) {
      form.style.maxHeight = null;
    } else {
      form.style.maxHeight = form.scrollHeight + "px";
    }
  });
}

/* ============================
   LIGHTBOX GALERIE
============================ */
const images = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCloseBtn = document.getElementById("close");

let zoomed = false;

if (images.length && lightbox && lightboxImage) {
  // Ouvrir lightbox au clic
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = img.src;
      zoomed = false;
      lightboxImage.style.transform = "scale(1)";
      lightboxImage.classList.remove("zoomed");
    });
  });

  // Fermer lightbox avec bouton X
  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // Fermer lightbox en cliquant dehors de l'image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImage) {
      lightbox.style.display = "none";
    }
  });

  // Zoom / dezoom sur clic
  lightboxImage.addEventListener("click", () => {
    zoomed = !zoomed;
    lightboxImage.style.transform = zoomed ? "scale(1.8)" : "scale(1)";
    lightboxImage.classList.toggle("zoomed", zoomed);
  });
}
