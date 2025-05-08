/**
 * Convert text from highlight api
 * @param tex - Text to be converted
 * @returns Converted text
 */

export function highConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Meta longe de ser atingida *'
    case 'success':
      return '* Meta atingida *'
    case 'warning':
      return '* Meta quase atingida *'
    default:
      return 'sem dados'
  }
}
