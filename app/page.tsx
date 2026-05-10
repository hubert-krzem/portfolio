import Image from "next/image";
import { Blob } from "../components/Blob";
import Button from "../components/Button";

export default function Home() {
  return (
    <main>
      <section id="hero" className="grid grid-cols-2 max-w-6xl mx-auto w-full px-4 py-16 min-h-[90vh]">

        {/* LEFT: Text */}
        <div className="flex flex-col gap-[20vh] font-bold">
          {/* ROW 1: Title */}
          <h1 className="text-5xl">Hubert Krzemieniewski<br/>Personal Portfolio</h1>

          {/* ROW 2: Roles */}
          <p className="text-4xl">Product Manager Intern<br/>IBM, Ireland</p>

          {/* ROW 3: Buttons */}
          <div className="flex flex-col gap-5 w-1/2">
            <Button label="Get In Touch" link="#contact"/>
            <Button label="Download CV" link="/redacted_Hubert_Krzemieniewski_CV.pdf"/>
          </div>
        </div>

        {/* RIGHT: Blob */}
        <div className="flex items-center justify-center">
          <Blob
            size={200}
            points={8}
            radius={70}
            contrast={0.4}
            gradient={{ start: "rgb(238, 205, 163)", end: "rgb(239, 98, 159)", angle: 90 }}
            className="w-full h-full overflow-visible"
          />
        </div>
        
      </section>

      <section id="contact" className="max-w-6xl mx-auto p-4 w-full">
        <h2 className="text-4xl font-bold underline">Get in touch</h2>

        <div className="grid grid-cols-2 py-16 text-xl">

          {/* LEFT: LinkedIn */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative flex items-center justify-center w-64 h-64">
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
                  className="relative z-10"
                />
              </a>
            </div>
            <a href="https://linkedin.com/in/hubert-krzemieniewski" className="font-bold underline">
              Connect on LinkedIn →
            </a>
          </div>

          {/* RIGHT: GitHub */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative flex items-center justify-center w-64 h-64">
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
                  className="relative z-10 width-auto"
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
