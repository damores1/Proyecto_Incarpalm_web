# Sistema de Gestión de Pedidos - INCARPALM S.A.

## Información del estudiante

**Nombre:** David Amores  
**Carrera:** Tecnología Superior en Transformación Digital de Empresas  
**Universidad:** Universidad Técnica Particular de Loja (UTPL)

---

# Empresa

## INCARPALM S.A.

INCARPALM S.A. es una empresa del sector manufacturero dedicada a la fabricación de cajas de cartón corrugado para diferentes sectores comerciales e industriales.

El presente proyecto desarrolla una propuesta de transformación digital enfocada en la gestión de pedidos, producción y logística de salida, tomando como referencia el mapa de capacidades desarrollado durante el Prácticum.

---

# Descripción de la aplicación

La aplicación permite gestionar el proceso de registro y consulta de pedidos de cajas de cartón mediante una arquitectura cliente-servidor.

El sistema fue desarrollado utilizando React para el frontend y Spring Boot para el backend, implementando una API REST conectada a una base de datos MySQL.

---

# Funcionalidades

- Registro de pedidos.
- Consulta de pedidos registrados.
- Eliminación de pedidos.
- Persistencia de la información en MySQL.
- Integración Frontend (React) y Backend (Spring Boot).

---

# Tecnologías utilizadas

## Frontend

- React
- Next.js
- JavaScript

## Backend

- Java
- Spring Boot
- Spring Data JPA

## Base de datos

- MySQL

## Herramientas

- Visual Studio Code
- Maven
- Git
- GitHub
- MySQL Workbench

---

# Mapa de capacidades implementado

La aplicación representa las capacidades principales definidas durante el Prácticum:

- Gestión de pedidos
- Planificación de producción
- Producción
- Control de calidad
- Gestión de inventario
- Logística de salida
- Confirmación de entrega

Estas capacidades se reflejan en el flujo de pedidos implementado dentro de la aplicación.

---

# Arquitectura

Frontend (React / Next.js)

↓

API REST (Spring Boot)

↓

Spring Data JPA

↓

MySQL

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/damores1/Proyecto_Incarpalm_web.git
```

## Frontend

```bash
npm install

npm run dev
```

El frontend estará disponible en:

```
http://localhost:3000
```

---

## Backend

Ingresar a la carpeta:

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

## Base de datos

Crear una base de datos llamada:

```
incarpalm_db
```

Configurar el archivo:

```
application.properties
```

con los datos de conexión de MySQL.

---

# Flujo del sistema

Cliente

↓

Registro del pedido

↓

Validación

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

# Autor

David Amores

Universidad Técnica Particular de Loja

2026