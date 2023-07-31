export interface MenuResponse {
	status_code: number;
	datas?: Menu[];
	message?: string;
}

export interface Menu {
	id: number;
	nama: string;
	harga: number;
	tipe: string;
	gambar: string;
}
