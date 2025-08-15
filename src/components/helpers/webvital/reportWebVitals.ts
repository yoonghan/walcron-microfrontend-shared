import { Metric } from "web-vitals";

export const updateCLS = (fn: (metric: Metric) => void) => (metric: Metric) => {
  fn({
    ...metric,
    delta: metric.delta * 1000,
  });
};

 
const reportWebVitals = (onPerfEntry: (metric: Metric) => void) => {
  /* c8 ignore next */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onINP, onLCP }) => {
      /* c8 ignore start */
      onCLS(updateCLS(onPerfEntry));
      onINP(onPerfEntry);
      onLCP(onPerfEntry);
      /* c8 ignore end */
    });
  }
};

export default reportWebVitals;
