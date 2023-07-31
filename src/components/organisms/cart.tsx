import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import Button from "../atoms/button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "~/lib/store/store";
import CartMenu from "../molecules/cartMenu";
import { formatCurrency } from "~/lib/utils/currencyFormatter";
import { useCreateOrderMutation } from "~/lib/resources/order/orderApi";

export default function Cart() {
	const cart = useSelector((state: RootState) => state.order.cart);

	const totalOrder = cart.reduce((acc, order) => {
		return acc + order.total * order.item.harga;
	}, 0);

	const [createOrder, { isLoading }] = useCreateOrderMutation({});

	const createOrderHandler = async () => {
		const items = cart.map((item) => ({
			id: item.item.id,
			harga: item.item.harga,
			catatan: item.note,
		}));

		const res = await createOrder({
			items,
			nominal_pesanan: totalOrder,
			nominal_diskon: 0,
		});

		console.log({ res });
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div role="button" className="relative inline-block">
					<Button variant="outline">
						<ShoppingCartIcon className="h-4 w-4" />
						Keranjang
					</Button>
					{cart.length < 1 ? null : (
						<span className="bg-red-600 text-white absolute px-2 py-1 text-xs font-medium top-0 right-0 rounded-full transform translate-x-1/2 -translate-y-1/2 ">
							{cart.length}
						</span>
					)}
				</div>
			</SheetTrigger>
			<SheetContent className="w-full sm:w-[540px] sm:max-w-md">
				<div className="flex h-full flex-col justify-between">
					<div className="flex flex-col">
						<SheetHeader>
							<SheetTitle>Keranjang</SheetTitle>
						</SheetHeader>
						<div className="grid grid-cols-1 gap-4 py-4">
							{cart.map((order) => (
								<CartMenu key={order.item.id} data={order} />
							))}
						</div>
					</div>
					<SheetFooter>
						<div className="flex flex-col gap-y-4 w-full">
							<div className="flex flex-row justify-between font-medium px-4 py-2 bg-white border border-gray-200 rounded-md">
								<span>Total:</span>
								<span>{formatCurrency(totalOrder)}</span>
							</div>

							<Button onClick={createOrderHandler} isLoading={isLoading}>
								Buat Pesanan
							</Button>
						</div>
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	);
}
