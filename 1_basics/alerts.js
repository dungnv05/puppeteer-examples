/**
 * @name alerts
 *
 * @desc Create an alert dialog and close it again.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.dismiss()
  })
  await page.evaluate(() => alert('This message is inside an alert box'))
  // await page.evaluate(() => {
    debugger;
    await page.click('a[target=_blank]');
  // });
  await browser.close()
})()
