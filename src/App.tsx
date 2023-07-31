import Navbar from "./components/navbar";
import Menus from "./components/organisms/menus";

function App() {
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
