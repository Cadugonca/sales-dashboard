/**
 * Convert to Brazilian Real
 * @param value - Number value to convert
 * @returns Converted value to Brazilian Real
 */

export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
