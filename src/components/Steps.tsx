"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { responsiveClasses } from "@/shared";
import scanImage from "../../public/scan.avif";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Yekan } from "@/shared/fonts";

export default function Steps() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const base = [92, 61, 60, 88, 100, 89, 65, 54];

    gsap.to(
      {},
      {
        duration: 6,
        repeat: -1,
        ease: "none",
        onUpdate: function () {
          const t = this.progress() * Math.PI * 2;
          const wave = base.map((n, i) => {
            const offset = Math.sin(t + (i * Math.PI) / 4) * 6;
            return `${n + offset}%`;
          });
          imgRef.current!.style.borderRadius =
            wave.slice(0, 4).join(" ") + " / " + wave.slice(4).join(" ");
        },
      }
    );
  }, []);

  const features = [
    "پرداخت سریع و آنی",
    "تجربه مدرن و راحت در سفر شهری",
    "کاملاً روی بستر وب و بدون نصب اپلیکیشن",
    "امن و مطمئن با درگاه پرداخت شاپرک",
    "24 ساعته در دسترس",
  ];

  return (
    <div dir="rtl" className={`flex py-20 md:py-10  ${responsiveClasses}`}>
      <div
        dir="rtl"
        className="md:w-full w-1/2 flex flex-col justify-center pr-4"
      >
        <h1
          className={`${Yekan.className} text-5xl sm:text-5xl lg:text-4xl md:text-6xl text-secondary-accent font-extrabold leading-[65px] mb-2`}
        >
          چرا از{" "}
          <span dir="ltr" className="text-secondary relative">
            همسفر
          </span>{" "}
          استفاده کنیم؟
          <br />
        </h1>
        <div className="mt-8 flex gap-5 mr-1 flex-col">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <span className="w-1 bg-primary rounded-4xl"></span>
              <h4 className="text-accent my-2 text-xl">{feature}</h4>
            </div>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <a
            className="inline-block py-2 px-4 text-tertiary-accent bg-secondary rounded-xl"
            href="#"
          >
            <div className="flex items-center gap-8 hover:gap-10 transition-all">
              <span>مشاهده دمو</span>
              <span>
                <FaArrowLeftLong />
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="flex w-2/4 items-center md:hidden">
        <div>
          <Image
            ref={imgRef}
            className="rounded-[92%_61%_60%_88%_/_100%_89%_65%_54%]"
            width={700}
            src={scanImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
