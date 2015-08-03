var smtp = require('./index').run;

smtp(2525, __dirname + '/tmp');