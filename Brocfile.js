var jade = require('broccoli-jade');
var stylus = require('broccoli-stylus');
var autoprefix = require('broccoli-autoprefixer');

var app = 'app';
app = jade(app);
app = autoprefix(stylus(app));

module.exports = app;
