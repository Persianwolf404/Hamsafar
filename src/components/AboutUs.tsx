import { FaArrowLeftLong } from "react-icons/fa6";
import { responsiveClasses } from "@/shared";
import { Yekan } from "@/shared/fonts";
import { LuQrCode } from "react-icons/lu";
import {
  MdOutlinePhoneIphone,
  MdOutlineSecurity,
  MdOutlineWatchLater,
} from "react-icons/md";

const cards = [
  {
    icon: LuQrCode,
    title: "پرداخت آسان!",
    text: "فقط با اسکن کد QR، در چند ثانیه کرایه را آنلاین پرداخت کنید.",
    wrapperClass: "bg-secondary text-tertiary-accent",
  },
  {
    icon: MdOutlinePhoneIphone,
    title: "همه‌چیز با گوشی!",
    text: "همه چیز روی گوشی انجام می‌شود؛ امن، راحت و همیشه در دسترس.",
    wrapperClass: "bg-background text-secondary-accent",
    iconClass: "text-secondary",
  },
  {
    icon: MdOutlineSecurity,
    title: "امنیت پرداخت!",
    text: "استفاده از درگاه پرداخت شاپرک برای حداکثر امنیت و حفاظت از اطلاعات شما",
    wrapperClass: "bg-background text-secondary-accent",
    iconClass: "text-secondary",
  },
  {
    icon: MdOutlineWatchLater,
    title: "همیشه در دسترس!",
    text: "امکان استفاده از همسفر در هر ساعت شبانه‌روز و تمام روزهای هفته.",
    wrapperClass: "bg-background text-secondary-accent",
    iconClass: "text-secondary",
  },
];

export default function AboutUs() {
  return (
    <div dir="rtl" className="flex py-20   bg-foreground md:py-10">
      <div
        className={`${responsiveClasses} flex md:flex-col-reverse  sm:flex-wrap`}
      >
        <div
          className={`${Yekan.className}  md:w-full sm:flex-col md:mt-10 sm:items-center md:justify-center flex w-1/2 relative `}
        >
          <div className="absolute md:hidden right-15 top-10 lg:right-8 w-[250px] h-[350px] lg:w-[220px] lg:h-[320px] md:w-[300px]  border-2 border-dashed border-gray-400 rounded-lg z-0"></div>

          <div className="flex md:w-1/2 md:items-end md:ml-4 sm:m-0 sm:w-full flex-col sm:flex-row sm:justify-center sm:flex-wrap z-10">
            {cards.slice(0, 2).map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`flex justify-center md:mt-4 items-center sm:text-center w-[280px] h-[350px] lg:w-[220px] lg:h-[320px] md:w-[350px] ${
                    idx === 1 ? "m-8 mt-15 md:m-0" : "md:m-0"
                  } shadow-md rounded-lg ${card.wrapperClass}`}
                >
                  <div className="mx-6">
                    <Icon
                      className={`text-7xl sm:mx-auto ${card.iconClass || ""}`}
                    />
                    <h4 className="mt-5 text-3xl font-bold">{card.title}</h4>
                    <p className="mt-3 font-semibold">{card.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column cards */}
          <div className="flex flex-col w-1/2 md:m-0 mt-20 sm:text-center sm:w-full sm:flex-row sm:justify-center sm:flex-wrap">
            {cards.slice(2).map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`flex justify-center items-center md:!m-0 md:!mt-4 w-[280px] h-[350px] last:mt-5 lg:w-[220px] lg:h-[320px] md:w-[350px] sm:m-4 ${
                    idx === 1 ? "mt-8" : ""
                  } shadow-md rounded-lg ${card.wrapperClass}`}
                >
                  <div className="mx-6">
                    <Icon
                      className={`text-7xl sm:mx-auto ${card.iconClass || ""}`}
                    />
                    <h4 className="mt-5 text-2xl font-bold">{card.title}</h4>
                    <p className="mt-3 font-semibold">{card.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side text */}
        <div
          dir="rtl"
          className="md:w-full w-1/2 md:pt-20 flex flex-col xl:pr-15 justify-center md:text-center  md:p-0 sm:w-full sm:text-center"
        >
          <h2
            className={`${Yekan.className} sm:text-4xl xl:text-4xl md:text-5xl  xl:leading-[50px] text-5xl text-secondary-accent font-extrabold leading-[65px] mb-2`}
          >
            درباره{" "}
            <span dir="ltr" className="text-secondary relative">
              ،همسفر
            </span>{" "}
            راهکاری ساده برای <br className="hidden sm:inline" /> پرداخت کرایه
            تاکسی
            <br />
          </h2>
          <p className="mt-2 md:mx-auto text-accent leading-normal w-5/6 font-medium">
            همسفر راهی ساده و سریع برای پرداخت آنلاین کرایه تاکسی است. کافی‌ست
            کد QR داخل تاکسی را با گوشی اسکن کنید و به صفحه پرداخت امن هدایت
            شوید. بدون نیاز به پول نقد یا کارت، می‌توانید کرایه را تنها با چند
            کلیک پرداخت کنید. هدف ما آسان‌تر کردن سفرهای شهری و فراهم کردن
            تجربه‌ای راحت، سریع و بدون دغدغه برای همه مسافران است تا بتوانید با
            خیال راحت سفر کنید و فقط روی مسیر تمرکز داشته باشید.
          </p>
          <div className="mt-10">
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
      </div>
    </div>
  );
}
