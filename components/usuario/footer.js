const footerHTML = `
      <div class="section__container footer__container">
          <div class="footer__logo">
            <img src="/icon.png" alt="logo" />
          </div>
          <div class="footer__content">
            <p>
                Bienvenido a Coffe-Itiz, donde se unen la pasión por la comida y
                la hospitalidad genuina. Nuestra historia es una de dedicación a la
                creación de la experiencia de atencion y sabor, desde la obtención de los mejores
                ingredientes hasta la entrega de un sabor unico en cada bocado.
            </p>
            <div>
              <ul class="footer__links">
                <li>
                  <span><i class="ri-map-pin-2-fill"></i></span>
                  Av Telecomunicaciones, Chinam Pac de Juárez, Iztapalapa, 09208 Ciudad de México, CDMX
                </li>
                <li>
                  <span><i class="ri-mail-fill"></i></span>
                  coffe-itiz@gmail.com
                </li>
              </ul>
              <div class="footer__socials">
                <a href="/404.html"><i class="ri-facebook-circle-fill"></i></a>
                <a href="/404.html"><i class="ri-instagram-fill"></i></a>
                <a href="/404.html"><i class="ri-twitter-fill"></i></a>
                <a href="/404.html"><i class="ri-whatsapp-fill"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bar">
          Copyright © 2024 Web Design Mastery -- Coffe-Itiz.
        </div>
    
`;

const footerContainer = document.getElementById('footer-container');
footerContainer.innerHTML = footerHTML;