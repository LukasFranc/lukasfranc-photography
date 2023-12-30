import Image from "next/image";
import Link from "next/link";
import lflogo from "../public/images/lukas-franc-photography-white.svg";

export const PersonalCard = () => {
	// todo: add social media links
	return (
		<div
			className="flex min-h-96 flex-col items-center justify-center gap-5 bg-white/5 px-6 pb-16 pt-16 text-center text-white">
			<Image priority src={lflogo} alt="Lukas Franc Photography" width="300" />
			<div className="flex gap-4 flex-col italic text-sm">
				<p>Vítám vás na svém fotografickém webu, kde se snažím prezentovat moji vášeň pro krajinu a přírodu obecně, s uměním její zachycení pomocí fotoaparátu.</p>
				<p>Snažím se vždy zachytit to nejdůležitější - atmosféru, emoce a jedinečnost každého místa.</p>
				<span className="social"></span>
			</div>
			<div className="flex gap-1 flex-col">
				<p className="italic text-sm">V případě zájmu mě neváhejte kontaktovat.</p>
				<Link href="https://www.lukasfranc.cz" className="no-underline hover:underline">www.lukasfranc.cz</Link>
				<Link href="mailto:info@lukasfranc.cz" className="no-underline hover:underline">info@lukasfranc.cz</Link>
			</div>
		</div>
	);
};