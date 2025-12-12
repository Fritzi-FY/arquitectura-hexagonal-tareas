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