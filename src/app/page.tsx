// import ThemeSwitch from "@/components/ThemeSwitcher";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";
import Drivers from "@/components/Drivers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Drivers />
      </main>
      <Footer />
    </>
  );
}
