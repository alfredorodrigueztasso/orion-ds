/**
 * Card Component
 *
 * A versatile container card with header, body, and footer sections.
 *
 * @example
 * ```tsx
 * <Card variant="base">
 *   <Card.Header>Card Title</Card.Header>
 *   <Card.Body>
 *     Card content goes here
 *   </Card.Body>
 *   <Card.Footer>Footer content</Card.Footer>
 * </Card>
 *
 * <Card variant="glass" interactive>
 *   <Card.Body>Clickable glass card</Card.Body>
 * </Card>
 * ```
 */
import React from 'react';
import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, ImageContentProps, ImageTitleProps, ImageDescriptionProps, ImageMetaProps } from './Card.types';
export declare const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Body: React.FC<CardBodyProps>;
    Footer: React.FC<CardFooterProps>;
    ImageContent: React.FC<ImageContentProps>;
    ImageTitle: React.FC<ImageTitleProps>;
    ImageDescription: React.FC<ImageDescriptionProps>;
    ImageMeta: React.FC<ImageMetaProps>;
};
//# sourceMappingURL=Card.d.ts.map