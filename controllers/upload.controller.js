var user = require('../models/user');
var media = require('../domainObjects/media');
var multer = require('multer');
var storage = multer.diskStorage({
                destination: function (req, file, cb) {
                cb(null, 'content/')
        },
        filename: function (req, file, cb) {
            var ext = file.originalname.substr(file.originalname.lastIndexOf('.')+1);
            newName = uuid.v4() + '.' + ext;
            cb(null, newName);
            console.log('Renaming ' + file.originalname + ' to ' + newName);
        }
});
var upload = multer({storage: storage});
var uuid = require('node-uuid');

var mediaProvider = require('../providers/media.provider.js');
var mediaDomainObject = require('../domainObjects/media.js');


//Media controller
module.exports.controller = function(app) {

    //.....Media routes......
    app.post('/upload', upload.single('image'), uploadMediaItem);
}


//...Upload page action method...
function uploadMediaItem(request, response) {
    var newMedia = new media();
    var index = request.file.filename.substr(0, request.file.filename.lastIndexOf('.')-1);
    newMedia.index = index;
    newMedia.file = request.file.filename;
    newMedia.originalname = request.file.originalname;
    mediaProvider.addMedia(newMedia, uploadMediaItemRender);

    function uploadMediaItemRender(media) {
        var userProfile = new user();
        var uploadViewModel = {
            userProfile: userProfile,
            mediaFile: media.file};

        response.render('pages/media', uploadViewModel);
    };
}
