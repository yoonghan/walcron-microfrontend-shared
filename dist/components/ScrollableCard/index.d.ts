import { ReactNode } from 'react';
interface Model {
    content: ReactNode;
    id: string;
}
declare function ScrollableCard({ model, className, isReversed, }: Readonly<{
    model: Model[];
    className: string;
    isReversed?: boolean;
}>): import("react/jsx-runtime").JSX.Element;
export default ScrollableCard;
