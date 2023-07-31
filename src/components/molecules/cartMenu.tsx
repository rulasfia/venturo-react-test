import {
	type OrderState,
	addToCart,
	removeFromCart,
	updateNoteByMenuID,
} from "~/lib/resources/order/orderSlice";
import { formatCurrency } from "~/lib/utils/currencyFormatter";
import Button from "../atoms/button";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import Input from "../atoms/input";

type ComponentProps = {
	data: OrderState["cart"][number];
};

export default function CartMenu({ data }: ComponentProps) {
	const dispatch = useDispatch();

	return (
		<div className="flex flex-col">
			<div className="flex gap-x-4 flex-row items-start">
				<img
					src={data.item.gambar}
					alt={`Gambar ${data.item.nama}`}
					className="aspect-[3/2] w-2/5 object-contain rounded-md border border-gray-200 "
					width={180}
					height={120}
				/>
				<div className="flex flex-col w-3/5 justify-between">
					<div>
						{/* <p className="text-xs text-primary border px-2 py-1 w-fit rounded-full bg-primary/10">
						{data.item.tipe}
					</p> */}
						<p className="text-lg font-medium">{data.item.nama}</p>
						<p className="text-base font-bold text-primary">
							{formatCurrency(data.item.harga)}
						</p>
					</div>

					<div className="flex flex-row justify-end gap-x-3 items-center">
						<Button
							onClick={() => dispatch(removeFromCart(data.item))}
							size="sm"
							variant="outline"
							className="w-8 h-8"
						>
							<MinusIcon className="w-4 h-4" />
						</Button>
						<span>{data.total}</span>
						<Button
							onClick={() => dispatch(addToCart(data.item))}
							size="sm"
							variant="outline"
							className="w-8 h-8"
						>
							<PlusIcon className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</div>
			<div className="mt-2">
				<label className="flex flex-col gap-y-1">
					Catatan:
					<Input
						value={data.note}
						onChange={(e) =>
							dispatch(
								updateNoteByMenuID({
									id: data.item.id,
									note: e.target.value,
								})
							)
						}
						name={`catatan ${data.item.nama}`}
						placeholder="Tambahkan catatan disini..."
					/>
				</label>
			</div>
		</div>
	);
}
