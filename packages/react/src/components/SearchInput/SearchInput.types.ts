/**
 * SearchInput Component Types
 *
 * Type definitions for the Orion SearchInput component.
 */

import type { InputHTMLAttributes, ReactNode } from 'react';

/**
 * SearchInput size variants
 */
export type SearchInputSize = 'sm' | 'md' | 'lg';

/**
 * SearchInput component props
 *
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search..."
 *   value={query}
 *   onChange={(e) => setQuery(e.target.value)}
 *   onClear={() => setQuery('')}
 * />
 * ```
 */
export interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: SearchInputSize;

  /**
   * Callback when the clear button is clicked
   */
  onClear?: () => void;

  /**
   * Callback when search is triggered (Enter key or search button)
   */
  onSearch?: (value: string) => void;

  /**
   * Whether to show the clear button when there's a value
   * @default true
   */
  showClear?: boolean;

  /**
   * Whether to show a search button
   * @default false
   */
  showSearchButton?: boolean;

  /**
   * Custom search icon
   */
  searchIcon?: ReactNode;

  /**
   * Label for the clear button (accessibility)
   * @default 'Clear search'
   */
  clearLabel?: string;

  /**
   * Label for the search button (accessibility)
   * @default 'Search'
   */
  searchLabel?: string;

  /**
   * Whether the input is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Make the input take full width
   * @default false
   */
  fullWidth?: boolean;
}
