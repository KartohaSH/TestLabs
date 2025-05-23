import puppeteer from 'puppeteer'

describe('UI Tests for example.com', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true }); // Можна встановити false для перегляду
    page = await browser.newPage();
    await page.goto('https://example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Сторінка має правильний заголовок', async () => {
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('Присутній заголовок <h1>', async () => {
    const h1Text = await page.$eval('h1', el => el.textContent);
    expect(h1Text).toBe('Example Domain');
  });

  test('Присутній параграф з описом', async () => {
    const paragraphExists = await page.$('p') !== null;
    expect(paragraphExists).toBe(true);
  });

  test('Посилання веде на правильний URL', async () => {
    const linkHref = await page.$eval('a', el => el.href);
    expect(linkHref).toBe('https://www.iana.org/domains/example');
  });

  test('Посилання має правильний текст', async () => {
    const linkText = await page.$eval('a', el => el.textContent.trim());
    expect(linkText).toBe('More information...');
  });
});