const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

async function getContent(url) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  const page = await browser.newPage();
  await page.goto(url);
  // const content = await page.content();
  const element = await page.$("pre");
  const text = await (await element.getProperty('textContent')).jsonValue();
  await browser.close();
  return text;
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.url || "https://google.com/";
    const result = await getContent(subject)
    return {
      statusCode: 200,
      body: JSON.stringify(result)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
