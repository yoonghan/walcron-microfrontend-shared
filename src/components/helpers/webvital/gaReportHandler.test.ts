import { describe, it, expect, vi, beforeEach, afterEach, Mock } from "vitest";
import gaReportHandler from "./gaReportHandler";
import { Metric } from "web-vitals";

describe("gaReportHandler", () => {
  let fnMock: Mock<any, any>;
  let gaMock: any;

  beforeEach(() => {
    fnMock = vi.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gaMock = vi.spyOn(global, "ga").mockImplementation(fnMock);
  });

  afterEach(() => {
    gaMock.mockReset();
  });

  it("should be able to run ga report for CLS", () => {
    const mockedMetric: Metric = {
      name: "CLS",
      value: 1,
      rating: "good",
      delta: 5,
      id: "test",
      entries: [],
      navigationType: "restore",
    };

    gaReportHandler(mockedMetric);
    expect(fnMock).toBeCalledWith("send", "event", {
      eventCategory: "Web Vitals",
      eventAction: "CLS",
      eventValue: 1000,
      eventLabel: "test",
      nonInteraction: true,
    });
  });

  it("should be able to run ga report for non CLS", () => {
    const mockedMetric: Metric = {
      name: "FCP",
      value: 60,
      rating: "good",
      delta: 5,
      id: "test",
      entries: [],
      navigationType: "restore",
    };

    gaReportHandler(mockedMetric);
    expect(fnMock).toBeCalledWith("send", "event", {
      eventCategory: "Web Vitals",
      eventAction: "FCP",
      eventValue: 60,
      eventLabel: "test",
      nonInteraction: true,
    });
  });
});
