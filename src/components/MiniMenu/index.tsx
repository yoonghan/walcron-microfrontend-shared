import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
  onScrollMonitor?: () => void; // use to monitor unmount
};

interface ScrollIntoViewIfNeededElement extends HTMLAnchorElement {
  scrollIntoViewIfNeeded: (isCenter: boolean) => void;
}

function MiniMenu({ model, onScrollMonitor }: MiniMenuProps) {
  const [selected, setSelected] = useState(0);
  const anchorRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navBarRef = useRef<HTMLDivElement>(null);

  const [navBarPosition, setNavBarPosition] = useState(0);

  const addStickyToScroll = useCallback(() => {
    if (onScrollMonitor) {
      onScrollMonitor();
    }
    if (navBarRef.current) {
      if (window.scrollY > navBarPosition) {
        navBarRef.current.classList.add(styles.sticky);
      } else {
        navBarRef.current.classList.remove(styles.sticky);
      }
    }
  }, [navBarPosition, onScrollMonitor]);

  const addMutationObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (intersections: IntersectionObserverEntry[]) => {
        const target = intersections[0].target;
        const idx = model.findIndex((item) => {
          return item.hashId === target.id;
        });

        const validIdx = idx < 0 ? 0 : idx;
        const anchor = anchorRef.current[
          validIdx
        ] as ScrollIntoViewIfNeededElement;
        if (anchor !== null && intersections[0].isIntersecting) {
          anchor.scrollIntoViewIfNeeded(true);
          setSelected(validIdx);
        }
      },
      {
        threshold: [0.3], //never accurate but it's the best
      }
    );
    model.forEach((menuItem) => {
      const elem = document.getElementById(menuItem.hashId);
      if (elem !== null) observer.observe(elem);
    });

    return observer;
  }, [model]);

  const onClickSelectMenuItem = useCallback(
    (idx: number) => () => {
      setSelected(idx);
    },
    []
  );

  useEffect(() => {
    const observer = addMutationObserver();
    setNavBarPosition(navBarRef.current?.offsetHeight || 0);
    addStickyToScroll();
    window.addEventListener("scroll", addStickyToScroll);
    return () => {
      window.removeEventListener("scroll", addStickyToScroll);
      observer.disconnect();
    };
  }, [addStickyToScroll, addMutationObserver]);

  return (
    <nav className={styles.mini_menu} ref={navBarRef} id="mini-menu-nav">
      <div className={styles.container}>
        {model.map((item, idx) => (
          <React.Fragment key={item.hashId}>
            {idx !== 0 && <div role="separator"></div>}
            <a
              href={`#${item.hashId}`}
              ref={(el) => {
                anchorRef.current[idx] = el;
              }}
              className={
                idx === selected ? `${styles.underline} italic` : undefined
              }
              onClick={onClickSelectMenuItem(idx)}
            >
              {item.title}
            </a>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default MiniMenu;
