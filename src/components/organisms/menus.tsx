import Menu from "../molecules/menu";
import { useGetAllMenuQuery } from "~/lib/resources/menu/menuApi";

export default function Menus() {
	const { data, isLoading } = useGetAllMenuQuery(undefined);

	console.log({ data });
	return (
		<div>
			{!isLoading ? null : <p>Loading...</p>}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-y-4 items-center justify-center gap-y-2">
				{!data || !data.datas
					? null
					: data.datas.map((item) => <Menu key={item.id} data={item} />)}
			</div>
		</div>
	);
}
