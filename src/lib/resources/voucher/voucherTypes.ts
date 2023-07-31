export interface VoucherResponse {
	status_code: number;
	datas?: Voucher;
	message?: string;
}

interface Voucher {
	id: number;
	kode: string;
	gambar: string;
	nominal: number;
	status: string;
	created_at: string;
	updated_at: string;
}
