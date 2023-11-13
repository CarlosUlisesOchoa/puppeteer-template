import { logger } from '../utils/logger.js'
import { getLoginCredentials } from './services/loginService.js'
import { DOMAIN, CREDENTIALS_FILE, DEFAULT_TIMEOUT } from '../config.js'

export async function login({ page }) {
	//

	try {
		//
		logger.info('Trying to login...')
		logger.info('')

		// Lets get user's credentials from CREDENTIALS_FILE
		const credentials = await getLoginCredentials(CREDENTIALS_FILE)

		logger.info(`Loading ${DOMAIN}/login`)
		logger.info('')

		await page.goto(`https://${DOMAIN}/login`)

		await page.waitForSelector('#form-signin input[name="username"]')

		const inputFields = [
			{ selector: '#form-signin input[name="username"]', value: credentials.user },
			{ selector: '#form-signin input[name="password"]', value: credentials.password },
		]

		for (const { selector, value } of inputFields) {
			await page.focus(selector)
			await page.keyboard.type(value)
		}

		await page.click('#form-signin input[type="submit"]')

		logger.info('Logging in...')
		logger.info('')

		const myEmailElem = await page
			.waitForSelector('p[data-qa-hook="email.field"]', { timeout: DEFAULT_TIMEOUT })
			.catch(() => null)

		if (!myEmailElem) {
			throw new Error('Login was not successful')
		}

		logger.info('Logged in successfully!')
		logger.info('')
	} catch (error) {
		logger.info('')
		logger.error('Login failed.')
		logger.error(error)
		throw error
	}
}
