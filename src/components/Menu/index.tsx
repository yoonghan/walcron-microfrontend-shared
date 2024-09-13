import React, {
  CSSProperties,
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  useEffect,
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
}: {
  menuLink: MenuLink;
  topMenuItem: TopMenuItem;
  subMenu: SubMenu;
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
        className={`${style.subnav} ${isSubMenuOpened ? style.open : ""}`}
        onBlur={onMenuBlur}
        ref={liRef}
      >
        <div className={style.top_menu_container}>
          {menuLink(topMenuItem.label, topMenuItem.url, undefined)}
          <button
            onClick={onExpandButtonClick}
            onKeyUp={onExpandButtonKeyUp}
            aria-label={`${topMenuItem.label}`}
            aria-expanded={isSubMenuOpened}
            className={style.expand}
          ></button>
        </div>
        <div className={style.subnav_content}>
          <ul>{subMenu(topMenuItem.items, topMenuItem.url)}</ul>
        </div>
      </li>
    );
  } else {
    return (
      <li key={topMenuItem.label}>
        <div className={style.top_menu_container}>
          {menuLink(topMenuItem.label, topMenuItem.url)}
          <div className={style.expand_dummy}></div>
        </div>
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

  if (topMenuItem.items !== undefined) {
    return (
      <li key={topMenuItem.label} className={style.subnav} role="menu">
        <label
          className={style.top__menu}
          aria-label={`Expandable ${topMenuItem.label}`}
        >
          <input
            type="checkbox"
            name="top_menu"
            value={topMenuItem.label}
            onClick={onTopMenuClick}
            aria-expanded={isSubMenuOpened}
            aria-haspopup={true}
            role="menuitemcheckbox"
          />
        </label>
        {menuLink(topMenuItem.label, topMenuItem.url, unCheckSideMenu)}
        <div className={style.subnav_content}>
          <ul>
            {subMenu(topMenuItem.items, topMenuItem.url, unCheckSideMenu)}
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li key={topMenuItem.label}>
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
  menuName = undefined,
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
  menuName?: string;
}) {
  const sideMenuRef = useRef<HTMLInputElement>(null); //remain for non-javascript
  const [isOpenedHamburger, setIsOpenedHamburger] = useState(false);

  /* state for switching between button and checkbox display */
  const [isJavascriptEnabled, setJavaScriptEnabled] = useState(false);
  useEffect(() => {
    setJavaScriptEnabled(true);
  }, []);

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
    const isChecked = event.target.checked;
    setIsOpenedHamburger(isChecked);
    document.body.style.overflow = isChecked ? "hidden" : "auto";
  };

  const subMenu = (
    subMenu: SubMenuItem[],
    topMenuUrl: string,
    onClick?: () => void
  ) =>
    subMenu.map((subMenuItem) => (
      <li key={subMenuItem.label}>
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
          <button
            aria-expanded={isOpenedHamburger === true}
            aria-haspopup={true}
            aria-controls={"hamburger-menu"}
            className={`${style.hamb} ${isJavascriptEnabled ? "show" : "hide"}`}
            aria-label={menuName || "Hamburger Menu"}
            onClick={() => {
              sideMenuRef.current?.click();
            }}
          >
            <div className={style.hamb_line}></div>
          </button>
          <label className={`${isJavascriptEnabled ? "hide" : "show"}`}>
            <input
              className={style.side__menu}
              type="checkbox"
              ref={sideMenuRef}
              onChange={onSideMenuChange}
            />
            {menuName || "Hamburger Menu"}
          </label>
          {homeLink("/", unCheckSideMenu, -1)}
          {shortcutComponent && shortcutComponent}
        </div>
        <nav className={style.menu}>
          <ul role="none" id="hamburger-menu" aria-labelledby="hamburger-menu">
            {mobileTopMenu}
          </ul>{" "}
        </nav>
      </div>
      <nav
        className={`${style.desktop__nav} ${desktopClassName}`}
        style={desktopStyle}
        aria-label={menuName}
      >
        <ul>
          <li>{homeLogoLink(style.home_logo)}</li>
          {desktopTopMenu}
          <li>{shortcutComponent && shortcutComponent}</li>
        </ul>
      </nav>
    </>
  );
}

const Menu = memo(MutableMenu, () => true);

export default Menu;
