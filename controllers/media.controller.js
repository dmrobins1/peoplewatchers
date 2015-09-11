var User = require('../models/user');
var mediaProvider = require('../providers/media.provider.js');

var mediaDomainObject = require('../domainObjects/media.js');

//Media controller
module.exports.controller = function(app) {

    //.....Media routes......
    app.get('/media/:mediaId', ViewMediaItem);
}

//...Home page action method...
function ViewMediaItem(request, response) {
    var userProfile = new User();
    var mediaId = request.params.mediaId;
    var media = mediaProvider.getMediaWithId(mediaId);

    var mediaViewModel = {
        userProfile: userProfile,
        mediaFile: media.file};

    response.render('pages/media', mediaViewModel);
}