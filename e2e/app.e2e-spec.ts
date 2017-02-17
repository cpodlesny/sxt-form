import { SxtPage } from './app.po';

describe('sxt App', function() {
  let page: SxtPage;

  beforeEach(() => {
    page = new SxtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sxt works!');
  });
});
