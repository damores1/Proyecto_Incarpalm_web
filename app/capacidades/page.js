import { mapaCapacidades } from "@/data/capacidades";

export default function Capacidades() {
  return (
    <main className="section container">
      <span className="badge">Módulos de la aplicación objetivo</span>
      <h1 className="page-title">Capacidades de INCARPALM S.A.</h1>
      <p className="lead">
        Cada módulo de la aplicación se relaciona con una macrocapacidad del mapa definido para la empresa.
      </p>

      <div className="module-grid">
        {mapaCapacidades.map((capacidad) => (
          <article className="module-card" id={capacidad.id} key={capacidad.id}>
            <div className="module-header">
              <span>{capacidad.icono}</span>
              <h2>{capacidad.titulo}</h2>
            </div>
            <p>{capacidad.descripcion}</p>
            <div className="sub-grid">
              {capacidad.subcapacidades.map((sub) => (
                <div className="sub-card" key={sub}>{sub}</div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
