export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-TH", {
    style: "currency",
    currency: "THB",
  }).format(amount);
};
