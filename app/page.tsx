import { Footer } from "@/components/footer";
import { ImageGrid } from "@/components/imageGrid";
import cloudinary from "cloudinary";


export type SearchResult = {
	public_id : string;
	width : number;
	height : number;
	secure_url : string;
}
export default async function Home () {
	const result = (
		await cloudinary.v2.search
        .expression("resource_type:image AND folder:portfolio")
	    .sort_by("uploaded_at", "desc")
	    .max_results(50)
	    .execute()
	) as { resources : SearchResult[] };

	console.log(result.resources);
	return (
		<main className="mx-auto max-w-[1960px] p-4">
			<ImageGrid imageResources={result.resources} />
			<Footer />
		</main>
	);
}
