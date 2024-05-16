import Image from "next/image";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div className="text-[#2A2A2A] w-full h-full justify-center items-center text-xl flex flex-col">
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}
