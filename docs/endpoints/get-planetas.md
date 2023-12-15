# Endpoint: GET /planetas

Permite recuperar la lista de todos los planetas disponibles.


## Ejemplo de Solicitud
```http
GET /planetas
```


## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_planeta": 1,
    "nombre": "Tierra",
    "descripcion": "Planeta hogar de la humanidad."
  },
  {
    "id_planeta": 2,
    "nombre": "Marte",
    "descripcion": "Conocido como el planeta rojo."
  },
  // ... otros planetas ...
]
```


## Respuestas de Errores Posibles
- Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
```


## Notas Adicionales

- Esta solicitud no requiere parámetros adicionales.
- La lista proporcionada incluye información básica sobre cada planeta.