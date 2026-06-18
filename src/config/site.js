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
export const heroImagen = 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=900&q=80';

export const productos = [
  {
    id: 1,
    nombre:      'Maceta Redonda 3 L',
    descripcion: 'Plantines y trasplante. Poda aérea de raíces. Sin enraizamiento circular.',
    spec:        '200 g/m²  ·  ∅ 16 × 17 cm',
    precio:      '$1.800',
    imagen:      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
  },
  {
    id: 2,
    nombre:      'Maceta Redonda 10 L',
    descripcion: 'Frutales en maceta y horticultura intensiva. Control total del sistema radicular.',
    spec:        '220 g/m²  ·  ∅ 26 × 26 cm',
    precio:      '$3.200',
    imagen:      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    id: 3,
    nombre:      'Maceta Cuadrada 7 L',
    descripcion: 'Alta densidad de plantación en estanterías y estructuras. Optimiza el espacio productivo.',
    spec:        '200 g/m²  ·  23 × 23 × 25 cm',
    precio:      '$2.800',
    imagen:      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80',
  },
  {
    id: 4,
    nombre:      'Bolsa de Cultivo 25 L',
    descripcion: 'Papa, tomate y pimiento a campo. Aireación superior al plástico. Drenaje libre garantizado.',
    spec:        '250 g/m²  ·  ∅ 36 × 35 cm',
    precio:      'Consultar',
    imagen:      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
  },
  {
    id: 5,
    nombre:      'Kit Producción 5 × 10 L',
    descripcion: 'Pack para huerta profesional. Mayor uniformidad de cultivo. Fácil transporte y almacenamiento.',
    spec:        '220 g/m²  ·  5 unidades × 10 L',
    precio:      'Consultar',
    imagen:      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
  },
  {
    id: 6,
    nombre:      'Maceta Colgante 5 L',
    descripcion: 'Refuerzo metálico para estructuras de soporte. Drenaje libre. Apta para uso exterior.',
    spec:        '180 g/m²  ·  5 L',
    precio:      '$2.600',
    imagen:      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80',
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
