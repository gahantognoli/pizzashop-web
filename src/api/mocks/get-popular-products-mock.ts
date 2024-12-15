import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    {
      product: 'Pizza 1',
      amount: 97,
    },
    {
      product: 'Pizza 2',
      amount: 102,
    },
    {
      product: 'Pizza 3',
      amount: 107,
    },
    {
      product: 'Pizza 4',
      amount: 89,
    },
    {
      product: 'Pizza 5',
      amount: 109,
    }
  ]);
});
