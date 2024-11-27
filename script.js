// Action for the back button
document.getElementById("backButton").addEventListener("click", () => {
    alert("Retour vers le menu principal !");
    // You can replace this alert with a redirect, e.g., `window.location.href = "menu.html";`
  });
  
  // Search functionality
  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
      const itemName = item.textContent.toLowerCase();
      item.style.display = itemName.includes(query) ? "block" : "none";
    });
  });