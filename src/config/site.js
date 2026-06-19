// ─────────────────────────────────────────────────────────────
// ARCHIVO DE CONFIGURACIÓN CENTRAL — único lugar para cambiar
// marca, copy, productos, contacto y estilos de identidad.
// Adaptar a otro cliente = editar solo este archivo.
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre:      'GeoFab Argentina',
  tagline:     'MACETAS DE TELA GEOTEXTIL PARA EL CAMPO',
  subtitulo:   'Mejor manejo hídrico. Mayor aireación. Raíces más sanas.',
  descripcion: 'Contenedores en tela geotextil para producción agrícola intensiva y horticultura profesional.',
  whatsapp:    '5491112345678', // formato wa.me: sin + ni espacios

  instagram:   'https://www.instagram.com/geofabargentina/',
  zona:        'Envíos a todo el país',
  anio:        '2024',
};

// Rutas del logo — colocar los archivos en /public/
// Versión a color: para fondos blancos y crema.
// Versión blanca: para fondos verde oscuro.
export const logo = {
  color: '/logo-geofab.png',       // fondo claro — ya disponible en /public/
  white: '/logo-geofab-white.png', // fondo oscuro — agregar cuando esté disponible
  alt:   'GeoFab Argentina',
};

// Imagen principal del Hero — reemplazar con foto real del producto estrella
export const heroImagen = '/img-hero.png';

