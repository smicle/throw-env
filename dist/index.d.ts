/**
 * Get environment variables.
 * If it does not exist, output an error and exit.
 * @param key Environment variable name.
 */
declare const throwEnv: (key: string) => string
export default throwEnv
