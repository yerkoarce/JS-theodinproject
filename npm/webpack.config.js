const { watchFile } = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "development", // Este es el modo, en este caso de desarrollo
    entry: "./src/index.js", // Punto de entrada
    output: { // Contiene información sobre el paquete de salida
        filename: "main.js", // Nombre del paquete de salida 
        path: path.resolve(__dirname, "dist"), // Ruta al directorio de salida
        clean: true, // Si se incluye esta opción como true, cada vez que se ejecute webpack para agrupar,
        // vaciará primero el directorio de salida antes de agrupar en el para tener 'dist' limpio siempre.
    },
    devtool: 'eval-source-map', // Se añade un mapa de origen 
    devServer: { // 
        watchFiles: ['./src/template.html']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, // Si el archivo termina en .css
                use: ['style-loader', 'css-loader'] // Usa estos cargadores (el orden es importante, el último primero)
            },
            {
                // Si el archivo termina en .html se usa el loader html-loader (detecta rutas en el html)
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                // Para cargar imagenes en el javascript 
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}