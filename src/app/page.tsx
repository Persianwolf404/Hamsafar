// import ThemeSwitch from "@/components/ThemeSwitcher";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Drivers from "@/components/Drivers";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Steps/>
        <Drivers />
      </main>
      <Footer />
    </>
  );
}
