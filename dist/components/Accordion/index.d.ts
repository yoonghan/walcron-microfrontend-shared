import { ReactNode } from "react";
type AccordionItem = {
    label: string;
    content: string | ReactNode;
};
type AccordionProps = AccordionItem[];
export default function Accordion({ model, groupName, isSingle, }: {
    model: AccordionProps;
    groupName: string;
    isSingle?: boolean;
    anchorElem?: (link: string, text: string) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
