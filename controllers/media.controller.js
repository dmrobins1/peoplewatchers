var User = require('../models/user');
var mediaProvider = require('../providers/media.provider.js');

var mediaDomainObject = require('../domainObjects/media.js');

//Media controller
module.exports.controller = function(app) {

    //.....Media routes......
    app.get('/media/:mediaId', viewMediaItem);
}

//...Media page action method...
function viewMediaItem(request, response) {
    var mediaId = request.params.mediaId;
    mediaProvider.getMediaWithId(mediaId, viewMediaItemRender);

    function viewMediaItemRender(media) {
        var userProfile = new User();

        var mediaViewModel = {
            userProfile: userProfile,
            mediaFile: media.file};

            response.render('pages/media', mediaViewModel);
    }
}
