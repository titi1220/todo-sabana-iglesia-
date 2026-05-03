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

const supabaseConfig = window.TSI_SUPABASE_CONFIG || {};
const businessImagesBucket = "business-images";
const hasSupabaseConfig = Boolean(
  window.supabase &&
  supabaseConfig.url &&
  supabaseConfig.anonKey &&
  !supabaseConfig.url.includes("PASTE_") &&
  !supabaseConfig.anonKey.includes("PASTE_")
);
const supabaseClient = hasSupabaseConfig ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey) : null;

const baseBusinesses = [];

const importedBusinesses = [
  {
    id: "centro-ferretero-sabana-iglesia",
    name: "Centro Ferretero Sabana Iglesia",
    category: "Ferreterías",
    description: "Hardware / construction supplies. Also listed by WorldPlaces at Av Santiago #12 with coordinates 19.32579,-70.75332.",
    phone: "809 587-1076",
    whatsapp: "",
    address: "86GW+C7J, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Centro%20Ferretero%20Sabana%20Iglesia%2086GW%2BC7J%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Lun-Vie 7:30-17:30; Sáb 7:30-15:00; Dom cerrado",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "ferreteria-sabana-iglesia",
    name: "Ferretería Sabana Iglesia",
    category: "Ferreterías",
    description: "Hardware store. 4.7 rating listed.",
    phone: "809-587-0366",
    whatsapp: "",
    address: "Av Santiago 22, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Ferreter%C3%ADa%20Sabana%20Iglesia%20Av%20Santiago%2022%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "repuestos-y-ferreteria-santana",
    name: "Repuestos y Ferretería Santana",
    category: "Talleres",
    description: "Automotive / motorcycle parts. 27 reviews listed.",
    phone: "809 337-4022",
    whatsapp: "",
    address: "986C+53C, Carretera Santiago-Baitoa, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Repuestos%20y%20Ferreter%C3%ADa%20Santana%20986C%2B53C%2C%20Carretera%20Santiago-Baitoa%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Lun-Sáb 8:00-18:30; Dom 8:00-12:00",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "repuestos-almonte",
    name: "Repuestos Almonte",
    category: "Talleres",
    description: "Auto parts.",
    phone: "809-587-1250",
    whatsapp: "",
    address: "V Estebania 38, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Repuestos%20Almonte%20V%20Estebania%2038%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "cd-movil-comunicaciones",
    name: "Cd-Móvil Comunicaciones",
    category: "Internet",
    description: "Electronics / mobile phones. Founded in 2005 according to source.",
    phone: "809 337-4548",
    whatsapp: "",
    address: "Carretera Santiago-Baitoa, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Cd-M%C3%B3vil%20Comunicaciones%20Carretera%20Santiago-Baitoa%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Lun-Vie 8:30-19:00; Sáb 9:00-13:00 y 14:00-15:00; Dom 9:00-16:00",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "super-centro-de-internet-el-pana",
    name: "Super Centro de Internet El Pana",
    category: "Internet",
    description: "Internet services. 4.7 rating listed.",
    phone: "809-587-1493",
    whatsapp: "",
    address: "J P Duarte 142, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Super%20Centro%20de%20Internet%20El%20Pana%20J%20P%20Duarte%20142%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "farmacia-iglesia-miscelaneos",
    name: "Farmacia Iglesia Miscelaneos",
    category: "Farmacias",
    description: "Pharmacy. 4.7 rating listed.",
    phone: "809-587-0282",
    whatsapp: "",
    address: "J P Duarte 27, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Farmacia%20Iglesia%20Miscelaneos%20J%20P%20Duarte%2027%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "colmado-corona-y-diaz",
    name: "Colmado Corona y Díaz",
    category: "Colmados",
    description: "Colmado / grocery. 4.7 rating listed.",
    phone: "809-587-0139",
    whatsapp: "",
    address: "Av Santiago 13, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Colmado%20Corona%20y%20D%C3%ADaz%20Av%20Santiago%2013%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "colmado-feliciano",
    name: "Colmado Feliciano",
    category: "Colmados",
    description: "Colmado / grocery. 4.7 rating listed.",
    phone: "809-587-1135",
    whatsapp: "",
    address: "V Estebanía 1, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Colmado%20Feliciano%20V%20Esteban%C3%ADa%201%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "jehova-es-mi-pastor",
    name: "Jehová Es Mi Pastor",
    category: "Servicios",
    description: "Bookstore.",
    phone: "809-587-1485",
    whatsapp: "",
    address: "V Estebanía 11, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Jehov%C3%A1%20Es%20Mi%20Pastor%20V%20Esteban%C3%ADa%2011%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "caribe-express",
    name: "Caribe Express",
    category: "Servicios",
    description: "Currency exchange / money services. 4.7 rating listed.",
    phone: "809-587-0012",
    whatsapp: "",
    address: "Av P Amarillo 73, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Caribe%20Express%20Av%20P%20Amarillo%2073%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "vimenca-western-union",
    name: "Vimenca & Western Union",
    category: "Servicios",
    description: "Money transfer / financial services.",
    phone: "809 587-1216",
    whatsapp: "",
    address: "87F3+7GP, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Vimenca%20%26%20Western%20Union%2087F3%2B7GP%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "centro-comercial-dr-placencia",
    name: "Centro Comercial Dr Placencia",
    category: "Ferreterías",
    description: "Shopping plaza. 4.7 rating listed. Another directory listing shows 809-587-0086 at Ppal 1, M La Zanja.",
    phone: "809-587-0144",
    whatsapp: "",
    address: "P Díaz 160, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Centro%20Comercial%20Dr%20Placencia%20P%20D%C3%ADaz%20160%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "chef-familiar-restaurant-la-zanja",
    name: "Chef Familiar Restaurant, La Zanja",
    category: "Restaurantes",
    description: "Restaurant. 5.0 rating / 5+ reviews listed.",
    phone: "809 396-8282",
    whatsapp: "",
    address: "Carretera principal, La Zanja #3-35, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Chef%20Familiar%20Restaurant%2C%20La%20Zanja%20Carretera%20principal%2C%20La%20Zanja%20%233-35%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "restaurante-y-pescaderia-teo-3",
    name: "Restaurante y Pescadería Teo #3",
    category: "Restaurantes",
    description: "Restaurant / seafood. 4.4 rating / 594 Google reviews listed.",
    phone: "809-604-0658",
    whatsapp: "",
    address: "77MJ+VWX, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Restaurante%20y%20Pescader%C3%ADa%20Teo%20%233%2077MJ%2BVWX%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "empanadas-monumental-sabana-iglesia",
    name: "Empanadas Monumental Sabana Iglesia",
    category: "Restaurantes",
    description: "Food and drink.",
    phone: "+1 829-778-2762",
    whatsapp: "",
    address: "86FW+GMM, Ave Juan Pablo Duarte, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Empanadas%20Monumental%20Sabana%20Iglesia%2086FW%2BGMM%2C%20Ave%20Juan%20Pablo%20Duarte%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Tue-Dom 16:00-00:00",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "armando-car-wash",
    name: "Armando Car-Wash",
    category: "Talleres",
    description: "Car wash / auto detailing.",
    phone: "",
    whatsapp: "",
    address: "86CW+Q7C, Sabana Iglesia 51000, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Armando%20Car-Wash%2086CW%2BQ7C%2C%20Sabana%20Iglesia%2051000%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Mon-Dom 8:00-22:00",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "centro-tecnologico-comunitario-sabana-ig",
    name: "Centro Tecnológico Comunitario Sabana IG",
    category: "Internet",
    description: "Community technology center / social service.",
    phone: "809-587-1087",
    whatsapp: "",
    address: "M E Peréz C 1, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Centro%20Tecnol%C3%B3gico%20Comunitario%20Sabana%20IG%20M%20E%20Per%C3%A9z%20C%201%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  },
  {
    id: "estacion-texaco-sabana-iglesia",
    name: "Estación Texaco Sabana Iglesia",
    category: "Servicios",
    description: "Gas station. Directory result labels it as Estación Texaco Sabana Iglesia.",
    phone: "809-587-0040",
    whatsapp: "",
    address: "Av Santiago 10, Sabana Iglesia, Santiago",
    map: "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n%20Texaco%20Sabana%20Iglesia%20Av%20Santiago%2010%2C%20Sabana%20Iglesia%2C%20Santiago",
    hours: "Horario por confirmar",
    social: "#",
    featured: false,
    status: "approved"
  }
];

const categoryImageDefaults = {
  Restaurantes: "assets/demo-restaurant.svg",
  Colmados: "assets/demo-colmado.svg",
  Ferreterías: "assets/demo-ferreteria.svg",
  Farmacias: "assets/demo-farmacia.svg",
  Salones: "assets/demo-salon.svg",
  Talleres: "assets/demo-taller.svg",
  Internet: "assets/demo-internet.svg",
  Servicios: "assets/sabana-iglesia-drone.jpg"
};

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
  { category: "Restaurantes", title: "Especial para compartir", business: "Chef Familiar Restaurant, La Zanja", detail: "Promoción local para almuerzo o cena familiar. Confirma disponibilidad por teléfono.", tag: "Esta semana", href: "business.html?id=chef-familiar-restaurant-la-zanja" },
  { category: "Colmados", title: "Compra de la semana", business: "Colmado Corona y Díaz", detail: "Productos básicos y artículos diarios para la comunidad local.", tag: "Consultar", href: "business.html?id=colmado-corona-y-diaz" },
  { category: "Ferreterías", title: "Materiales y herramientas", business: "Centro Ferretero Sabana Iglesia", detail: "Opciones para construcción, reparaciones y proyectos del hogar.", tag: "Disponible", href: "business.html?id=centro-ferretero-sabana-iglesia" },
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
  const all = [...baseBusinesses, ...importedBusinesses, ...submissions].map(normalizeBusiness);
  return includePending ? all : all.filter((business) => business.status === "approved");
}

