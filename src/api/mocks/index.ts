import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { approveOrderMock } from "./approve-oder-mock";
import { cancelOrderMock } from "./cancel-order-mock";
import { deliverOrderMock } from "./deliver-oder-mock";
import { dispatchOrderMock } from "./dispatch-order-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount-mock";
import { getMonthRevenueMock } from "./get-month-revenue-mock";
import { getOrderMock } from "./get-oders-mock";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in-mock";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrderMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE != "test") return;
  await worker.start();
}
