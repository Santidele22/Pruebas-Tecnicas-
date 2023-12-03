# Bienvenido al Test Práctico para Aspirantes al Área de Front-End de Mercado Libre

¡Hola! Estás a punto de embarcarte en el test práctico para la posición de front-end en Mercado Libre. A continuación, te presentamos el diseño y la descripción funcional de una pequeña aplicación que servirá como base para el trabajo que deberás desarrollar.

## Componentes Principales
- Caja de Búsqueda
- Visualización de Resultados
- Descripción Detallada del Producto

## Stack Tecnológico
### Cliente
- HTML
- JS (Se recomienda utilizar React o Backbone)
- CSS (Se recomienda utilizar Sass)

### Servidor
- Node
- Express

## Consideraciones
- Al resolverlo, ten en cuenta:
  - Usabilidad
  - SEO
  - Rendimiento (Performance)
  - Escalabilidad

## Requerimientos
1. **Construir Tres Vistas:**
   - Caja de búsqueda
   - Resultados de búsqueda
   - Detalle del producto

2. **Navegación Independiente:**
   - Las vistas son navegables de manera independiente y cuentan con su propia URL:
     - Caja de búsqueda: "/"
     - Resultados de búsqueda: "/items?search="
     - Detalle del producto: "/items/:id"

3. **Endpoints:**
   - Construir los siguientes endpoints para ser utilizados desde las vistas:
     - `/api/items?q=:query`
       - Debe consultar el siguiente endpoint: [https://api.mercadolibre.com/sites/MLA/search?q=:query](https://api.mercadolibre.com/sites/MLA/search?q=:query)
       - Devolver los resultados en el formato indicado.
     - `/api/items/:id`
       - Debe consultar los siguientes endpoints:
         - [https://api.mercadolibre.com/items/:id](https://api.mercadolibre.com/items/:id)
         - [https://api.mercadolibre.com/items/:id/description](https://api.mercadolibre.com/items/:id/description)
       - Devolver los resultados en el formato indicado.

## Formato de Respuesta (JSON)
```json
{
    "author": {
        "name": "String",
        "lastname": "String"
    },
    "categories": ["String", "String", "String…"],
    "items": [
        {
            "id": "String",
            "title": "String",
            "price": {
                "currency": "String",
                "amount": "Number",
                "decimals": "Number"
            },
            "picture": "String",
            "condition": "String",
            "free_shipping": "Boolean"
        },
        {…},
        {…},
        {…}
    ]
}
## Descripción Funcional de la Aplicación

- **Caja de Búsqueda:**
  - Deberías poder ingresar el producto a buscar en la vista de caja de búsqueda.
  - Al enviar el formulario, deberías navegar a la vista de resultados de búsqueda.
  - Se deben visualizar solo 4 productos en esta vista.

- **Vista de Resultados de Búsqueda:**
  - Al hacer clic en uno de los productos en la vista de resultados, deberías navegar a la vista de detalle del producto.

- **Vista de Detalle del Producto:**
  - Deberías poder ingresar directamente a esta vista proporcionando el ID del producto.

## Ejemplo de UI
[https://listado.mercadolibre.com.ar/juegos-juguetes/peluches/#redirectedFromVip](https://listado.mercadolibre.com.ar/juegos-juguetes/peluches/#redirectedFromVip)

¡Buena suerte! Estamos ansiosos por ver tu trabajo.
