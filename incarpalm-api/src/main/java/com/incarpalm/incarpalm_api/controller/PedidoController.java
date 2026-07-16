package com.incarpalm.incarpalm_api.controller;

import com.incarpalm.incarpalm_api.model.Pedido;
import com.incarpalm.incarpalm_api.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(origins = "http://localhost:3000")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @GetMapping
    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }

    @PostMapping
    public Pedido guardarPedido(@RequestBody Pedido pedido) {

        pedido.setEstado("Pendiente");
        pedido.setFechaPedido(LocalDate.now());

        return pedidoRepository.save(pedido);
    }

    @PutMapping("/{id}")
    public Pedido actualizarPedido(@PathVariable Long id, @RequestBody Pedido pedidoActualizado) {

        Optional<Pedido> pedidoExistente = pedidoRepository.findById(id);

        if (pedidoExistente.isPresent()) {

            Pedido pedido = pedidoExistente.get();

            pedido.setCliente(pedidoActualizado.getCliente());
            pedido.setTipoCaja(pedidoActualizado.getTipoCaja());
            pedido.setCantidad(pedidoActualizado.getCantidad());

            return pedidoRepository.save(pedido);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void eliminarPedido(@PathVariable Long id) {
        pedidoRepository.deleteById(id);
    }

}