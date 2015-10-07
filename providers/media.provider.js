//media domain object
var db = require('./repositories/db.repository.js');

function mediaProvider() {

}


mediaProvider.addMedia = function(media, callback) {
    db.addMedia(media, callback);
}

mediaProvider.getMediaWithId = function(mediaId, callback) {
    db.getMediaWithId(mediaId, callback);
}

mediaProvider.getTrendingMedia = function(callback) {
    db.getTrendingMedia(callback);
}

module.exports = mediaProvider;
