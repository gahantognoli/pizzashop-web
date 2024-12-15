import { http, HttpResponse } from "msw";

import { GetDayOrdersAmountResponse } from "../get-day-orders-amout";

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>("/metrics/day-orders-amount", () => {
  return HttpResponse.json({
    amount: 22,
    diffFromYesterday: -5,
  });
});
