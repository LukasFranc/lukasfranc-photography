import Image from "next/image";
import lflogo from "../public/images/lukas-franc-photography-white.svg";

export const PersonalCard = () => {
	return (
		<div
			className="flex min-h-96 flex-col items-center justify-center gap-4 bg-white/5 px-6 pb-16 pt-16 text-center text-white">
			<Image priority src={lflogo} alt="Lukas Franc Photography" width="300" />
			<div className="flex gap-4">
				soc ikony
			</div>
		</div>
	);
};