export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("NGN", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};
