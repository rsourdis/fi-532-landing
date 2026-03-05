import type { Translations } from "./types";

export const es: Translations = {
  nav: {
    strategy: "Estrategia",
    features: "Funciones",
    pricing: "Precios",
    downloadApp: "Descargar App",
  },

  hero: {
    available: "Disponible en iOS",
    headlinePrefix: "La regla 50/30/20",
    headlineColored: "de presupuesto,",
    headlineSuffix: "automatizada.",
    subCopy:
      "FI-532 aplica automáticamente la estrategia de presupuesto más efectiva del mundo. Mira exactamente a dónde va tu dinero — y cuánto estás ahorrando — cada mes.",
    statNeeds: "Necesidades",
    statWants: "Deseos",
    statSavings: "Ahorros",
    socialProof: "Con la confianza de familias que toman el control de sus finanzas",
    scrollCue: "Cómo funciona",
    badgeNeeds: "Necesidades",
    badgeSavings: "Ahorros",
    phoneAlt: "FI-532 — Panel de presupuesto mensual",
  },

  strategy: {
    sectionLabel: "El Método",
    headingPart1: "La regla 50/30/20.",
    headingColored: "El camino más simple a la libertad financiera.",
    description:
      "Demostrada por expertos financieros en todo el mundo. Usada por millones. Y ahora automatizada para tu hogar con FI-532.",
    pillars: [
      {
        label: "Necesidades",
        tagline: "Cubre lo que mantiene la vida en marcha.",
        description:
          "Gastos esenciales que no puedes omitir — vivienda, servicios, alimentos, transporte, salud. La mitad de tus ingresos, protegida y controlada.",
        examples: ["Renta / hipoteca", "Alimentos", "Servicios", "Transporte"],
      },
      {
        label: "Deseos",
        tagline: "Disfruta la vida sin culpa.",
        description:
          "Las cosas que hacen la vida agradable — salir a comer, suscripciones, pasatiempos, compras. Gasta libremente dentro del 30%, nunca más.",
        examples: ["Restaurantes y cafés", "Streaming", "Pasatiempos", "Compras"],
      },
      {
        label: "Ahorros",
        tagline: "Construye el futuro que mereces.",
        description:
          "Tu futuro financiero, financiado automáticamente. Fondo de emergencia, inversiones, pago de deudas — cada peso aquí trabaja más que lo que gastas.",
        examples: ["Fondo de emergencia", "Inversiones", "Pago de deudas", "Jubilación"],
      },
    ],
    barNeeds: "Necesidades",
    barWants: "Deseos",
    barSavings: "Ahorros",
    calloutBefore:
      "FI-532 registra cada transacción, categoriza tus gastos y muestra tu ",
    calloutStrong: "desglose 50/30/20 en tiempo real",
    calloutAfter:
      " — para que siempre sepas cómo estás, sin hojas de cálculo ni cálculos manuales.",
  },

  appShowcase: {
    sectionLabel: "La App",
    headingLine1: "Cada peso.",
    headingColored: "Cada decisión.",
    headingLine3: "En un solo lugar.",
    description:
      "FI-532 reúne toda tu imagen financiera en un solo espacio, diseñado con elegancia.",
    screens: [
      {
        alt: "FI-532 — Pantalla de transacciones",
        title: "Cada transacción, registrada",
        desc: "Registra ingresos, gastos y transferencias al instante. Filtra por fecha, categoría o tipo. Tu historia financiera narrada con claridad.",
      },
      {
        alt: "FI-532 — Panel principal",
        title: "Tu panel 50/30/20",
        desc: "Mira tus necesidades, deseos y ahorros de un vistazo. Observa el medidor de presupuesto moverse al gastar — en tiempo real.",
      },
      {
        alt: "FI-532 — Facturas y suscripciones recurrentes",
        title: "Nunca olvides un pago",
        desc: "Todos los gastos recurrentes en un lugar — renta, suscripciones, servicios. Marca como pagado, crea transacciones automáticamente.",
      },
    ],
  },

  features: {
    sectionLabel: "Funciones",
    headingNormal: "Todo lo que necesitas.",
    headingColored: "Nada más.",
    description:
      "Una suite completa de herramientas de presupuesto diseñada para la forma en que los hogares reales piensan sobre el dinero — simple, colaborativa y siempre sincronizada.",
    items: [
      {
        title: "Panel de Presupuesto",
        description:
          "Tu desglose 50/30/20 visualizado. Navega por meses, compara períodos y ajusta tu regla de presupuesto cuando quieras.",
      },
      {
        title: "Seguimiento de Transacciones",
        description:
          "Registra cada peso — ingresos, gastos, transferencias. Filtra por categoría, fecha o tipo al instante.",
      },
      {
        title: "Facturas Recurrentes",
        description:
          "Nunca te pierdas un pago. Sigue las fechas de vencimiento, marca facturas como pagadas y genera transacciones automáticamente.",
      },
      {
        title: "Colaboración del Hogar",
        description:
          "Invita a miembros de la familia, divide gastos y salda saldos. Visibilidad compartida en tiempo real para todo el hogar.",
      },
      {
        title: "Informes Financieros con IA",
        description:
          "Análisis al estilo chat sobre tus patrones de gasto. Entiende tu dinero en lenguaje sencillo, potenciado por IA.",
      },
      {
        title: "Recordatorios Inteligentes",
        description:
          "Recordatorios automáticos de facturas para que nada se escape. Prueba las notificaciones para confirmar que todo funciona.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "Cómo Funciona",
    headingNormal: "Listo y funcionando",
    headingColored: "en minutos.",
    description:
      "Sin hojas de cálculo. Sin configuración complicada. Solo un espacio de trabajo limpio que funciona como tú piensas sobre el dinero.",
    steps: [
      {
        title: "Crea Tu Cuenta",
        description:
          "Regístrate de forma segura con tu correo. Tus datos están protegidos con autenticación de nivel empresarial a través de Clerk.",
      },
      {
        title: "Configura Tu Hogar",
        description:
          "Configura tu moneda, zona horaria y regla de presupuesto. Elige tu distribución 50/30/20 — o personalízala según tus metas.",
      },
      {
        title: "Registra Todo",
        description:
          "Registra transacciones, configura facturas recurrentes y categoriza tus gastos. Tu panel se actualiza en tiempo real.",
      },
      {
        title: "Mantente en Control",
        description:
          "Revisa perspectivas mensuales, obtén informes con IA, exporta tus datos y colabora con los miembros del hogar.",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Usuarios reales",
    headingNormal: "Hogares ahorrando más.",
    headingColored: "Cada mes.",
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

  cta: {
    badge: "Descarga gratuita",
    headingNormal: "Toma el control de tus",
    headingColored: "finanzas del hogar.",
    description:
      "Comienza con el plan gratuito hoy. Configura tu presupuesto 50/30/20, registra cada peso y actualiza cuando estés listo.",
    trustItems: ["Sin tarjeta de crédito", "Plan gratuito para siempre", "iOS App Store"],
    learnHow: "Aprende cómo funciona",
  },

  footer: {
    strategy: "Estrategia",
    features: "Funciones",
    pricing: "Precios",
    contact: "Contacto",
    support: "Soporte",
    privacy: "Privacidad",
    terms: "Términos",
    eula: "EULA",
    copyright: (year) => `© ${year} FI-532. Todos los derechos reservados.`,
  },
};
