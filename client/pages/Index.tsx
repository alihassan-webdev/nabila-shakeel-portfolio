import Hero from "@/components/site/sections/Hero";
import About from "@/components/site/sections/About";
import Experience from "@/components/site/sections/Experience";
import Education from "@/components/site/sections/Education";
import Skills from "@/components/site/sections/Skills";
import Tools from "@/components/site/sections/tools";
import Projects from "@/components/site/sections/Projects";
import Contact from "@/components/site/sections/Contact";

const EMAIL = "nabilashakeel62@gmail.com";

export default function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Tools />
      <Contact email={EMAIL} />
    </main>
  );
}
