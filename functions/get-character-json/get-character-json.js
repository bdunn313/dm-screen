const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

/**
 * 
 * @param {} browser 
 * @param {string} url 
 * 
 * @returns 
 */
async function getContent(browser, url) {
  console.log("Starting to get content");
  const page = await browser.newPage();
  console.log("New page created");
  console.log("Visiting ", url);
  await page.goto(url);
  console.log("Visited ", url);
  console.log("Awaiting content");
  const content = await page.content();
  console.log("Evaluating content");
  const response = await page.evaluate(() => {
    console.log("Parsing json");
    return JSON.parse(document.querySelector("body").innerText);
  });
  console.log("JSON parsed", response);
  await browser.close();
  if (!response) {
    throw new Error("Response not found");
  }
  return response;
}

exports.getContent = getContent;

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.url || "https://google.com/";
    console.log("URL:", subject);
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });
    const result = await getContent(browser, subject);
    console.log("Result:", result);
    return {
      statusCode: 200,
      body: JSON.stringify(result)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    console.log("Error:", err);
    return { statusCode: 500, body: err.toString() };
  }
};
