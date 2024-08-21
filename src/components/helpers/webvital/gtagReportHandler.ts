import { Metric } from "web-vitals";

function reportHandler({name, delta, id}: Metric) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  gtag("event", name, {
    value: delta,
    metric_id: id
  });
}

export default reportHandler;
