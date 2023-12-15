# Endpoint: GET /recursos

Permite recuperar la lista de todos los recursos disponibles.


## Ejemplo de Solicitud
```http
GET /recursos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_recurso": 1,
    "nombre": "Oxígeno",
    "descripcion": "Elemento vital para la respiración."
  },
  {
    "id_recurso": 2,
    "nombre": "Minerales Preciosos",
    "descripcion": "Metales y gemas valiosos."
  },
  // ... otros recursos ...
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
- La lista proporcionada incluye información básica sobre cada recurso.