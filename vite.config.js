// vite.config.js
const { resolve } = require('path')

module.exports = { // Used when having more than one html page
    base: "./", // Sets a relative path for all files, so they don't have to hosted at the server root
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                extra: resolve(__dirname, 'extra.html') // Syntax for adding extra pages
            }
        }
    }
}