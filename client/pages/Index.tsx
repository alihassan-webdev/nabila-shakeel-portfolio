import Hero from "@/components/site/sections/Hero";
import About from "@/components/site/sections/About";
import Experience from "@/components/site/sections/Experience";
import Skills from "@/components/site/sections/Skills";
import Contact from "@/components/site/sections/Contact";
import Projects from "@/components/site/sections/Projects";

const EMAIL = "nabilashakeel62@gmail.com";

export default function Index() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact email={EMAIL} />
    </main>
  );
}
