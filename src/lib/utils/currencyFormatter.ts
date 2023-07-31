const formatter = new Intl.NumberFormat("id-Id", {
	style: "currency",
	currency: "IDR",
	minimumFractionDigits: 0,
});

export const formatCurrency = (price: number) => {
	if (price === 0) return "Rp 0";

	return formatter.format(price);
};
