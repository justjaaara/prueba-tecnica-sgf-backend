<p align="center">
  <h1>API de Gestión de Animales</h1>
</p>

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

## Descripción

API RESTful desarrollada con NestJS y TypeScript para gestionar información de diferentes tipos de animales. Este servicio permite Crear, Leer y Eliminar (CRD) registros de animales con sus características, usando MySQL como base de datos y Prisma como ORM.

## Características

- **Crear**: Agregar nuevos animales con su información completa
- **Leer**: Obtener todos los animales o un animal específico por su ID
- **Eliminar**: Remover animales de la base de datos
- **Validación**: Validación de datos de entrada
- **Swagger**: Documentación de API integrada
- **MySQL**: Base de datos relacional
- **Prisma ORM**: Para modelado y consultas a la base de datos

## Modelo de datos

El servicio gestiona información de animales con las siguientes propiedades:

| Campo        | Tipo     | Descripción                                     |
| ------------ | -------- | ----------------------------------------------- |
| id           | Int      | Identificador único (auto-incrementable)        |
| nombre       | String   | Nombre del animal                               |
| tipo         | Enum     | Categoría: AVE, MAMIFERO, ANFIBIO, REPTIL o PEZ |
| descripcion  | Text     | Descripción detallada del animal                |
| wikipediaUrl | String   | Enlace a su búsqueda en Wikipedia               |
| imagenUrl    | String   | URL de imagen representativa                    |
| createdAt    | DateTime | Fecha de creación del registro                  |
| updatedAt    | DateTime | Fecha de actualización del registro             |

