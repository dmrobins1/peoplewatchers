var User = require('../models/user');
var pg = require('pg');
var mediaProvider = require('../providers/media.provider');

//Home controller
module.exports.controller = function(app) {

    //.....Home routes......
    app.get('/', homePage);
}

//...Home page action ...
function homePage(request, response) {
    mediaProvider.getTrendingMedia(homePageRender);

    function homePageRender(trending) {
        var userProfile = new User();
        var homeViewModel = {
            userProfile: userProfile,
            trending: trending};
        response.render('pages/index', homeViewModel);
    }
}
