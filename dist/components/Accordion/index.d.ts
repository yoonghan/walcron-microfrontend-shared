type AccordionItem = {
    label: string;
    content: string;
};
type AccordionProps = AccordionItem[];
export default function Accordion({ model, groupName, isSingle, }: {
    model: AccordionProps;
    groupName: string;
    isSingle?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export {};
