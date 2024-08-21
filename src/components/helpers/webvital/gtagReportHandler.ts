import { Metric } from "web-vitals";

// event values can only contain integers
function getEventValueFromMetric(metric: Metric) {
  const value = metric.value;
  if (metric.name === "CLS") {
    return Math.round(value * 1000);
  }
  return Math.round(value);
}

function reportHandler({name, delta, value, id}: Metric) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  gtag("event", name, {
    value: delta,
    metric_id: id
  });
}

export default reportHandler;
