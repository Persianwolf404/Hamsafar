"use client";
import { useEffect, useRef } from "react";
import Banner from "../../public/qrcode.avif";
import Image from "next/image";
import gsap from "gsap";
import { Yekan } from "@/shared/fonts";
import { responsiveClasses } from "@/shared";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Only run the GSAP animation on screens 992px and wider
    if (window.innerWidth >= 992 && imgRef.current) {
      gsap.to(imgRef.current, {
        y: -20,
        ease: "sine.inOut",
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div
      dir="rtl"
      className={`${responsiveClasses} flex pt-10 md:pt-40 min-h-screen items-center  md:flex-col`}
    >
      <div dir="rtl" className="w-[42%] md:w-full flex flex-col md:text-center">
        <h1
          className={`${Yekan.className} md:text-5xl sm:text-4xl sm:leading-[50px] text-5xl xl:text-4xl lg:text-3xl text-secondary-accent font-extrabold md:leading-[60px] leading-[65px] xl:leading-[50px] lg:leading-[40px] mb-2`}
        >
          با <span className="text-secondary relative">همسفر</span> راحت سوار
          تاکسی شو <br className="hidden md:inline" /> اسکن کن و سریع کرایه رو{" "}
          <br className="" />
          <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
            آنلاین پرداخت کن!
          </span>
        </h1>
        <div className="flex mt-8 xl:mt-3 gap-3 mr-1">
          <span className="w-[3px] bg-primary rounded-lg md:hidden" />
          <div className="xl:text-base sm:text-base md:text-lg text-lg lg:text-sm text-accent leading-relaxed font-medium  md:mx-auto">
            همسفر یه راه ساده‌ست برای پرداخت کرایه تاکسی فقط با اسکن QR. <br />
            پرداخت راحت، سریع و بدون دردسر، برای مسافر و راننده
          </div>
        </div>
        <div className="mt-10 xl:mt-5">
          <a
            className="inline-block xl: py-2 px-4 text-tertiary-accent bg-secondary rounded-xl"
            href="#"
          >
            <div className="flex items-center sm:text-base  md:text-lg gap-8 lg:text-sm hover:gap-10 transition-all">
              <span>مشاهده دمو</span>
              <span>
                <FaArrowLeftLong />
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="w-[58%] md:w-full pr-10 md:px-10 md:mt-20 ">
        <Image
          ref={imgRef}
          className="rounded-[14%_86%_22%_78%_/74%_26%_74%_26%] mb-5 shadow-2xl shadow-blue-200/40 md:rounded-xl"
          src={Banner}
          width={1200}
          alt="Banner"
        />
      </div>
    </div>
  );
}
