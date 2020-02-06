'use strict';
(async function(){
	const puppeteer = require('puppeteer');
	const fs = require('fs');
	const path = require('path');
	
	// Launch browser
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 0,
		timeout: 60000,
		ignoreHTTPSErrors: true,
		args: [ '--incognito' ],
		defaultViewport:{ 
			width: 1920,
			height: 1080,
			isMobile: false,
			hasTouch: false
		},
	});
	let page = await browser.newPage()
	await page.goto('https://tftactics.gg/db/items')
	

	const groupSel = '.rt-tr-group ';
	// const items = await page.$$eval(groupSel+'.characters-item', els => els.map(el => el.textContent))
	// const items = await page.$$eval('.rt-tr-group .characters-item', els => els.map(el => el.textContent))
	const items = await page.$$eval('.characters-item', els => els.map(el => el.textContent.trim()).filter(el => el))
	const perks = await page.$$eval(groupSel+'ul li', els => els.map(el => el.textContent))

	console.log('items.length:',items.length);
	console.log('perks.length:',perks.length);
	// console.log('items:',JSON.stringify(items,null,2));
	// console.log('perks:',JSON.stringify(perks,null,2));
	
	const data = {}
	const all = []
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const perk = perks[i];
		const itemData = {
			name: item,
			perk,
		}
		all.push(itemData);

		data[item] = perk;
	}
	console.log('all.length:',all.length);
	console.log('all.length:',Object.keys(data).length);

	await fs.writeFileSync(path.resolve('./scripts/output.js'),`module.exports = ${JSON.stringify(all,null,2)}`)
	await fs.writeFileSync(path.resolve('./scripts/output2.js'),`module.exports = ${JSON.stringify(data,null,2)}`)

	await browser.close();
})();