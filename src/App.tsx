import Navbar from "./components/navbar";
import Menus from "./components/organisms/menus";
import { Toaster } from "./components/ui/toaster";

function App() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto py-8 px-4">
				<Menus />
			</main>
			<Toaster />
		</>
	);
}

export default App;
