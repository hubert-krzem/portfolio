import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black font-satoshi">
            <div className="grid grid-cols-2 max-w-6xl mx-auto items-center p-4 w-full">

                {/* LEFT: Logo*/}
                <div className="flex items-center space-x-4">
                    {/* Logo image */}
                    <Link href="/">
                        <Image
                            src="/logo-hk.svg"
                            alt="Site logo, lowercase h and k"
                            width={82}
                            height={63}
                            className="h-15 w-auto object-contain cursor-pointer"
                        />
                    </Link>
                        
                    {/* Copyright disclaimer */}
                    <ul className="text-black text-xs font-bold"> 
                        <li>© 2026 Hubert Krzemieniewski.</li>
                        <li>All rights reserved.</li>
                    </ul>
                </div>

                {/* RIGHT: Links*/}
                <div className="flex justify-end space-x-10 text-black text-xs font-bold text-right underline">
                    <ul> {/* Column 1 */}
                        <li>
                            <a href="https://linkedin.com/in/hubert-krzemieniewski">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/hubert-krzem">Github</a>
                        </li>
                    </ul>

                     <ul> {/* Column 2 */}
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <a href="/about">Experience</a>
                        </li>
                        <li>
                            <Link href="/redacted_Hubert_Krzemieniewski_CV.pdf">Resume</Link>
                        </li>
                    </ul>

                     <ul> {/* Column 3 */}
                        <li>
                            <a href="#top">Back to top</a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}