// ─────────────────────────────────────────────────────────────
// ARCHIVO DE CONFIGURACIÓN CENTRAL — editar solo este archivo
// para adaptar la landing a otro cliente.
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre: 'GeoFab',
  tagline: 'Macetas y geotextiles para que tus plantas crezcan mejor',
  descripcion: 'Productos de jardinería en geotextil, hechos a mano con materiales de calidad.',
  whatsapp: '5491100000000', // reemplazar con número real (sin +, sin espacios)
  instagram: 'https://www.instagram.com/geofab/', // reemplazar con URL real
  zona: 'Envíos a todo el país',
  anio: '2024',
};

// Imagen del Hero — reemplazar ruta por foto real del producto estrella
export const heroImagen = 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=900&q=80';

export const productos = [
  {
    id: 1,
    nombre: 'Maceta Redonda Pequeña',
    descripcion: 'Ideal para suculentas y plantas de interior. Geotextil transpirable de 180 g/m².',
    precio: '$2.500',
    imagen: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
  },
  {
    id: 2,
    nombre: 'Maceta Redonda Grande',
    descripcion: 'Para árboles frutales y plantas de exterior. Mayor aireación de raíces.',
    precio: '$4.800',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    id: 3,
    nombre: 'Maceta Cuadrada Mediana',
    descripcion: 'Diseño práctico para balcones y terrazas. Con asa reforzada.',
    precio: '$3.200',
    imagen: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80',
  },
  {
    id: 4,
    nombre: 'Kit Huerta Urbana',
    descripcion: '3 macetas rectangulares para aromáticas y vegetales. Perfectas para ventanas.',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
  },
  {
    id: 5,
    nombre: 'Bolsa de Cultivo 10 L',
    descripcion: 'Para cultivar papa, tomate y pimientos en espacios reducidos.',
    precio: '$1.800',
    imagen: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
  },
  {
    id: 6,
    nombre: 'Maceta Colgante',
    descripcion: 'Con ganchos metálicos resistentes. Ideal para plantas colgantes y helechos.',
    precio: '$2.900',
    imagen: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80',
  },
];

export const sobre = {
  historia: 'GeoFab nació de la pasión por las plantas y el trabajo artesanal. Cada maceta se fabrica a mano en nuestro taller, usando geotextil seleccionado que promueve el drenaje, la aireación y el crecimiento sano de las raíces.',
  imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
  nombreFoto: 'Taller GeoFab',
};

export const diferenciales = [
  {
    icono: '🌿',
    titulo: 'Hecho a mano',
    texto: 'Cada pieza sale de nuestras manos. Sin producción en serie, con atención al detalle.',
  },
  {
    icono: '🧵',
    titulo: 'Geotextil de calidad',
    texto: 'Usamos tela no tejida certificada de 180–300 g/m², resistente y transpirable.',
  },
  {
    icono: '🚚',
    titulo: 'Envíos a todo el país',
    texto: 'Despachamos por correo y encomienda a cualquier punto de Argentina.',
  },
];

export const testimonios = [
  {
    nombre: 'María G.',
    texto: 'Las macetas son hermosas y muy resistentes. Mis plantas crecieron el doble desde que las cambié a GeoFab.',
    estrellas: 5,
  },
  {
    nombre: 'Carlos R.',
    texto: 'Compré el kit de huerta urbana y es exactamente lo que necesitaba para el balcón. Excelente calidad.',
    estrellas: 5,
  },
  {
    nombre: 'Lucía M.',
    texto: 'Muy buena atención y envío rápido. Las macetas colgantes quedaron perfectas en el patio.',
    estrellas: 5,
  },
];
