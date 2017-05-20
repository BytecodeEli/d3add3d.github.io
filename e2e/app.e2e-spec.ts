import { D3add3d.Github.IoPage } from './app.po';

describe('d3add3d.github.io App', () => {
  let page: D3add3d.Github.IoPage;

  beforeEach(() => {
    page = new D3add3d.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
