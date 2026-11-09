export type Lang = "en" | "es";

export const PERSON = {
  name: "Cristian Estrada",
  email: "crisestrada.med@gmail.com",
  github: "https://github.com/Cristian104",
  studio: "https://wingwrightstudio.com",
  studioEs: "https://wingwrightstudio.com/es/",
  booking: "https://cal.com/cristian-estrada-y8sxft/free-store-call",
  site: "https://portfolio.mybrain.world",
};

type T = { en: string; es: string };
type TL = { en: string[]; es: string[] };

export type Project = {
  slug: string;
  name: string;
  kind: T;
  year: string;
  summary: T;
  problem: T;
  built: TL;
  notes: TL;
  stack: string[];
  image?: string;
  imageAlt?: T;
  link?: { href: string; label: T };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "wingwright-studio",
    name: "Wingwright Studio",
    kind: { en: "My studio · Marketing site", es: "Mi estudio · Sitio comercial" },
    year: "2026",
    featured: true,
    image: "/work/wingwright.jpg",
    imageAlt: { en: "Wingwright Studio homepage", es: "Página de inicio de Wingwright Studio" },
    link: { href: "https://wingwrightstudio.com", label: { en: "Visit wingwrightstudio.com", es: "Visitar wingwrightstudio.com" } },
    summary: {
      en: "The studio I run: Shopify stores for small businesses, designed, built and cared for. Fixed prices, English and Spanish.",
      es: "El estudio que dirijo: tiendas Shopify para pequeños negocios, diseñadas, construidas y mantenidas. Precios fijos, en inglés y español.",
    },
    problem: {
      en: "Small sellers on Instagram or Etsy want a proper store but get lost in themes, apps and quotes that never stop growing. The site had to explain the offer in one scroll and turn a visit into a booked call.",
      es: "Los pequeños vendedores de Instagram o Etsy quieren una tienda de verdad, pero se pierden entre temas, apps y presupuestos que no paran de crecer. El sitio tenía que explicar la oferta en un solo scroll y convertir una visita en una llamada agendada.",
    },
    built: {
      en: [
        "Static Astro site with full English and Spanish versions from one copy file",
        "Clear fixed-price packages in USD and EUR, with a regional list for Latin America",
        "Free 20-minute call booking, plus email and WhatsApp fallbacks",
        "Brand identity: logo, palette and type system, reused across demo stores and social posts",
      ],
      es: [
        "Sitio estático en Astro con versión completa en inglés y español desde un solo archivo de textos",
        "Paquetes de precio fijo en USD y EUR, con lista regional para Latinoamérica",
        "Reserva de llamada gratuita de 20 minutos, con correo y WhatsApp como alternativas",
        "Identidad de marca: logo, paleta y tipografía, reutilizados en tiendas demo y redes",
      ],
    },
    notes: {
      en: ["Ships as a tiny nginx container, so it loads instantly and costs almost nothing to host."],
      es: ["Se sirve desde un contenedor nginx mínimo: carga al instante y casi no cuesta alojarlo."],
    },
    stack: ["Astro", "TypeScript", "i18n", "nginx", "Docker", "Cloudflare"],
  },
  {
    slug: "shopify-demo-stores",
    name: "Shopify demo stores",
    kind: { en: "Shopify themes · E-commerce", es: "Temas Shopify · E-commerce" },
    year: "2026",
    featured: true,
    image: "/work/velvet-horizon.jpg",
    imageAlt: { en: "Velvet Horizon demo store homepage", es: "Página de inicio de la tienda demo Velvet Horizon" },
    summary: {
      en: "Three complete stores for fictional brands, each with its own look: Velvet Horizon (apparel and jewellery), Sunbeam Brew Co. (coffee) and Amber & Aura (handmade home goods).",
      es: "Tres tiendas completas para marcas ficticias, cada una con su propio estilo: Velvet Horizon (ropa y joyería), Sunbeam Brew Co. (café) y Amber & Aura (hogar artesanal).",
    },
    problem: {
      en: "A new studio has no client work to show yet. These stores prove the range: a quiet gallery feel for fashion, a loud sunny roaster, and a warm handmade shop.",
      es: "Un estudio nuevo todavía no tiene trabajos de clientes que mostrar. Estas tiendas demuestran el rango: una galería sobria para moda, una tostadora de café ruidosa y soleada, y una tienda artesanal cálida.",
    },
    built: {
      en: [
        "Custom design layers on top of Shopify's Horizon theme, each with its own written design system",
        "Homepage, collection, product, lookbook and about templates generated from code",
        "Realistic catalogs with variants, stock and collections, loaded through scripts",
        "Desktop and mobile checks with screenshots before every publish",
      ],
      es: [
        "Capas de diseño propias sobre el tema Horizon de Shopify, cada una con su sistema de diseño documentado",
        "Plantillas de inicio, colección, producto, lookbook y “nosotros” generadas desde código",
        "Catálogos realistas con variantes, stock y colecciones, cargados por script",
        "Revisión en escritorio y móvil con capturas antes de cada publicación",
      ],
    },
    notes: {
      en: ["Theme code is versioned in git and pushed with Shopify CLI, so every change can be reviewed and rolled back."],
      es: ["El código de los temas está en git y se publica con Shopify CLI, así cada cambio se puede revisar y revertir."],
    },
    stack: ["Shopify", "Liquid", "Shopify CLI", "Python", "CSS"],
  },
  {
    slug: "the-crumbs",
    name: "The Crumbs",
    kind: { en: "Storefront concept · Spanish", es: "Concepto de tienda · Español" },
    year: "2026",
    featured: true,
    image: "/work/the-crumbs.jpg",
    imageAlt: { en: "The Crumbs storefront", es: "Tienda de The Crumbs" },
    summary: {
      en: "A playful one-page shop for a cookie and candy brand in Monterrey, Mexico. Each product takes over the screen with its own colors.",
      es: "Una tienda de una página para una marca de galletas y dulces en Monterrey, México. Cada producto toma la pantalla con sus propios colores.",
    },
    problem: {
      en: "Small food brands in Latin America sell mostly through Instagram and WhatsApp. They need a menu that looks great and sends a ready-to-go order, without checkout fees.",
      es: "Las marcas pequeñas de comida en Latinoamérica venden sobre todo por Instagram y WhatsApp. Necesitan un menú que se vea increíble y envíe un pedido listo, sin comisiones de checkout.",
    },
    built: {
      en: [
        "Scroll-driven product scenes with GSAP, where colors and type shift per product",
        "A lightweight cart that remembers your picks and sends the order as a WhatsApp message",
        "Mobile-first layout and optimized WebP product photography",
      ],
      es: [
        "Escenas de producto animadas con el scroll usando GSAP, con colores y tipografía por producto",
        "Un carrito ligero que recuerda tu selección y envía el pedido como mensaje de WhatsApp",
        "Diseño pensado primero para móvil y fotos de producto optimizadas en WebP",
      ],
    },
    notes: {
      en: ["A good fit for sellers who aren't ready for a full Shopify plan yet."],
      es: ["Ideal para vendedores que todavía no necesitan un plan completo de Shopify."],
    },
    stack: ["Astro", "GSAP", "TypeScript", "WhatsApp ordering"],
  },
  {
    slug: "audio-studio",
    name: "MyBrain Audio Studio",
    kind: { en: "Product site · Animation", es: "Sitio de producto · Animación" },
    year: "2026",
    featured: true,
    image: "/work/audio-studio.jpg",
    imageAlt: { en: "Audio Studio landing page", es: "Página del Audio Studio" },
    summary: {
      en: "Marketing site for full-cast, AI-narrated audiobooks for indie authors, with a sample player that highlights each speaker as they talk.",
      es: "Sitio comercial para audiolibros con reparto completo narrados por IA para autores independientes, con un reproductor que resalta a cada personaje mientras habla.",
    },
    problem: {
      en: "Audio is hard to sell with words. Visitors needed to hear the difference in seconds and compare the price against a traditional studio.",
      es: "El audio es difícil de vender con palabras. Los visitantes necesitaban escuchar la diferencia en segundos y comparar el precio con un estudio tradicional.",
    },
    built: {
      en: [
        "Canvas hero with a live “three voices” waveform",
        "Custom, keyboard-accessible sample player with a speaker-synced script",
        "Smooth scroll reveals with GSAP ScrollTrigger and Lenis",
        "Every animation turns off under reduced motion, and content still shows if JavaScript fails",
      ],
      es: [
        "Portada en canvas con una onda de “tres voces” en vivo",
        "Reproductor propio, accesible con teclado, con el guion sincronizado por personaje",
        "Animaciones suaves al hacer scroll con GSAP ScrollTrigger y Lenis",
        "Todas las animaciones se desactivan con movimiento reducido, y el contenido se ve aunque falle JavaScript",
      ],
    },
    notes: {
      en: ["Shows the same care for speed and accessibility I put into every store."],
      es: ["Muestra el mismo cuidado por la velocidad y la accesibilidad que pongo en cada tienda."],
    },
    stack: ["Astro", "GSAP", "Lenis", "Canvas", "Web Audio"],
  },
  {
    slug: "lead-automation",
    name: "Lead & job scouting",
    kind: { en: "Automation · AI", es: "Automatización · IA" },
    year: "2026",
    summary: {
      en: "Two pipelines that find work for the studio: one finds small sellers who need a store, the other scores freelance job alerts and drafts a reply.",
      es: "Dos flujos que buscan trabajo para el estudio: uno encuentra pequeños vendedores que necesitan tienda, el otro puntúa alertas de empleos freelance y redacta una respuesta.",
    },
    problem: {
      en: "Finding the right clients by hand eats the hours that should go into building. The goal was a short daily list of good leads, with drafts ready, and a human always pressing send.",
      es: "Buscar clientes a mano se come las horas que deberían ir a construir. El objetivo: una lista diaria corta de buenos prospectos, con borradores listos, y siempre una persona pulsando enviar.",
    },
    built: {
      en: [
        "Python CLI that finds businesses by niche and city, scores them (social-only sellers rank highest) and drafts personal emails",
        "Drafts only, never sends. Opt-outs are blocked forever and nobody is contacted twice",
        "n8n workflow that reads job alert emails, skips ones already seen, scores each with Gemini and drafts a proposal for the best",
        "Telegram alerts, a heartbeat and error notifications so silent failures get noticed",
      ],
      es: [
        "CLI en Python que encuentra negocios por nicho y ciudad, los puntúa (los que venden solo en redes van primero) y redacta correos personales",
        "Solo borradores, nunca envía. Las bajas se bloquean para siempre y nadie recibe dos mensajes",
        "Flujo en n8n que lee correos de alertas de empleo, descarta los ya vistos, puntúa cada uno con Gemini y redacta propuesta para los mejores",
        "Avisos por Telegram, latido de vida y alertas de error para que ningún fallo pase desapercibido",
      ],
    },
    notes: {
      en: ["The same kind of automation I set up for client stores: order alerts, product copy, stock reminders."],
      es: ["El mismo tipo de automatización que configuro para tiendas de clientes: avisos de pedidos, textos de producto, recordatorios de stock."],
    },
    stack: ["Python", "n8n", "Gemini", "SQLite", "Telegram"],
  },
  {
    slug: "morning-brief",
    name: "Morning Brief",
    kind: { en: "AI pipeline · News", es: "Flujo con IA · Noticias" },
    year: "2025",
    summary: {
      en: "Collects news from trusted feeds overnight and sends one short, connected briefing to Telegram every weekday morning.",
      es: "Recoge noticias de fuentes fiables durante la noche y envía un resumen breve y conectado a Telegram cada mañana entre semana.",
    },
    problem: {
      en: "Reading five sites a morning is slow and repetitive. A plain summary just shortens each article, so the briefing had to connect stories and cover each one once.",
      es: "Leer cinco sitios cada mañana es lento y repetitivo. Un resumen simple solo acorta cada artículo, así que el informe tenía que conectar historias y contar cada una una sola vez.",
    },
    built: {
      en: [
        "Hourly collector that stores articles and removes duplicates by URL and similar titles",
        "Gemini prompt that synthesises across sources instead of listing links",
        "Self-check: if no briefing has gone out a few minutes after the hour, it triggers itself",
      ],
      es: [
        "Recolector horario que guarda artículos y elimina duplicados por URL y títulos parecidos",
        "Prompt de Gemini que sintetiza entre fuentes en lugar de listar enlaces",
        "Autocomprobación: si el informe no salió a la hora, se dispara solo",
      ],
    },
    notes: { en: [], es: [] },
    stack: ["Python", "RSS", "SQLite", "Gemini", "Telegram", "Docker"],
  },
  {
    slug: "cv-assistant",
    name: "CV & job assistant",
    kind: { en: "AI web app", es: "App web con IA" },
    year: "2026",
    summary: {
      en: "A dashboard that ranks live job offers against a CV, writes tailored cover letters in English or Polish, and packages each application.",
      es: "Un panel que ordena ofertas de empleo reales según un CV, escribe cartas de presentación a medida en inglés o polaco y empaqueta cada candidatura.",
    },
    problem: {
      en: "Applying well takes an hour per job. The tool does the reading, matching and first draft so the person can focus on the roles worth it.",
      es: "Postularse bien lleva una hora por oferta. La herramienta lee, compara y hace el primer borrador para que la persona se centre en lo que vale la pena.",
    },
    built: {
      en: [
        "Parses a CV (PDF or Word) into a structured profile",
        "AI match score with reasons for each offer",
        "Cover letters exported as Word and PDF, zipped with the CV",
        "Application tracker with CSV export",
      ],
      es: [
        "Convierte un CV (PDF o Word) en un perfil estructurado",
        "Puntuación de afinidad con IA y sus motivos para cada oferta",
        "Cartas exportadas en Word y PDF, comprimidas junto al CV",
        "Seguimiento de candidaturas con exportación a CSV",
      ],
    },
    notes: { en: [], es: [] },
    stack: ["FastAPI", "Python", "Gemini", "Jinja2"],
  },
  {
    slug: "glomeriato",
    name: "Glomeriato",
    kind: { en: "Trading automation", es: "Automatización de trading" },
    year: "2025",
    summary: {
      en: "A personal trading bot that runs on a 30-minute cycle: scans the market, asks an AI for a second opinion and applies strict exit rules.",
      es: "Un bot de trading personal que funciona en ciclos de 30 minutos: analiza el mercado, pide a una IA una segunda opinión y aplica reglas de salida estrictas.",
    },
    problem: {
      en: "Rules beat moods. The bot keeps entries and exits consistent, accounts for fees on every trade and reports to Telegram.",
      es: "Las reglas ganan a los impulsos. El bot mantiene entradas y salidas coherentes, descuenta comisiones en cada operación e informa por Telegram.",
    },
    built: {
      en: [
        "Separate entry gate and exit authority, so no single step can do both",
        "Market-hours awareness across EU and US sessions",
        "PostgreSQL memory of past decisions and Telegram digests",
      ],
      es: [
        "Filtro de entrada y autoridad de salida separados: ningún paso puede hacer ambas cosas",
        "Conoce los horarios de mercado de la UE y EE. UU.",
        "Memoria en PostgreSQL de decisiones pasadas y resúmenes por Telegram",
      ],
    },
    notes: { en: ["A personal project, not financial advice or a product."], es: ["Proyecto personal: no es asesoría financiera ni un producto."] },
    stack: ["Python", "Gemini", "PostgreSQL", "Docker"],
  },
  {
    slug: "self-hosted-platform",
    name: "Self-hosted platform",
    kind: { en: "Infrastructure · DevOps", es: "Infraestructura · DevOps" },
    year: "2025–2026",
    summary: {
      en: "The home for everything above: one Linux server running a dozen sites and services, each deployed automatically from git.",
      es: "El hogar de todo lo anterior: un servidor Linux con una docena de sitios y servicios, cada uno desplegado automáticamente desde git.",
    },
    problem: {
      en: "Many small projects get messy fast: ports, secrets, certificates, deploys. I wanted one push to ship any site, safely.",
      es: "Muchos proyectos pequeños se desordenan rápido: puertos, secretos, certificados, despliegues. Quería que un solo push publicara cualquier sitio, de forma segura.",
    },
    built: {
      en: [
        "Each project in its own repo, tied together as submodules; a push to main bumps the pointer and deploys",
        "Docker containers bound to localhost, published only through a Cloudflare Tunnel, with no open web ports",
        "Cloudflare Access in front of private tools, public sites left open",
        "One secrets file on the server, synced to each project before every deploy and never committed",
      ],
      es: [
        "Cada proyecto en su propio repositorio, unidos como submódulos; un push a main actualiza el puntero y despliega",
        "Contenedores Docker ligados a localhost, publicados solo por un túnel de Cloudflare, sin puertos web abiertos",
        "Cloudflare Access delante de las herramientas privadas, sitios públicos abiertos",
        "Un único archivo de secretos en el servidor, sincronizado a cada proyecto antes de cada despliegue y nunca en git",
      ],
    },
    notes: {
      en: ["This site runs on it too."],
      es: ["Este sitio también corre ahí."],
    },
    stack: ["Linux", "Docker", "Cloudflare Tunnel", "GitHub Actions", "nginx"],
  },
];

