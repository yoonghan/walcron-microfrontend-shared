import { describe, it, vi, expect } from "vitest";
import reportWebVitals, { updateCLS } from "./reportWebVitals";
import { consoleReportHandler } from "..";
import { Metric } from "web-vitals";

describe("reportWebVitals", () => {
  it("can be reported from consoleReportHandler", () => {
    reportWebVitals(consoleReportHandler);
  });

  it("update CLS 1000 times as decimal is given", () => {
    const call = vi.fn();
    updateCLS(call)({
      delta: 0.01,
      id: "delta",
      name: "CLS",
      value: 1,
    } as Metric);
    expect(call).toHaveBeenCalledWith({
      delta: 10,
      id: "delta",
      name: "CLS",
      value: 1,
    });
  });
});
