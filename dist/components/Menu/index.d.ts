import { default as React, CSSProperties, ReactNode } from 'react';

type MenuLink = (text: string, href: string, onClick?: () => void, isAriaExpanded?: boolean) => ReactNode;
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
    menuLink: MenuLink;
    homeLink: (href: string, onClick: () => void, tabIndex: number) => ReactNode;
    homeLogoLink: (helperClassName: string) => ReactNode;
    model: MenuType;
    shortcutComponent?: ReactNode;
    mobileStyle?: CSSProperties;
    desktopStyle?: CSSProperties;
    desktopClassName?: string;
    mobileClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare const Menu: React.MemoExoticComponent<typeof MutableMenu>;
export default Menu;
