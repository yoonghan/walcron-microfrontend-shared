import { ReactNode } from "react";
type AccordionItem = {
    label: string;
    content: string;
};
type AccordionProps = AccordionItem[];
export default function Accordion({ model, groupName, isSingle, anchorElem, }: {
    model: AccordionProps;
    groupName: string;
    isSingle?: boolean;
    anchorElem?: (link: string, text: string) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
