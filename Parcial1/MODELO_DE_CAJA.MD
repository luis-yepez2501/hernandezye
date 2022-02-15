# **Modelo De Caja**

*Hernandez Yepez Luis Francisco 18100191*

El modelo de cajas CSS completo se aplica a cajas que presentan comportamiento en bloque; las cajas con comportamiento en línea solo usan una parte del comportamiento definido en el modelo de cajas. El modelo define cómo funcionan juntas las diferentes partes de una caja (margen, borde, relleno y contenido) para crear una caja que puedas ver en tu página.

![Texto alternativo](https://desarrolladoresweb.org/wp-content/uploads/Representaci%C3%B3n-de-modelo-de-cajas-CSS.png)

## **Cajas en bloque y en línea**

En CSS, en general, hay dos tipos de cajas: cajas en bloque y cajas en línea. Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página:

Si una caja se define como un bloque, se comportará de las maneras siguientes:

1. La caja fuerza un salto de línea al llegar al final de la línea.
2. La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.

3. Se respetan las propiedades width y height.

4. El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

*A menos que decidamos cambiar el tipo de visualización a en línea, elementos como los encabezados (por ejemplo, < h1 >) y todos los elementos < p > usan por defecto block como tipo de visualización externa.*

![Texto alternativo](https://uniwebsidad.com/static/libros/imagenes/css/f0501.gif)

### **Partes de una caja**
Al hacer una caja de tipo bloque en CSS tenemos los elementos siguientes:

- El contenido de la caja (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height.

- El relleno de la caja (o padding box): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.

- El borde de la caja (o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.

- El margen de la caja (o margin box): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.


![Alt text](https://media1.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif?cid=790b7611089fb06051b511319a44b31d4399f884c3ff0593&rid=giphy.gif&ct=g)