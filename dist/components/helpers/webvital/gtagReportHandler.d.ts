import { Metric } from 'web-vitals';

declare function reportHandler({ name, delta, id }: Metric): void;
export default reportHandler;
