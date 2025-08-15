import { useEffect } from "react"

/*
 Since we can't expose react-router-dom, we used it as a general component
*/
const useNavigationListener = ({
  appName,
  containerName,
  props,
}: {
  appName: string
  containerName: string
  props: {
    pathname: string
    navigate: (location: string) => void
  }
}) => {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[${appName}] navigated`, { detail: props.pathname }),
    )
  }, [appName, props.pathname])

  // useEffect(() => {
  //   const stateLocation =
  //     location.pathname === "/" ? baseUrl : `${baseUrl}${location.pathname}`;
  //   if (skipPath !== stateLocation) history.pushState({}, "", stateLocation);
  // }, [location.pathname, skipPath]);

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail
      //matchRoutes(routes(), { pathname }) not usable
      if (props.pathname === pathname) {
        return
      }
      props.navigate(pathname)
    }

    window.addEventListener(
      `[${containerName}] navigated`,
      shellNavigationHandler,
    )

    return () => {
      window.removeEventListener(
        `[${containerName}] navigated`,
        shellNavigationHandler,
      )
    }
  }, [containerName, props])
}

export default useNavigationListener
