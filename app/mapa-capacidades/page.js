import Link from "next/link";
import { mapaCapacidades, flujoPedido } from "@/data/capacidades";

export default function MapaCapacidades() {
  return (
    <main className="section container">
      <span className="badge">Arquitectura empresarial · INCARPALM S.A.</span>
      <h1 className="page-title">Mapa de capacidades operativo</h1>
      <p className="lead">
        Esta vista representa el mapa de capacidades definido en el Practicum 3. El flujo conecta la gestión de pedidos
        con planificación, producción, inventarios y logística de entregas.
      </p>

      <section className="capacity-flow" aria-label="Flujo de macrocapacidades">
        {mapaCapacidades.map((capacidad, index) => (
          <div className="flow-item" key={capacidad.id}>
            <article className="macro-card">
              <div className="macro-icon">{capacidad.icono}</div>
              <h2>{capacidad.titulo}</h2>
              <p>{capacidad.descripcion}</p>
              <ul>
                {capacidad.subcapacidades.map((sub) => <li key={sub}>{sub}</li>)}
              </ul>
              <Link className="small-link" href={`/capacidades#${capacidad.id}`}>Ver módulo</Link>
            </article>
            {index < mapaCapacidades.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </section>

      <section className="section compact-section">
        <h2>Flujo digital del pedido</h2>
        <div className="process-strip">
          {flujoPedido.map((paso, index) => (
            <div className="process-pill" key={paso}>
              <span>{index + 1}</span>
              {paso}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