function normalizeBusiness(business) {
  const defaultImage = categoryImageDefaults[business.category] || "assets/sabana-iglesia-drone.jpg";
  const photos = Array.isArray(business.photos) && business.photos.length ? business.photos : [business.image || defaultImage, "assets/sabana-iglesia-drone.jpg", business.image || defaultImage];
  return {
    ...business,
    id: business.id || slugify(business.name || "negocio"),
    whatsapp: business.whatsapp || "",
    map: business.map || `https://maps.google.com/?q=${encodeURIComponent(`${business.name || ""} ${business.address || "Sabana Iglesia"}`)}`,
    hours: business.hours || "Horario por confirmar",
    social: business.social || "#",
    image: business.image || defaultImage,
    photos,
    featured: Boolean(business.featured),
    status: business.status || "approved"
  };
}

async function loadSupabaseBusinesses(includePending = false) {
  if (!supabaseClient) return [];
  let query = supabaseClient
    .from("businesses")
    .select("*")
    .order("created_at", { ascending: false });
  if (!includePending) {
    query = query.eq("status", "approved");
  }
  const { data, error } = await query;
  if (error) {
    console.warn("No se pudieron cargar negocios desde Supabase:", error.message);
    return [];
  }
  return (data || []).map(normalizeBusiness);
}

