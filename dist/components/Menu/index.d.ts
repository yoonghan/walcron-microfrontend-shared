import { CSSProperties, ReactNode } from 'react';

type TopMenuItem = {
    label: string;
    url: string;
    items?: SubMenuItem[];
};
type SubMenuItem = {
    label: string;
    url?: string;
};
export type MenuType = TopMenuItem[];
export declare function MutableMenu({ menuLink, homeLink, homeLogoLink, model, shortcutComponent, mobileStyle, desktopStyle, desktopClassName, mobileClassName, }: {
    menuLink: (text: string, href: string, role: "menuitem", onClick?: () => void) => ReactNode;
    homeLink: (href: string, onClick: () => void, tabIndex: number) => ReactNode;
    homeLogoLink: (helperClassName: string) => ReactNode;
    model: MenuType;
    shortcutComponent?: ReactNode;
    mobileStyle?: CSSProperties;
    desktopStyle?: CSSProperties;
    desktopClassName?: string;
    mobileClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare const Menu: import('react').MemoExoticComponent<typeof MutableMenu>;
export default Menu;
