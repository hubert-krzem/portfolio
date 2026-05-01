import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-black">
            <div className="grid grid-cols-3 max-w-6xl mx-auto items-center p-4 w-full"> 
                {/* LEFT: Logo */}
                <div className="relative h-15 w-auto">
                    <Link href="/">
                        <Image
                            src="/logo-hk.svg"
                            alt="Site logo, black lowercase letters, h and k"
                            width={82}
                            height={63}
                            className="w-auto object-contain cursor-pointer"
                            priority
                        />
                    </Link>
                </div>

                {/* CENTER: Nav links */}
                <div>
                    <ul className="flex justify-center space-x-10 text-black text-xs font-bold">
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about">Expierience</Link></li>
                        <li><a href="/redacted_Hubert_Krzemieniewski_CV.pdf">Resume</a></li>
                    </ul>
                </div>
                
                {/* RIGHT: Socials */}
                <div>
                    <ul className="flex justify-end space-x-3 text-black text-xs font-bold">
                        <li><a href="#socials">Socials</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}