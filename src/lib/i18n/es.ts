import type { Translations } from "./types";

export const es: Translations = {
  nav: {
    method: "El método",
    features: "Funciones",
    pricing: "Precios",
    faq: "Preguntas",
    downloadApp: "Descargar",
  },

  hero: {
    headline: { pre: "Mira cuánto ", em: "te queda." },
    subCopy:
      "Un presupuesto compartido para parejas, familias y pisos compartidos. Cada sueldo se reparte 50/30/20 automáticamente, y todo el hogar ve un único número claro.",
    trust: ["Sin conectar tu banco", "Invita a tu pareja en segundos", "Gratis para empezar"],
    phoneAlt:
      "Panel de FI-532 con 2357 € disponibles para gastar, ingresos, gastos y el presupuesto 50/30/20 del ciclo",
    sideLeftAlt: "Categorías de básicos, lujos y ahorros en FI-532 con lo gastado y lo disponible",
    sideRightAlt: "Balance del hogar en FI-532 con la parte de cada miembro y quién debe a quién",
    cardLeft: { k: "Disponible", v: "2357 €", s: "▲ 294 € por debajo del ritmo" },
    cardOwes: { k: "Javier te debe", v: "38,40 €", s: "Súper · Fibra · Cena" },
  },

  proof: {
    items: [
      { title: "Sin conectar tu banco", description: "Tus claves nunca salen de tu banco." },
      { title: "Pensada para dos o más", description: "Parejas, familias y compañeros de piso." },
      { title: "Sincroniza al instante", description: "Todos ven los mismos números." },
      { title: "Español e inglés", description: "Y con tu propia moneda." },
    ],
  },

  problems: {
    sectionLabel: "Por qué FI-532",
    headline: { pre: "El dinero en común es difícil. ", em: "Lo hacemos simple." },
    solutionTag: "Con FI-532",
    items: [
      {
        problem: "«¿A dónde se fue el dinero este mes?»",
        solution:
          "Cada gasto cae solo en básicos, lujos o ahorro. Ves exactamente a dónde fue cada euro, en el momento.",
      },
      {
        problem: "«A ver, ¿quién pagó qué?»",
        solution:
          "Comparte un hogar, divide gastos y salda cuentas en segundos. Se acabaron las cuentas incómodas a fin de mes.",
      },
      {
        problem: "«Se nos pasó otra vez ese recibo.»",
        solution:
          "Todos los recibos y suscripciones en un planificador, con recordatorios antes del vencimiento y “pagado” en un toque.",
      },
    ],
  },

  method: {
    sectionLabel: "El método",
    equation: "50/30/20",
    tagline: "La regla de presupuesto está en nuestro nombre.",
    description:
      "La mitad para lo que necesitas, el 30% para lo que disfrutas y el 20% para tu futuro. FI-532 hace el reparto con cada sueldo, sin que nadie abra una hoja de cálculo.",
    incomeLabel: "Ingresos mensuales del hogar",
    cardLabel: "Tu reparto",
    perMonth: "/ mes",
    pillars: [
      { label: "Básicos", tagline: "Lo que mantiene la vida en marcha", examples: "Alquiler, súper, suministros, transporte" },
      { label: "Lujos", tagline: "Disfruta sin culpa", examples: "Comer fuera, streaming, aficiones" },
      { label: "Ahorros", tagline: "Tu futuro, lo primero", examples: "Fondo de emergencia, inversiones, deudas" },
    ],
    customNote: "¿Prefieres 60/20/20 o 40/30/30? Cambia el reparto cuando quieras.",
    currency: "EUR",
    numberLocale: "es-ES",
    defaultIncome: 3900,
    maxIncome: 12000,
  },

  features: {
    sectionLabel: "Funciones",
    headline: { pre: "Menos apuntar. ", em: "Más saber." },
    description:
      "Registrar un gasto lleva segundos, y muchas veces nada. El resto de la app lo convierte en respuestas.",
    cards: {
      buckets: {
        headline: { pre: "Cada sueldo, ", em: "con su plan." },
        desc: "Básicos, lujos y ahorro: 50/30/20 automático. Lo que no gastas pasa al siguiente ciclo.",
        alt: "Categorías de presupuesto de FI-532 con el progreso de básicos, lujos y ahorros",
      },
      together: {
        headline: { pre: "En pareja, ", em: "cuentas claras." },
        desc: "Gastos compartidos o privados, partes justas según ingresos y cuentas saldadas en un toque.",
        alt: "Balance del hogar en FI-532 con la parte de cada miembro y un ajuste de cuentas",
      },
      bills: {
        headline: { pre: "Que no se te pase ", em: "ningún recibo." },
        desc: "Vencimientos, recordatorios y “pagado” en un toque.",
        alt: "Planificador de recibos recurrentes de FI-532 con vencimientos y botón de marcar como pagado",
      },
      applepay: {
        headline: { pre: "Apple Pay, ", em: "apuntado solo." },
        desc: "Pagas con el móvil y el gasto llega a FI-532.",
        alt: "Ajustes del registro automático de Apple Pay en FI-532 con tarjetas y categoría por defecto",
      },
      voice: {
        headline: { em: "Dilo", post: " y listo." },
        desc: "O haz foto al ticket. Nosotros rellenamos el resto.",
        alt: "Pantalla de transacción por voz de FI-532 escuchando un gasto dictado",
      },
      assistant: {
        headline: { pre: "Pregúntale ", em: "a tu presupuesto." },
        desc: "Respuestas claras sobre tu dinero, cuando quieras.",
        alt: "Asistente de FI-532 con el resumen de gastos de hoy y preguntas sugeridas",
      },
      insights: {
        headline: { pre: "Descubre ", em: "a dónde va." },
        desc: "Cada ciclo comparado con el anterior, categoría por categoría, para saber qué recortar y qué está funcionando.",
        alt: "Análisis de FI-532 con la tendencia mensual de ingresos y gastos y el desglose por categoría",
      },
    },
    callouts: {
      bucketsLabel: "Este ciclo",
      bucketsSegs: ["Básicos 50", "Lujos 30", "Ahorros 20"],
      together: { k: "Javier te debe", v: "38,40 €", s: "Súper · Fibra · Cena" },
      bills: { k: "Vence mañana", v: "Alquiler · 950 €", s: "🔔 Recordatorio activado" },
      applepayTitle: "Registrado desde Apple Pay",
      applepayBody: "Mercadona · −53,83 € · Supermercado",
      applepayNow: "ahora",
      voiceQuote: "“Gasté 25 euros en el súper”",
      assistantQuote: "“¿Qué podemos recortar?”",
      insights: { k: "Comer fuera", v: "−48%", s: "vs. ciclo anterior" },
    },
    moreLabel: "Y todo lo demás que necesita un hogar",
    more: [
      { title: "Escaneo de tickets", description: "Apunta con la cámara y el total y los artículos se rellenan solos." },
      { title: "Plan de ahorro", description: "Reparte tu 20% entre metas como un fondo de emergencia o unas vacaciones." },
      { title: "Listas de la compra compartidas", description: "Marca lo que compraste y conviértelo en una sola transacción." },
      { title: "Calendario de recibos", description: "Cada recibo y suscripción, situado en el mes." },
      { title: "Búsqueda y filtros", description: "Encuentra cualquier gasto por persona, categoría o importe en segundos." },
      { title: "Exportación CSV", description: "Tus datos son tuyos. Llévatelos cuando quieras." },
    ],
  },

  howItWorks: {
    sectionLabel: "Cómo funciona",
    headline: { pre: "Listo en ", em: "minutos." },
    steps: [
      {
        title: "Crea tu hogar",
        description: "Elige tu moneda y tu reparto: 50/30/20 o la proporción que encaje con tu vida.",
      },
      {
        title: "Invita a los tuyos",
        description: "Añade a tu pareja, familia o compañeros por email. Todos comparten el mismo presupuesto en vivo.",
      },
      {
        title: "Gasta con un plan",
        description: "Registra por voz, ticket o Apple Pay, y ten siempre claro cuánto te queda.",
      },
    ],
  },

  testimonials: {
    sectionLabel: "De hogares que usan FI-532",
    headline: { pre: "Hogares ahorrando más. ", em: "Cada mes." },
    items: [
      {
        role: "Casada, 2 hijos",
        text: "Por fin una app que hace que presupuestar con mi pareja sea simple. Ambos podemos ver a dónde va nuestro dinero y planificar juntos. La vista 50/30/20 es revolucionaria.",
      },
      {
        role: "Freelancer",
        text: "El seguidor de facturas recurrentes es un salvavidas. Lo configuro una vez y nunca me pierdo un pago. UI limpia, rápida, y realmente me ayuda a ahorrar más cada mes.",
      },
      {
        role: "Propietaria",
        text: "Me encanta el desglose de necesidades/deseos/ahorros. Cambió completamente mi forma de pensar sobre los gastos. Ahorré más en 3 meses con FI-532 que en el año anterior.",
      },
    ],
  },

  pricing: {
    sectionLabel: "Precios",
    headingNormal: "Comienza gratis.",
    headingColored: "Actualiza cuando estés listo.",
    description:
      "Sin cargos ocultos. No se requiere tarjeta de crédito para el plan gratuito. Actualiza cuando quieras a través del App Store.",
    monthly: "Mensual",
    annual: "Anual",
    saveDiscountBadge: (pct) => `Ahorra ${pct}%`,
    mostPopular: "Más Popular",
    freePlan: {
      name: "Gratuito",
      period: "siempre",
      description: "Comienza tu viaje 50/30/20 — no se necesita tarjeta de crédito.",
      features: [
        "Panel de presupuesto mensual",
        "Hasta 10 transacciones / mes",
        "2 elementos recurrentes activos",
        "Seguimiento por categorías",
        "Configuración del hogar",
        "Autenticación segura",
      ],
      cta: "Comenzar Gratis",
    },
    proPlan: {
      name: "Premium",
      description: "La experiencia completa de FI-532. Ilimitada, colaborativa, poderosa.",
      features: [
        "Transacciones ilimitadas",
        "Elementos recurrentes ilimitados",
        "Colaboración con múltiples miembros",
        "Divide gastos y salda saldos",
        "Recordatorios de facturas y notificaciones",
        "Informes financieros con IA",
        "Listas de compras compartidas",
        "Calculadora de distribución",
        "Exportación de datos CSV",
        "Soporte prioritario",
      ],
      perYear: "/año",
      perMonth: "/mes",
      billedAnnually: (price) => `$${price}/mes, facturado anualmente`,
      saveVsMonthly: (amount) => `Ahorras $${amount} vs mensual`,
      crossedOutPrefix: "vs",
      crossedOutSuffix: "facturado mensualmente",
      switchToAnnual: (pct) => `Cambiar a anual y ahorrar ${pct}% →`,
      valueAnnual: (price) => `Solo $${price}/mes — menos que un café a la semana.`,
      valueMonthly: "Menos de 1 café al mes para total claridad financiera.",
      ctaAnnual: "Obtener Plan Anual",
      ctaMonthly: "Comenzar Prueba Gratis",
    },
  },

  faq: {
    sectionLabel: "Preguntas frecuentes",
    headline: { pre: "Preguntas, ", em: "resueltas." },
    items: [
      {
        q: "¿Tengo que conectar mi cuenta bancaria?",
        a: "No. FI-532 nunca te pide las claves de tu banco. Añades los gastos por voz, escaneando un ticket, escribiéndolos o automáticamente al pagar con Apple Pay.",
      },
      {
        q: "¿Qué es la regla 50/30/20?",
        a: "Divide tus ingresos netos en un 50% para básicos (alquiler, súper, suministros), un 30% para lujos (comer fuera, suscripciones, aficiones) y un 20% para ahorro. FI-532 automatiza el reparto para que siempre sepas cómo vas.",
      },
      {
        q: "¿Puedo usar otro reparto?",
        a: "Sí. 50/30/20 es el valor por defecto, pero puedes cambiar los porcentajes en los ajustes del hogar; por ejemplo, 60/20/20 o 40/30/30.",
      },
      {
        q: "¿Cómo llevo el presupuesto con mi pareja?",
        a: "Configura tu hogar e invita a los miembros por email desde los ajustes del hogar. Cuando acepten, compartiréis en tiempo real el presupuesto, las transacciones y los saldos.",
      },
      {
        q: "¿FI-532 es gratis?",
        a: "La descarga es gratuita y el plan gratuito no caduca. Premium desbloquea transacciones ilimitadas, colaboración entre varios miembros, informes con IA y más. Las suscripciones se gestionan en el App Store y puedes cancelar cuando quieras.",
      },
      {
        q: "¿Hay versión para Android?",
        a: "Todavía no. FI-532 está disponible para iPhone en el App Store. Android está en la hoja de ruta.",
      },
    ],
    moreHelp: "¿Más preguntas? Visita soporte",
  },

  cta: {
    headline: { pre: "Empezad a presupuestar ", em: "juntos." },
    description:
      "Descarga FI-532, configura tu hogar y descubre cuánto te queda antes de que llegue el próximo sueldo.",
    trustItems: ["Sin conectar tu banco", "Gratis para empezar", "Sin tarjeta de crédito"],
    qrLabel: "Escanea para descargar",
    qrAlt: "Código QR que lleva a FI-532 en el App Store",
  },

  stickyCta: {
    text: "Gratis en el App Store",
    button: "Descargar FI-532",
  },

  footer: {
    method: "El método",
    features: "Funciones",
    pricing: "Precios",
    faq: "Preguntas",
    contact: "Contacto",
    support: "Soporte",
    privacy: "Privacidad",
    terms: "Términos",
    eula: "EULA",
    copyright: (year) => `© ${year} FI-532. Todos los derechos reservados.`,
  },
};
