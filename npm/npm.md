*** NPM (node package manager)

** Paquete web 

- Dentro del archivo de práctica se inicia el archivo con 'npm init -y' para crear el package.json que registra la información sobre los paquetes.
- Se instala webpack y webpack-cli (npm install --save-dev webpack webpack-cli)
- Una vez instalado webpack se crea la carpeta src (se trabaja como el react)
- Se crean 2 archivos dentro de la carpeta src (esto siempre dentro del ejemplo para aprender a utilizarlo), index.js y greeting.js
- Ahora tenemos a index.js que depende de greeting.js

* - Para agrupar esto se necesita un archivo de configuración de webpack que contiene los detalles que se necesitan para AGRUPAR.

- Estos detalles son: punto de entrada, destino de salida y cualquier cosa como complementos y cargadores

- Se crea (en la raíz de proyecto) el archivo webpack.config.js... webpack se ejecuta en nodeJS y no en el navegador por lo que utiliza la sintaxis commonJS

** Manejo de HTML

- webpack no puede incluirlo directamente pero se ultiliza la herramienta htmlWebpackPlugin 
- se instala con npm install --save-dev html-webpack-plugin
- También se debe crear un un archivo html en src (no es necesario un script)
- htmlWebpackPlugin agregará automaticamente el paquete de salida como una etiqueta script
- Dentro de webpack.config.js se agrega el plugin
- ahora al ejecutar webpack en la carpeta dist tambien se crea un archivo html

** Cargando CSS

- Se necesitan 2 nuevos paquetes para CSS
- style-loader y css-loader... siempre instalando en --save-dev
- css-loader leerá cualquier archivo css que se importe en un archivo JS y lo convertirá en una cadena
- style-loader toma la cadena y agrega el código Js que aplicará los estilos a la página 
- En el archivo webpack.config.js se agregan estos cargadores para que webpack sepa que hacer
- listo! al abror el archivo index.html de la carpeta dist se podrá ver la página.

** Cargando imágenes 

- Las imagenes que se podrian añadir desde archivos locales también necesitan configuración adicional ya que no son archivos de javascript

* Hay tres formas de trabajar con archivos de imagenes locales

1. Archivos de imagen utilizados en el CSS interno (url())
- css-loader ya se encarga de esto por lo que no hay que hacer nada mas 

2. Archivos de imagen a los que se hace referencia en la plantilla HTML (como el src de un <img>)
- En este caso se debe intalar y decirle a webpack que use html-loader
- este detecta rutas de archivos en la plantilla html y carga los archivos correctos
- Se instala con 'npm install --save-dev html-loader'
- Luego se agrega el objeto a modules.rules en el archivo webpack.config.js  

3. Imagenes que usamos en el javascript, donde se necesita importar los archivos 
- por ejemplo cuando se manipula el DOM para crear o editar elementos img 
- Dado que las imágenes no son javascript se necesita decirle a webpack que los archivos serán activos agregando la regla 'asset/resource' al archivo webpack.config.js
- La importación de la imagen debe ser de esta manera para que se reconozca bien 
***
import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);
***

** También se puede configurar para leer fuentes que estén en local.
** Asi como también archivos xml, csv y tsv 

** Servidor de desarrollo webpack 
- Es como un live-server para webpack, asi no hay que estar ejecutando 'npx webpack' con cada cambio que se realiza en el archivo
- se instala con 'npm install --save-dev webpack-dev-server'
- Luego de la instalación se debe agregar algunas propiedades el webpack.config.js
- Estas propiedades con la devtool y devServer
- Si no se añade devtool (el mapa de origen), los mensajes de error podrían no coincidir con los archivos y números de linea correctos 
- En devServer se agrega la plantilla html a los archivos monitoreados del servior de desarrollo 
- Una vez configurado, 'npx webpack server' alojará la página wen en el locahost:8080