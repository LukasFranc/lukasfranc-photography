import Link from "next/link";
import Image from "next/image";
import fb from "../public/images/fb.svg";
import inst from "../public/images/inst.svg";
import li from "../public/images/linkedin.svg";


export const Socials = () => {
    return (
        <div className="flex gap-3">
            <Link href="https://www.instagram.com/lukas.franc/" target="_blank" rel="noopener noreferrer">
                <Image src={inst} alt="" width="30" height="30"></Image>
            </Link>
            <Link href="https://www.facebook.com/lukas.franc.tnt/" target="_blank" rel="noopener noreferrer">
                <Image src={fb} alt="" width="30" height="30"></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/lukas-franc/" target="_blank" rel="noopener noreferrer">
                <Image src={li} alt="" width="30" height="30"></Image>
            </Link>
        </div>
    );
}