import { http, HttpResponse } from "msw";

import { GetMonthCanceledOrderAmountResponse } from "../get-month-canceled-orders.amout";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrderAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 12,
    diffFromLastMonth: -5,
  });
});
