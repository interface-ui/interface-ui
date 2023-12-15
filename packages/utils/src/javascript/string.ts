/**
 * Capitalize the first letter of a string
 *
 * @param {string} str - The string to capitalize
 * @return {string} The capitalized string
 */
export const toCapitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Convert camelCase to kebab-case
 *
 * @param {string} str - The string to convert
 * @return {string} The converted string
 */
export const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Convert kebab-case to lower camelCase
 *
 * @param {string} str - The string to convert
 * @return {string} The converted string
 */
export const toLowerCamelCase = (str: string) => {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

/**
 * Convert kebab-case to upper camelCase
 *
 * @param {string} str - The string to convert
 * @return {string} The converted string
 */
export const toUpperCamelCase = (str: string) => {
  return toCapitalize(toLowerCamelCase(str))
}
