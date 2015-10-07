var express = require('express');
var app = express();
var fs = require('fs');


//File folders
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/i'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/content'));

// Controller setup (routes are setup inside of each controller
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers/' + file);
    route.controller(app);
  }
});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('PeopleWatchers app  is running on port', app.get('port'));
});
