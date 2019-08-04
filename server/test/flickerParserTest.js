const expect = require('chai').expect;
const flickerParser = require('../flickerParser');

describe('Flicker feed parser', () => {
    it('Returns an array with empty string', () => {
        let searchString = '';
        flickerParser.getFlickerFeeds(searchString, (data) => {
            expect(data).to.be.an.instanceof(Array);
        });
    });

    it('Returns an array with search string', () => {
        let searchString = 'sri lanka';
        flickerParser.getFlickerFeeds(searchString, (data) => {
            expect(data).to.be.an.instanceof(Array);
        });
    });

    it('Feed object has a title property', () => {
        let searchString = 'Kandy';
        flickerParser.getFlickerFeeds(searchString, (data) => {
            let obj = data[0];
            expect(obj).to.have.property('title');
        });
    });
});