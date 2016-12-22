import { MicrorolPage } from './app.po';

describe('microrol App', function() {
  let page: MicrorolPage;

  beforeEach(() => {
    page = new MicrorolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
