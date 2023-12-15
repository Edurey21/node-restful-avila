# Endpoint: POST /recursos

Crea un nuevo recurso.


## Parámetros de Solicitud
- La solicitud debe incluir un cuerpo JSON con la siguiente información:

```http
nombre (obligatorio): Nombre del recurso.
descripcion (obligatorio): Descripción del recurso.
```

## Ejemplo de Solicitud
```http
POST /recursos
{
  "nombre": "Nueva Sustancia",
  "descripcion": "Descripción detallada de la nueva sustancia."
}
```


## Respuesta Exitosa (Código 201 Created)
```json
{
  "id_recurso": 11,
  "nombre": "Nueva Sustancia",
  "descripcion": "Descripción detallada de la nueva sustancia."
}
```


## Respuestas de Errores Posibles
- Código 400 Bad Request:
```json
{
  "errno": 400,
  "error": "bad_request",
  "error_description": "La solicitud no incluye todos los parámetros necesarios."
}
```


Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```


## Notas Adicionales
- Asegúrate de incluir todos los parámetros necesarios en la solicitud.
- El identificador (id_recurso) es asignado automáticamente por el sistema al crear el recurso.