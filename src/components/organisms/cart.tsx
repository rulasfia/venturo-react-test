import {
	Sheet,
	SheetClose,
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

export default function Cart() {
	const cart = useSelector((state: RootState) => state.order.cart);

	console.log({ cart });
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<>
						<ShoppingCartIcon className="h-4 w-4" />
						Keranjang
					</>
				</Button>
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
								<span>{formatCurrency(20000)}</span>
							</div>
							<SheetClose asChild>
								<Button>Buat Pesanan</Button>
							</SheetClose>
						</div>
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	);
}
