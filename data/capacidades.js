export const mapaCapacidades = [
  {
    id: "pedidos",
    icono: "📦",
    titulo: "Gestión de Pedidos",
    descripcion: "Administra la solicitud, validación, registro y confirmación de pedidos de cajas de cartón.",
    subcapacidades: [
      "Recepción de pedidos de clientes",
      "Validación de requerimientos",
      "Registro de pedidos",
      "Confirmación de pedidos"
    ]
  },
  {
    id: "planificacion",
    icono: "🏭",
    titulo: "Planificación de Producción",
    descripcion: "Organiza especificaciones, recursos, materiales y órdenes de trabajo antes de fabricar.",
    subcapacidades: [
      "Revisión de especificaciones del pedido",
      "Programación de producción",
      "Asignación de recursos y materiales",
      "Planificación de órdenes de trabajo"
    ]
  },
  {
    id: "produccion",
    icono: "⚙️",
    titulo: "Producción y Fabricación",
    descripcion: "Controla la preparación de materiales, fabricación de cajas, calidad y equipos productivos.",
    subcapacidades: [
      "Preparación de materiales",
      "Fabricación de cajas de cartón corrugado",
      "Control de calidad",
      "Mantenimiento de equipos de producción"
    ]
  },
  {
    id: "inventarios",
    icono: "📊",
    titulo: "Control de Inventarios",
    descripcion: "Gestiona materiales, existencias y almacenamiento de producto terminado.",
    subcapacidades: [
      "Recepción de materiales",
      "Registro de inventario",
      "Control de existencias",
      "Almacenamiento de producto terminado"
    ]
  },
  {
    id: "logistica",
    icono: "🚚",
    titulo: "Logística y Entregas",
    descripcion: "Coordina despachos, transporte, seguimiento y confirmación de recepción por parte del cliente.",
    subcapacidades: [
      "Programación de despachos",
      "Transporte de pedidos",
      "Seguimiento de entregas",
      "Confirmación de recepción por el cliente"
    ]
  }
];

export const capacidades = [
  {
    categoria: "Capacidades operativas principales",
    items: mapaCapacidades.map((capacidad) => ({
      nombre: capacidad.titulo,
      descripcion: capacidad.descripcion
    }))
  },
  {
    categoria: "Capacidades de soporte digital",
    items: [
      { nombre: "Gestión de clientes", descripcion: "Administración de datos de clientes, contactos, direcciones y referencias comerciales." },
      { nombre: "Reportes gerenciales", descripcion: "Visualización de indicadores sobre pedidos, producción, inventario y entregas." },
      { nombre: "Seguridad y acceso", descripcion: "Autenticación de usuarios y control básico de acceso al sistema." }
    ]
  }
];

export const pedidosDemo = [
  { id: "PED-001", cliente: "Bananera El Oro", producto: "Caja banano premium", estado: "En producción", entrega: "2026-06-03" },
  { id: "PED-002", cliente: "Exportadora del Sur", producto: "Caja corrugada reforzada", estado: "Listo para despacho", entrega: "2026-06-04" },
  { id: "PED-003", cliente: "Cliente local", producto: "Caja personalizada", estado: "Entregado", entrega: "2026-05-27" }
];

export const flujoPedido = [
  "Pedido recibido",
  "Validación",
  "Planificación",
  "Producción",
  "Inventario",
  "Despacho",
  "Entregado"
];
