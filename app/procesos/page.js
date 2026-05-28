import { flujoPedido, pedidosDemo } from "@/data/capacidades";

export default function Procesos() {
  return (
    <main className="section container">
      <span className="badge">Pedido → Producción → Entrega</span>
      <h1 className="page-title">Proceso digital de pedidos de cajas</h1>
      <p className="lead">
        El proceso integra las capacidades del mapa y permite visualizar cómo un pedido avanza desde su recepción hasta la confirmación del cliente.
      </p>

      <div className="timeline">
        {flujoPedido.map((paso, index) => (
          <div className="step" key={paso}>
            <strong>{index + 1}. {paso}</strong>
            <p>{descripciones[index]}</p>
          </div>
        ))}
      </div>

      <section className="section">
        <h2>Pedidos demostrativos</h2>
        <table className="table">
          <thead>
            <tr><th>Código</th><th>Cliente</th><th>Producto</th><th>Estado</th><th>Entrega</th></tr>
          </thead>
          <tbody>
            {pedidosDemo.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.cliente}</td>
                <td>{pedido.producto}</td>
                <td className="status">{pedido.estado}</td>
                <td>{pedido.entrega}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

const descripciones = [
  "El cliente solicita cajas de cartón según cantidad, tipo, medidas y fecha requerida.",
  "El área responsable revisa requerimientos, disponibilidad y condiciones del pedido.",
  "Se programa la producción y se asignan recursos, materiales y órdenes de trabajo.",
  "Se fabrican las cajas de cartón corrugado y se aplica control de calidad.",
  "El producto terminado se registra y queda disponible para despacho.",
  "Logística programa el transporte y realiza el seguimiento de la entrega.",
  "El cliente confirma la recepción y el pedido queda cerrado en el sistema."
];
