import {
  CSSProperties,
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  useRef,
  useState,
} from "react";
import style from "./style.module.css";

type MenuLink = (
  text: string,
  href: string,
  role: "menuitem",
  onClick?: () => void
) => ReactNode;

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
  hasChild,
  menuLink,
  topMenuItem,
  subMenu,
  unCheckSideMenu,
}: {
  hasChild: boolean;
  menuLink: MenuLink;
  topMenuItem: TopMenuItem;
  subMenu: SubMenu;
  unCheckSideMenu: () => void;
}) {
  const [isSubMenuOpened, setSubMenuOpened] = useState(false);

  const onSubMenuButtonClick = useCallback(() => {
    setSubMenuOpened(!isSubMenuOpened);
  }, [isSubMenuOpened]);

  const onMenuBlur = useCallback(() => {
    setSubMenuOpened(false);
  }, []);

  return (
    <li
      key={topMenuItem.label}
      role="presentation"
      className={
        hasChild ? `${style.subnav} ${isSubMenuOpened ? style.open : ""}` : ""
      }
      onBlur={hasChild ? onMenuBlur : undefined}
    >
      <div aria-expanded={hasChild ? isSubMenuOpened : undefined}>
        {menuLink(topMenuItem.label, topMenuItem.url, "menuitem")}
        {hasChild && (
          <button
            onClick={onSubMenuButtonClick}
            aria-label={`Expand ${topMenuItem.label}`}
            className={style.expand}
          ></button>
        )}
        {topMenuItem.items && (
          <div role="presentation" className={style["subnav-content"]}>
            <ul role="menu">
              {subMenu(topMenuItem.items, topMenuItem.url, unCheckSideMenu)}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
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
      <li key={subMenuItem.label} role="presentation">
        {menuLink(
          subMenuItem.label,
          replaceWithTopMenuUrlIfAHashlinkOrEmpty(topMenuUrl, subMenuItem.url),
          "menuitem",
          onClick
        )}
      </li>
    ));

  const desktopTopMenu = model.map((topMenuItem) => {
    const hasChild = topMenuItem.items !== undefined;

    return (
      <DesktopTopMenu
        hasChild={hasChild}
        menuLink={menuLink}
        topMenuItem={topMenuItem}
        subMenu={subMenu}
        unCheckSideMenu={unCheckSideMenu}
      />
    );
  });

  const mobileTopMenu = model.map((topMenuItem) => {
    const hasChild = topMenuItem.items;

    return (
      <li
        key={topMenuItem.label}
        role="presentation"
        className={hasChild ? style.subnav : ""}
      >
        <div>
          {hasChild ? (
            <label className={style.top__menu}>
              <input
                className={style["top-menu"]}
                type="radio"
                name="top-menu"
                value={topMenuItem.label}
              />
              {topMenuItem.label}
            </label>
          ) : (
            menuLink(
              topMenuItem.label,
              topMenuItem.url,
              "menuitem",
              unCheckSideMenu
            )
          )}
          {topMenuItem.items && (
            <div role="presentation" className={style["subnav-content"]}>
              <ul role="menu">
                {subMenu(topMenuItem.items, topMenuItem.url, unCheckSideMenu)}
              </ul>
            </div>
          )}
        </div>
      </li>
    );
  });

  return (
    <>
      <div
        className={`${style.mobile__nav} ${mobileClassName}`}
        style={mobileStyle}
      >
        <div className={style["mobile-menu"]}>
          <label className={style.hamb} aria-label="Main Menu">
            <input
              className={style["side-menu"]}
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
