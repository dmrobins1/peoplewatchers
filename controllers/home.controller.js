var User = require('../models/user');

//Home controller
module.exports.controller = function(app) {

    //.....Home routes......
    app.get('/', HomePage);
}

//...Home page action method...
function HomePage(request, response) {
    var userProfile = new User();
    var homeViewModel = {
        userProfile: userProfile };
    response.render('pages/index', homeViewModel);
}