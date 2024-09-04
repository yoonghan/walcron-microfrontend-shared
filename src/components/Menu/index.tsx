import React, {
  CSSProperties,
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  useRef,
  useState,
} from "react";
import style from "./style.module.css";

type MenuLink = (text: string, href: string, onClick?: () => void) => ReactNode;

type SubMenu = (
  subMenu: SubMenuItem[],
  topMenuUrl: string,
  onClick?: () => void
) => ReactNode;

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

function DesktopTopMenu({
  menuLink,
  topMenuItem,
  subMenu,
  unCheckSideMenu,
}: {
  menuLink: MenuLink;
  topMenuItem: TopMenuItem;
  subMenu: SubMenu;
  unCheckSideMenu: () => void;
}) {
  const [isSubMenuOpened, setSubMenuOpened] = useState(false);
  const liRef = useRef(null);

  const onExpandButtonClick = useCallback(() => {
    setSubMenuOpened(!isSubMenuOpened);
  }, [isSubMenuOpened]);

  const onExpandButtonKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Escape" || event.key === "ArrowUp") {
        setSubMenuOpened(false);
      }
      if (event.key === "ArrowDown") {
        setSubMenuOpened(true);
      }
    },
    []
  );

  const onMenuBlur = useCallback(
    (event: React.FocusEvent<HTMLLIElement, Element>) => {
      let parentNode = event.relatedTarget?.parentNode;
      for (let count = 0; count < 8; count++) {
        parentNode = parentNode?.parentNode;
        if (parentNode === liRef.current) {
          return;
        }
      }
      setSubMenuOpened(false);
    },
    []
  );

  if (topMenuItem.items !== undefined) {
    return (
      <li
        role="menuitem"
        className={`${style.subnav} ${isSubMenuOpened ? style.open : ""}`}
        onBlur={onMenuBlur}
        ref={liRef}
        aria-expanded={isSubMenuOpened}
      >
        <div>
          {menuLink(topMenuItem.label, topMenuItem.url)}
          <button
            onClick={onExpandButtonClick}
            onKeyUp={onExpandButtonKeyUp}
            aria-label={`Expand ${topMenuItem.label}`}
            aria-expanded={isSubMenuOpened}
            className={style.expand}
          ></button>
          <div className={style.subnav_content}>
            <ul role="menu" onFocus={(e) => e.stopPropagation()}>
              {subMenu(topMenuItem.items, topMenuItem.url, unCheckSideMenu)}
            </ul>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li key={topMenuItem.label} role="menuitem">
        {menuLink(topMenuItem.label, topMenuItem.url)}
        <div className={style.expand_dummy}></div>
      </li>
    );
  }
}

function MobileTopMenu({
  menuLink,
  topMenuItem,
  subMenu,
  unCheckSideMenu,
}: {
  menuLink: MenuLink;
  topMenuItem: TopMenuItem;
  subMenu: SubMenu;
  unCheckSideMenu: () => void;
}) {
  const [isSubMenuOpened, setSubMenuOpened] = useState(false);

  const onTopMenuClick = useCallback(() => {
    setSubMenuOpened(!isSubMenuOpened);
  }, [isSubMenuOpened]);

  const onTopMenuKeyClick = useCallback(
    (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === "Space" || event.key === " " || event.key === "Enter") {
        (event.currentTarget.firstElementChild as HTMLInputElement).click();
      }
    },
    []
  );

  if (topMenuItem.items !== undefined) {
    return (
      <li
        key={topMenuItem.label}
        role="menuitem"
        className={style.subnav}
        aria-expanded={isSubMenuOpened}
      >
        <label
          className={style.top__menu}
          tabIndex={0}
          onClick={onTopMenuClick}
          onKeyUp={onTopMenuKeyClick}
          aria-label={`Expand ${topMenuItem.label}`}
        >
          <input type="radio" name="top_menu" value={topMenuItem.label} />
        </label>
        {menuLink(topMenuItem.label, topMenuItem.url, unCheckSideMenu)}
        <div className={style.subnav_content}>
          <ul role="menu">
            {subMenu(topMenuItem.items, topMenuItem.url, unCheckSideMenu)}
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li key={topMenuItem.label} role="menuitem">
        {menuLink(topMenuItem.label, topMenuItem.url, unCheckSideMenu)}
      </li>
    );
  }
}

