import { useSelector } from "react-redux";
import Navbar from "./components/navbar";
import Menus from "./components/organisms/menus";
import { RootState } from "./lib/store/store";

function App() {
	const cart = useSelector((state: RootState) => state.order.cart);

	console.log({ cart });
	return (
		<>
			<Navbar />
			<main className="container mx-auto py-8 px-4">
				<Menus />
			</main>
		</>
	);
}

export default App;
