import Image from "next/image";
import { Blob } from "../components/Blob";
import Button from "../components/Button";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 h-[calc(100dvh-93px)] max-w-6xl mx-auto w-full px-4 pt-6 pb-12 overflow-hidden"
      >
        {/* h1 — top on mobile, col 1 row 1 on desktop */}
        <h1 className="text-3xl md:text-5xl font-bold md:col-start-1 md:row-start-1 md:self-start">
          Hubert Krzemieniewski<br/>Portfolio
        </h1>

        {/* Blob — flex-1 on mobile, col 2 spanning all rows on desktop */}
        <div className="flex-1 min-h-0 md:flex-none flex items-center justify-center md:col-start-2 md:row-start-1 md:row-span-3">
          <Blob
            size={200}
            points={8}
            radius={70}
            contrast={0.4}
            gradient={{ start: "rgb(238, 205, 163)", end: "rgb(239, 98, 159)", angle: 90 }}
            className="w-full h-full overflow-visible"
          />
        </div>

        {/* Roles — after blob on mobile, col 1 row 2 on desktop */}
        <p className="text-2xl md:text-4xl md:col-start-1 md:row-start-2 md:self-center">
          Product Manager Intern<br/>IBM, Ireland
        </p>

        {/* CTAs — desktop always; mobile only on tall screens (≥720px viewport) */}
        <div className="hidden [@media(min-height:750px)]:flex md:flex flex-col gap-5 w-full md:w-1/2 font-bold md:col-start-1 md:row-start-3 md:self-end pt-12">
          <Button label="Download CV" link="/redacted_Hubert_Krzemieniewski_CV.pdf" className="hover:bg-gray-100"/>
          <Button label="Get In Touch" link="#contact" className="bg-black text-white hover:bg-mist-800 hover:border-black"/>
        </div>
      </section>

      {/* CTAs — mobile below-fold fallback for short screens (<720px) */}
      <div className="flex [@media(min-height:750px)]:hidden md:hidden flex-col gap-5 font-bold w-full max-w-6xl mx-auto px-4 pt-6 pb-12">
        <Button label="Download CV" link="/redacted_Hubert_Krzemieniewski_CV.pdf" className="hover:bg-gray-100"/>
        <Button label="Get In Touch" link="#contact" className="bg-black text-white hover:bg-mist-800 hover:border-black"/>
      </div>

      <section id="contact" className="max-w-6xl mx-auto p-4 w-full">
        <h2 className="text-4xl font-bold underline">Get in touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 py-16 text-xl gap-12 md:gap-0">

          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative flex items-center justify-center w-40 h-40 md:w-64 md:h-64">
              <Blob
                size={200}
                points={8}
                radius={70}
                contrast={0.4}
                gradient={{ start: "rgb(238, 205, 163)", end: "rgb(239, 98, 159)", angle: 90 }}
                className="absolute inset-0 w-full h-full z-0 scale-[1.3] overflow-visible"
              />
              <a href="https://linkedin.com/in/hubert-krzemieniewski">
                <Image
                  src="/LinkedIn_icon.svg"
                  alt="LinkedIn logo"
                  width={150}
                  height={150}
                  className="relative z-10 w-20 h-20 md:w-37.5 md:h-37.5"
                />
              </a>
            </div>
            <a href="https://linkedin.com/in/hubert-krzemieniewski" className="font-bold underline">
              Connect on LinkedIn →
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative flex items-center justify-center w-40 h-40 md:w-64 md:h-64">
              <Blob
                size={200}
                points={8}
                radius={70}
                contrast={0.4}
                gradient={{ start: "rgb(238, 205, 163)", end: "rgb(239, 98, 159)", angle: 90 }}
                className="absolute inset-0 w-full h-full z-0 scale-[1.3] overflow-visible"
              />
              <a href="https://github.com/hubertkrzem">
                <Image
                  src="/GitHub_Invertocat_Black.svg"
                  alt="GitHub logo"
                  width={150}
                  height={150}
                  className="relative z-10 w-20 h-20 md:w-37.5 md:h-37.5"
                />
              </a>
            </div>
            <a href="https://github.com/hubertkrzem" className="font-bold underline">
              Check out my GitHub →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
