const categories = [
  { name: "Restaurantes", icon: "R", summary: "Comida local, cafeterías y picaderas", services: ["Entrega", "Recoger"], page: "restaurantes-en-sabana-iglesia.html", seoTitle: "Restaurantes en Sabana Iglesia", seoText: "Encuentra restaurantes, cafeterías, comida criolla, picaderas y lugares para compartir en Sabana Iglesia, Santiago." },
  { name: "Colmados", icon: "C", summary: "Compras rápidas y productos diarios", services: ["Entrega", "Recoger"], page: "colmados-en-sabana-iglesia.html", seoTitle: "Colmados en Sabana Iglesia", seoText: "Busca colmados, mini markets y negocios de productos básicos cerca de ti en Sabana Iglesia." },
  { name: "Ferreterías", icon: "F", summary: "Construcción, herramientas y hogar", services: ["Entrega", "Recoger"], page: "ferreterias-en-sabana-iglesia.html", seoTitle: "Ferreterías en Sabana Iglesia", seoText: "Directorio de ferreterías, materiales de construcción, pinturas, herramientas y artículos para el hogar." },
  { name: "Farmacias", icon: "Rx", summary: "Salud, medicamentos y cuidado", services: ["Entrega", "Recoger"], page: "farmacias-en-sabana-iglesia.html", seoTitle: "Farmacias en Sabana Iglesia", seoText: "Encuentra farmacias, medicamentos, productos de cuidado personal y teléfonos útiles en Sabana Iglesia." },
  { name: "Salones", icon: "S", summary: "Belleza, barberías y cuidado personal", page: "salones-en-sabana-iglesia.html", seoTitle: "Salones en Sabana Iglesia", seoText: "Salones de belleza, barberías, uñas, maquillaje y servicios de cuidado personal en Sabana Iglesia." },
  { name: "Talleres", icon: "T", summary: "Mecánica, gomas y repuestos", page: "talleres-en-sabana-iglesia.html", seoTitle: "Talleres en Sabana Iglesia", seoText: "Talleres mecánicos, gomeras, repuestos y servicios para vehículos en Sabana Iglesia." },
  { name: "Internet", icon: "Wi", summary: "Tecnología, cable y conectividad", page: "internet-en-sabana-iglesia.html", seoTitle: "Internet en Sabana Iglesia", seoText: "Servicios de internet, cable, tecnología, soporte técnico e instalación para hogares y negocios." },
  { name: "Iglesias", icon: "I", summary: "Comunidades de fe y actividades", page: "iglesias-en-sabana-iglesia.html", seoTitle: "Iglesias en Sabana Iglesia", seoText: "Iglesias, comunidades de fe, horarios de culto y actividades religiosas de Sabana Iglesia." },
  { name: "Turismo", icon: "Tu", summary: "Rutas, miradores, ríos y Presa de Bao", page: "turismo-en-sabana-iglesia.html", seoTitle: "Turismo en Sabana Iglesia", seoText: "Lugares turísticos, rutas, montañas, ríos, miradores y atractivos cercanos a la Presa de Bao." },
  { name: "Eventos", icon: "E", summary: "Cultura, deporte y celebraciones", page: "eventos-en-sabana-iglesia.html", seoTitle: "Eventos en Sabana Iglesia", seoText: "Eventos culturales, deportivos, religiosos, patronales y actividades comunitarias en Sabana Iglesia." }
];

