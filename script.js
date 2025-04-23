document.addEventListener("DOMContentLoaded", () => {
  // Current language
  let currentLanguage = "pl"

  // Translations object (example, replace with your actual translations)
  const translations = {
    pl: {
      viewMenu: "Zobacz Menu",
      // ... other Polish translations
    },
    en: {
      viewMenu: "View Menu",
      // ... other English translations
    },
  }

  // Menu data object (example, replace with your actual menu data)
  const menuData = {
    pl: {
      soups: [
        { name: "Zupa Pomidorowa", price: "10 PLN", description: "Pyszna zupa pomidorowa." },
        // ... other Polish soup items
      ],
      sets: [],
      mainDishes: [],
      grill: [],
      salads: [],
      breakfast: [],
      bakery: [],
      desserts: [],
      coffee: [],
      lemonades: [],
      cocktails: [],
      drinks: [],
      sides: [],
      // ... other Polish menu categories and items
    },
    en: {
      soups: [
        { name: "Tomato Soup", price: "10 PLN", description: "Delicious tomato soup." },
        // ... other English soup items
      ],
      sets: [],
      mainDishes: [],
      grill: [],
      salads: [],
      breakfast: [],
      bakery: [],
      desserts: [],
      coffee: [],
      lemonades: [],
      cocktails: [],
      drinks: [],
      sides: [],
      // ... other English menu categories and items
    },
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    const icon = menuToggle.querySelector("i")
    if (mobileMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      const icon = menuToggle.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    })
  })

  // Language switcher
  const languageLinks = document.querySelectorAll("[data-lang]")
  languageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const lang = this.getAttribute("data-lang")
      changeLanguage(lang)
    })
  })

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to current button and content
      this.classList.add("active")
      document.getElementById(`${tabId}-content`).classList.add("active")
    })
  })

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header")

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionId = this.getAttribute("data-accordion")
      const content = document.getElementById(`${accordionId}-accordion`)
      const icon = this.querySelector("i")

      // Toggle active class
      content.classList.toggle("active")

      // Toggle icon
      if (content.classList.contains("active")) {
        icon.classList.remove("fa-chevron-down")
        icon.classList.add("fa-chevron-up")
      } else {
        icon.classList.remove("fa-chevron-up")
        icon.classList.add("fa-chevron-down")
      }
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })

  // View Menu button scrolls to menu section
  const viewMenuBtn = document.querySelector('[data-translate="viewMenu"]')
  if (viewMenuBtn) {
    viewMenuBtn.addEventListener("click", () => {
      const menuSection = document.getElementById("menu")
      if (menuSection) {
        window.scrollTo({
          top: menuSection.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  }

  // Function to change language
  function changeLanguage(lang) {
    currentLanguage = lang

    // Update all translatable elements
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key]
      }
    })

    // Update menu items
    populateMenu(lang)
  }

  // Function to create menu item HTML
  function createMenuItem(item, compact = false) {
    const menuItem = document.createElement("div")
    menuItem.className = compact ? "compact-menu-item" : "menu-item"

    let html = ""

    if (compact) {
      html = `
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-price">${item.price}</div>
            `
    } else {
      html = `
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <div class="menu-item-name">${item.name}</div>
                        <div class="menu-item-price">${item.price}</div>
                    </div>
                    ${item.description ? `<div class="menu-item-description">${item.description}</div>` : ""}
                </div>
                ${
                  item.image
                    ? `
                    <div class="menu-item-image">
                        <div class="menu-item-image-container">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                    </div>
                `
                    : ""
                }
            `
    }

    menuItem.innerHTML = html
    return menuItem
  }

  // Function to populate menu
  function populateMenu(lang) {
    const categories = [
      "soups",
      "sets",
      "mainDishes",
      "grill",
      "salads",
      "breakfast",
      "bakery",
      "desserts",
      "coffee",
      "lemonades",
      "cocktails",
      "drinks",
      "sides",
    ]

    categories.forEach((category) => {
      // Desktop menu
      const desktopContainer = document.getElementById(`${category}-grid`)
      if (desktopContainer) {
        desktopContainer.innerHTML = ""
        if (menuData[lang] && menuData[lang][category]) {
          menuData[lang][category].forEach((item) => {
            desktopContainer.appendChild(createMenuItem(item))
          })
        }
      }

      // Mobile accordion
      const mobileContainer = document.getElementById(`${category}-accordion`)
      if (mobileContainer) {
        mobileContainer.innerHTML = ""
        if (menuData[lang] && menuData[lang][category]) {
          menuData[lang][category].forEach((item) => {
            mobileContainer.appendChild(createMenuItem(item))
          })
        }
      }

      // Special handling for beverages
      if (category === "coffee" || category === "lemonades" || category === "cocktails" || category === "drinks") {
        const listContainer = document.getElementById(`${category}-list`)
        if (listContainer) {
          listContainer.innerHTML = ""
          if (menuData[lang] && menuData[lang][category]) {
            menuData[lang][category].forEach((item) => {
              listContainer.appendChild(createMenuItem(item, true))
            })
          }
        }
      }
    })
  }

  // Initialize the page
  changeLanguage(currentLanguage)
})
