import { FaArrowLeftLong } from "react-icons/fa6";
import { responsiveClasses } from "@/shared";
import { Yekan } from "@/shared/fonts";
import { LuQrCode } from "react-icons/lu";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

export default function AboutUs() {
  return (
    <div dir="rtl" className="flex h-screen bg-foreground">
      <div className={`${responsiveClasses} flex`}>
        <div className={`${Yekan.className} flex w-1/2 relative mt-10`}>
          <div className="absolute top-8 right-8 w-[250px] h-[350px] border-2 border-dashed border-gray-400 rounded-lg z-0"></div>
          <div className="flex flex-col  z-10">
            <div className="flex  justify-center flex-col w-[250px] h-[350px] bg-secondary rounded-lg">
              <div className="mx-6 text-white">
                <LuQrCode className=" text-7xl" />
                <h4 className=" mt-5 text-3xl font-extrabold">پرداخت آسان!</h4>
                <p className="mt-3 font-semibold">
                  فقط با اسکن کد QR، در چند ثانیه کرایه را آنلاین پرداخت کنید.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[250px] h-[350px] m-8 mt-15 bg-white shadow-md rounded-lg">
              <div className="mx-6 text-secondary-accent">
                <MdOutlinePhoneIphone className="text-secondary text-7xl" />
                <h4 className=" mt-5 text-3xl font-bold">همه‌چیز با گوشی!</h4>
                <p className="mt-3 font-semibold">
                  همه چیز روی گوشی انجام می‌شود؛ امن، راحت و همیشه در دسترس.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-25 ">
            <div className="flex justify-center items-center w-[250px] h-[350px] bg-white shadow-md rounded-lg">
              <div className="mx-6 text-secondary-accent">
                <MdOutlineSecurity className="text-secondary text-7xl" />
                <h4 className=" mt-5 text-3xl font-bold">امنیت پرداخت!</h4>
                <p className="mt-3 font-semibold">
                  استفاده از درگاه پرداخت شاپرک برای حداکثر امنیت و حفاظت از
                  اطلاعات شما
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[250px] h-[350px] mt-8 bg-white shadow-md rounded-lg">
              <div className="mx-6 text-secondary-accent">
                <MdOutlineWatchLater className="text-secondary text-7xl" />
                <h4 className=" mt-5 text-2xl font-bold">همیشه در دسترس!</h4>
                <p className="mt-3 font-semibold">
                  امکان استفاده از همسفر در هر ساعت شبانه‌روز و تمام روزهای
                  هفته.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div dir="rtl" className="w-1/2 flex flex-col justify-center">
          <h1
            className={`${Yekan.className} text-5xl text-secondary-accent font-extrabold leading-[65px] mb-2`}
          >
            درباره{" "}
            <span dir="ltr" className="text-secondary relative">
              ،همسفر
            </span>{" "}
            راهکاری ساده برای پرداخت کرایه تاکسی
            <br />
          </h1>
          <p className="mt-2 text-lg text-gray-600 leading-normal w-5/6 font-medium">
            همسفر راهی ساده و سریع برای پرداخت آنلاین کرایه تاکسی است. کافی‌ست
            کد QR داخل تاکسی را با گوشی اسکن کنید و به صفحه پرداخت امن هدایت
            شوید. بدون نیاز به پول نقد یا کارت، می‌توانید کرایه را تنها با چند
            کلیک پرداخت کنید. هدف ما آسان‌تر کردن سفرهای شهری و فراهم کردن
            تجربه‌ای راحت، سریع و بدون دغدغه برای همه مسافران است تا بتوانید با
            خیال راحت سفر کنید و فقط روی مسیر تمرکز داشته باشید.
          </p>
          <div className="mt-10">
            <a
              className="inline-block py-2 px-4 text-white bg-secondary rounded-xl"
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
      </div>
    </div>
  );
}
