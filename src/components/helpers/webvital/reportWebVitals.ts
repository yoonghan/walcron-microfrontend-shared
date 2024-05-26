import { Metric } from "web-vitals";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reportWebVitals = (onPerfEntry: (metric: Metric) => void) => {
  /* c8 ignore next */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      /* c8 ignore start */
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
      /* c8 ignore end */
    });
  }
};

export default reportWebVitals;
