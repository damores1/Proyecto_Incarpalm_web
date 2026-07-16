"use client";

import { useEffect, useState } from "react";
import { flujoPedido } from "@/data/capacidades";

const descripciones = [
  "El cliente solicita cajas de cartón según cantidad, tipo, medidas y fecha requerida.",
  "El área responsable revisa requerimientos, disponibilidad y condiciones del pedido.",
  "Se programa la producción y se asignan recursos, materiales y órdenes de trabajo.",
  "Se fabrican las cajas de cartón corrugado y se aplica control de calidad.",
  "El producto terminado se registra y queda disponible para despacho.",
  "Logística programa el transporte y realiza el seguimiento de la entrega.",
  "El cliente confirma la recepción y el pedido queda cerrado en el sistema."
];

export default function Procesos() {

  const [pedidos, setPedidos] = useState([]);

  const [nuevoPedido, setNuevoPedido] = useState({
    cliente: "",
    tipoCaja: "",
    cantidad: ""
  });

  useEffect(() => {
    cargarPedidos();
  }, []);

  async function cargarPedidos() {
    try {
      const respuesta = await fetch("http://localhost:8080/api/pedidos");
      const datos = await respuesta.json();
      setPedidos(datos);
    } catch (error) {
      console.error(error);
    }
  }

  async function guardarPedido() {

    if (
      !nuevoPedido.cliente ||
      !nuevoPedido.tipoCaja ||
      !nuevoPedido.cantidad
    ) {
      alert("Complete todos los campos.");
      return;
    }

    const respuesta = await fetch("http://localhost:8080/api/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoPedido)
    });

    if (respuesta.ok) {

      setNuevoPedido({
        cliente: "",
        tipoCaja: "",
        cantidad: ""
      });

      cargarPedidos();

      alert("Pedido registrado correctamente");

    } else {

      alert("No fue posible registrar el pedido.");

    }
  }

  async function eliminarPedido(id) {

    const confirmar = confirm("¿Está seguro de eliminar este pedido?");

    if (!confirmar) return;

    const respuesta = await fetch(`http://localhost:8080/api/pedidos/${id}`, {
      method: "DELETE"
    });

    if (respuesta.ok) {
      cargarPedidos();
      alert("Pedido eliminado correctamente.");
    } else {
      alert("No fue posible eliminar el pedido.");
    }

  }

  return (
    <main className="section container">

      <span className="badge">
        Pedido → Producción → Entrega
      </span>

      <h1 className="page-title">
        Gestión de pedidos de cajas
      </h1>

      <p className="lead">
        Registre pedidos para iniciar el proceso productivo de INCARPALM S.A.
      </p>

      <section className="section">

        <h2>Registrar Pedido</h2>

        <div style={{ maxWidth: "500px" }}>

          <label>Cliente</label>

          <input
            className="input"
            type="text"
            value={nuevoPedido.cliente}
            onChange={(e) =>
              setNuevoPedido({
                ...nuevoPedido,
                cliente: e.target.value
              })
            }
          />

          <br /><br />

          <label>Tipo de caja</label>

          <select
            className="input"
            value={nuevoPedido.tipoCaja}
            onChange={(e) =>
              setNuevoPedido({
                ...nuevoPedido,
                tipoCaja: e.target.value
              })
            }
          >
            <option value="">Seleccione...</option>
            <option>Caja corrugada simple</option>
            <option>Caja corrugada doble</option>
            <option>Caja troquelada</option>
            <option>Caja para exportación</option>
            <option>Caja personalizada</option>
          </select>

          <br /><br />

          <label>Cantidad</label>

          <input
            className="input"
            type="number"
            value={nuevoPedido.cantidad}
            onChange={(e) =>
              setNuevoPedido({
                ...nuevoPedido,
                cantidad: e.target.value
              })
            }
          />

          <br /><br />

          <button
            className="btn btn-primary"
            onClick={guardarPedido}
          >
            Guardar Pedido
          </button>

        </div>

      </section>

      <div className="timeline">
        {flujoPedido.map((paso, index) => (
          <div className="step" key={paso}>
            <strong>{index + 1}. {paso}</strong>
            <p>{descripciones[index]}</p>
          </div>
        ))}
      </div>

      <section className="section">

        <h2>Pedidos registrados</h2>

        <table className="table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Tipo de caja</th>
              <th>Cantidad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>

          </thead>

          <tbody>

            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.cliente}</td>
                <td>{pedido.tipoCaja}</td>
                <td>{pedido.cantidad}</td>
                <td>{pedido.estado}</td>

                <td>
                  <button
                    onClick={() => eliminarPedido(pedido.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </section>

    </main>
  );
}