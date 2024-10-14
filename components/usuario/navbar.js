const navbarHTML = `
  <nav>
            <div class="nav__header">
              <div class="nav__logo">
                <a href="#">
                  <img
                    src="/icon.png"
                    alt="logo"
                    class="nav__logo-dark"/>
                  <img
                    src="/icon.png"
                    alt="logo"
                    class="nav__logo-white"/>
                </a>
              </div>
              <div class="nav__menu__btn" id="menu-btn">
                <i class="ri-menu-line"></i>
              </div>
            </div>
            <ul class="nav__links" id="nav-links">
              <li><a href="/components/usuario/home.html">INICIO</a></li>
              <li><a href="/components/usuario/special.html">ESPECIAL</a></li>
              <li><a href="/components/usuario/menu.html">MENU</a></li>
              <li><a href="/components/usuario/events.html">MENU FESTIVO</a></li>
              <li><a href="/components/usuario/contact.html">CONTACTANOS</a></li>
              <li><a href="/components/chatbot/bot.html">CHAT-BOT</a></li>
              <li><a href="/components/usuario/privacidad.html" >PRIVACIDAD</a></li>
              <li><a href="/index.html">SALIR</a></li>
            </ul>
          </nav>
`;

const navbarContainer = document.getElementById('navbar-container');
navbarContainer.innerHTML = navbarHTML;

/* menu responsivo */
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