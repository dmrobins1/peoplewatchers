var User = require('../models/user');

//Media controller
module.exports.controller = function(app) {

    //.....Media routes......
    app.get('/media/:mediaId', ViewMediaItem);
}

//...Home page action method...
function ViewMediaItem(request, response) {
    var userProfile = new User();
    var mediaViewModel = {
        userProfile: userProfile,
        mediaId: request.params.mediaId};

    response.render('pages/media', mediaViewModel);
}