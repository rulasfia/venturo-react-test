import type { Menu as MenuType } from "~/lib/resources/menu/menuType";
import Button from "../atoms/button";
import { PlusIcon } from "@heroicons/react/20/solid";
import { formatCurrency } from "~/lib/utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { addToCart } from "~/lib/resources/order/orderSlice";

type ComponentProps = {
	data: MenuType;
};

export default function Menu({ data }: ComponentProps) {
	const dispatch = useDispatch();

	return (
		<div className="px-2 py-2 border border-gray-200 bg-white rounded-md">
			<img
				src={data.gambar}
				alt={`Gambar ${data.nama}`}
				className="aspect-[3/2] object-contain rounded-md border border-gray-200 "
				width={360}
				height={240}
			/>
			<p className="text-xs text-primary mt-4 px-3 capitalize py-1 w-fit rounded-full bg-primary/10">
				{data.tipe}
			</p>
			<p className="text-lg font-medium mt-1">{data.nama}</p>
			<p className="text-base font-bold text-primary">
				{formatCurrency(data.harga)}
			</p>
			<Button
				onClick={() => dispatch(addToCart(data))}
				className="gap-1 mt-4 w-full xl:w-fit"
			>
				<>
					<PlusIcon className="h-5 w-5" />
					Keranjang
				</>
			</Button>
		</div>
	);
}
