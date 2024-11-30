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
// Variables globales
const modal = document.getElementById("orderModal");
const closeButton = document.querySelector(".close-button");
const orderForm = document.getElementById("orderForm");
const itemNameInput = document.getElementById("itemName");
const commanderButtons = document.querySelectorAll(".commander .btn");

// Ouvrir le modal au clic sur un bouton Commander
commanderButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".order__card");
    const dishName = card.querySelector("h4").innerText;
    itemNameInput.value = dishName; // Remplir le champ avec le nom du plat
    modal.classList.remove("hidden"); // Afficher le modal
  });
});

// Fermer le modal au clic sur le bouton de fermeture
closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Fermer le modal en cliquant en dehors de la fenêtre
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

// Gérer la soumission du formulaire
orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(orderForm);
  alert(`Commande validée pour ${formData.get("itemName")} avec une quantité de ${formData.get("quantity")}.`);
  modal.classList.add("hidden");
});