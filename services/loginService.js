import fs from 'fs'
import { logger } from '../utils/logger.js'

export const getLoginCredentials = async (filePath) => {
	try {
		const data = await fs.promises.readFile(filePath, { encoding: 'utf8' })
		// Assume the login credentials are stored in a JSON file for simplicity
		const credentials = JSON.parse(data)
		return credentials
	} catch (error) {
		logger.error(`Failed to get login credentials: ${error.message}`)
		throw error
	}
}
