const FeedParser = require('feedparser');
const request = require('request');
var flickerEndPoint = 'https://api.flickr.com/services/feeds/photos_public.gne';


var getFlickerFeeds = function (searchString, callback) {
    var url = '';
    if (searchString !== '') {
        url = flickerEndPoint + '?tags=' + searchString;
    } else {
        url = flickerEndPoint;
    }
    let feedReq = request(url);
    let photoList = [];
    let feedparser = new FeedParser();

    feedReq.on('error', function (error) {
        // handle any request errors
    });
    feedReq.on('response', function (res) {
        var stream = this;
        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
        stream.pipe(feedparser);
    });

    feedparser.on('error', function (error) {
        console.error("Unexpected Error thrown " + error);
    });
    feedparser.on('readable', function () {
        var stream = this, item;

        while (item = stream.read()) {
            let imageRex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
            let heightRex = /<img[^>]+height="?([^"\s]+)"?[^>]*\/>/g;
            let widthRex = /<img[^>]+width="?([^"\s]+)"?[^>]*\/>/g;
            let imgUrl = "", height = 0, width = 0;

            let resultImage = imageRex.exec(item.description);
            let resultHeight = heightRex.exec(item.description);
            let resultWidth = widthRex.exec(item.description);

            if (resultImage) imgUrl = resultImage[1];
            if (resultHeight) height = resultHeight[1];
            if (resultWidth) width = resultWidth[1];

            let feed = {
                'title': item.title,
                'imageUrl': imgUrl,
                'imageHeight': height,
                'imageWidth': width,
                'description': item.description

            };
            photoList.push(feed);
        }
    });

    feedparser.on('end', function () {
        callback(photoList);
    });
}

module.exports = {
    getFlickerFeeds: getFlickerFeeds,
    flickerEndPoint: flickerEndPoint
}