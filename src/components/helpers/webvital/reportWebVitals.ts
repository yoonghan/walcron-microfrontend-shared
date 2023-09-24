// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reportWebVitals = (onPerfEntry: any) => {
  /* istanbul ignore next -- @preserve */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      /* istanbul ignore next -- @preserve */
      onCLS(onPerfEntry);
      /* istanbul ignore next -- @preserve */
      onFID(onPerfEntry);
      /* istanbul ignore next -- @preserve */
      onFCP(onPerfEntry);
      /* istanbul ignore next -- @preserve */
      onLCP(onPerfEntry);
      /* istanbul ignore next -- @preserve */
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
