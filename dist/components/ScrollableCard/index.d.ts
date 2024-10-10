import { ReactNode } from 'react';

interface Model {
    content: ReactNode;
}
declare function ScrollableCard({ model }: {
    model: Model[];
}): import("react/jsx-runtime").JSX.Element;
export default ScrollableCard;