async function getDisplayBusinesses(includePending = false) {
  const remoteBusinesses = await loadSupabaseBusinesses(includePending);
  return remoteBusinesses.length ? remoteBusinesses : getBusinesses(includePending);
}

function getDirectoryCategories(businesses = getBusinesses(true)) {
  return [...new Set([...categories.map((category) => category.name), ...businesses.map((business) => business.category)])].filter(Boolean);
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

async function uploadBusinessImage(file, businessName, type = "gallery") {
  if (!supabaseClient || !file || !file.size) return "";
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
  const path = `${slugify(businessName || "negocio")}/${type}/${fileName}`;
  const { error } = await supabaseClient.storage
    .from(businessImagesBucket)
    .upload(path, file, {
      cacheControl: "3600",
      contentType: file.type || "image/jpeg",
      upsert: false
    });
  if (error) throw new Error(`No se pudo subir ${file.name}: ${error.message}`);
  const { data } = supabaseClient.storage.from(businessImagesBucket).getPublicUrl(path);
  return data.publicUrl;
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
    </nav>`;
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
        <a href="business.html">Perfil de negocio</a>
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

async function renderCategoryLanding() {
  const target = document.querySelector("[data-category-landing]");
  if (!target) return;
  const categoryName = target.dataset.categoryLanding;
  const category = categories.find((item) => item.name === categoryName);
  if (!category) return;
  const businesses = (await getDisplayBusinesses()).filter((business) => business.category === category.name);
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

async function renderFeatured() {
  const target = document.querySelector("[data-featured-businesses]");
  if (!target) return;
  const businesses = await getDisplayBusinesses();
  const featured = businesses.filter((business) => business.featured);
  target.innerHTML = (featured.length ? featured : businesses.slice(0, 3)).map(businessCard).join("");
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

async function renderDirectory() {
  const results = document.querySelector("[data-directory-results]");
  if (!results) return;
  const search = document.querySelector("[data-directory-search]");
  const filters = document.querySelector("[data-directory-filters]");
  const filterDetails = document.querySelector("[data-filter-details]");
  const count = document.querySelector("[data-results-count]");
  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "Todos";
  search.value = params.get("q") || "";
  const businesses = await getDisplayBusinesses();

  if (filterDetails && window.matchMedia("(max-width: 680px)").matches) {
    filterDetails.removeAttribute("open");
  }

  const drawFilters = () => {
    filters.innerHTML = ["Todos", ...getDirectoryCategories(businesses)].map((name) => `
      <button class="btn filter-chip ${name === activeCategory ? "is-active" : ""}" type="button" data-category="${name}">${name}</button>`).join("");
  };

  const drawResults = () => {
    const query = search.value.trim().toLowerCase();
    const filtered = businesses.filter((business) => {
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

async function renderBusinessProfile() {
  const target = document.querySelector("[data-business-profile]");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const businesses = await getDisplayBusinesses(true);
  const id = params.get("id") || businesses[0]?.id;
  const business = businesses.find((item) => item.id === id) || businesses[0];
  if (!business) {
    target.innerHTML = `
      <section class="section">
        <div class="container">
          <article class="empty-card">
            <h1>No hay negocios publicados</h1>
            <p>Agrega el primer negocio para crear perfiles en Todo Sabana Iglesia.</p>
            <a class="btn btn--primary" href="add-business.html">Añadir negocio</a>
          </article>
        </div>
      </section>`;
    return;
  }
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
  const message = document.querySelector("[data-form-message]");
  if (message && !supabaseClient) {
    message.textContent = "Completa el formulario para enviar tu negocio a revisión.";
  }
  const categorySelect = form.querySelector("[data-category-select]");
  const otherCategoryField = form.querySelector("[data-other-category-field]");
  const otherCategoryInput = form.querySelector("[name='otherCategory']");
  categorySelect.addEventListener("change", () => {
    const usesOther = categorySelect.value === "Otra";
    otherCategoryField.classList.toggle("is-hidden", !usesOther);
    otherCategoryInput.required = usesOther;
    if (!usesOther) otherCategoryInput.value = "";
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("[type='submit']");
    submitButton.disabled = true;
    const data = Object.fromEntries(new FormData(form));
    const category = data.category === "Otra" ? data.otherCategory.trim() : data.category;
    const pastedPhotos = (data.photos || "").split(",").map((photo) => photo.trim()).filter(Boolean);
    const mainImageFile = form.elements.mainImageFile?.files?.[0];
    const galleryFiles = [...(form.elements.galleryFiles?.files || [])];
    try {
      let uploadedMainImage = "";
      let uploadedGallery = [];
      if (supabaseClient && (mainImageFile || galleryFiles.length)) {
        message.textContent = "Subiendo imágenes...";
        uploadedMainImage = mainImageFile ? await uploadBusinessImage(mainImageFile, data.name, "principal") : "";
        uploadedGallery = await Promise.all(galleryFiles.map((file) => uploadBusinessImage(file, data.name)));
      }
      const image = uploadedMainImage || data.image;
      const photos = [...(image ? [image] : []), ...uploadedGallery, ...pastedPhotos];
      const item = {
        name: data.name,
        category,
        description: data.description,
        phone: data.phone,
        whatsapp: data.whatsapp || `https://wa.me/${data.phone.replace(/\D/g, "")}`,
        address: data.address,
        map: data.map || `https://maps.google.com/?q=${encodeURIComponent(data.address + " Sabana Iglesia")}`,
        hours: data.hours || "Horario por confirmar",
        social: data.social || "#",
        image,
        photos,
        email: data.email,
        featured: false,
        status: "pending"
      };
      if (supabaseClient) {
        const { email, ...supabaseItem } = item;
        const { error } = await supabaseClient.from("businesses").insert([supabaseItem]);
        if (error) {
          message.textContent = `No se pudo enviar la solicitud: ${error.message}`;
          submitButton.disabled = false;
          return;
        }
        form.reset();
        message.textContent = "Solicitud enviada a Supabase para revisión.";
        submitButton.disabled = false;
        return;
      }
      setSubmissions([{ ...item, id: `${slugify(data.name)}-${Date.now()}` }, ...getSubmissions()]);
      form.reset();
      message.textContent = "Solicitud enviada para revisión.";
    } catch (error) {
      message.textContent = `${error.message}. Revisa que el bucket business-images exista y permita subir imágenes.`;
    } finally {
      submitButton.disabled = false;
    }
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

