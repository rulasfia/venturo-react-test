import { useGetAllMenuQuery } from "./lib/resources/menu/menuApi";

function App() {
	const { data, isLoading } = useGetAllMenuQuery(undefined);

	console.log({ isLoading, data });

	return (
		<div className="container mx-auto">
			<h1>Hello world!</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

export default App;
