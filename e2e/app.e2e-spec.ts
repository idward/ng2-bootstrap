import { Angular2BootstrapPage } from './app.po';

describe('angular2-bootstrap App', () => {
  let page: Angular2BootstrapPage;

  beforeEach(() => {
    page = new Angular2BootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
