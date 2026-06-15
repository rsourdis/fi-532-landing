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
    hook: "¿A dónde se fue el dinero este mes?",
    headlinePrefix: "La regla 50/30/20",
    headlineColored: "de presupuesto,",
    headlineSuffix: "automatizada.",
    subCopy:
      "Basada en la probada regla 50/30/20 — y totalmente personalizable a la distribución que tu hogar necesite. Controla el gasto compartido, escanea recibos, añade gastos por voz y haz crecer tus ahorros automáticamente.",
    statNeeds: "Necesidades",
    statWants: "Deseos",
    statSavings: "Ahorros",
    ratingValue: "4.8",
    socialProof: "La adoran parejas, familias y compañeros que gestionan el dinero juntos",
    scrollCue: "Cómo funciona",
    badgeNeeds: "Necesidades",
    badgeSavings: "Ahorros",
    phoneAlt: "Panel de presupuesto FI-532 — balance neto, ingresos vs gastos y progreso por categoría del mes",
  },

  strategy: {
    sectionLabel: "El Método",
    headingPart1: "La regla 50/30/20.",
    headingColored: "El camino más simple a la libertad financiera.",
    description:
      "Demostrada por expertos financieros en todo el mundo. Usada por millones. FI-532 la automatiza para tu hogar — y te deja ajustar la distribución a la proporción que se adapte a tu vida.",
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

  valueProps: {
    sectionLabel: "Por qué FI-532",
    headingNormal: "Gestionar el dinero en pareja es difícil.",
    headingColored: "Nosotros lo hacemos simple.",
    description:
      "Tres razones por las que los hogares pierden el control de su dinero — y cómo FI-532 resuelve cada una.",
    problemTag: "El problema",
    solutionTag: "Cómo lo resolvemos",
    items: [
      {
        problem: "El dinero desaparece cada mes y no sabes a dónde se fue.",
        solution:
          "FI-532 clasifica cada transacción en tu desglose 50/30/20 automáticamente — mira exactamente a dónde va cada peso, en tiempo real. Sin hojas de cálculo, sin adivinar.",
      },
      {
        problem: "Dividir los gastos con tu pareja o compañeros se vuelve un juego de adivinanzas.",
        solution:
          "Comparte un solo hogar, divide los gastos y salda cuentas en segundos. Todos ven los mismos números — se acabó el incómodo '¿quién pagó qué?'.",
      },
      {
        problem: "Las facturas olvidadas y las suscripciones que se acumulan drenan tus ahorros.",
        solution:
          "Controla cada gasto recurrente, recibe recordatorios antes del vencimiento y protege tu meta de 20% de ahorro — nada se escapa.",
      },
    ],
    ctaNote: "Empieza gratis — sin tarjeta de crédito.",
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
        alt: "Pantalla de transacciones de FI-532 con búsqueda y filtros Ingresos, Gastos y Transferencias",
        title: "Cada transacción, registrada",
        desc: "Registra ingresos, gastos y transferencias al instante. Busca cualquier comercio y filtra por tipo — tu historia financiera, con total claridad.",
      },
      {
        alt: "Panel de presupuesto de FI-532 con balance neto y progreso por categoría",
        title: "Tu panel de presupuesto",
        desc: "Necesidades, deseos y ahorros de un vistazo, con la regla 50/30/20 o tu propia distribución. El presupuesto sin gastar pasa al siguiente ciclo.",
      },
      {
        alt: "Planificador de facturas y suscripciones recurrentes de FI-532 con fechas de vencimiento",
        title: "Nunca olvides un pago",
        desc: "Facturas y suscripciones en un planificador — renta, servicios, Netflix, Spotify. Mira el total mensual y cada próximo vencimiento.",
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
        title: "Panel de Presupuesto Personalizable",
        description:
          "Tu desglose 50/30/20 visualizado — o la distribución que elijas. Navega por ciclos, compara períodos y traslada el presupuesto sin gastar.",
      },
      {
        title: "Seguimiento de Transacciones",
        description:
          "Registra cada peso — ingresos, gastos, transferencias. Busca comercios y filtra por categoría, fecha o tipo al instante.",
      },
      {
        title: "Recurrentes y Suscripciones",
        description:
          "Facturas y suscripciones en un solo planificador. Sigue vencimientos, mira tu total mensual y nunca te pierdas un pago.",
      },
      {
        title: "Colaboración del Hogar",
        description:
          "Invita a miembros de la familia, divide gastos y salda saldos. Visibilidad compartida en tiempo real para todo el hogar.",
      },
      {
        title: "Informes Financieros con IA",
        description:
          "Pregunta por tu dinero en lenguaje sencillo. Resúmenes diarios de un vistazo e informes de gasto al estilo chat.",
      },
      {
        title: "Escaneo de Recibos",
        description:
          "Toma una foto del recibo y FI-532 lee los artículos, convirtiendo compras y facturas en transacciones en segundos.",
      },
      {
        title: "Entrada por Voz",
        description:
          "Solo dilo — \"herramientas en Walmart por $40.99\" — y el gasto queda registrado, categorizado y listo.",
      },
      {
        title: "Plan de Ahorro",
        description:
          "Divide tu ahorro mensual en metas — fondo de emergencia, inversiones, vacaciones — y mira crecer cada una en cada ciclo.",
      },
      {
        title: "Listas de Compras",
        description:
          "Crea una lista compartida, marca lo que compraste y conviértela directamente en una transacción categorizada.",
      },
    ],
  },

  featureShowcase: {
    sectionLabel: "Hecho para la vida real",
    headingNormal: "Más formas de mantener",
    headingColored: "el control de tu dinero.",
    description:
      "FI-532 va más allá de un panel. Captura el gasto en el momento, planifica con anticipación y deja que la app haga las cuentas.",
    ctaLabel: "Descarga gratis en iOS",
    rows: [
      {
        tag: "Informes con IA",
        title: "Pregúntale lo que sea a tu dinero",
        desc: "Obtén una lectura clara de tus gastos en lenguaje sencillo. FI-532 muestra un resumen diario de un vistazo y responde preguntas como \"¿cuánto gastamos en vivienda este ciclo?\" — sin hojas de cálculo.",
        bullets: ["Resúmenes diarios de un vistazo", "Informes de gasto al estilo chat", "Detecta excesos a tiempo"],
        alt: "Pantalla de Informes con IA de FI-532 con un resumen diario de gastos y temas sugeridos",
      },
      {
        tag: "Escaneo de Recibos",
        title: "Escanea un recibo, regístralo en segundos",
        desc: "Apunta la cámara a cualquier recibo y FI-532 lee el total y los artículos por ti. Compras, facturas y gastos compartidos se vuelven transacciones precisas sin escribir nada.",
        bullets: ["Lee totales y artículos", "Recibos en varios idiomas", "Captura o elige de Fotos"],
        alt: "Pantalla de escaneo de recibos de FI-532 leyendo un recibo de supermercado con la cámara",
      },
      {
        tag: "Entrada por Voz",
        title: "Añade un gasto con solo decirlo",
        desc: "¿Manos ocupadas? Di el gasto en voz alta — \"compré herramientas en Walmart por $40.99\" — y FI-532 lo convierte en una transacción categorizada. La forma más rápida de registrar gastos sobre la marcha.",
        bullets: ["Lenguaje natural", "Categorizado automáticamente", "Funciona en tu idioma"],
        alt: "Pantalla de transacción por voz de FI-532 transcribiendo un gasto hablado",
      },
      {
        tag: "Plan de Ahorro",
        title: "Pon tus ahorros en piloto automático",
        desc: "Convierte tu meta de ahorro mensual en objetivos reales — fondo de emergencia, inversiones, vacaciones. FI-532 asigna cada ciclo automáticamente y traslada los saldos para que tu futuro se siga financiando solo.",
        bullets: ["Metas de ahorro por objetivo", "Asignación automática por ciclo", "Los saldos se trasladan"],
        alt: "Pantalla de plan de ahorro de FI-532 dividiendo el ahorro en metas como inversiones y vacaciones",
      },
      {
        tag: "Analíticas",
        title: "Ve cada tendencia de un vistazo",
        desc: "Una tendencia mensual clara de ingresos frente a gastos, más un resumen que clasifica tus principales categorías. Sabe exactamente a dónde va tu dinero — y dónde recortar.",
        bullets: ["Tendencia ingresos vs gastos", "Principales categorías de gasto", "Compara ciclo a ciclo"],
        alt: "Pantalla de analíticas de FI-532 con gráfico de tendencia mensual y resumen de gasto por categoría",
      },
      {
        tag: "Listas de Compras",
        title: "De la lista de compras a la transacción",
        desc: "Planifica la compra como una lista compartida del hogar. Marca lo que realmente compraste y FI-532 convierte esos artículos en una transacción categorizada — sin doble registro.",
        bullets: ["Listas compartidas del hogar", "Marca lo que compraste", "Un toque para crear la transacción"],
        alt: "Pantalla de listas de compras de FI-532 con listas activas y archivadas del hogar",
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
    ratingSummary: "4.8 de calificación promedio de hogares en el App Store",
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
