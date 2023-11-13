import { delay } from '../utils/delay.js'
import { logger } from '../utils/logger.js'
import { PROFILE_URL } from './urls.js'

export const goToProfile = async (page) => {
	try {
		// Logic to navigate to the profile page
		await delay(1000) // replace with actual waiting conditions needed for your app
		logger.info(`Loading ${PROFILE_URL}`)
		logger.info('')

		await page.goto(PROFILE_URL)
		logger.info('Navigated to profile page successfully.')
	} catch (error) {
		logger.error('Navigation to profile page failed.')
		throw error
	}
}

// Other navigation-related functions go here