const baseBusinesses = [
  {
    id: "restaurante-el-mirador",
    name: "Restaurante El Mirador",
    category: "Restaurantes",
    description: "Comida criolla, jugos naturales y vista hacia las montañas para familias, viajeros y reuniones locales.",
    phone: "809-555-0101",
    whatsapp: "https://wa.me/18095550101",
    address: "Carretera principal, Sabana Iglesia",
    map: "https://maps.google.com/?q=Sabana+Iglesia+Dominican+Republic",
    hours: "Lun-Dom 10:00 AM - 10:00 PM",
    social: "https://instagram.com/todosabanaiglesia",
    image: "assets/demo-restaurant.svg",
    photos: ["assets/demo-restaurant.svg", "assets/menu-criollo.svg", "assets/menu-picadera.svg"],
    services: ["Entrega", "Recoger"],
    featured: true,
    status: "approved"
  },
  {
    id: "colmado-la-confianza",
    name: "Colmado La Confianza",
    category: "Colmados",
    description: "Productos básicos, bebidas, entrega cercana y servicio de comunidad en el centro del municipio.",
    phone: "809-555-0112",
    whatsapp: "https://wa.me/18095550112",
    address: "Calle Duarte, Sabana Iglesia",
    map: "https://maps.google.com/?q=Sabana+Iglesia+Santiago",
    hours: "Todos los días 7:00 AM - 11:00 PM",
    social: "https://facebook.com/todosabanaiglesia",
    image: "assets/demo-colmado.svg",
    photos: ["assets/demo-colmado.svg", "assets/sabana-iglesia-drone.jpg", "assets/demo-colmado.svg"],
    services: ["Entrega", "Recoger"],
    featured: true,
    status: "approved"
  },
  {
    id: "ferreteria-bao",
    name: "Ferretería Bao",
    category: "Ferreterías",
    description: "Materiales de construcción, pinturas, herramientas y asesoría para proyectos del hogar.",
    phone: "809-555-0140",
    whatsapp: "https://wa.me/18095550140",
    address: "Av. Principal, salida hacia Bao",
    map: "https://maps.google.com/?q=Presa+de+Bao",
    hours: "Lun-Sab 8:00 AM - 6:30 PM",
    social: "https://instagram.com/todosabanaiglesia",
    image: "assets/demo-ferreteria.svg",
    photos: ["assets/demo-ferreteria.svg", "assets/sabana-iglesia-drone.jpg", "assets/demo-ferreteria.svg"],
    services: ["Entrega", "Recoger"],
    featured: true,
    status: "approved"
  },
  {
    id: "farmacia-san-jose",
    name: "Farmacia San Jose",
    category: "Farmacias",
    description: "Medicamentos, cuidado personal, orientación farmacéutica y pagos móviles.",
    phone: "809-555-0177",
    whatsapp: "https://wa.me/18095550177",
    address: "Centro de Sabana Iglesia",
    map: "https://maps.google.com/?q=Sabana+Iglesia",
    hours: "Lun-Dom 8:00 AM - 9:00 PM",
    social: "https://facebook.com/todosabanaiglesia",
    image: "assets/demo-farmacia.svg",
    photos: ["assets/demo-farmacia.svg", "assets/sabana-iglesia-drone.jpg", "assets/demo-farmacia.svg"],
    services: ["Entrega", "Recoger"],
    featured: false,
    status: "approved"
  },
  {
    id: "salon-nueva-imagen",
    name: "Salón Nueva Imagen",
    category: "Salones",
    description: "Peinados, uñas, maquillaje, barbería y paquetes para bodas y eventos.",
    phone: "809-555-0188",
    whatsapp: "https://wa.me/18095550188",
    address: "Sector La Zanja, Sabana Iglesia",
    map: "https://maps.google.com/?q=La+Zanja+Sabana+Iglesia",
    hours: "Mar-Dom 9:00 AM - 7:00 PM",
    social: "https://instagram.com/todosabanaiglesia",
    image: "assets/demo-salon.svg",
    photos: ["assets/demo-salon.svg", "assets/sabana-iglesia-drone.jpg", "assets/demo-salon.svg"],
    featured: false,
    status: "approved"
  },
  {
    id: "taller-hermanos-rodriguez",
    name: "Taller Hermanos Rodríguez",
    category: "Talleres",
    description: "Mecánica general, cambio de aceite, frenos y asistencia para vehículos de la zona.",
    phone: "809-555-0303",
    whatsapp: "https://wa.me/18095550303",
    address: "Entrada de Sabana Iglesia",
    map: "https://maps.google.com/?q=Sabana+Iglesia",
    hours: "Lun-Sab 8:00 AM - 6:00 PM",
    social: "#",
    image: "assets/demo-taller.svg",
    photos: ["assets/demo-taller.svg", "assets/sabana-iglesia-drone.jpg", "assets/demo-taller.svg"],
    featured: false,
    status: "approved"
  },
  {
    id: "net-si",
    name: "Net SI Internet",
    category: "Internet",
    description: "Instalación de internet residencial, soporte técnico y soluciones para pequeños negocios.",
    phone: "809-555-0200",
    whatsapp: "https://wa.me/18095550200",
    address: "Sabana Iglesia, Santiago",
    map: "https://maps.google.com/?q=Sabana+Iglesia+Santiago",
    hours: "Lun-Sab 8:30 AM - 6:00 PM",
    social: "https://facebook.com/todosabanaiglesia",
    image: "assets/demo-internet.svg",
    photos: ["assets/demo-internet.svg", "assets/sabana-iglesia-drone.jpg", "assets/demo-internet.svg"],
    featured: false,
    status: "approved"
  }
];

