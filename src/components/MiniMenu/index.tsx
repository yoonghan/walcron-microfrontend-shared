import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
  onScrollMonitor?: () => void; // use to monitor unmount
  onResizeMonitor?: () => void; // use to monitor unmount
};

interface ScrollIntoViewIfNeededElement extends HTMLAnchorElement {
  scrollIntoViewIfNeeded: (isCenter: boolean) => void;
}

function MiniMenu({ model, onScrollMonitor, onResizeMonitor }: MiniMenuProps) {
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

  const intersectionObserver = useCallback(
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
    [model]
  );

  const addMutationObserver = useCallback(() => {
    const partialObserver = new IntersectionObserver(intersectionObserver, {
      threshold: [0.3], //never accurate but it's the best
    });

    const fullObserver = new IntersectionObserver(intersectionObserver, {
      threshold: [1.0],
    });

    model.forEach((menuItem) => {
      const elem = document.getElementById(menuItem.hashId);
      if (elem !== null) {
        if (elem.clientHeight < window.innerHeight) {
          fullObserver.observe(elem);
        } else {
          partialObserver.observe(elem);
        }
      }
    });

    return [partialObserver, fullObserver];
  }, [intersectionObserver, model]);

  const onClickSelectMenuItem = useCallback(
    (idx: number) => () => {
      setSelected(idx);
    },
    []
  );

  const addNavBarPositionOnResize = useCallback(() => {
    if (onResizeMonitor) {
      onResizeMonitor();
    }
    setNavBarPosition(navBarRef.current?.getBoundingClientRect().top || 0);
  }, [onResizeMonitor]);

  useEffect(() => {
    const observers = addMutationObserver();
    addNavBarPositionOnResize();
    addStickyToScroll();
    window.addEventListener("resize", addNavBarPositionOnResize);
    window.addEventListener("scroll", addStickyToScroll);
    return () => {
      window.removeEventListener("scroll", addStickyToScroll);
      window.removeEventListener("resize", addNavBarPositionOnResize);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [addStickyToScroll, addMutationObserver, addNavBarPositionOnResize]);

  return (
    <nav className={styles.mini_menu} ref={navBarRef}>
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
    </nav>
  );
}

export default MiniMenu;