async function renderAdmin() {
  const list = document.querySelector("[data-admin-list]");
  const managerList = document.querySelector("[data-manager-list]");
  const loginForm = document.querySelector("[data-admin-login]");
  const adminMessage = document.querySelector("[data-admin-message]");
  const refreshButton = document.querySelector("[data-refresh-admin]");
  const logoutButton = document.querySelector("[data-admin-logout]");
  if (!list && !managerList) return;

  const getAdminSession = async () => {
    if (!supabaseClient) return null;
    const { data } = await supabaseClient.auth.getSession();
    return data.session;
  };

  const setAdminState = (isLoggedIn) => {
    if (loginForm) loginForm.classList.toggle("is-hidden", isLoggedIn);
    refreshButton?.classList.toggle("is-hidden", !isLoggedIn || !supabaseClient);
    logoutButton?.classList.toggle("is-hidden", !isLoggedIn || !supabaseClient);
  };

  const businessFields = ["name", "category", "description", "phone", "whatsapp", "address", "map", "hours", "social", "image", "status"];

  const loadRemotePending = async () => {
    if (!supabaseClient) return null;
    const session = await getAdminSession();
    setAdminState(Boolean(session));
    if (!session) {
      if (list) list.innerHTML = `<p>Inicia sesión para ver las solicitudes guardadas en Supabase.</p>`;
      return null;
    }
    const { data, error } = await supabaseClient
      .from("businesses")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false });
    if (error) {
      if (list) list.innerHTML = `<p>No se pudieron cargar las solicitudes: ${error.message}</p>`;
      return null;
    }
    return data || [];
  };

  const drawRemote = async () => {
    const items = await loadRemotePending();
    if (!list || !items) return;
    list.innerHTML = items.length ? items.map((item) => `
      <article class="admin-card" data-remote-id="${item.id}">
        <div>
          <span class="badge">Pendiente</span>
          <input data-remote-field="name" value="${item.name || ""}" placeholder="Nombre">
          <select data-remote-field="category">${getDirectoryCategories([...getBusinesses(true), item]).map((category) => `<option ${category === item.category ? "selected" : ""}>${category}</option>`).join("")}</select>
          <textarea data-remote-field="description" rows="3" placeholder="Descripción">${item.description || ""}</textarea>
          <input data-remote-field="phone" value="${item.phone || ""}" placeholder="Teléfono">
          <input data-remote-field="whatsapp" value="${item.whatsapp || ""}" placeholder="WhatsApp">
          <input data-remote-field="address" value="${item.address || ""}" placeholder="Dirección">
          <input data-remote-field="map" value="${item.map || ""}" placeholder="Mapa">
          <input data-remote-field="hours" value="${item.hours || ""}" placeholder="Horario">
          <input data-remote-field="social" value="${item.social || ""}" placeholder="Red social">
          <input data-remote-field="image" value="${item.image || ""}" placeholder="Imagen principal">
        </div>
        <div class="admin-card__actions">
          <button class="btn btn--primary" data-remote-action="approve" type="button">Aprobar</button>
          <button class="btn btn--outline" data-remote-action="save" type="button">Guardar</button>
          <button class="btn btn--outline" data-remote-action="delete" type="button">Eliminar</button>
        </div>
      </article>`).join("") : `<p>No hay solicitudes pendientes en Supabase.</p>`;
  };

  const drawLocal = () => {
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
      </article>`).join("") : `<p>No hay solicitudes pendientes. Los negocios enviados desde el formulario aparecerán aquí.</p>`;
    }
  };

  const draw = async () => {
    if (supabaseClient) {
      await drawRemote();
      return;
    }
    drawLocal();
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
      </article>`).join("") : `<p>No hay solicitudes de managers. Las solicitudes enviadas desde Contacto aparecerán aquí.</p>`;
  };

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!supabaseClient) {
      adminMessage.textContent = "Supabase no está conectado.";
      return;
    }
    const data = Object.fromEntries(new FormData(loginForm));
    adminMessage.textContent = "Entrando...";
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });
    if (error) {
      adminMessage.textContent = `No se pudo iniciar sesión: ${error.message}`;
      return;
    }
    adminMessage.textContent = "Sesión iniciada.";
    loginForm.reset();
    await draw();
  });

  logoutButton?.addEventListener("click", async () => {
    if (supabaseClient) await supabaseClient.auth.signOut();
    setAdminState(false);
    await draw();
  });

  refreshButton?.addEventListener("click", draw);

  list?.addEventListener("click", async (event) => {
    const remoteButton = event.target.closest("[data-remote-action]");
    if (remoteButton) {
      const card = remoteButton.closest("[data-remote-id]");
      const id = card.dataset.remoteId;
      if (remoteButton.dataset.remoteAction === "delete") {
        const { error } = await supabaseClient.from("businesses").delete().eq("id", id);
        if (error) {
          adminMessage.textContent = `No se pudo eliminar: ${error.message}`;
          return;
        }
        await draw();
        return;
      }
      const fields = Object.fromEntries([...card.querySelectorAll("[data-remote-field]")].map((field) => [field.dataset.remoteField, field.value]));
      const payload = Object.fromEntries(businessFields.filter((field) => fields[field] !== undefined).map((field) => [field, fields[field]]));
      if (remoteButton.dataset.remoteAction === "approve") payload.status = "approved";
      const { error } = await supabaseClient.from("businesses").update(payload).eq("id", id);
      if (error) {
        adminMessage.textContent = `No se pudo guardar: ${error.message}`;
        return;
      }
      adminMessage.textContent = remoteButton.dataset.remoteAction === "approve" ? "Negocio aprobado." : "Cambios guardados.";
      await draw();
      return;
    }

    const button = event.target.closest("[data-action]");
    if (!button) return;
    const card = button.closest("[data-id]");
    const id = card.dataset.id;
    let items = getSubmissions();
    if (button.dataset.action === "delete") {
      setSubmissions(items.filter((item) => item.id !== id));
      await draw();
      return;
    }
    items = items.map((item) => {
      if (item.id !== id) return item;
      const fields = Object.fromEntries([...card.querySelectorAll("[data-field]")].map((field) => [field.dataset.field, field.value]));
      return { ...item, ...fields, status: button.dataset.action === "approve" ? "approved" : item.status };
    });
    setSubmissions(items);
    await draw();
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

  document.querySelector("[data-clear-submissions]")?.addEventListener("click", () => {
    setSubmissions([]);
    draw();
  });

  document.querySelector("[data-clear-managers]")?.addEventListener("click", () => {
    setManagers([]);
    drawManagers();
  });

  await draw();
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
