/**
 * KanbanBoard Component
 *
 * A drag-and-drop board for task management (Trello/Linear style).
 * Optimized for Product Mode with efficient task visualization.
 *
 * @example
 * ```tsx
 * <KanbanBoard
 *   columns={[
 *     { id: 'todo', title: 'To Do', cards: todoCards },
 *     { id: 'done', title: 'Done', cards: doneCards }
 *   ]}
 *   onCardClick={(card) => openDetail(card)}
 * />
 * ```
 */
import type { KanbanBoardProps } from './KanbanBoard.types';
export declare const KanbanBoard: import("react").ForwardRefExoticComponent<KanbanBoardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=KanbanBoard.d.ts.map