export interface OrderResponse {
	status_code: number;
	message: string;
}

export interface OrderBody {
	nominal_diskon: number;
	nominal_pesanan: number;
	items: Item[];
	voucher_id?: number | null;
}

interface Item {
	id: number;
	harga: number;
	catatan: string;
}
