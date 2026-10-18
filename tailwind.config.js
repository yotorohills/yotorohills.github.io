/** Build CSS: npx tailwindcss@3.4.17 -i assets/css/input.css -o assets/css/app.css --minify */
module.exports = {
    content: ['./*.html', './assets/js/*.js'],
    theme: { extend: {} },
    plugins: [],
};
