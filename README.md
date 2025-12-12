Para realizar la prueba de Endpoints, usar Postman con los siguietes datos:

        ###
        POST http://localhost:3001/tareas
        Content-Type: application/json

        {
            "titulo": "Tarea 01: Exponer Trabajo del lab12"
        }



        ###
        GET http://localhost:3001/tareas
        Content-Type: application/json

        ###
        PATCH http://localhost:3001/tareas/1764368028953/completar
        Content-Type: application/json










📘 Arquitectura Hexagonal – Gestión de Tareas (Node.js + PostgreSQL)

Este proyecto implementa un sistema básico de gestión de tareas (CRUD) aplicando la Arquitectura Hexagonal o Puertos y Adaptadores, propuesta por Alistair Cockburn.
La aplicación está desarrollada en Node.js, usando Express como adaptador de entrada y PostgreSQL como adaptador de salida.

📐 1. Arquitectura del Proyecto

Este sistema sigue estrictamente la Arquitectura Hexagonal, dividiendo el proyecto en:

        1. Dominio (Core)

            Reglas de negocio puras

            No dependen de frameworks ni bases de datos

            Incluye:

            Entidad Tarea

            Casos de uso (CrearTarea, ListarTareas, CompletarTarea, EliminarTarea)

            Puertos (interfaces)

        2. Adaptadores

            Entrada: API REST con Express

            Salida: Repositorios (Memoria, PostgreSQL)

            3. Configuración / Ensamblaje

            Archivo index.js que une los casos de uso con los adaptadores

📁 2. Estructura de Carpetas
        src/
        ├── dominio
        │     ├── entidades/
        │     │     └── Tarea.js
        │     ├── puertos/
        │     │     └── RepositorioTareas.js
        │     └── casos-de-uso/
        │           ├── CrearTarea.js
        │           ├── ListarTareas.js
        │           ├── CompletarTarea.js
        │           └── EliminarTarea.js
        │
        ├── adaptadores
        │     ├── entrada/
        │     │     └── web/
        │     │           └── app.js
        │     └── salida/
        │           ├── RepoMemoria.js
        │           └── RepoPostgres.js
        │
        └── index.js


Esta estructura garantiza separación de responsabilidades, mantener el dominio limpio y facilitar reemplazar tecnologías externas sin modificar la lógica interna.

🛠️ 3. Requisitos

        Node.js v16+

        PostgreSQL 12+

        Git

        Postman / Thunder Client / cURL (para pruebas)

        Dependencias instaladas:

        npm install express pg

🗄️ 4. Configuración de PostgreSQL

        Ejecuta en tu consola psql o herramienta como pgAdmin:

        CREATE DATABASE tareasdb;

        CREATE TABLE tareas (
        id BIGINT PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        estado VARCHAR(20) NOT NULL
        );


        Configura tu conexión en RepoPostgres.js:

        this.pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'tareasdb',
        password: 'admin',
        port: 5432
        });

🚀 5. Cómo Ejecutar el Proyecto

        Desde la raíz del proyecto:

        node src/index.js


        Resultado:

        Servidor ejecutándose en http://localhost:3001

🔗 6. Endpoints (CRUD Completo)
        ✔ 1. Crear tarea
        POST /tareas
        Content-Type: application/json
        {
        "titulo": "Ir al gimnasio"
        }

        ✔ 2. Listar tareas
        GET /tareas

        ✔ 3. Completar tarea
        PATCH /tareas/:id/completar

        ✔ 4. Eliminar tarea
        DELETE /tareas/:id

🧩 7. Diagrama de Arquitectura Hexagonal

        Incluye el diagrama generado:

        Diagrama.png


📌 8. Beneficios de la Arquitectura Hexagonal

        Independencia tecnológica

        Altamente testeable

        Dominio desacoplado

        Adaptadores reemplazables

        Cambiar PostgreSQL por MongoDB sin tocar casos de uso

        Mantiene principios SOLID y separación de capas

✨ 9. Mejoras Futuras

            Agregar logs estructurados

            Tests automáticos con Jest

            Agregar repositorio MongoDB

            Crear migraciones automáticas

            Añadir DTOs y validaciones

👨‍💻 Autor

Fritz Flores
Estudiante de Ingeniería de Sistemas – IS388 Construcción y Evolución de Software
Se usó la IA de ChatGPT en su versión Programador para la realización de este laboratorio