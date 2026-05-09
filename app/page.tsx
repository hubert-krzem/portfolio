import Image from "next/image";
import { Blob } from "../components/Blob";

export default function Home() {
  return (
    <main>
      <section id="hero">

      </section>

      <section id="contact" className="max-w-6xl mx-auto p-4 w-full">
        <h2 className="text-3xl font-bold underline">Get in touch</h2>

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
                className="absolute inset-0 w-full h-full z-0 scale-[1.3]"
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
                className="absolute inset-0 w-full h-full z-0 scale-[1.3]"
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
