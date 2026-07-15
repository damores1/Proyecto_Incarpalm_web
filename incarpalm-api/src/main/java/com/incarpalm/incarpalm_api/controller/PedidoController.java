package com.incarpalm.incarpalm_api.controller;

import com.incarpalm.incarpalm_api.model.Pedido;
import com.incarpalm.incarpalm_api.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

        return pedidoRepository.save(pedido);
    }

}