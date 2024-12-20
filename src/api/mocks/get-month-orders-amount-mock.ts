import { http, HttpResponse } from "msw";

import { GetMonthOrdersAmountResponse } from "../get-month-orders-amout";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: -5,
  });
});
