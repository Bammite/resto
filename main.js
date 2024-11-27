const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});


////////////////////////////////////////////////////////////////////////////////
// Fonction pour afficher le modal
function showModal(id) {
  document.getElementById(id).style.display = 'flex';
}
// Fonction pour fermer le modal
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Ajout des écouteurs d'événements aux lignes de résultats
// document.querySelectorAll('.resultRow').forEach(row => {
//     row.addEventListener('click', showModal);
// });

// Écouteur d'événement pour le bouton de fermeture
document.querySelector('.close-button').addEventListener('click', closeModal('modal'));
document.querySelector('.close-button2').addEventListener('click', closeModal('laststep'));
// const fn=document.getElementById('finalisation');
// fn.addEventListener('click', showModal('laststep'));

// Écouteur d'événement pour fermer le modal en cliquant en dehors
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('modal')) {
      closeModal('modal');
  }
});