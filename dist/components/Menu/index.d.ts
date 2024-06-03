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
export declare function MutableMenu({ menuLink, homeLink, homeLogoLink, model, mobileHomeText, shortcutComponent, mobileStyle, desktopStyle, }: {
    menuLink: (text: string, href: string, role: "menuitem", onClick?: () => void) => ReactNode;
    homeLink: (text: string, href: string, onClick: () => void, tabIndex: number) => ReactNode;
    homeLogoLink: (helperClassName: string) => ReactNode;
    model: MenuType;
    mobileHomeText: string;
    shortcutComponent?: ReactNode;
    mobileStyle?: CSSProperties;
    desktopStyle?: CSSProperties;
}): import("react/jsx-runtime").JSX.Element;
declare const Menu: import('react').MemoExoticComponent<typeof MutableMenu>;
export default Menu;
