
const menuBtn = document.getElementById("menu-btn") ;
const sidebar = document.getElementById("sidebar") ;
const closeBtn = document.getElementById("close-btn") ;
const overlay = document.getElementById("overlay") ;

/* Ouvrir menu */
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active") ;
  overlay.classList.add("active") ;
}) ;

/* Fermer menu */
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active") ;
  overlay.classList.remove("active") ;
}) ;

/* Fermer en cliquant dehors */
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active") ;
  overlay.classList.remove("active") ;
}) ;

  const btn = document.getElementById("toggleForm") ;
  const form = document.getElementById("appointmentForm") ;

  btn.addEventListener("click", () =>
     {
    if (form.style.maxHeight) {
      form.style.maxHeight = null ;
    } else {
      form.style.maxHeight = form.scrollHeight + "px" ;
    }
  }) ;
