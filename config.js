import dotenv from 'dotenv'

dotenv.config()

export const DOMAIN = process.env.DOMAIN || ''
export const INVISIBLE_BROWSER = process.env.INVISIBLE_BROWSER === 'true'
export const COOKIES_FILE = process.env.COOKIES_FILE || 'cookies.json'
export const CREDENTIALS_FILE = process.env.CREDENTIALS_FILE || 'credentials.json'
export const DEFAULT_TIMEOUT = Number(process.env.DEFAULT_TIMEOUT) || 9000
