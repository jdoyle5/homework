const selectCurrency = (baseCurrency, rates) => {
  return {
    type: "SWITCH CURRENCY",
    baseCurrency: baseCurrency,
    rates: rates
  };
};

export default selectCurrency;
