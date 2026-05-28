export default function CapabilityCard({ categoria, items }) {
  return (
    <article className="card capability">
      <span className="badge">{categoria}</span>
      <ul>
        {items.map((item) => (
          <li key={item.nombre}>
            <strong>{item.nombre}:</strong> {item.descripcion}
          </li>
        ))}
      </ul>
    </article>
  );
}
