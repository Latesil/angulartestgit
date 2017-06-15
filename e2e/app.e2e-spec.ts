import { GitsearchPage } from './app.po';

describe('gitsearch App', () => {
  let page: GitsearchPage;

  beforeEach(() => {
    page = new GitsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
