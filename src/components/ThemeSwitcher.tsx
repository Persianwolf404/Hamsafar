"use client";
import { useEffect, useRef } from "react";
import Banner from "../../public/qrcode.avif";
import Image from "next/image";
import gsap from "gsap";
import { Yekan } from "@/shared/fonts";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
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
    <div className="flex w-full pt-10 h-screen items-center bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="w-[58%]">
        <Image
          ref={imgRef}
          className="rounded-[14%_86%_22%_78%_/74%_26%_74%_26%] mb-5 alan shadow-2xl shadow-blue-200/40"
          src={Banner}
          width={1200}
          alt="Banner"
        />
      </div>
      <div dir="rtl" className="w-[42%] flex flex-col">
        <h1
          className={`${Yekan.className} text-5xl text-secondary-accent font-extrabold leading-[65px] mb-2`}
        >
          با <span className="text-secondary relative">،همسفر</span> راحت
          سوار تاکسی شو اسکن کن و سریع کرایه رو <br />
          <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
            آنلاین پرداخت کن!
          </span>
        </h1>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed font-medium">
          همسفر یه راه ساده‌ست برای پرداخت کرایه تاکسی فقط با اسکن QR. <br />
          <span className="text-gray-700">
            پرداخت راحت، سریع و بدون دردسر، برای مسافر و راننده
          </span>
        </p>
        <div className="mt-10 flex gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            شروع کنید
          </button>
          <button className="px-8 py-4 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
            درباره ما
          </button>
        </div>
      </div>
    </div>
  );
}
