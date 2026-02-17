/**
 * AgentCard Component
 *
 * Specialized card component for displaying AI agent information with avatar,
 * title, description, and optional actions. Supports drag & drop functionality.
 *
 * @example
 * ```tsx
 * <AgentCard
 *   id="agent-1"
 *   avatar="/agent-avatar.png"
 *   title="Customer Support Agent"
 *   description="Handles customer inquiries and support tickets"
 *   timestamp="Updated 2 hours ago"
 *   onClick={() => console.log('Agent clicked')}
 *   onEdit={() => console.log('Edit agent')}
 *   onDelete={() => console.log('Delete agent')}
 * />
 * ```
 */

import React, { useState, useRef, useEffect } from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import type { AgentCardProps } from './AgentCard.types';
import { Card } from '../Card';
import { Avatar } from '../Avatar';
import { useIsMobile } from '../../hooks/useMediaQuery';
import styles from './AgentCard.module.css';

export const AgentCard: React.FC<AgentCardProps> = ({
  id,
  avatar,
  title,
  description,
  timestamp,
  status,
  badge,
  onClick,
  onEdit,
  onDelete,
  draggable = false,
  isDragging = false,
  className,
  ...rest
}) => {
    const isMobile = useIsMobile();
    const isImageAvatar = typeof avatar === 'string';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDraggingState, setIsDraggingState] = useState(isDragging);
    const menuRef = useRef<HTMLDivElement>(null);

    // Responsive avatar size: xl (64px) for mobile, lg (48px) for tablet+
    const avatarSize = isMobile ? 'xl' : 'lg';

    const classNames = [
      styles.agentCard,
      onClick && styles.clickable,
      draggable && styles.draggable,
      isDraggingState && styles.dragging,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      // Don't trigger card click if clicking action menu
      if ((e.target as HTMLElement).closest(`.${styles.actionMenu}`)) {
        return;
      }
      onClick?.();
    };

    const handleMenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    };

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsMenuOpen(false);
      onEdit?.();
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsMenuOpen(false);
      onDelete?.();
    };

    // Drag and drop handlers
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      if (!draggable) return;
      setIsDraggingState(true);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', id);
      e.dataTransfer.setData('application/json', JSON.stringify({ id, title }));
    };

    const handleDragEnd = () => {
      setIsDraggingState(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      if (!draggable) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };

    // Close menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      };

      if (isMenuOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isMenuOpen]);

    return (
      <Card
        variant="base"
        interactive={!!onClick}
        className={classNames}
        onClick={handleClick}
        draggable={draggable}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        data-agent-id={id}
        data-dragging={isDraggingState}
        {...rest}
      >
        {/* Header: Avatar + Badge + Actions Menu */}
        <Card.Header>
          <div className={styles.headerContent}>
            {isImageAvatar ? (
              <Avatar src={avatar} alt={title} size={avatarSize} />
            ) : (
              <div className={styles.iconAvatar}>{avatar}</div>
            )}

            <div className={styles.headerRight}>
              {/* Show badge if available, otherwise show status */}
              {badge ? (
                <span className={styles.badge}>{badge}</span>
              ) : (
                status && (
                  <span className={`${styles.status} ${styles[status]}`}>
                    {status}
                  </span>
                )
              )}

              {/* Actions Menu Button */}
              {(onEdit || onDelete) && (
                <div className={styles.actionMenu} ref={menuRef}>
                  <button
                    type="button"
                    onClick={handleMenuToggle}
                    className={styles.menuButton}
                    aria-label="Actions"
                    aria-expanded={isMenuOpen}
                  >
                    <MoreVertical size={20} />
                  </button>

                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <div className={styles.dropdown}>
                      {onEdit && (
                        <button
                          type="button"
                          onClick={handleEdit}
                          className={styles.dropdownItem}
                        >
                          <Edit size={16} />
                          <span>Edit</span>
                        </button>
                      )}
                      {onDelete && (
                        <button
                          type="button"
                          onClick={handleDelete}
                          className={`${styles.dropdownItem} ${styles.deleteItem}`}
                        >
                          <Trash2 size={16} />
                          <span>Delete</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card.Header>

        {/* Body: Title + Description */}
        <Card.Body>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </Card.Body>

        {/* Footer: Timestamp only */}
        {timestamp && (
          <Card.Footer>
            <time className={styles.timestamp}>{timestamp}</time>
          </Card.Footer>
        )}
      </Card>
    );
};

AgentCard.displayName = 'AgentCard';
