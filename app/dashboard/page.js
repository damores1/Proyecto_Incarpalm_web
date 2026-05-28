import { pedidosDemo } from "@/data/capacidades";

export default function DashboardPage() {
  const total = pedidosDemo.length;
  const entregados = pedidosDemo.filter((pedido) => pedido.estado === "Entregado").length;
  const pendientes = total - entregados;

  return (
    <main className="section container">
      <span className="badge">Indicadores</span>
      <h1>Dashboard operativo</h1>
      <p>Vista inicial para controlar pedidos, producción y logística de salida.</p>
      <div className="grid">
        <div className="card"><h2>{total}</h2><p>Pedidos registrados</p></div>
        <div className="card"><h2>{pendientes}</h2><p>Pedidos pendientes</p></div>
        <div className="card"><h2>{entregados}</h2><p>Pedidos entregados</p></div>
      </div>
      <div className="card">
        <h2>Registrar pedido</h2>
        <form className="form">
          <input className="input" placeholder="Nombre del cliente" />
          <input className="input" placeholder="Producto solicitado" />
          <input className="input" placeholder="Cantidad" type="number" />
          <input className="input" placeholder="Fecha de entrega" type="date" />
          <button className="btn btn-primary" type="button">Guardar pedido demo</button>
        </form>
      </div>
    </main>
  );
}
