/**
 * Convert px to rem
 * @param {number} px - Pixels value to convert
 * @returns The converted rem value
 */

export function pxToRem(px: number): string {
  return `${px / 16}rem`
}
