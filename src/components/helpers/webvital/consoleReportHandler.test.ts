import { describe, it, expect, vi } from "vitest"
import reportHandler from "./consoleReportHandler"
import { Metric } from "web-vitals"

describe("consoleReportHandler", () => {
  it("should be able to do console output", () => {
    const mockedMetric: Metric = {
      name: "CLS",
      value: 1,
      rating: "good",
      delta: 5,
      id: "test",
      entries: [],
      navigationType: "restore",
    }
    const log = vi.spyOn(console, "log").mockImplementation(() => {
      //do nothing
    })
    reportHandler(mockedMetric)
    expect(log).toBeCalledWith(mockedMetric)
    log.mockReset()
  })
})
