
/* =========================================
   UKE CENTRE — JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigation");

  // Mobile navigation
  if (menuButton && navigation) {
    function closeMenu() {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      navigation.classList.remove("is-open");
    }

    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open menu" : "Close menu"
      );

      navigation.classList.toggle("is-open", !isOpen);
    });

    // Close the menu after selecting a navigation link
    navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu with Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close the menu when clicking outside it
    document.addEventListener("click", (event) => {
      if (
        navigation.classList.contains("is-open") &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Reset mobile navigation when returning to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  // Preselect the service from a service card link
  const serviceSelect = document.querySelector("#service");

  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      if (!serviceSelect) return;

      const requestedService = link.dataset.service;

      const optionExists = Array.from(serviceSelect.options).some(
        (option) => option.value === requestedService
      );

      if (optionExists) {
        serviceSelect.value = requestedService;
      }
    });
  });

  // Automatically update the copyright year
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

