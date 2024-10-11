import { ReactNode } from 'react';

interface Model {
    content: ReactNode;
}
declare function ScrollableCard({ model, className, }: {
    model: Model[];
    className: string;
}): import("react/jsx-runtime").JSX.Element;
export default ScrollableCard;
