//media domain object
var db = require('./repositories/db.repository.js');

function mediaProvider() {

}

mediaProvider.getMediaWithId = function(mediaId) {
    return db.getMediaWithId(mediaId);
}

module.exports = mediaProvider;