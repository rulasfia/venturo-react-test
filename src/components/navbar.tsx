import Cart from "./organisms/cart";

export default function Navbar() {
	return (
		<header className="top-0 bg-white sticky h-20 border-b border-b-gray-200">
			<div className="justify-between h-full px-4 gap-x-2 flex flex-row items-center container mx-auto">
				<span className="text-xl font-semibold">Main Course</span>
				<Cart />
			</div>
		</header>
	);
}