export const productos = [
  {
    id: 1,
    slug:           'macetas-geotextiles',
    nombre:         'Macetas Geotextiles',
    descripcion:    'Contenedores de tela geotextil para cultivo. Mejor aireación de raíces, drenaje libre y poda aérea natural.',
    tagline:        'La raíz se autopoda al tocar la pared geotextil: forma un sistema radicular denso, vigoroso y sin enrollamiento.',
    atributos:      ['Air pruning', 'Gramaje 300 g/m²', 'De 1 a 150 litros'],
    caracteristicas: ['Asas reforzadas', 'Negro mate'],
    gramaje:        '300 g/m²',
    imagen:         '/img/maceta-3.png',
    precio:         'Consultar',
    variantes: [
      { litros: 1,   imagen: '/img/maceta-1.png', medidas: '10 × 12 cm', precio: 'Consultar' },
      { litros: 3,   imagen: '/img/maceta-1.png', medidas: '16 × 16 cm', precio: 'Consultar' },
      { litros: 5,   imagen: '/img/maceta-2.png', medidas: '18 × 19 cm', precio: 'Consultar' },
      { litros: 8,   imagen: '/img/maceta-2.png', medidas: '23 × 19 cm', precio: 'Consultar' },
      { litros: 10,  imagen: '/img/maceta-3.png', medidas: '25 × 21 cm', precio: 'Consultar' },
      { litros: 15,  imagen: '/img/maceta-3.png', medidas: '26 × 28 cm', precio: 'Consultar' },
      { litros: 20,  imagen: '/img/maceta-3.png', medidas: '27 × 35 cm', precio: 'Consultar' },
      { litros: 30,  imagen: '/img/maceta-4.png', medidas: '31 × 40 cm', precio: 'Consultar' },
      { litros: 40,  imagen: '/img/maceta-4.png', medidas: '35 × 42 cm', precio: 'Consultar' },
      { litros: 60,  imagen: '/img/maceta-5.png', medidas: '42 × 44 cm', precio: 'Consultar' },
      { litros: 80,  imagen: '/img/maceta-5.png', medidas: '46 × 50 cm', precio: 'Consultar' },
      { litros: 100, imagen: '/img/maceta-5.png', medidas: '51 × 50 cm', precio: 'Consultar' },
      { litros: 150, imagen: '/img/maceta-5.png', medidas: '55 × 65 cm', precio: 'Consultar' },
    ],
    tuber: [
      { formato: 'TUBER 30 L', medidas: '31 × 40 cm' },
      { formato: 'TUBER 40 L', medidas: '35 × 42 cm' },
    ],
    razones: [
      {
        titulo:      'Air pruning real',
        descripcion: 'Raíces autopodadas: ramificación densa, sin "girar" como en la plástica. Mejor planta al trasplantar.',
      },
      {
        titulo:      'Gramaje 300 g/m² en todos los tamaños',
        descripcion: 'No tejido grueso y duradero. Igual material que el geotextil profesional.',
      },
      {
        titulo:      'Reutilizable múltiples ciclos',
        descripcion: 'Vida útil de varios años en buenas condiciones. Reducís el descarte de plástico.',
      },
      {
        titulo:      'Drenaje y oxigenación superior',
        descripcion: 'Excelente respirabilidad: menos pudrición, raíces más sanas, plantas más vigorosas.',
      },
      {
        titulo:      'Apta para producción orgánica',
        descripcion: 'Sin químicos en el material, compatible con certificación orgánica.',
      },
    ],
  },
  {
    id: 2,
    slug:        'tela-antimaleza',
    nombre:      'Tela Antimaleza',
    descripcion: 'Tela geotextil para cubrir el suelo y controlar malezas dejando pasar agua y aire. Menos mantenimiento, sin herbicidas.',
    imagen:      '/img/antimalezas.png',
    precio:      'Consultar',
    variantes: [
      {
        id:        '160',
        nombre:    'Tela antimaleza 160 grs',
        subtitulo: 'GEOTEXTIL NO TEJIDO · NEGRO UV · USO LIVIANO',
        tagline:   'Para viveros, paisajismo, almacigueras y áreas de mantenimiento liviano. Sin químicos.',
        imagen:    '/img/antimaleza-160.png',
        precio:    'Consultar',
        badges:    [],
        razonesTitle: '5 razones para elegirla',
        razones: [
          { titulo: 'Bloquea germinación de maleza',    descripcion: 'Negro UV: las semillas no germinan al no llegar la luz.' },
          { titulo: 'Permeable al agua y al aire',      descripcion: 'No tejido: el suelo respira, no se compacta, no se hacen charcos.' },
          { titulo: 'Durabilidad 3 a 4 años',           descripcion: 'Resistente a la intemperie. Mucho más que las telas finas de 90 grs.' },
          { titulo: 'Liviana y fácil de instalar',      descripcion: 'Una persona la puede tender. Ideal para áreas chicas y medianas.' },
          { titulo: 'Sin químicos',                     descripcion: '100% física. Compatible con producción orgánica y certificable.' },
        ],
        fichaTecnica: [
          { clave: 'Material',               valor: 'Geotextil no tejido de polipropileno con tratamiento UV' },
          { clave: 'Gramaje',                valor: '160 g/m²' },
          { clave: 'Color',                  valor: 'Negro mate' },
          { clave: 'Permeabilidad',          valor: 'Alta (al agua y al aire)' },
          { clave: 'Vida útil estimada',     valor: '3 a 4 años a la intemperie' },
          { clave: 'Ancho de rollo',         valor: 'A consultar según pedido' },
          { clave: 'Aplicaciones',           valor: 'Vivero, paisajismo, almacigueras, jardín, áreas livianas' },
          { clave: 'Certificación',          valor: 'Apta para producción orgánica' },
        ],
      },
      {
        id:        '300',
        nombre:    'Tela antimaleza 300 grs',
        subtitulo: 'GEOTEXTIL NO TEJIDO · USO PESADO · REEMPLAZA GLIFOSATO',
        tagline:   'Para viñedos, olivares, frutales y nogalares. Resiste maquinaria. Dura 5 a 7 años.',
        imagen:    '/img/antimaleza-300.png',
        precio:    'Consultar',
        badges: [
          { valor: '5-7',  etiqueta: 'años de vida útil' },
          { valor: '4-6',  etiqueta: 'jornales/ha/año evitados' },
          { valor: '100%', etiqueta: 'sin glifosato residual' },
          { valor: '300',  etiqueta: 'gramos/m² resistencia' },
        ],
        razonesTitle: 'Por qué la tela 300 grs cambia la economía de tu finca',
        razones: [
          { titulo: 'Reemplaza el carpido manual',      descripcion: '4 a 6 jornales por hectárea por año, durante 5 a 7 años. Una sola instalación.' },
          { titulo: 'Reemplaza el glifosato',           descripcion: '100% sin químicos: clave para exportación a Europa y certificación orgánica.' },
          { titulo: 'Resiste tránsito de maquinaria',  descripcion: 'Tractores, cosechadoras, mulching aplicadores. No se rasga.' },
          { titulo: 'Reduce evaporación',               descripcion: 'Conserva humedad del suelo: clave en zonas semiáridas.' },
          { titulo: 'Apta para certificación orgánica', descripcion: 'Compatible con Letis, ECOCERT, Demeter, CBA.' },
        ],
        fichaTecnica: [
          { clave: 'Material',     valor: 'Geotextil no tejido de polipropileno con UV reforzado' },
          { clave: 'Gramaje',      valor: '300 g/m²' },
          { clave: 'Color',        valor: 'Negro mate' },
          { clave: 'Permeabilidad', valor: 'Alta (al agua y al aire)' },
          { clave: 'Vida útil',    valor: '5 a 7 años a la intemperie' },
          { clave: 'Ancho de rollo', valor: 'A consultar según pedido' },
          { clave: 'Aplicaciones', valor: 'Viñedos, olivares, frutales, nogalares (uso pesado)' },
          { clave: 'Certificación', valor: 'Apta para producción orgánica (Letis, ECOCERT, Demeter, CBA)' },
        ],
      },
    ],
  },
  {
    id: 3,
    slug:        'mulching-geotextil',
    nombre:      'Mulching geotextil',
    descripcion: 'Cobertura geotextil al pie de planta o sobre la maceta. Conserva humedad, controla maleza y protege la raíz.',
    subtitulo:   'DE PISO Y DE MACETA · REDUCE EVAPORACIÓN 30-50%',
    tagline:     'Cobertura geotextil al pie de planta o sobre la maceta. Conserva humedad, controla maleza, protege la raíz.',
    imagen:      '/img-hero.png',
    precio:      'Consultar',
    variantes:   [],
    razonesTitle: 'Por qué el mulching es clave',
    razones: [
      { titulo: 'Reduce evaporación 30 a 50%',           descripcion: 'Menos agua de riego perdida. Ahorro directo en zonas semiáridas.' },
      { titulo: 'Conserva humedad del suelo',             descripcion: 'La planta sufre menos estrés hídrico en verano y entre riegos.' },
      { titulo: 'Protege la raíz del calor',              descripcion: 'Suelo más fresco y estable: mejor desarrollo radicular en años jóvenes.' },
      { titulo: 'Controla maleza por bloqueo físico',     descripcion: 'Sin químicos, sin glifosato. Permite producción orgánica certificable.' },
      { titulo: 'Mejora calidad del suelo a mediano plazo', descripcion: 'Reduce erosión, favorece vida microbiana y carbono orgánico.' },
    ],
    fichaTecnica: [
      { clave: 'Material',               valor: 'Geotextil no tejido de polipropileno' },
      { clave: 'Gramaje',                valor: '300 g/m²' },
      { clave: 'Formato piso',           valor: 'Rollos por m² (medida a consultar)' },
      { clave: 'Formato maceta',         valor: 'Discos de varios diámetros' },
      { clave: 'Aplicación piso',        valor: 'Olivar, frutal, viñedo, paisajismo' },
      { clave: 'Aplicación maceta',      valor: 'Vivero premium, paisajismo, exhibición' },
      { clave: 'Reducción evaporación',  valor: '30 a 50% según condiciones' },
      { clave: 'Vida útil',              valor: '5 a 7 años a la intemperie' },
      { clave: 'Certificación',          valor: 'Apta para producción orgánica' },
    ],
  },
  {
    id: 4,
    slug:        'maceta-tuberculo',
    nombre:      'Maceta Tubérculo',
    descripcion: 'Maceta geotextil de 300 g/m², ideal para el cultivo de papa, batata y ñame.',
    subtitulo:   'GEOTEXTIL 300 G/M² · PARA TUBÉRCULOS',
    tagline:     'Mismo material geotextil de 300 g/m². Ideal para papa, batata y ñame.',
    gramaje:     '300 g/m²',
    imagen:      '/img/maceta-tuberculo.png',
    precio:      'Consultar',
    variantes: [
      { litros: 30, imagen: '/img/maceta-tuberculo.png', medidas: '31 × 40 cm', precio: 'Consultar' },
      { litros: 40, imagen: '/img/maceta-tuberculo.png', medidas: '35 × 42 cm', precio: 'Consultar' },
    ],
  },
  {
    id: 5,
    slug:        'macetas-decorativas',
    nombre:      'Macetas Decorativas',
    descripcion: 'Macetas autoarmables para deco, hogar y suculentas. En fieltro y geotextil, versión clara u oscura.',
    imagen:      '/img/sucu-oscura.png',
    precio:      'Desde $1.086',
    variantes:   [],
    familias: [
      {
        nombre:   'Milano Autoarmable',
        material: 'Fieltro 300 g/m²',
        items: [
          {
            id:          'milano-s',
            nombre:      'Maceta Milano S',
            medidas:     '10×10×8 cm',
            precio:      '$2.049',
            imagenClara: '/img/milano-s-clara.png',
            imagenOscura:'/img/milano-s-oscura.png',
          },
          {
            id:          'milano-doble-l',
            nombre:      'Maceta Milano Doble L',
            medidas:     '15×15×12 cm',
            precio:      '$3.035',
            imagenClara: '/img/milano-doble-l-clara.png',
            imagenOscura:'/img/milano-doble-l-oscura.png',
          },
        ],
      },
      {
        nombre:   'Suculentas Autoarmable',
        material: 'Geotextil 300 g/m²',
        items: [
          {
            id:          'maceta-suculenta',
            nombre:      'Maceta suculenta',
            imagenClara: '/img/sucu-clara.png',
            imagenOscura:'/img/sucu-oscura.png',
            variantes: [
              { tamano: 6,  medidas: '6×6×6 cm',    precio: '$1.086' },
              { tamano: 8,  medidas: '8×8×8 cm',    precio: '$1.189' },
              { tamano: 10, medidas: '10×10×10 cm', precio: '$1.289' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug:        'jardin-vertical',
    nombre:      'Jardín Vertical',
    descripcion: 'Sistema de bolsillos geotextiles ensamblables. Convertí cualquier pared en un jardín, para bares, locales, oficinas, patios y balcones.',
    subtitulo:   'SISTEMA DE BOLSILLOS GEOTEXTILES · ENSAMBLABLES',
    tagline:     'Convertí cualquier pared en un jardín. Ideal para bares, locales, oficinas, patios y balcones.',
    imagen:      '/img/jardin-s9.png',
    precio:      'Consultar',
    variantes:   [],
    tamanos: [
      {
        id: 'chico', nombre: 'Chico', medidaBolsillo: '12 × 15 cm',
        descripcion: 'Aromáticas, suculentas, plantines pequeños',
        configuraciones: [
          { id: '1',  nombre: '1 bolsillo',     medidasCubre: '18 × 20 cm',  imagen: '/img/jardin-bolsillo-s.png' },
          { id: '3h', nombre: '3 horizontales', medidasCubre: '47 × 20 cm',  imagen: '/img/jardin-3hs.png'        },
          { id: '3v', nombre: '3 verticales',   medidasCubre: '18 × 60 cm',  imagen: '/img/jardin-3vs.png'        },
          { id: '9',  nombre: '9 bolsillos',    medidasCubre: '47 × 60 cm',  imagen: '/img/jardin-s9.png'         },
        ],
      },
      {
        id: 'mediano', nombre: 'Mediano', medidaBolsillo: '16 × 20 cm',
        descripcion: 'Plantas decorativas, helechos, hierbas',
        configuraciones: [
          { id: '1',  nombre: '1 bolsillo',     medidasCubre: '23 × 27 cm',  imagen: '/img/jardin-bolsillo-s.png' },
          { id: '3h', nombre: '3 horizontales', medidasCubre: '65 × 27 cm',  imagen: '/img/jardin-3hm.png'        },
          { id: '3v', nombre: '3 verticales',   medidasCubre: '23 × 82 cm',  imagen: '/img/jardin-3vm.png'        },
          { id: '9',  nombre: '9 bolsillos',    medidasCubre: '65 × 82 cm',  imagen: '/img/jardin-m9.png'         },
        ],
      },
      {
        id: 'grande', nombre: 'Grande', medidaBolsillo: '30 × 20 cm',
        descripcion: 'Arbustivas, follaje denso, vegetales',
        configuraciones: [
          { id: '1',  nombre: '1 bolsillo',     medidasCubre: '38 × 27 cm',  imagen: '/img/jardin-bolsillo-l.png' },
          { id: '3h', nombre: '3 horizontales', medidasCubre: '108 × 27 cm', imagen: '/img/jardin-3hm.png'        },
          { id: '3v', nombre: '3 verticales',   medidasCubre: '38 × 82 cm',  imagen: '/img/jardin-3vm.png'        },
          { id: '9',  nombre: '9 bolsillos',    medidasCubre: '108 × 82 cm', imagen: '/img/jardin-l9.png'         },
        ],
      },
    ],
    queIncluye: [
      'Lona rafia impermeable con ojal (para colocar entre el jardín y la pared)',
      'Tarugos y fijaciones',
      'Ganchos de acople entre bolsillos cuando el artículo lo requiere',
      'Opción con riego: 4 metros de manguera para conectar desde el jardín a la toma de agua',
    ],
    razonesTitle: 'Por qué elegir el geotextil para jardín vertical',
    razones: [
      { titulo: 'Ahorra espacio y embellece',            descripcion: 'Aprovechás paredes vacías. Decora a la vez que produce.' },
      { titulo: 'Drenaje y circulación de aire',         descripcion: 'Geotextil respirable: raíces sanas, sin encharcamiento.' },
      { titulo: 'Más durable que opciones de plástico',  descripcion: 'Resistente al sol, lluvia y manipulación.' },
      { titulo: 'Saludable para las raíces',             descripcion: 'Evita el exceso de calor y la pudrición típica.' },
      { titulo: 'Ideal para bares, patios, huertas urbanas', descripcion: 'Decoración funcional para gastronomía, oficinas y hoteles.' },
    ],
    fichaTecnica: [
      { clave: 'Material',         valor: 'Geotextil no tejido 300 g/m²' },
      { clave: 'Formatos',         valor: 'Módulo 1, 3H, 3V, 9, Panel 1 m² (combinables)' },
      { clave: 'Tamaños bolsillo', valor: 'Chico, Mediano, Grande' },
      { clave: 'Instalación',      valor: 'Cuelga directo sobre pared o estructura' },
      { clave: 'Aplicaciones',     valor: 'Bares, oficinas, patios, balcones, huerta urbana' },
      { clave: 'Medidas exactas',  valor: 'A consultar según proyecto' },
    ],
  },
  {
    id: 7,
    slug:        'macetero-huerta',
    nombre:      'Macetero Huerta',
    descripcion: 'Huerta urbana en geotextil con compartimentos separados. Para aromáticas, plantines y vegetales en patios, balcones y terrazas.',
    subtitulo:   'HUERTA URBANA EN GEOTEXTIL · COMPARTIMENTOS SEPARADOS',
    tagline:     'Para cultivar aromáticas, plantines y vegetales en patios, balcones y terrazas.',
    imagen:      '/img/macetero-60.png',
    precio:      'Consultar',
    variantes: [
      { tamano: 60,  medidas: '60 × 20 × 20 cm',  imagen: '/img/macetero-60.png'  },
      { tamano: 80,  medidas: '80 × 25 × 25 cm',  imagen: '/img/macetero-100.png' },
      { tamano: 100, medidas: '100 × 30 × 30 cm', imagen: '/img/macetero-80.png'  },
    ],
    razonesTitle: 'Por qué funciona',
    razones: [
      { titulo: 'Compartimentos separados',        descripcion: 'Cada planta tiene su espacio: las raíces no compiten, las plantas crecen mejor.' },
      { titulo: 'Drenaje superior',                descripcion: 'Geotextil 300 g/m² respirable: sin pudrición de raíz, ideal para aromáticas.' },
      { titulo: 'Liviana y trasladable',           descripcion: 'Se mueve con una persona. Perfecta para patios y balcones de ciudad.' },
      { titulo: 'Lista para sembrar',              descripcion: 'Llenás de sustrato, plantás y listo. No requiere instalación.' },
      { titulo: 'Reutilizable múltiples ciclos',   descripcion: 'Vida útil de varias temporadas, lavable, doblable cuando no se usa.' },
    ],
    fichaTecnica: [
      { clave: 'Material',    valor: 'Geotextil no tejido 300 g/m²' },
      { clave: 'Formatos',    valor: 'Rectangular 3 compartimentos · Cuadrada 4 compartimentos' },
      { clave: 'Aplicaciones', valor: 'Aromáticas, plantines, vegetales chicos, huerta urbana' },
      { clave: 'Drenaje',     valor: 'Excelente (transpirable, sin pudrición)' },
      { clave: 'Vida útil',   valor: 'Múltiples temporadas con cuidado básico' },
      { clave: 'Medidas',     valor: 'A consultar según formato' },
    ],
  },
];

export const sobre = {
  titulo:     'Ingeniería radicular para el campo',
  historia:   'GeoFab Argentina fabrica contenedores en tela geotextil técnica para la producción agrícola y hortícola profesional. La tela geotextil promueve la poda aérea natural de raíces, elimina el enraizamiento circular y previene la pudrición por exceso de humedad. Diseñado para productores, viveros y proyectos de cultivo intensivo que exigen resultados consistentes y reproducibles.',
  imagen:     '/foto-info.png',
  nombreFoto: 'GeoFab Argentina',
};

export const diferenciales = [
  {
    icono: 'raices',
    titulo: 'Raíces más sanas',
    texto:  'La tela promueve la poda aérea natural. Sin raíces circulares ni espirales. Mayor densidad radicular activa.',
  },
  {
    icono: 'drenaje',
    titulo: 'Sin pudrición radicular',
    texto:  'Drenaje libre y aireación constante. Sin acumulación de humedad excesiva. Control hídrico preciso.',
  },
  {
    icono: 'crecimiento',
    titulo: 'Mayor productividad',
    texto:  'Mejor absorción de nutrientes y oxígeno en la zona radicular. Cultivos más fuertes y uniformes.',
  },
];

export const contacto = {
  titulo:     'CONSULTANOS',
  descripcion: 'Respondemos consultas técnicas y cotizaciones para productores, viveros y distribuidores.',
};

export const testimonios = [
  {
    nombre:   'Ing. Martín G. — Vivero El Pinar',
    texto:    'Migramos toda la producción de plantines a las macetas GeoFab. El resultado en densidad radicular es notablemente superior al plástico.',
    estrellas: 5,
  },
  {
    nombre:   'Carlos R. — Productor hortícola',
    texto:    'Usamos las bolsas de 25 L para tomate en campo. Mejor drenaje, menos problemas sanitarios y plantas más uniformes.',
    estrellas: 5,
  },
  {
    nombre:   'Lucía M. — Agrónoma',
    texto:    'La poda aérea de raíces es evidente desde el primer ciclo. Los plantines trasplantados mostraron menos estrés y mayor velocidad de establecimiento.',
    estrellas: 5,
  },
];
