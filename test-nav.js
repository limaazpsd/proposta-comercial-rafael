const puppeteer = require('puppeteer');

(async () => {
  console.log("Starting browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.toString());
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text());
  });

  console.log("Navigating to http://localhost:3000");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  console.log("Navigating slides...");
  for (let i = 1; i <= 9; i++) {
    console.log(`At Slide ${i}`);
    await page.keyboard.press('ArrowRight');
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log("Test finished.");
  await browser.close();
})();
