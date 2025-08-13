import { responsiveClasses } from "@/shared";
import { Yekan } from "@/shared/fonts";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { RiCustomerServiceLine } from "react-icons/ri";
import { LuChartBar } from "react-icons/lu";

export default function Drivers() {
  return (
    <section className="bg-foreground">
      <div
        dir="rtl"
        className={`flex h-screen items-center ${responsiveClasses}`}
      >
        <div className="w-2/3 flex gap-5 flex-col px-5">
          <div className="flex gap-5">
            <div className="text-white w-1/2 shadow-xl rounded-lg bg-secondary h-[300px] px-9 py-8 ">
              <h3 className="flex items-center  gap-2 text-4xl">
                <span className="text-5xl ">
                  <PiCurrencyDollarSimpleBold />
                </span>
                <span className={Yekan.className}>راحتی در پرداخت</span>
              </h3>
              <p className="mt-12">
                خداحافظی با پول نقد! با همسفر، دیگه نیازی نیست نگران پول خرد،
                اسکناس‌های پاره یا حساب و کتاب آخر شب باشید. تمام کرایه‌ها به
                صورت خودکار و امن به حساب شما واریز می‌شن. این سیستم هم برای شما
                و هم برای مسافرها امن‌تره و دردسرهای پرداخت نقدی رو از بین
                می‌بره.
              </p>
            </div>
            <div className="text-secondary-accent w-1/2 px-9 py-8 shadow-xl rounded-lg border-gray-300 border-1 bg-white h-[300px]">
              <h3 className="flex items-center  gap-2 text-4xl">
                <span className="text-5xl text-secondary">
                  <RxPerson />
                </span>
                <span className={Yekan.className}>مشتری جذب کن!</span>
              </h3>
              <p className="mt-12">
                همسفر فقط یک روش پرداخت نیست، یک راه برای جذب مشتری‌های جدیده.
                با ارائه یک سیستم پرداخت مدرن و راحت، مسافرها رو تشویق می‌کنی که
                دوباره از خدمات شما استفاده کنن. به زودی، مسافرها از ماشین‌های
                عادی خداحافظی می‌کنن و فقط به دنبال تاکسی‌هایی می‌گردن که همسفر
                دارن.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="text-secondary-accent w-1/2 px-9 py-8 shadow-xl rounded-lg border-gray-300 border-1 bg-white h-[300px]">
              <h3 className="flex items-center  gap-2 text-4xl">
                <span className="text-5xl text-secondary">
                  <RiCustomerServiceLine />
                </span>
                <span className={Yekan.className}>ما همیشه کنار شماییم!</span>
              </h3>
              <p className="mt-12">
                نگران نباشید، همسفر همیشه پشتیبان شماست. اگر سوالی دارید، اگر به
                مشکلی برخورد کردید، یا اگر نیاز به راهنمایی دارید، تیم پشتیبانی
                ما ۲۴ ساعته در خدمت شماست. ما اینجا هستیم تا مطمئن بشیم شما به
                راحتی و با اطمینان کامل از همسفر استفاده می‌کنید.
              </p>
            </div>{" "}
            <div className="text-secondary-accent w-1/2 px-9 py-8 shadow-xl rounded-lg border-gray-300 border-1 bg-white h-[300px]">
              <h3 className="flex items-center  gap-2 text-4xl">
                <span className="text-5xl text-secondary">
                  <LuChartBar className="scale-[0.9]" />
                </span>
                <span className={Yekan.className}>درآمدت رو مدیریت کن!</span>
              </h3>
              <p className="mt-12">
                با همسفر، تمام گزارشات درآمدی شما به صورت خودکار ثبت می‌شه. دیگه
                نیازی به یادداشت‌برداری و حساب و کتاب دستی نیست. شما به راحتی
                می‌تونید درآمد روزانه، هفتگی و ماهانه خودتون رو مشاهده و مدیریت
                کنید. این سیستم به شما کمک می‌کنه کسب و کارتون رو هوشمندانه
                اداره کنید و روی چیزهای مهم تمرکز داشته باشید{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 pr-7 flex flex-col  justify-start">
          <h2
            className={`${Yekan.className} text-5xl text-secondary-accent font-extrabold leading-[65px]  mb-2`}
          >
            <span className="text-secondary relative">همسفر، </span>
            راهکار جدید شما{" "}
          </h2>
          <div className="flex mt-8 gap-3 mr-1">
            <span className="w-[3px] bg-primary rounded-lg" />
            <p className=" text-lg text-gray-600 leading-relaxed font-medium">
              رانندگان عزیز، شما با تلاش و تعهد خود، شهر رو زنده نگه می‌دارید.
              ما در همسفر اینجا هستیم تا این مسیر رو برای شما ساده‌تر، پردرآمدتر
              و امن‌تر کنیم. با پیوستن به خانواده همسفر، نه تنها مدیریت کسب و
              کارتون آسون می‌شه، بلکه با خیال راحت‌تر رانندگی می‌کنید و درآمدتون
              رو هم افزایش می‌دید. همسفر، راهکاری ساده برای حرفه‌ای‌تر شدن شغل
              شماست.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
}
