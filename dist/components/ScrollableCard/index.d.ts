import { ReactNode } from 'react';

interface Model {
    content: ReactNode;
}
declare function ScrollableCard({ model, className, isReversed, }: {
    model: Model[];
    className: string;
    isReversed?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default ScrollableCard;
