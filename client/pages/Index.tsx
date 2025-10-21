import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/sections/Hero";
import About from "@/components/site/sections/About";
import Experience from "@/components/site/sections/Experience";
import Skills from "@/components/site/sections/Skills";
import Contact from "@/components/site/sections/Contact";

const EMAIL = "qlqfmj9zje@jkotypc.com";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact email={EMAIL} />
      </main>
      <Footer email={EMAIL} />
    </div>
  );
}
