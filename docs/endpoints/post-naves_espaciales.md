# Endpoint: POST /naves_espaciales

Crea una nueva nave espacial.

## Parámetros de Solicitud
- La solicitud debe incluir un cuerpo JSON con la siguiente información:

```http
nombre (obligatorio): Nombre de la nave espacial.
tipo (obligatorio): Tipo de la nave espacial.
capacidad (opcional): Capacidad de la nave espacial.
```


## Ejemplo de Solicitud
```http
POST /naves_espaciales
{
  "nombre": "Nueva Nave",
  "tipo": "Exploración",
  "capacidad": 10
}
```


## Respuesta Exitosa (Código 201 Created)
```json
{
  "id_nave": 11,
  "nombre": "Nueva Nave",
  "tipo": "Exploración",
  "capacidad": 10
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

## Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```


## Notas Adicionales
- Asegúrate de incluir todos los parámetros necesarios en la solicitud.
- El identificador (id_nave) es asignado automáticamente por el sistema al crear la nave espacial.