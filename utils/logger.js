import { format } from 'date-fns'

// Helper function to format the date
function getFormattedDate() {
	const now = new Date()
	return format(now, 'yyyy-MM-dd HH:mm:ss')
}

// Custom logger object
export const logger = {
	info: (...messages) => {
		console.log(`[INFO] [${getFormattedDate()}]:`, ...messages)
	},
	warn: (...messages) => {
		console.warn(`[WARN] [${getFormattedDate()}]:`, ...messages)
	},
	error: (...messages) => {
		console.error(`[ERROR] [${getFormattedDate()}]:`, ...messages)
	},
}
