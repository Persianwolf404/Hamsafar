import { responsiveClasses } from "@/shared";
import { Yekan } from "@/shared/fonts";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { RiCustomerServiceLine } from "react-icons/ri";
import { LuChartBar } from "react-icons/lu";

const driversData = [
  {
    icon: <PiCurrencyDollarSimpleBold className="text-tertiary-accent" />,
    title: "راحتی در پرداخت",
    description:
      "خداحافظی با پول نقد! با همسفر، دیگه نیازی نیست نگران پول خرد، اسکناس‌های پاره یا حساب و کتاب آخر شب باشید. تمام کرایه‌ها به صورت خودکار و امن به حساب شما واریز می‌شن. این سیستم هم برای شما و هم برای مسافرها امن‌تره و دردسرهای پرداخت نقدی رو از بین می‌بره.",
    bgColor: "bg-secondary",
    textColor: "text-tertiary-accent",
  },
  {
    icon: <RxPerson />,
    title: "مشتری جذب کن!",
    description:
      "همسفر فقط یک روش پرداخت نیست، یک راه برای جذب مشتری‌های جدیده. با ارائه یک سیستم پرداخت مدرن و راحت، مسافرها رو تشویق می‌کنی که دوباره از خدمات شما استفاده کنن. به زودی، مسافرها از ماشین‌های عادی خداحافظی می‌کنن و فقط به دنبال تاکسی‌هایی می‌گردن که همسفر دارن.",
    bgColor: "bg-background",
    textColor: "text-secondary-accent",
  },
  {
    icon: <RiCustomerServiceLine />,
    title: "ما همیشه کنار شماییم!",
    description:
      "نگران نباشید، همسفر همیشه پشتیبان شماست. اگر سوالی دارید، اگر به مشکلی برخورد کردید، یا اگر نیاز به راهنمایی دارید، تیم پشتیبانی ما ۲۴ ساعته در خدمت شماست. ما اینجا هستیم تا مطمئن بشیم شما به راحتی و با اطمینان کامل از همسفر استفاده می‌کنید.",
    bgColor: "bg-background",
    textColor: "text-secondary-accent",
  },
  {
    icon: <LuChartBar className="scale-[0.9]" />,
    title: "درآمدت رو مدیریت کن!",
    description:
      "با همسفر، تمام گزارشات درآمدی شما به صورت خودکار ثبت می‌شه. دیگه نیازی به یادداشت‌برداری و حساب و کتاب دستی نیست. شما به راحتی می‌تونید درآمد روزانه، هفتگی و ماهانه خودتون رو مشاهده و مدیریت کنید. این سیستم به شما کمک می‌کنه کسب و کارتون رو هوشمندانه اداره کنید و روی چیزهای مهم تمرکز داشته باشید.",
    bgColor: "bg-background",
    textColor: "text-secondary-accent",
  },
];

export default function Drivers() {
  return (
    <section className="bg-foreground">
      <div
        dir="rtl"
        className={`flex py-20 md:py-10 items-center ${responsiveClasses}`}
      >
        <div className="w-ful flex sm:flex-col gap-5 flex-col px-5">
          {Array.from({ length: Math.ceil(driversData.length / 2) }).map(
            (_, rowIndex) => (
              <div className="flex cursor-pointer sm:flex-col gap-5" key={rowIndex}>
                {driversData
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((driver, idx) => (
                    <div
                      key={idx}
                      className={`${driver.textColor} sm:w-full w-1/2 shadow-xl rounded-xl border-tertiary border-1 py-10 px-9  ${driver.bgColor}`}
                    >
                      <h3 className="flex items-center gap-2 text-4xl md:text-[25px]">
                        <span className="text-5xl text-secondary">
                          {driver.icon}
                        </span>
                        <span className={Yekan.className}>{driver.title}</span>
                      </h3>
                      <p className="mt-12 xl:mt-8 md:text-base text-lg">
                        {driver.description}
                      </p>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
