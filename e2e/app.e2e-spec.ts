import { AngularTourOfHeroesByMeWithCliPage } from './app.po';

describe('angular-tour-of-heroes-by-me-with-cli App', function() {
  let page: AngularTourOfHeroesByMeWithCliPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesByMeWithCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