export const dict = {
  en: {
    nav: { work: "Work", services: "Services", process: "Process", contact: "Contact", other: "ES", otherHref: "/es", otherLabel: "Ver en español" },
    hero: {
      eyebrow: "Shopify developer · Łódź, Poland · English & Spanish",
      title: ["I build online stores", "that small businesses", "can actually run."],
      lead: "I'm Cristian Estrada. I design and build Shopify stores, set up the automation around them, and keep them healthy after launch. I run that work as Wingwright Studio.",
      primary: "Book a free call",
      secondary: "See my work",
    },
    services: {
      label: "What I do",
      title: "From first product to steady sales",
      items: [
        { t: "Shopify stores", d: "Custom design on a solid theme, products imported from Instagram, Etsy or a spreadsheet, payments, shipping and taxes set up, and training so you can run it yourself." },
        { t: "Automation", d: "Order and stock alerts, AI-written product copy, lead lists and reports. The repetitive work, handled by n8n, Python and AI, always with you in control." },
        { t: "Fast custom sites", d: "Landing pages and product sites with Astro or Next.js when Shopify isn't the right fit. Bilingual, accessible and quick on any phone." },
        { t: "Care after launch", d: "Updates, checkout and uptime checks, small changes and a monthly report, so the store keeps working while you focus on the business." },
      ],
    },
    work: { label: "Selected work", title: "Things I've built", more: "Read the case study", other: "More projects" },
    process: {
      label: "How I work",
      title: "Four steps, fixed price",
      steps: [
        { t: "Free call", d: "20 minutes to understand your products and goals. You get a fixed quote, not an hourly estimate." },
        { t: "Design & build", d: "I build on a preview store you can click through and comment on before anything goes live." },
        { t: "Launch", d: "Your domain, payments and email connected, plus a recorded training call." },
        { t: "Care", d: "Optional monthly plan for updates, checks and small changes." },
      ],
    },
    stack: { label: "Toolbox", title: "Tools I use every week" },
    about: {
      label: "About",
      title: "Builder first, then everything around it",
      body: [
        "I like the whole path from idea to a site people use: the design, the code, the server it runs on, and the boring automation that keeps it going.",
        "Every project on this page runs on infrastructure I set up and maintain myself. That same habit goes into client work: clean handover, documented setup, no mystery.",
        "I work in English and Spanish, for businesses in Europe, the US and Latin America.",
      ],
    },
    contact: {
      title: "Have a store in mind?",
      body: "Tell me what you sell and where you sell it today. I'll reply with honest next steps.",
      primary: "Book a free call",
      email: "Email me",
      studio: "Wingwright Studio",
    },
    footer: "Built with Next.js and Tailwind. Self-hosted.",
    cs: { back: "All work", problem: "The challenge", built: "What I built", stack: "Stack", notes: "Notes", next: "Next project", cta: "Want something like this for your business?" },
  },
  es: {
    nav: { work: "Trabajo", services: "Servicios", process: "Proceso", contact: "Contacto", other: "EN", otherHref: "/", otherLabel: "View in English" },
    hero: {
      eyebrow: "Desarrollador Shopify · Łódź, Polonia · Inglés y español",
      title: ["Creo tiendas online", "que los pequeños negocios", "pueden manejar de verdad."],
      lead: "Soy Cristian Estrada. Diseño y construyo tiendas Shopify, configuro la automatización a su alrededor y las mantengo sanas después del lanzamiento. Ese trabajo lo hago como Wingwright Studio.",
      primary: "Agenda una llamada gratis",
      secondary: "Ver mi trabajo",
    },
    services: {
      label: "Qué hago",
      title: "Del primer producto a ventas constantes",
      items: [
        { t: "Tiendas Shopify", d: "Diseño a medida sobre un tema sólido, productos importados desde Instagram, Etsy o una hoja de cálculo, pagos, envíos e impuestos configurados, y capacitación para que la manejes tú." },
        { t: "Automatización", d: "Avisos de pedidos y stock, textos de producto con IA, listas de prospectos y reportes. El trabajo repetitivo, resuelto con n8n, Python e IA, siempre bajo tu control." },
        { t: "Sitios rápidos a medida", d: "Landing pages y sitios de producto con Astro o Next.js cuando Shopify no es la opción ideal. Bilingües, accesibles y rápidos en cualquier móvil." },
        { t: "Mantenimiento", d: "Actualizaciones, revisión del checkout y disponibilidad, cambios pequeños y un reporte mensual, para que la tienda siga funcionando mientras te enfocas en el negocio." },
      ],
    },
    work: { label: "Trabajo seleccionado", title: "Cosas que he construido", more: "Leer el caso", other: "Más proyectos" },
    process: {
      label: "Cómo trabajo",
      title: "Cuatro pasos, precio fijo",
      steps: [
        { t: "Llamada gratis", d: "20 minutos para entender tus productos y objetivos. Recibes un presupuesto fijo, no una estimación por horas." },
        { t: "Diseño y construcción", d: "Construyo en una tienda de prueba que puedes recorrer y comentar antes de publicar nada." },
        { t: "Lanzamiento", d: "Tu dominio, pagos y correo conectados, más una llamada de capacitación grabada." },
        { t: "Mantenimiento", d: "Plan mensual opcional para actualizaciones, revisiones y cambios pequeños." },
      ],
    },
    stack: { label: "Herramientas", title: "Lo que uso cada semana" },
    about: {
      label: "Sobre mí",
      title: "Primero construir, luego todo lo demás",
      body: [
        "Me gusta todo el camino de la idea a un sitio que la gente usa: el diseño, el código, el servidor donde corre y la automatización aburrida que lo mantiene en marcha.",
        "Cada proyecto de esta página corre en una infraestructura que yo mismo configuro y mantengo. Ese hábito llega al trabajo con clientes: entrega ordenada, configuración documentada, sin misterios.",
        "Trabajo en inglés y español, para negocios en Europa, Estados Unidos y Latinoamérica.",
      ],
    },
    contact: {
      title: "¿Tienes una tienda en mente?",
      body: "Cuéntame qué vendes y dónde lo vendes hoy. Te respondo con próximos pasos honestos.",
      primary: "Agenda una llamada gratis",
      email: "Escríbeme",
      studio: "Wingwright Studio",
    },
    footer: "Hecho con Next.js y Tailwind. Autoalojado.",
    cs: { back: "Todo el trabajo", problem: "El reto", built: "Qué construí", stack: "Tecnología", notes: "Notas", next: "Siguiente proyecto", cta: "¿Quieres algo así para tu negocio?" },
  },
} as const;

export const toolbox = [
  { group: { en: "Commerce", es: "Comercio" }, items: ["Shopify", "Liquid", "Shopify CLI", "WhatsApp ordering"] },
  { group: { en: "Front-end", es: "Front-end" }, items: ["Astro", "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"] },
  { group: { en: "Back-end & AI", es: "Back-end e IA" }, items: ["Python", "FastAPI", "PostgreSQL", "SQLite", "Gemini", "Claude"] },
  { group: { en: "Automation & ops", es: "Automatización y ops" }, items: ["n8n", "Docker", "Cloudflare", "GitHub Actions", "Linux", "Telegram bots"] },
];

export const base = (lang: Lang) => (lang === "es" ? "/es" : "");
