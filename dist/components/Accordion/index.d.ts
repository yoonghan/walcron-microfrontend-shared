import { ReactNode } from 'react';
type AccordionItem = {
    label: string;
    content: string | ReactNode;
};
type AccordionProps = AccordionItem[];
export default function Accordion({ model, groupName, isSingle, }: Readonly<{
    model: AccordionProps;
    groupName: string;
    isSingle?: boolean;
}>): import("react/jsx-runtime").JSX.Element;
export {};