const restaurantMenus = {
  "restaurante-el-mirador": [
    {
      category: "Especiales",
      items: [
        { name: "Plato criollo del día", description: "Arroz, habichuelas, ensalada y carne del día.", price: "RD$350", image: "assets/menu-criollo.svg", popular: true },
        { name: "Chivo guisado", description: "Servido con moro, ensalada verde y fritos.", price: "RD$475", image: "assets/menu-criollo.svg" },
        { name: "Pollo a la plancha", description: "Con víveres hervidos o arroz blanco.", price: "RD$325", image: "assets/menu-criollo.svg" }
      ]
    },
    {
      category: "Picaderas",
      items: [
        { name: "Tostones con queso frito", description: "Crujientes, calientes y listos para compartir.", price: "RD$220", image: "assets/menu-picadera.svg" },
        { name: "Alitas BBQ", description: "Orden de alitas con salsa de la casa.", price: "RD$390", image: "assets/menu-picadera.svg" },
        { name: "Yuca frita con longaniza", description: "Picadera dominicana para dos personas.", price: "RD$360", image: "assets/menu-picadera.svg" }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Jugo natural", description: "Sabores de temporada.", price: "RD$95", image: "assets/menu-bebida.svg" },
        { name: "Morir soñando", description: "Naranja, leche y hielo al estilo dominicano.", price: "RD$120", image: "assets/menu-bebida.svg" },
        { name: "Refresco", description: "Variedad disponible según inventario.", price: "RD$75", image: "assets/menu-bebida.svg" }
      ]
    }
  ]
};

const newsItems = [
  { title: "Nueva vitrina digital para negocios locales", date: "3 mayo 2026", body: "Todo Sabana Iglesia nace como punto de encuentro para comercios, servicios y la comunidad." },
  { title: "Sabana Iglesia fortalece su identidad comunitaria", date: "28 abril 2026", body: "El municipio, reconocido desde 2007, sigue creciendo con iniciativas comerciales y culturales." },
  { title: "Guía de promociones para el fin de semana", date: "24 abril 2026", body: "Restaurantes, salones y tiendas pueden publicar ofertas para llegar a más clientes locales." }
];

const events = [
  { day: "10", month: "May", title: "Mercadito comunitario", place: "Parque municipal", body: "Productos locales, comida y emprendimientos de Sabana Iglesia." },
  { day: "18", month: "May", title: "Ruta hacia Bao", place: "Salida desde el centro", body: "Encuentro familiar para conocer paisajes, agua y zonas naturales cercanas." },
  { day: "25", month: "May", title: "Tarde deportiva", place: "Cancha municipal", body: "Baloncesto, música y actividades juveniles." }
];

const tourism = [
  { title: "Zona de la Presa de Bao", body: "Paisajes de agua, montañas y rutas tranquilas para visitantes que buscan naturaleza." },
  { title: "Miradores de montaña", body: "Puntos altos cercanos para fotos, aire fresco y recorridos familiares." },
  { title: "Rutas rurales", body: "Caminos con fincas, ríos y paradas de comida local alrededor del municipio." }
];

const promotions = [
  { category: "Restaurantes", title: "Combo familiar criollo", business: "Restaurante El Mirador", detail: "Almuerzo para 4 personas con jugos naturales incluidos.", tag: "Fin de semana", href: "business.html?id=restaurante-el-mirador" },
  { category: "Colmados", title: "Especial de la compra", business: "Colmado La Confianza", detail: "Descuentos en productos básicos seleccionados para la despensa.", tag: "Hasta domingo", href: "business.html?id=colmado-la-confianza" },
  { category: "Salones", title: "Paquete de belleza", business: "Salón Nueva Imagen", detail: "Lavado, secado y uñas con precio especial por cita.", tag: "Con reserva", href: "business.html?id=salon-nueva-imagen" },
  { category: "Eventos", title: "Promociona tu actividad", business: "Todo Sabana Iglesia", detail: "Publica eventos comunitarios, deportivos o religiosos en la guía.", tag: "Cupos abiertos", href: "events.html" }
];

const navLinks = [
  ["index.html", "Home", "home"],
  ["directory.html", "Directorio", "directory"],
  ["categories.html", "Categorías", "categories"],
  ["news.html", "Noticias", "news"],
  ["events.html", "Eventos", "events"],
  ["tourism.html", "Turismo", "tourism"],
  ["advertise.html", "Anunciarse", "advertise"],
  ["contact.html", "Contacto", "contact"]
];

const page = document.body.dataset.page;

