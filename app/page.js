import Link from "next/link";
import { capacidades, pedidosDemo } from "@/data/capacidades";
import CapabilityCard from "@/components/CapabilityCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Prácticum 3 · Transformación Digital</span>
            <h1>Aplicación web para pedidos, clientes y logística de salida</h1>
            <p>
              Esta propuesta digitaliza capacidades clave de INCARPALM S.A., especialmente la gestión de pedidos,
              el seguimiento de producción y la trazabilidad de entregas de cajas de cartón.
            </p>
            <div className="hero-actions"><Link className="btn btn-dark" href="/mapa-capacidades">Ver mapa de capacidades</Link><Link className="btn btn-outline" href="/dashboard">Ver dashboard</Link></div>
          </div>
          <div className="card">
            <h2>Aplicación objetivo</h2>
            <p>
              Sistema web que permite registrar pedidos, consultar clientes, controlar estados de producción y
              coordinar despachos para mejorar la logística de salida.
            </p>
            <p><strong>Empresa:</strong> INCARPALM S.A.</p>
            <p><strong>Sector:</strong> Manufactura de cajas de cartón.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Aplicación alineada al mapa de capacidades</h2>
        <p>El sistema se organiza según las macrocapacidades trabajadas en el Practicum: pedidos, planificación, producción, inventarios y logística.</p>
        <div className="grid">
          {capacidades.map((grupo) => <CapabilityCard key={grupo.categoria} {...grupo} />)}
        </div>
      </section>

      <section className="section container">
        <h2>Pedidos de ejemplo</h2>
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
