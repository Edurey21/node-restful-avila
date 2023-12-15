# Endpoint: GET /misiones

Permite recuperar la lista de todas las misiones disponibles.


## Ejemplo de Solicitud
```http
GET /misiones
```


## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_mision": 1,
    "nombre": "Exploración de Marte",
    "descripcion": "Explora las regiones desconocidas de Marte.",
    "recompensa": "Créditos Galácticos",
    "fk_id_planeta": 2,
    "fk_id_nave": 3
  },
  {
    "id_mision": 2,
    "nombre": "Negociaciones en Endor",
    "descripcion": "Establece relaciones diplomáticas con los Ewoks.",
    "recompensa": "Alianza Intergaláctica",
    "fk_id_planeta": 6,
    "fk_id_nave": 5
  },
  // ... otras misiones ...
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
- La lista proporcionada incluye información básica sobre cada misión.