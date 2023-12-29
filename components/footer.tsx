import Image from "next/image";
import Link from "next/link";
import lflogo from "../public/images/lukas-franc-photography-white.svg";

export const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center gap-4 bg-white/5 px-6 pb-8 pt-8 text-center text-white mt-8">
			<Image priority src={lflogo} alt="Lukas Franc Photography" width="150" />
			<div className="flex gap-4 max-md:flex-col">
				<Link href="https://www.lukasfranc.cz" className="no-underline hover:underline">www.lukasfranc.cz</Link>
				<Link href="mailto:info@lukasfranc.cz" className="no-underline hover:underline">info@lukasfranc.cz</Link>
			</div>
		</footer>
	)
}