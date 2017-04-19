import { QuatrePage } from './app.po';

describe('quatre App', () => {
  let page: QuatrePage;

  beforeEach(() => {
    page = new QuatrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
