"use client";

import { SearchResult } from "@/app/page";
import { PersonalCard } from "@/components/personalCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";


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
					<div key={image.public_id} data-id={image.secure_url}>
						<Dialog>
							<DialogTrigger asChild>
								<div>
									<Image
										src={image.secure_url}
										alt=""
										width={width / 5}
										height={height / 5 }
										className="hover:cursor-zoom-in w-full hover:opacity-80 transition-all duration-200"
									/>
								</div>
							</DialogTrigger>
							<DialogContent className="flex justify-center bg-black border-none">
									<Image
										src={image.secure_url}
										alt=""
										width={width / 2}
										height={height / 2}
										className="md:max-h-[95vh] max-md:object-contain w-auto"
										unoptimized
									/>
							</DialogContent>
						</Dialog>
					</div>
				);
			})}
		</div>
	);
};