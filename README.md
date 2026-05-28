# Aplicación web basada en mapa de capacidades - INCARPALM S.A.

## Información del estudiante

- **Nombre:** David Alexis Amores Moya
- **Carrera:** Tecnología en Transformación Digital de Empresas
- **Asignatura / actividad:** Taller de desarrollo de aplicación web con React y Next.js


## Información de la empresa

- **Empresa:** INCARPALM S.A.
- **Sector:** Manufactura
- **Actividad principal:** Producción y comercialización de cajas de cartón de alta calidad.
- **Contexto del proyecto:** Durante el Prácticum 3 se identificó la necesidad de fortalecer la gestión de pedidos, clientes, producción y logística de salida mediante una aplicación web que permita mejorar el seguimiento operativo y la trazabilidad de entregas.

## Descripción de la aplicación

Esta aplicación web fue desarrollada con **React, Next.js y JavaScript**. Su finalidad es representar de manera funcional el mapa de capacidades de INCARPALM S.A., tomando como eje principal la gestión de pedidos de clientes y la logística de salida.

La aplicación incluye:

- Página principal con descripción del proyecto.
- Vista del mapa de capacidades de negocio.
- Vista del proceso digital de pedidos y entregas.
- Dashboard operativo con indicadores básicos.
- Formulario demo para registrar pedidos.
- Configuración opcional de login con Google usando NextAuth.

## Mapa de capacidades

El mapa de capacidades se organiza en tres grupos:

### Capacidades estratégicas

- Gestión comercial
- Gestión de pedidos
- Planificación de producción

### Capacidades operativas

- Control de producción
- Logística de salida
- Trazabilidad de entregas

### Capacidades de soporte

- Gestión de clientes
- Reportes gerenciales
- Seguridad y acceso

## Aplicación objetivo

La aplicación objetivo es un sistema web para apoyar el registro y seguimiento de pedidos de clientes en INCARPALM S.A. Esta solución permite visualizar pedidos, revisar estados, relacionar la operación con el mapa de capacidades y mostrar indicadores básicos para la toma de decisiones.

## Tecnologías utilizadas

- React
- Next.js
- JavaScript
- CSS

## Instalación del proyecto

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Entrar en la carpeta del proyecto:

```bash
cd incarpalm-capacidades-next
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador:

```bash
http://localhost:3000
```

## Configuración opcional de login con Google

Para activar el login con Google se debe crear un archivo `.env.local` tomando como base `.env.example`:

```bash
GOOGLE_CLIENT_ID=coloca_aqui_tu_client_id
GOOGLE_CLIENT_SECRET=coloca_aqui_tu_client_secret
NEXTAUTH_SECRET=coloca_una_clave_segura
NEXTAUTH_URL=http://localhost:3000
```

Luego se deben crear las credenciales OAuth en Google Cloud Console y colocar como URI de redirección:

```bash
http://localhost:3000/api/auth/callback/google
```

## Estructura del proyecto

```bash
app/
  api/auth/[...nextauth]/route.js
  capacidades/page.js
  dashboard/page.js
  procesos/page.js
  globals.css
  layout.js
  page.js
components/
  AuthProvider.js
  CapabilityCard.js
  Navbar.js
data/
  capacidades.js
README.md
package.json
.env.example
```