function slugify(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getSubmissions() {
  return JSON.parse(localStorage.getItem("tsiBusinesses") || "[]");
}

function setSubmissions(items) {
  localStorage.setItem("tsiBusinesses", JSON.stringify(items));
}

function getManagers() {
  return JSON.parse(localStorage.getItem("tsiManagers") || "[]");
}

function setManagers(items) {
  localStorage.setItem("tsiManagers", JSON.stringify(items));
}

function getBusinesses(includePending = false) {
  const submissions = getSubmissions();
  const all = [...baseBusinesses, ...submissions];
  return includePending ? all : all.filter((business) => business.status === "approved");
}

function getDirectoryCategories() {
  return [...new Set([...categories.map((category) => category.name), ...getBusinesses(true).map((business) => business.category)])].filter(Boolean);
}

function getPrimaryContact(business) {
  if (business.whatsapp) {
    return { href: business.whatsapp, label: "WhatsApp", className: "btn--whatsapp" };
  }
  return { href: `tel:${business.phone}`, label: "Llamar", className: "btn--primary" };
}

function getWhatsAppOrderLink(business, itemName = "un pedido", fulfillment = "recoger") {
  const phone = business.whatsapp ? business.whatsapp.replace(/\D/g, "") : business.phone.replace(/\D/g, "");
  const fulfillmentText = fulfillment === "delivery" ? "para entrega a domicilio" : "para recoger";
  const message = `Hola, vi el menú en Todo Sabana Iglesia. Quiero pedir: ${itemName} ${fulfillmentText}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function getServiceLink(business, service) {
  const phone = business.whatsapp ? business.whatsapp.replace(/\D/g, "") : business.phone.replace(/\D/g, "");
  const label = service === "Entrega" ? "entrega a domicilio" : "recoger en tienda";
  const message = `Hola, vi ${business.name} en Todo Sabana Iglesia. Quiero consultar sobre ${label}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function imageTag(src, alt, className = "") {
  if (!src) return "";
  return `<img ${className ? `class="${className}"` : ""} src="${src}" alt="${alt}" loading="lazy">`;
}

function logoSvg() {
  return `
    <svg class="brand-mark" viewBox="0 0 64 64" role="img" aria-label="Logo Todo Sabana Iglesia">
      <path d="M32 58s20-19.1 20-35A20 20 0 1 0 12 23c0 15.9 20 35 20 35Z" fill="#c9282d"/>
      <circle cx="32" cy="24" r="14" fill="#fff"/>
      <path d="M23 21h18v5h-6v13h-6V26h-6v-5Z" fill="#0f3f88"/>
      <path d="M20 12h24" stroke="#0f3f88" stroke-width="4" stroke-linecap="round"/>
    </svg>`;
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;
  header.innerHTML = `
    <nav class="container nav" aria-label="Principal">
      <a class="brand" href="index.html">
        ${logoSvg()}
        <span class="brand-text"><strong>Todo Sabana Iglesia</strong><span>Tu guía local</span></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-nav-toggle>☰</button>
      <div class="nav__links" data-nav-links>
        ${navLinks.map(([href, label, key]) => `<a href="${href}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      </div>
    </nav>
    <div class="demo-notice">
      <div class="container">Sitio en modo demo: los negocios mostrados son ejemplos. Pronto podrás agregar listados reales.</div>
    </div>`;
  const toggle = header.querySelector("[data-nav-toggle]");
  const links = header.querySelector("[data-nav-links]");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <h2>Todo Sabana Iglesia</h2>
        <p>Tu guía local de Sabana Iglesia: negocios, eventos, turismo, noticias y promociones.</p>
        <p>Sabana Iglesia, Santiago, República Dominicana</p>
      </div>
      <div>
        <h3>Guía</h3>
        <a href="directory.html">Directorio</a>
        <a href="categories.html">Categorías</a>
        <a href="business.html">Perfil demo</a>
        <a href="add-business.html">Añadir negocio</a>
      </div>
      <div>
        <h3>Comunidad</h3>
        <a href="news.html">Noticias</a>
        <a href="events.html">Eventos</a>
        <a href="tourism.html">Turismo</a>
        <a href="advertise.html">Anunciarse</a>
      </div>
      <div>
        <h3>Contacto</h3>
        <a href="tel:8095552026">809-555-2026</a>
        <a href="mailto:hola@todosabanaiglesia.com">hola@todosabanaiglesia.com</a>
        <a href="https://instagram.com/todosabanaiglesia">@todosabanaiglesia</a>
        <a href="admin.html">Admin</a>
      </div>
    </div>
    <div class="container copyright">© ${new Date().getFullYear()} Todo Sabana Iglesia. Todos los derechos reservados.</div>`;
}

function businessCard(business) {
  const initials = business.name.split(" ").map((part) => part[0]).join("").slice(0, 3).toUpperCase();
  const contact = getPrimaryContact(business);
  const hasMenu = Boolean(restaurantMenus[business.id]);
  const cardPhotos = business.photos && business.photos.length ? business.photos.slice(0, 3) : [];
  return `
    <article class="business-card">
      <div class="business-card__visuals">
        <div class="business-card__media">${business.image ? imageTag(business.image, business.name) : initials}</div>
        ${cardPhotos.length > 1 ? `
          <div class="business-card__gallery" aria-label="Galería de ${business.name}">
            ${cardPhotos.map((photo, index) => `<span>${imageTag(photo, `${business.name} foto ${index + 1}`)}</span>`).join("")}
          </div>` : ""}
      </div>
      <div class="business-card__body">
        <div class="business-card__topline">
          <span class="badge">${business.category}</span>
          ${business.featured ? `<span class="verified-badge">Verificado</span>` : ""}
        </div>
        <h3>${business.name}</h3>
        <p class="business-card__description">${business.description}</p>
        <div class="business-meta" aria-label="Datos rápidos">
          <span><strong>Tel</strong>${business.phone}</span>
          <span><strong>Horario</strong>${business.hours}</span>
          <span><strong>Ubicación</strong>${business.address}</span>
        </div>
        ${business.services && business.services.length ? `
          <div class="service-badges" aria-label="Opciones de servicio">
            ${business.services.map((service) => `<span>${service}</span>`).join("")}
          </div>` : ""}
        <div class="card-actions">
          <a class="btn ${contact.className} card-actions__primary" href="${contact.href}">${contact.label}</a>
          ${business.services ? business.services.map((service) => `<a class="btn btn--outline" href="${getServiceLink(business, service)}">${service}</a>`).join("") : ""}
          ${hasMenu ? `<a class="btn btn--outline" href="business.html?id=${business.id}#menu">Ver menú</a>` : ""}
          <a class="btn btn--outline" href="business.html?id=${business.id}">Ver perfil</a>
          <a class="btn btn--outline" href="${business.map}">Ver mapa</a>
        </div>
      </div>
    </article>`;
}

function categoryGalleryCard(category, businesses) {
  const photos = businesses.flatMap((business) => business.photos || [business.image]).filter(Boolean).slice(0, 6);
  if (!photos.length) return "";
  return `
    <article class="category-gallery-card">
      <div>
        <p class="eyebrow">Galería</p>
        <h3>Fotos de ${category.name.toLowerCase()}</h3>
        <p>Una vista rápida de negocios y espacios disponibles en esta categoría.</p>
      </div>
      <div class="category-gallery-grid" aria-label="Galería de ${category.name}">
        ${photos.map((photo, index) => `
          <a href="${photo}" aria-label="Abrir foto ${index + 1} de ${category.name}">
            ${imageTag(photo, `${category.name} foto ${index + 1}`)}
          </a>`).join("")}
      </div>
    </article>`;
}

function restaurantMenuSection(business) {
  const menu = restaurantMenus[business.id];
  if (!menu) return "";
  return `
    <section class="restaurant-menu" id="menu">
      <div class="section-heading">
        <p class="eyebrow">Menú</p>
        <h2>Menú destacado</h2>
        <p>Elige entrega o recoger y envía el pedido directo por WhatsApp. Precios y disponibilidad de ejemplo.</p>
      </div>
      <div class="menu-grid">
        ${menu.map((group) => `
          <article class="menu-group">
            <h3>${group.category}</h3>
            <div class="menu-list">
              ${group.items.map((item) => `
                <div class="menu-item">
                  <div class="menu-item__image">
                    ${item.image ? imageTag(item.image, item.name) : `<span>${item.name.slice(0, 2).toUpperCase()}</span>`}
                  </div>
                  <div>
                    <div class="menu-item__title">
                      <strong>${item.name}</strong>
                      ${item.popular ? `<span class="badge">Popular</span>` : ""}
                    </div>
                    <p>${item.description}</p>
                  </div>
                  <div class="menu-item__action">
                    <strong>${item.price}</strong>
                    <div class="order-options" aria-label="Opciones de pedido">
                      <a class="btn btn--whatsapp" href="${getWhatsAppOrderLink(business, item.name, "delivery")}">Entrega</a>
                      <a class="btn btn--outline" href="${getWhatsAppOrderLink(business, item.name, "pickup")}">Recoger</a>
                    </div>
                  </div>
                </div>`).join("")}
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderCategories() {
  document.querySelectorAll("[data-category-grid]").forEach((grid) => {
    grid.innerHTML = categories.map((category) => `
      <a class="category-card" href="${category.page}">
        <span class="category-card__icon">${category.icon}</span>
        <strong>${category.name}</strong>
        <span>${category.summary}</span>
        ${category.services ? `<span class="category-card__services">${category.services.join(" / ")}</span>` : ""}
      </a>`).join("");
  });
}

function renderCategoryLanding() {
  const target = document.querySelector("[data-category-landing]");
  if (!target) return;
  const categoryName = target.dataset.categoryLanding;
  const category = categories.find((item) => item.name === categoryName);
  if (!category) return;
  const businesses = getBusinesses().filter((business) => business.category === category.name);
  target.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Guía local</p>
        <h1>${category.seoTitle}</h1>
        <p>${category.seoText}</p>
      </div>
    </section>
    <section class="section">
      <div class="container seo-layout">
        <article>
          <p class="eyebrow">Todo Sabana Iglesia</p>
          <h2>Busca ${category.name.toLowerCase()} cerca de ti</h2>
          <p class="lead">${category.seoText} Esta página ayuda a encontrar opciones locales con teléfonos, WhatsApp, dirección, horarios y enlaces de mapa cuando estén disponibles.</p>
          <div class="business-grid business-grid--list">
            ${businesses.length ? `${businesses.map(businessCard).join("")}${categoryGalleryCard(category, businesses)}` : `<article class="empty-card"><h3>Próximamente</h3><p>Estamos agregando negocios de esta categoría. Puedes registrar el primero y aparecer después de revisión.</p><a class="btn btn--primary" href="add-business.html">Añadir negocio</a></article>`}
          </div>
        </article>
        <aside class="seo-sidebar">
          <h2>${category.name}</h2>
          <p>${category.summary}</p>
          <a class="btn btn--primary" href="directory.html?category=${encodeURIComponent(category.name)}">Ver en directorio</a>
          <a class="btn btn--outline" href="add-business.html">Registrar negocio</a>
        </aside>
      </div>
    </section>`;
}

function renderFeatured() {
  const target = document.querySelector("[data-featured-businesses]");
  if (!target) return;
  target.innerHTML = getBusinesses().filter((business) => business.featured).map(businessCard).join("");
}

function renderPromotions() {
  const target = document.querySelector("[data-promotions-list]");
  if (!target) return;
  target.innerHTML = promotions.map((promotion) => `
    <article class="promo-card">
      <div>
        <span class="badge">${promotion.category}</span>
        <h3>${promotion.title}</h3>
        <p>${promotion.detail}</p>
      </div>
      <div class="promo-card__footer">
        <span>${promotion.business}</span>
        <strong>${promotion.tag}</strong>
      </div>
      <a class="btn btn--outline" href="${promotion.href}">Ver oferta</a>
    </article>`).join("");
}

function renderDirectory() {
  const results = document.querySelector("[data-directory-results]");
  if (!results) return;
  const search = document.querySelector("[data-directory-search]");
  const filters = document.querySelector("[data-directory-filters]");
  const filterDetails = document.querySelector("[data-filter-details]");
  const count = document.querySelector("[data-results-count]");
  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "Todos";
  search.value = params.get("q") || "";

  if (filterDetails && window.matchMedia("(max-width: 680px)").matches) {
    filterDetails.removeAttribute("open");
  }

  const drawFilters = () => {
    filters.innerHTML = ["Todos", ...getDirectoryCategories()].map((name) => `
      <button class="btn filter-chip ${name === activeCategory ? "is-active" : ""}" type="button" data-category="${name}">${name}</button>`).join("");
  };

  const drawResults = () => {
    const query = search.value.trim().toLowerCase();
    const filtered = getBusinesses().filter((business) => {
      const matchesCategory = activeCategory === "Todos" || business.category === activeCategory;
      const haystack = `${business.name} ${business.category} ${business.description}`.toLowerCase();
      return matchesCategory && haystack.includes(query);
    });
    count.textContent = `${filtered.length} negocio${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`;
    results.innerHTML = filtered.length ? filtered.map(businessCard).join("") : `<p>No hay resultados para esta busqueda.</p>`;
    drawFilters();
  };

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    drawResults();
  });
  search.addEventListener("input", drawResults);
  drawResults();
}

function renderBusinessProfile() {
  const target = document.querySelector("[data-business-profile]");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || baseBusinesses[0].id;
  const business = getBusinesses(true).find((item) => item.id === id) || baseBusinesses[0];
  const initials = business.name.split(" ").map((part) => part[0]).join("").slice(0, 3).toUpperCase();
  const contact = getPrimaryContact(business);
  const photos = business.photos && business.photos.length ? business.photos : [business.image, business.image, business.image].filter(Boolean);
  document.title = `${business.name} | Todo Sabana Iglesia`;
  target.innerHTML = `
    <section class="profile-cover">
      <div class="container">
        <span class="badge">${business.category}</span>
        <h1>${business.name}</h1>
        <p>${business.description}</p>
      </div>
    </section>
    <section class="section">
      <div class="container profile-layout">
        <article>
          <h2>Información del negocio</h2>
          <p class="lead">${business.description}</p>
          <div class="gallery" aria-label="Galería de fotos">
            ${photos.length ? photos.map((photo, index) => `<div>${imageTag(photo, `${business.name} foto ${index + 1}`)}</div>`).join("") : `<div></div><div></div><div></div>`}
          </div>
          ${restaurantMenuSection(business)}
        </article>
        <aside class="profile-card">
          <div class="profile-card__logo">${business.image ? imageTag(business.image, business.name) : initials}</div>
          <div class="profile-cta">
            <a class="btn ${contact.className}" href="${contact.href}">${contact.label === "WhatsApp" ? "Escribir por WhatsApp" : "Llamar ahora"}</a>
            ${business.whatsapp ? `<a class="btn btn--outline" href="tel:${business.phone}">Llamar ahora</a>` : `<a class="btn btn--outline" href="${business.map}">Ver mapa</a>`}
          </div>
          <div class="info-list">
            <div><strong>Teléfono</strong><a href="tel:${business.phone}">${business.phone}</a></div>
            ${business.whatsapp ? `<div><strong>WhatsApp</strong><a href="${business.whatsapp}">Enviar mensaje</a></div>` : ""}
            <div><strong>Dirección</strong><span>${business.address}</span></div>
            <div><strong>Google Maps</strong><a href="${business.map}">Abrir ubicación</a></div>
            <div><strong>Horario</strong><span>${business.hours}</span></div>
            <div><strong>Redes sociales</strong><a href="${business.social}">Ver perfil</a></div>
            <div><strong>Estado</strong><span>${business.status === "approved" ? "Aprobado" : "Pendiente"}</span></div>
          </div>
        </aside>
      </div>
    </section>`;
}

function populateCategorySelect() {
  const select = document.querySelector("[data-category-select]");
  if (!select) return;
  select.innerHTML = `<option value="">Selecciona una categoría</option>${categories.map((category) => `<option>${category.name}</option>`).join("")}<option value="Otra">Otra</option>`;
}

function renderBusinessForm() {
  const form = document.querySelector("[data-business-form]");
  if (!form) return;
  const categorySelect = form.querySelector("[data-category-select]");
  const otherCategoryField = form.querySelector("[data-other-category-field]");
  const otherCategoryInput = form.querySelector("[name='otherCategory']");
  categorySelect.addEventListener("change", () => {
    const usesOther = categorySelect.value === "Otra";
    otherCategoryField.classList.toggle("is-hidden", !usesOther);
    otherCategoryInput.required = usesOther;
    if (!usesOther) otherCategoryInput.value = "";
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const category = data.category === "Otra" ? data.otherCategory.trim() : data.category;
    const photos = (data.photos || "").split(",").map((photo) => photo.trim()).filter(Boolean);
    const item = {
      id: `${slugify(data.name)}-${Date.now()}`,
      name: data.name,
      category,
      description: data.description,
      phone: data.phone,
      whatsapp: data.whatsapp || `https://wa.me/${data.phone.replace(/\D/g, "")}`,
      address: data.address,
      map: data.map || `https://maps.google.com/?q=${encodeURIComponent(data.address + " Sabana Iglesia")}`,
      hours: data.hours || "Horario por confirmar",
      social: data.social || "#",
      image: data.image,
      photos,
      email: data.email,
      featured: false,
      status: "pending"
    };
    setSubmissions([item, ...getSubmissions()]);
    form.reset();
    document.querySelector("[data-form-message]").textContent = "Solicitud enviada. Puedes revisarla en el panel admin.";
  });
}

function renderSimpleLists() {
  const newsTarget = document.querySelector("[data-news-list]");
  if (newsTarget) {
    newsTarget.innerHTML = newsItems.map((item) => `
      <article class="article-card"><time>${item.date}</time><h2>${item.title}</h2><p>${item.body}</p><a class="btn btn--outline" href="contact.html">Enviar noticia</a></article>`).join("");
  }
  const eventsTarget = document.querySelector("[data-events-list]");
  if (eventsTarget) {
    eventsTarget.innerHTML = events.map((item) => `
      <article class="event-item"><div class="event-date"><span>${item.day}</span>${item.month}</div><div><time>${item.place}</time><h2>${item.title}</h2><p>${item.body}</p></div></article>`).join("");
  }
  const tourismTarget = document.querySelector("[data-tourism-list]");
  if (tourismTarget) {
    tourismTarget.innerHTML = tourism.map((item) => `
      <article class="attraction-card"><span class="badge">Turismo</span><h2>${item.title}</h2><p>${item.body}</p><a class="btn btn--outline" href="directory.html?category=Turismo">Ver guías</a></article>`).join("");
  }
}

function renderContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    document.querySelector("[data-form-message]").textContent = "Mensaje listo para enviar. Integraremos correo o CRM cuando el sitio tenga backend.";
  });
}

