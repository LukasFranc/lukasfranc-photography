import { CloudinaryImage } from "@/components/cloudinaryImage";
import {
	DialogContent,
	Dialog,
} from "@/components/ui/dialog";

export const ImageDialog = ({
	isDialogOpen,
	setDialogOpen,
	imageID,
	width,
	height,
}: {
	isDialogOpen: boolean;
	setDialogOpen: (isDialogOpen: boolean) => void;
	imageID: string;
	width: number;
	height: number;
}) => {
	return (
		<Dialog
			onOpenChange={() => setDialogOpen(!isDialogOpen)}
			open={isDialogOpen}
		>
			<DialogContent>
				<div className="space-y-4">
					<CloudinaryImage
						src={imageID}
						alt="any image"
						width={width}
						height={height}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
