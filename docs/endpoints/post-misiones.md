# Endpoint: POST /misiones

Crea una nueva misión.

## Parámetros de Solicitud
- La solicitud debe incluir un cuerpo JSON con la siguiente información:

```http
nombre (obligatorio): Nombre de la misión.
descripcion (obligatorio): Descripción de la misión.
recompensa (obligatorio): Recompensa asociada a la misión.
fk_id_planeta (obligatorio): Identificador único del planeta asociado a la misión.
fk_id_nave (obligatorio): Identificador único de la nave espacial asociada a la misión.
```

## Ejemplo de Solicitud
```http
POST /misiones
{
  "nombre": "Exploración de Plutón",
  "descripcion": "Explora las regiones desconocidas de Plutón.",
  "recompensa": "Energía Avanzada",
  "fk_id_planeta": 10,
  "fk_id_nave": 4
}
```

## Respuesta Exitosa (Código 201 Created)
```json
{
  "id_mision": 11,
  "nombre": "Exploración de Plutón",
  "descripcion": "Explora las regiones desconocidas de Plutón.",
  "recompensa": "Energía Avanzada",
  "fk_id_planeta": 10,
  "fk_id_nave": 4
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
-Asegúrate de incluir todos los parámetros necesarios en la solicitud.
- El identificador (id_mision) es asignado automáticamente por el sistema al crear la misión.