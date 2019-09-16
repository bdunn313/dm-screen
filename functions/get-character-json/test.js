const puppeteer = require("puppeteer");
const { getContent } = require("./get-character-json");

(async () => {
  console.log("hi");
  try {
    const url = 'https://www.dndbeyond.com/character/6519861/json';
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    // const browser = await puppeteer.launch({ executablePath: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe' });
    const response = await getContent(browser, url);
    console.log(response);
  } catch (e) {
    console.error(e);

  }
})();