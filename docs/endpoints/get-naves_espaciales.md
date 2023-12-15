# Endpoint: GET /naves_espaciales

Permite recuperar la lista de todas las naves espaciales disponibles.


## Ejemplo de Solicitud
```http
GET /naves_espaciales
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_nave": 1,
    "nombre": "Interceptor Estelar",
    "tipo": "Caza",
    "capacidad": 1
  },
  {
    "id_nave": 2,
    "nombre": "Nave Exploradora",
    "tipo": "Exploración",
    "capacidad": 5
  },
  // ... otras naves espaciales ...
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
- La lista proporcionada incluye información básica sobre cada nave espacial.