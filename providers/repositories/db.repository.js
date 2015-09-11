//db repository constructor
mediaDomainObject = require('../../domainObjects/media.js');

function dbRepository() {

}

var mediaTable = [];
mediaTable.push({"index":19876543, "file":"19876543.jpeg","viewCount":0, "tags":"whale, saving whale, helping whale, inspirational"});
mediaTable.push({"index":19876544, "file":"19876544.jpeg", "viewCount":0,"tags":"mad kid, kid, funny kids"});
mediaTable.push({"index":19876545, "file":"19876545.jpg", "viewCount":0, "tags":"elderly, helping, young helping elderly, inspirational"});
mediaTable.push({"index":19876546, "file":"19876546.jpeg", "viewCount":0, "tags":"girl, funny, funny face, wind"});
;

dbRepository.getTrending = function() {

}

dbRepository.getMediaWithId = function(mediaId) {
    var mediaObject;

    mediaTable.some(function(mediaEntry) {
        if (mediaEntry.index == mediaId) {
            mediaObject = mediaEntry;
           return true;
        }
    });

    return mediaObject;
}

module.exports = dbRepository;