import { Recipebookv2Page } from './app.po';

describe('recipebookv2 App', () => {
  let page: Recipebookv2Page;

  beforeEach(() => {
    page = new Recipebookv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
