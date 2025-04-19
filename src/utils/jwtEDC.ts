// Expiration Date Converter
// This module provides functions to convert between expiration dates and JWT tokens.

/**
 * convert JWT in days
 * @param exp - nuumber to convert
 * @returns Convertesd date in days
 */

export function jwtEDC(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds
  const expirationTime = exp - currentTime // Time until expiration in seconds
  const secondsInADay = 86400 // Number of seconds in a day
  const daysUntilExpiration = expirationTime / secondsInADay // Convert to days

  return daysUntilExpiration
}
