import { useGetVoucherByCodeQuery } from "~/lib/resources/voucher/voucherApi";
import Input from "../atoms/input";
import { FormEvent, useEffect, useState } from "react";
import Button from "../atoms/button";
import { formatCurrency } from "~/lib/utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { updateDiscount } from "~/lib/resources/order/orderSlice";

export default function VoucherInput() {
	const dispatch = useDispatch();
	const [code, setCode] = useState("");
	const [skip, setSkip] = useState(true);
	const { data, isFetching } = useGetVoucherByCodeQuery(code, { skip });

	// synchronize skip state
	useEffect(() => {
		if (!isFetching && !skip) setSkip(true);
	}, [skip, isFetching]);

	// synchronize discount data
	useEffect(() => {
		if (data && !!data.datas) {
			const id = data.datas.id;
			const value = data.datas.nominal;
			dispatch(updateDiscount({ id, value }));
		}
	}, [data, dispatch]);

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSkip(false);
	};

	console.log({ data });

	return (
		<form
			className="border-y flex flex-col gap-y-2 border-gray-200 py-4"
			onSubmit={submitHandler}
		>
			<label htmlFor="voucher">Tambahkan Voucher:</label>
			<div className="flex flex-row gap-x-2">
				<Input
					value={code}
					onChange={(e) => setCode(e.target.value)}
					name="voucher"
					id="voucher"
					placeholder="Masukan voucher disini..."
					className={
						data && (data.status_code === 204 || data.status_code === 400)
							? "focus-visible:ring-red-600"
							: ""
					}
				/>
				<Button
					isLoading={isFetching}
					size="sm"
					type="submit"
					className="w-1/2"
				>
					Cek Voucher
				</Button>
			</div>
			{data && data.status_code === 200 ? (
				<p className="text-primary text-sm">
					{"Anda mendapatkan potongan " +
						formatCurrency(data.datas?.nominal || 0)}
				</p>
			) : (
				<p className="text-red-600 text-sm">
					{data?.message && data?.message + "!"}
				</p>
			)}
		</form>
	);
}
