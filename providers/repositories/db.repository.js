var pg = require('pg');

mediaDomainObject = require('../../domainObjects/media.js');

function dbRepository() {

}

var connectionString = 'postgres://isdojtdmxeqmas:Uuj3N9LqtwlR5Qzr-svbVP4ugT@ec2-54-197-241-24.compute-1.amazonaws.com:5432/dbfsllm6r7leoe?ssl=true';
// if (typeof process.env.DATABASE_URL === 'undefined') {
//     throw('DATABASE_URL is not set up');
// }

dbRepository.addMedia = function(media, addMediaCallback) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('dbRepository.addMedia connect error(' + err.error +')');
        };

        var query = client.query("INSERT INTO t_media (file, uploadfilename) VALUES($1, $2);", [media.file, media.originalname], function(err, result) {
            if (err) {
                console.log('dbRepository.addMedia insert error(' + err.error + ')');
            };

            client.query('SELECT * FROM t_media where file = $1', [media.file], function(err, result) {
                if (err) {
                    console.log('dbRepository.addMedia select error(' + err + ')');
                };
                addMediaCallback(result.rows[0]);
            });
        });
    });
}

dbRepository.getMediaWithId = function(mediaId, getMediaWithIdCallback) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
                console.log('dbRepository.addMedia select error(' + err.error + ')');
        };

        var query = client.query('SELECT * FROM t_media WHERE id = $1', [mediaId], function(err, result) {
            if (err) {
                console.log('dbRepository.getMediaWithId select error(' + err + ')');
            };

            client.query('UPDATE t_media SET views=views+1 WHERE id = $1', [mediaId], function(err, result) {
                if (err) {
                    console.log('dbRepository.getMediaWithId updates error(' + err + ')');
                };

            });
            getMediaWithIdCallback(result.rows[0]);
        });
    });
}

dbRepository.getTrendingMedia = function(trendingCallback) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
                console.log('dbRepository.getTrendingMedia insert error(' + err.error + ')');
        };

        client.query('SELECT * FROM t_media ORDER by views DESC LIMIT 4;', function(err, result) {
            if (err) {
                console.log('dbRepository.getTrendingMedia select error(' + err.error + ')');
            };
            trendingCallback(result.rows);
        });
    });
}

module.exports = dbRepository;
