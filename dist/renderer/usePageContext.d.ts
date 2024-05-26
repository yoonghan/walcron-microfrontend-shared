import { default as React } from 'react';
import { PageContext } from 'vike/types';
export { usePageContext };
export { PageContextProvider };
declare function PageContextProvider({ pageContext, children }: {
    pageContext: PageContext;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/** https://vike.dev/usePageContext */
declare function usePageContext(): PageContext;
