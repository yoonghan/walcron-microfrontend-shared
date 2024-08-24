import { Metric } from 'web-vitals';

export declare const updateCLS: (fn: (metric: Metric) => void) => (metric: Metric) => void;
declare const reportWebVitals: (onPerfEntry: (metric: Metric) => void) => void;
export default reportWebVitals;
