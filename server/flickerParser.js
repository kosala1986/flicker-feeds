const FeedParser = require('feedparser');
const request = require('request');
var flickerEndPoint = 'https://api.flickr.com/services/feeds/photos_public.gne';

/*
Parse Flicker feeds
*/

var getFlickerFeeds = (searchString, callback) => {
    var url = '';
    //Search feeds with tags or without tags
    if (searchString !== '') {
        url = flickerEndPoint + '?tags=' + searchString;
    } else {
        url = flickerEndPoint;
    }
    let feedReq = request(url);
    let photoList = [];
    let feedparser = new FeedParser();

    feedReq.on('error', (error) => {
        // handle any request errors
        throw new Error("Unexpected Error thrown " + error);
    });
    feedReq.on('response', function (res) {
        var stream = this;
        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
        stream.pipe(feedparser);
    });
    feedparser.on('error', (error) => {
        throw new Error("Unexpected Error thrown " + error);
    });
    feedparser.on('readable', function () {
        var stream = this, item;
        // Iterate through feeds and make readable array of objects
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

    feedparser.on('end', () => {
        callback(photoList);
    });
}

module.exports = {
    getFlickerFeeds: getFlickerFeeds,
    flickerEndPoint: flickerEndPoint
}