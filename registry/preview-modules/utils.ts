/**
 * Utility functions for preview modules
 */

/**
 * Create an inline SVG data URI for a company logo placeholder
 * Replaces external via.placeholder.com dependency
 * @param name - Company/brand name to display
 * @param width - SVG width in pixels (default: 120)
 * @param height - SVG height in pixels (default: 40)
 * @returns Data URI string for use in img src
 */
export function logoPlaceholder(name: string, width = 120, height = 40): string {
  const initials = name.slice(0, 8); // truncate long names
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect fill="#1B5BFF" width="${width}" height="${height}" rx="4"/><text fill="#FFFFFF" x="${width / 2}" y="${height * 0.65}" text-anchor="middle" font-size="13" font-family="system-ui,sans-serif" font-weight="500">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
