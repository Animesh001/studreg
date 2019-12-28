import { StudregPage } from './app.po';

describe('studreg App', function() {
  let page: StudregPage;

  beforeEach(() => {
    page = new StudregPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