export function MutableMenu({
  menuLink,
  homeLink,
  homeLogoLink,
  model,
  shortcutComponent,
  mobileStyle = {},
  desktopStyle = {},
  desktopClassName = "",
  mobileClassName = "",
}: {
  menuLink: MenuLink;
  homeLink: (href: string, onClick: () => void, tabIndex: number) => ReactNode;
  homeLogoLink: (helperClassName: string) => ReactNode;
  model: MenuType;
  shortcutComponent?: ReactNode;
  mobileStyle?: CSSProperties;
  desktopStyle?: CSSProperties;
  desktopClassName?: string;
  mobileClassName?: string;
}) {
  const sideMenuRef = useRef<HTMLInputElement>(null);

  const replaceWithTopMenuUrlIfAHashlinkOrEmpty = (
    topMenuUrl: string,
    url?: string
  ) => {
    if (url === undefined || url === "") return topMenuUrl;
    return url.replace(/^#/, `${topMenuUrl}#`);
  };

  const unCheckSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.checked = false;
      document.body.style.overflow = "auto";
    }
  };

  const onSideMenuChange = (event: ChangeEvent<HTMLInputElement>) => {
    document.body.style.overflow = event.target.checked ? "hidden" : "auto";
  };

  const subMenu = (
    subMenu: SubMenuItem[],
    topMenuUrl: string,
    onClick?: () => void
  ) =>
    subMenu.map((subMenuItem) => (
      <li key={subMenuItem.label} role="menuitem">
        {menuLink(
          subMenuItem.label,
          replaceWithTopMenuUrlIfAHashlinkOrEmpty(topMenuUrl, subMenuItem.url),
          onClick
        )}
      </li>
    ));

  const desktopTopMenu = model.map((topMenuItem) => (
    <DesktopTopMenu
      menuLink={menuLink}
      topMenuItem={topMenuItem}
      subMenu={subMenu}
      unCheckSideMenu={unCheckSideMenu}
      key={topMenuItem.label}
    />
  ));

  const mobileTopMenu = model.map((topMenuItem) => (
    <MobileTopMenu
      menuLink={menuLink}
      topMenuItem={topMenuItem}
      subMenu={subMenu}
      unCheckSideMenu={unCheckSideMenu}
      key={topMenuItem.label}
    />
  ));

  return (
    <>
      <div
        className={`${style.mobile__nav} ${mobileClassName}`}
        style={mobileStyle}
      >
        <div className={style["mobile-menu"]}>
          <label className={style.hamb} aria-label="Main Menu">
            <input
              className={style.side__menu}
              type="checkbox"
              ref={sideMenuRef}
              onChange={onSideMenuChange}
            />
            <span className={style["hamb-line"]}></span>
            <span className={style["hamb-hidden"]}>Hamburger Menu</span>
          </label>
          {homeLink("/", unCheckSideMenu, -1)}
          {shortcutComponent && shortcutComponent}
        </div>
        <nav role="menubar" className={style.menu}>
          <ul role="menu" aria-orientation="horizontal">
            {mobileTopMenu}
          </ul>
        </nav>
      </div>
      <div
        className={`${style.desktop__nav} ${desktopClassName}`}
        style={desktopStyle}
      >
        <nav role="menubar" className={style.menu}>
          <ul role="menu" aria-orientation="horizontal">
            <li role="menuitem">{homeLogoLink(style["home-logo"])}</li>
            {desktopTopMenu}
            <li role="menuitem">{shortcutComponent && shortcutComponent}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

const Menu = memo(MutableMenu, () => true);

export default Menu;
