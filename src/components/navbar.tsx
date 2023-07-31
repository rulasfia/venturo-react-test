import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Button from "./atoms/button";

export default function Navbar() {
	return (
		<header className="top-0 bg-white sticky h-20 border-b border-b-gray-200">
			<div className="justify-between h-full px-4 gap-x-2 flex flex-row items-center container mx-auto">
				<span className="text-xl font-semibold">Main Course</span>
				<Button variant="outline">
					<>
						<ShoppingCartIcon className="h-4 w-4" />
						Keranjang
					</>
				</Button>
			</div>
		</header>
	);
}
