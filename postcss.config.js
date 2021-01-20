const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const bulma = require('bulma');

module.exports = {
plugins: [
    bulma(),
    autoprefixer(),
    cssnano({ preset: 'default' }),
    ],
};