## 🚀 Guía de Instalación Detallada

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v18 o superior) - [Descargar](https://nodejs.org/)
- Git - [Descargar](https://git-scm.com/downloads)
- Visual Studio Code (recomendado) - [Descargar](https://code.visualstudio.com/)
- El backend del proyecto corriendo en http://localhost:3000

### 1. Clonar e Instalar

```bash
# Instalar pnpm globalmente
npm install -g pnpm

# Clonar el repositorio
git clone <url-del-repositorio>
cd prueba-tecnica-fsg-frontend

# Instalar dependencias
pnpm install
```

### 2. Configuración del Entorno

1. **Crear archivo de variables de entorno**:

   - En la raíz del proyecto, crea un archivo llamado `.env`
   - Copia y pega la siguiente configuración:

   ```
   VITE_API_URL_BACKEND=http://localhost:3000
   ```

2. **Verificar la estructura del proyecto**:
   ```
   src/
   ├── components/
   ├── services/
   ├── types/
   ├── App.tsx
   └── main.tsx
   ```

### 3. Iniciar el Desarrollo

```bash
# Iniciar el servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en:

- URL: http://localhost:5173
- Red local: http://127.0.0.1:5173

### 4. Scripts Disponibles

| Comando        | Descripción                           |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo      |
| `pnpm build`   | Crea la versión de producción         |
| `pnpm preview` | Previsualiza la versión de producción |
| `pnpm test`    | Ejecuta los tests                     |

### 5. Verificación del Proyecto

Comprueba que todo funcione correctamente:

1. **Conexión con el backend**:

   - Verifica que el backend esté corriendo en http://localhost:3000
   - Prueba el endpoint de prueba: http://localhost:3000/api

2. **Funcionalidades principales**:
   - [ ] El listado de animales se carga correctamente
   - [ ] Las imágenes se muestran en las cards
   - [ ] La búsqueda por ID funciona
   - [ ] El formulario de creación se abre
   - [ ] Los modales de detalle funcionan

## Endpoints de la API

### `GET /animals`

Obtiene todos los animales registrados en la base de datos.

**Respuesta**:

```json
[
  {
    "id": 1,
    "nombre": "León",
    "tipo": "MAMIFERO",
    "descripcion": "El león es un mamífero carnívoro de la familia de los félidos...",
    "wikipediaUrl": "https://es.wikipedia.org/wiki/Panthera_leo",
    "imagenUrl": "https://ejemplo.com/leon.jpg",
    "createdAt": "2025-05-21T12:00:00.000Z",
    "updatedAt": "2025-05-21T12:00:00.000Z"
  },
  ...
]
```

### `GET /animals/:id`

Obtiene un animal específico por su ID.

**Parámetros**:

- `id`: ID del animal (número entero)

**Respuesta exitosa (200)**:

```json
{
  "id": 1,
  "nombre": "León",
  "tipo": "MAMIFERO",
  "descripcion": "El león es un mamífero carnívoro de la familia de los félidos...",
  "wikipediaUrl": "https://es.wikipedia.org/wiki/Panthera_leo",
  "imagenUrl": "https://ejemplo.com/leon.jpg",
  "createdAt": "2025-05-21T12:00:00.000Z",
  "updatedAt": "2025-05-21T12:00:00.000Z"
}
```

**Error (404)**:

```json
{
  "statusCode": 404,
  "message": "Animal con ID 1 no se encontró",
  "error": "Not Found"
}
```

### `POST /animals`

Crea un nuevo animal.

**Cuerpo de la petición**:

```json
{
  "nombre": "Águila",
  "tipo": "AVE",
  "descripcion": "El águila es un ave rapaz de gran tamaño...",
  "wikipediaUrl": "https://es.wikipedia.org/wiki/Aquila_(género)",
  "imagenUrl": "https://ejemplo.com/aguila.jpg"
}
```

**Respuesta exitosa (201)**:

```json
{
  "id": 2,
  "nombre": "Águila",
  "tipo": "AVE",
  "descripcion": "El águila es un ave rapaz de gran tamaño...",
  "wikipediaUrl": "https://es.wikipedia.org/wiki/Aquila_(género)",
  "imagenUrl": "https://ejemplo.com/aguila.jpg",
  "createdAt": "2025-05-21T12:30:00.000Z",
  "updatedAt": "2025-05-21T12:30:00.000Z"
}
```

### `DELETE /animals/:id`

Elimina un animal por su ID.

**Parámetros**:

- `id`: ID del animal a eliminar (número entero)

**Respuesta exitosa (200)**:

```json
{
  "id": 1,
  "nombre": "León",
  "tipo": "MAMIFERO",
  "descripcion": "El león es un mamífero carnívoro de la familia de los félidos...",
  "wikipediaUrl": "https://es.wikipedia.org/wiki/Panthera_leo",
  "imagenUrl": "https://ejemplo.com/leon.jpg",
  "createdAt": "2025-05-21T12:00:00.000Z",
  "updatedAt": "2025-05-21T12:00:00.000Z"
}
```

**Error (404)**:

```json
{
  "statusCode": 404,
  "message": "Animal con ID 1 no se encontró para eliminar",
  "error": "Not Found"
}
```

## Documentación con Swagger

La API está documentada utilizando Swagger. Para acceder a la documentación interactiva:

1. Inicia el servidor: `pnpm run start:dev`
2. Navega a `http://localhost:3000/api` en tu navegador
3. Explora y prueba los endpoints disponibles

## Estructura del proyecto

```
backend/
├── prisma/                  # Esquema y migraciones de Prisma
│   ├── schema.prisma        # Definición del modelo de datos
│   └── migrations/          # Historial de migraciones de la base de datos
├── generated/               # Cliente Prisma generado automáticamente
├── src/
│   ├── main.ts              # Punto de entrada de la aplicación
│   ├── app.module.ts        # Módulo principal
│   ├── animals/             # Módulo de animales
│   │   ├── animals.controller.ts    # Controlador REST
│   │   ├── animals.service.ts       # Servicios y lógica de negocio
│   │   └── dto/             # Objetos de transferencia de datos
│   │       └── create-animal.dto.ts # DTO para creación
│   └── prisma/              # Servicio de Prisma para NestJS
│       ├── prisma.module.ts
│       └── prisma.service.ts
└── test/                    # Pruebas
```

## Tecnologías utilizadas

- **NestJS**: Framework para construir aplicaciones del lado del servidor
- **TypeScript**: Lenguaje de programación tipado
- **Prisma**: ORM (Object-Relational Mapping) para bases de datos
- **MySQL**: Sistema de gestión de bases de datos
- **Swagger/OpenAPI**: Documentación de la API
- **class-validator**: Validación de datos de entrada
- **CORS**: Habilitado para interacción con el frontend

## Desarrollo

Para contribuir al desarrollo de este proyecto:

1. Clona el repositorio
2. Instala las dependencias: `pnpm install`
3. Crea una base de datos MySQL localmente
4. Configura el archivo `.env` con la URL de conexión
5. Ejecuta las migraciones: `npx prisma migrate dev`
6. Inicia el servidor en modo desarrollo: `pnpm run start:dev`

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Contacto

Para más información, contacta con el equipo de desarrollo:
