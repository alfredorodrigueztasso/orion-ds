/**
 * Calendar Component
 *
 * A date picker grid supporting single, range, and multiple selection.
 * Built without react-day-picker — uses date-fns for date manipulation.
 *
 * @example
 * ```tsx
 * // Single date
 * <Calendar selected={date} onSelect={setDate} />
 *
 * // Range
 * <Calendar mode="range" selected={range} onSelect={setRange} />
 *
 * // Multiple
 * <Calendar mode="multiple" selected={dates} onSelect={setDates} />
 * ```
 */
import React from 'react';
import type { CalendarProps } from './Calendar.types';
export declare const Calendar: React.FC<CalendarProps>;
//# sourceMappingURL=Calendar.d.ts.map