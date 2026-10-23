import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Team />
      <Pricing />
      <Blogs />
      <Newsletter />
      <Footer />
    </main>
  );
}
