import { describe, it } from "vitest";
import reportWebVitals from "./reportWebVitals";
import { consoleReportHandler } from "..";

describe("reportWebVitals", () => {
  it("can be reported from consoleReportHandler", () => {
    reportWebVitals(consoleReportHandler);
  });
});
