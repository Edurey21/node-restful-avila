# Endpoint: GET /planetas/{id}

Permite obtener información detallada sobre un planeta específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del planeta que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /planetas/1 
```


## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_planeta": 1,
  "nombre": "Tierra",
  "descripcion": "Planeta hogar de la humanidad."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el planeta."
}
```

- Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
``` 


## Notas Adicionales

- Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre un planeta en específico.
- Para consultar más detalle sobre las misiones relacionadas con el planeta, puedes revisar la documentación del endpoint /planetas/{id}/misiones.