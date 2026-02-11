import type { ReactNode } from 'react';
type CalloutVariant = 'info' | 'tip' | 'warning' | 'error';
interface CalloutProps {
    variant?: CalloutVariant;
    title?: string;
    children: ReactNode;
}
export declare function Callout({ variant, title, children }: CalloutProps): import("react/jsx-runtime").JSX.Element;
interface FeatureCardProps {
    icon?: ReactNode;
    title: string;
    children: ReactNode;
}
export declare function FeatureCard({ icon, title, children }: FeatureCardProps): import("react/jsx-runtime").JSX.Element;
interface CardGridProps {
    columns?: 2 | 3;
    children: ReactNode;
}
export declare function CardGrid({ columns, children }: CardGridProps): import("react/jsx-runtime").JSX.Element;
interface StepProps {
    number: number;
    title: string;
    children: ReactNode;
}
export declare function Step({ number, title, children }: StepProps): import("react/jsx-runtime").JSX.Element;
interface StepsProps {
    children: ReactNode;
}
export declare function Steps({ children }: StepsProps): import("react/jsx-runtime").JSX.Element;
interface LinkCardProps {
    title: string;
    description: string;
    href: string;
    icon?: ReactNode;
}
export declare function LinkCard({ title, description, href, icon }: LinkCardProps): import("react/jsx-runtime").JSX.Element;
interface LinkCardGridProps {
    children: ReactNode;
}
export declare function LinkCardGrid({ children }: LinkCardGridProps): import("react/jsx-runtime").JSX.Element;
interface BrandSwatchProps {
    color: string;
    name: string;
}
export declare function BrandSwatch({ color, name }: BrandSwatchProps): import("react/jsx-runtime").JSX.Element;
interface TokenTableRow {
    token: string;
    description: string;
}
interface TokenTableProps {
    rows: TokenTableRow[];
}
export declare function TokenTable({ rows }: TokenTableProps): import("react/jsx-runtime").JSX.Element;
interface InfoTableProps {
    headers: string[];
    rows: string[][];
}
export declare function InfoTable({ headers, rows }: InfoTableProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DocComponents.d.ts.map