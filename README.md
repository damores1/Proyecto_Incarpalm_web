# Sistema de Gestión de Pedidos - INCARPALM S.A.

## Información del estudiante

**Nombre:** David Amores

**Carrera:** Tecnología Superior en Transformación Digital de Empresas

**Universidad:** Universidad Técnica Particular de Loja (UTPL)

---

# Información de la empresa

## INCARPALM S.A.

INCARPALM S.A. es una empresa del sector manufacturero dedicada a la fabricación de cajas de cartón corrugado para diferentes sectores comerciales e industriales. La empresa busca fortalecer sus procesos mediante iniciativas de transformación digital que permitan mejorar la gestión de pedidos, la planificación de la producción y la logística de salida.

---

# Descripción del proyecto

Este proyecto fue desarrollado como parte del Prácticum y tiene como objetivo implementar una aplicación web que represente el mapa de capacidades definido para INCARPALM S.A.

La solución permite gestionar pedidos de cajas de cartón mediante una arquitectura cliente-servidor utilizando React para el frontend, Spring Boot para el backend y MySQL como base de datos.

La aplicación demuestra el funcionamiento de una API REST integrada con una interfaz web, permitiendo la persistencia de la información y el intercambio de datos entre los diferentes componentes del sistema.

---

# Objetivo de la aplicación

Desarrollar una aplicación web que permita registrar y gestionar pedidos de cajas de cartón, apoyando el proceso de transformación digital de INCARPALM S.A. mediante una solución basada en React, Spring Boot y MySQL.

---

# Mapa de capacidades implementado

La aplicación representa las principales capacidades identificadas durante el Prácticum:

- Gestión de pedidos
- Planificación de producción
- Producción
- Control de calidad
- Gestión de inventario
- Logística de salida
- Confirmación de entrega

Estas capacidades se encuentran reflejadas dentro del flujo de trabajo implementado en la aplicación.

---

# Información de la aplicación

La aplicación permite administrar el proceso de registro y seguimiento de pedidos de cajas de cartón.

Entre sus principales funcionalidades se encuentran:

- Registro de nuevos pedidos.
- Consulta de pedidos registrados.
- Eliminación de pedidos.
- Persistencia de la información en una base de datos MySQL.
- Comunicación entre el frontend y el backend mediante servicios REST.
- Visualización del flujo del proceso de pedidos basado en el mapa de capacidades.

---

# Arquitectura tecnológica

La solución implementa una arquitectura de tres capas:

**Capa de presentación**

- React
- Next.js

**Capa de negocio**

- Spring Boot
- Java
- Spring Data JPA

**Capa de datos**

- MySQL

La comunicación entre React y Spring Boot se realiza mediante servicios REST utilizando el protocolo HTTP y el formato JSON.

---

# Tecnologías utilizadas

## Frontend

- React
- Next.js
- JavaScript
- HTML5
- CSS3

## Backend

- Java
- Spring Boot
- Spring Data JPA
- Maven

## Base de datos

- MySQL

## Herramientas

- Visual Studio Code
- Git
- GitHub
- MySQL Workbench

---

# Estructura del proyecto

```
Proyecto_Incarpalm_web/

│
├── app/                     → Frontend desarrollado en React (Next.js)
├── components/              → Componentes reutilizables
├── data/                    → Información utilizada por la aplicación
├── public/                  → Recursos estáticos
├── incarpalm-api/           → Backend desarrollado en Spring Boot
├── package.json
└── README.md
```

---

# Requisitos previos

Antes de ejecutar la aplicación es necesario tener instalado:

- Java JDK 21 o superior
- Node.js
- Maven
- MySQL Server
- Git
- Visual Studio Code (opcional)

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/damores1/Proyecto_Incarpalm_web.git
```

Ingresar al proyecto:

```bash
cd Proyecto_Incarpalm_web
```

---

## 2. Configurar la base de datos

Crear una base de datos en MySQL llamada:

```
incarpalm_db
```

Verificar los datos de conexión en el archivo:

```
incarpalm-api/src/main/resources/application.properties
```

Ejemplo:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/incarpalm_db
spring.datasource.username=root
spring.datasource.password=TU_CONTRASEÑA
```

---

## 3. Ejecutar el Backend

Ingresar a la carpeta del backend:

```bash
cd incarpalm-api
```

Ejecutar:

```bash
mvnw.cmd spring-boot:run
```

La API estará disponible en:

```
http://localhost:8080/api/pedidos
```

---

## 4. Ejecutar el Frontend

Abrir una nueva terminal y ubicarse en la carpeta principal del proyecto.

Instalar las dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm run dev
```

Abrir el navegador en:

```
http://localhost:3000
```

---

# Uso de la aplicación

1. Iniciar el backend mediante Spring Boot.

2. Iniciar el frontend con Next.js.

3. Acceder desde el navegador a:

```
http://localhost:3000
```

4. Registrar un nuevo pedido indicando:

- Cliente
- Tipo de caja
- Cantidad

5. Visualizar los pedidos registrados.

6. Eliminar pedidos cuando sea necesario.

Toda la información registrada se almacena en la base de datos MySQL mediante la API REST desarrollada en Spring Boot.

---

# Flujo del proceso

Cliente

↓

Registro del pedido

↓

Validación del pedido

↓

Planificación de producción

↓

Producción

↓

Control de calidad

↓

Inventario

↓

Despacho

↓

Entrega al cliente

---

# Repositorio

Repositorio del proyecto:

**https://github.com/damores1/Proyecto_Incarpalm_web**

---

# Autor

**David Amores**

Tecnología Superior en Transformación Digital de Empresas

Universidad Técnica Particular de Loja (UTPL)

2026