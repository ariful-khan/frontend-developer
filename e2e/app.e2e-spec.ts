import { FrontendDeveloperPage } from './app.po';

describe('frontend-developer App', () => {
  let page: FrontendDeveloperPage;

  beforeEach(() => {
    page = new FrontendDeveloperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
