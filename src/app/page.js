import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Fearute from "./components/Fearute";
import Advantage from "./components/Advantage";
import Customize from "./components/Customize";
import Testmonial from "./components/Testmonial";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>  
      <Hero/>
      <Fearute/>
      <Advantage/>
      <Customize/>
      <Testmonial/>
      <Reviews/>
      <Faq/>
      <Banner/>
      <Footer/>
    </div>
  );
}
