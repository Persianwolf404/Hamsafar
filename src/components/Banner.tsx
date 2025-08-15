import Image from "next/image";
import Banner from "../../public/Banner.avif";
import { responsiveClasses } from "@/shared";

export default function Banners() {
  return (
    <section className={`${responsiveClasses} flex justify-center py-20`}>
      <Image className="rounded-4xl" width={1200} src={Banner} alt={"Banner"} />
    </section>
  );
}
