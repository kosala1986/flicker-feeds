import { Feed } from './feed';

describe('Feed', () => {
  it('should create an instance', () => {
    expect(new Feed('title', 'image-url', 'height', 'width', 'description')).toBeTruthy();
  });
});
