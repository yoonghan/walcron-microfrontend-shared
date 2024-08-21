import { describe, it, expect, vi, beforeEach, afterEach, Mock } from "vitest";
import gtagReportHandler from "./gtagReportHandler";
import { Metric } from "web-vitals";

describe("gtagReportHandler", () => {
  let fnMock: Mock<any, any>;
  let gtagMock: any;

  beforeEach(() => {
    fnMock = vi.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtagMock = vi.spyOn(global, "gtag").mockImplementation(fnMock);
  });

  afterEach(() => {
    gtagMock.mockReset();
  });

  it("should be able to run report for CLS", () => {
    const mockedMetric: Metric = {
      name: "CLS",
      value: 1,
      rating: "good",
      delta: 5,
      id: "test",
      entries: [],
      navigationType: "restore"
    };

    gtagReportHandler(mockedMetric);
    expect(fnMock).toBeCalledWith("event", "CLS", {
       value: 5,
       metric_id: "test" 
    });
  });
});
