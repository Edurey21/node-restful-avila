# Endpoint: POST /planetas

Crea un nuevo planeta.


## Parámetros de Solicitud
- La solicitud debe incluir un cuerpo JSON con la siguiente información:

```http
nombre (obligatorio): Nombre del planeta.
descripcion (obligatorio): Descripción del planeta.
```


## Ejemplo de Solicitud
```http
POST /planetas
{
  "nombre": "Nuevo Planeta",
  "descripcion": "Descripción detallada del nuevo planeta."
}
```


## Respuesta Exitosa (Código 201 Created)
```json
{
  "id_planeta": 11,
  "nombre": "Nuevo Planeta",
  "descripcion": "Descripción detallada del nuevo planeta."
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


- Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```


## Notas Adicionales
- Asegúrate de incluir todos los parámetros necesarios en la solicitud.
- El identificador (id_planeta) es asignado automáticamente por el sistema al crear el planeta.