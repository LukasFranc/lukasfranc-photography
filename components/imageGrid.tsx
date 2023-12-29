"use client";

import { SearchResult } from "@/app/page";
import { CloudinaryImage } from "@/components/cloudinaryImage";
import { PersonalCard } from "@/components/personalCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


export const ImageGrid = ( { imageResources } : { imageResources : SearchResult[] } ) => {

	return (
		<div
			className="columns-1 gap-4 lg:gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-4 lg:[&>div:not(:first-child)]:mt-4">
			<PersonalCard />
			{imageResources.map(( image ) => {
				let width = image.width;
				let height = image.height;
				if ( image.width != image.height ) {
					width = image.width > image.height ? 1920 : 1080;
					height = image.width > image.height ? 1080 : 1920;
				}

				return (
					<div key={image.public_id}>
						<Dialog>
							<DialogTrigger asChild>
								<CloudinaryImage
									key={image.public_id}
									src={image.public_id}
									alt="any image"
									width={width}
									height={height}
									className="hover:cursor-zoom-in hover:opacity-80 transition-all duration-200"
								/>
							</DialogTrigger>
							<DialogContent className="flex justify-center bg-black border-none">
								<CloudinaryImage
									key={image.public_id}
									src={image.public_id}
									alt="any image"
									width={width}
									height={height}
									className="md:max-h-[95vh] max-md:object-contain w-auto"
								/>
							</DialogContent>
						</Dialog>
					</div>
				);
			})}
		</div>
	);
};