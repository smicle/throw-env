import * as dotenv from 'dotenv'

dotenv.config()

/**
 * Get environment variables.
 * If it does not exist, output an error and exit.
 * @param key Environment variable name.
 */
const throwEnv = (key: string): string => {
  const val = process.env[key]
  if (!val) throw new Error(`${key} is not in environment variable.`)
  return val
}

export default throwEnv
