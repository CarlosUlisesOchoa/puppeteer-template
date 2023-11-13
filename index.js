import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker'
import * as config from './config.js'
import { logger } from './utils/logger.js'
import { login } from './pageActions/login.js'
import { goToProfile } from './pageActions/navigation.js'
import { doSomethingElse } from './pageActions/dataProcessing.js'

puppeteer.use(StealthPlugin())
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))

async function run() {
	//

	const browser = await puppeteer.launch({ headless: config.INVISIBLE_BROWSER })
	const page = await browser.newPage()

	try {
		//

		await login(page)

		await goToProfile(page)

		await doSomethingElse(page)

		logger.info('Everything done.')
	} catch (error) {
		logger.error(`An error occurred: ${error.message}`)
	} finally {
		logger.info('Closing browser...')
		await browser.close()
		logger.info('Browser closed.')
	}
	logger.info('Process finished.')
}

run()