function renderManagerForm() {
  const form = document.querySelector("[data-manager-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const manager = {
      id: `manager-${slugify(data.name)}-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      reason: data.reason,
      status: "pending",
      createdAt: new Date().toISOString()
    };
    setManagers([manager, ...getManagers()]);
    form.reset();
    document.querySelector("[data-manager-message]").textContent = "Solicitud enviada. Revisa el panel admin para aprobarla.";
  });
}

function renderAdmin() {
  const list = document.querySelector("[data-admin-list]");
  const managerList = document.querySelector("[data-manager-list]");
  if (!list && !managerList) return;
  const draw = () => {
    const items = getSubmissions();
    if (list) {
      list.innerHTML = items.length ? items.map((item) => `
      <article class="admin-card" data-id="${item.id}">
        <div>
          <span class="badge">${item.status === "approved" ? "Aprobado" : "Pendiente"}</span>
          <input data-field="name" value="${item.name}">
          <select data-field="category">${categories.map((category) => `<option ${category.name === item.category ? "selected" : ""}>${category.name}</option>`).join("")}</select>
          <textarea data-field="description" rows="3">${item.description}</textarea>
          <input data-field="phone" value="${item.phone}">
          <input data-field="address" value="${item.address}">
        </div>
        <div class="admin-card__actions">
          <button class="btn btn--primary" data-action="approve" type="button">Aprobar</button>
          <button class="btn btn--outline" data-action="save" type="button">Guardar</button>
          <button class="btn btn--outline" data-action="delete" type="button">Eliminar</button>
        </div>
      </article>`).join("") : `<p>No hay solicitudes pendientes. Crea una demo o envia un negocio desde el formulario.</p>`;
    }
  };

  const drawManagers = () => {
    if (!managerList) return;
    const managers = getManagers();
    managerList.innerHTML = managers.length ? managers.map((manager) => `
      <article class="admin-card manager-card" data-manager-id="${manager.id}">
        <div>
          <span class="badge">${manager.status === "approved" ? "Aprobado" : "Pendiente"}</span>
          <input data-manager-field="name" value="${manager.name}">
          <input data-manager-field="email" type="email" value="${manager.email}">
          <input data-manager-field="phone" value="${manager.phone}">
          <select data-manager-field="role">
            ${["Manager de negocios", "Editor de eventos", "Editor de noticias", "Administrador general"].map((role) => `<option ${role === manager.role ? "selected" : ""}>${role}</option>`).join("")}
          </select>
          <textarea data-manager-field="reason" rows="3">${manager.reason}</textarea>
        </div>
        <div class="admin-card__actions">
          <button class="btn btn--primary" data-manager-action="approve" type="button">Aprobar manager</button>
          <button class="btn btn--outline" data-manager-action="save" type="button">Guardar</button>
          <button class="btn btn--outline" data-manager-action="delete" type="button">Eliminar</button>
        </div>
      </article>`).join("") : `<p>No hay solicitudes de managers. Crea una demo o envía una solicitud desde Contacto.</p>`;
  };

  list?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const card = button.closest("[data-id]");
    const id = card.dataset.id;
    let items = getSubmissions();
    if (button.dataset.action === "delete") {
      setSubmissions(items.filter((item) => item.id !== id));
      draw();
      return;
    }
    items = items.map((item) => {
      if (item.id !== id) return item;
      const fields = Object.fromEntries([...card.querySelectorAll("[data-field]")].map((field) => [field.dataset.field, field.value]));
      return { ...item, ...fields, status: button.dataset.action === "approve" ? "approved" : item.status };
    });
    setSubmissions(items);
    draw();
  });

  managerList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-manager-action]");
    if (!button) return;
    const card = button.closest("[data-manager-id]");
    const id = card.dataset.managerId;
    let managers = getManagers();
    if (button.dataset.managerAction === "delete") {
      setManagers(managers.filter((manager) => manager.id !== id));
      drawManagers();
      return;
    }
    managers = managers.map((manager) => {
      if (manager.id !== id) return manager;
      const fields = Object.fromEntries([...card.querySelectorAll("[data-manager-field]")].map((field) => [field.dataset.managerField, field.value]));
      return { ...manager, ...fields, status: button.dataset.managerAction === "approve" ? "approved" : manager.status };
    });
    setManagers(managers);
    drawManagers();
  });

  document.querySelector("[data-seed-pending]")?.addEventListener("click", () => {
    const demo = {
      id: `demo-${Date.now()}`,
      name: "Taller Hermanos Rodriguez",
      category: "Talleres",
      description: "Mecánica general, cambio de aceite, frenos y asistencia en carretera.",
      phone: "809-555-0303",
      whatsapp: "https://wa.me/18095550303",
      address: "Entrada de Sabana Iglesia",
      map: "https://maps.google.com/?q=Sabana+Iglesia",
      hours: "Lun-Sab 8:00 AM - 6:00 PM",
      social: "#",
      featured: false,
      status: "pending"
    };
    setSubmissions([demo, ...getSubmissions()]);
    draw();
  });

  document.querySelector("[data-clear-submissions]")?.addEventListener("click", () => {
    setSubmissions([]);
    draw();
  });

  document.querySelector("[data-seed-manager]")?.addEventListener("click", () => {
    const demo = {
      id: `manager-demo-${Date.now()}`,
      name: "Manager Demo",
      email: "manager@ejemplo.com",
      phone: "809-555-2026",
      role: "Manager de negocios",
      reason: "Quiero ayudar a revisar información de negocios locales y mantener el directorio actualizado.",
      status: "pending",
      createdAt: new Date().toISOString()
    };
    setManagers([demo, ...getManagers()]);
    drawManagers();
  });

  document.querySelector("[data-clear-managers]")?.addEventListener("click", () => {
    setManagers([]);
    drawManagers();
  });

  draw();
  drawManagers();
}

function wireHomeSearch() {
  const form = document.querySelector("[data-search-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const q = new FormData(form).get("q") || "";
    window.location.href = `directory.html?q=${encodeURIComponent(q)}`;
  });
}

renderHeader();
renderFooter();
renderCategories();
renderCategoryLanding();
renderFeatured();
renderPromotions();
renderDirectory();
renderBusinessProfile();
populateCategorySelect();
renderBusinessForm();
renderSimpleLists();
renderContactForm();
renderManagerForm();
renderAdmin();
wireHomeSearch();
