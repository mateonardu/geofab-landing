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
  email:       'info@geofabargentina.com',
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
    nombre:      'Maceta Tubérculo',
    descripcion: 'Maceta de tela diseñada para papas y otros tubérculos. Favorece el desarrollo radicular y facilita la cosecha.',
    imagen:      '',
    precio:      'Consultar',
    variantes:   [],
  },
  {
    id: 5,
    nombre:      'Maceta Suculentas',
    descripcion: 'Macetas chicas de geotextil para suculentas y cactus. Drenaje óptimo, evita el encharcamiento.',
    imagen:      '',
    precio:      'Consultar',
    variantes:   [],
  },
  {
    id: 6,
    nombre:      'Jardín Vertical',
    descripcion: 'Sistema de bolsillos en tela geotextil para cultivo vertical en pared. Ahorra espacio, ideal para hierbas y ornamentales.',
    imagen:      '',
    precio:      'Consultar',
    variantes:   [],
  },
  {
    id: 7,
    nombre:      'Macetero Huerta',
    descripcion: 'Macetero de tela geotextil de gran volumen para huerta. Ideal para hortalizas y producción en espacios reducidos.',
    imagen:      '',
    precio:      'Consultar',
    variantes:   [],
  },
];

export const sobre = {
  titulo:     'Ingeniería radicular para el campo',
  historia:   'GeoFab Argentina fabrica contenedores en tela geotextil técnica para la producción agrícola y hortícola profesional. La tela geotextil promueve la poda aérea natural de raíces, elimina el enraizamiento circular y previene la pudrición por exceso de humedad. Diseñado para productores, viveros y proyectos de cultivo intensivo que exigen resultados consistentes y reproducibles.',
  imagen:     'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
  nombreFoto: 'Producción GeoFab Argentina',
};

export const diferenciales = [
  {
    icono: '🌱',
    titulo: 'Raíces más sanas',
    texto:  'La tela promueve la poda aérea natural. Sin raíces circulares ni espirales. Mayor densidad radicular activa.',
  },
  {
    icono: '💧',
    titulo: 'Sin pudrición radicular',
    texto:  'Drenaje libre y aireación constante. Sin acumulación de humedad excesiva. Control hídrico preciso.',
  },
  {
    icono: '📈',
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
