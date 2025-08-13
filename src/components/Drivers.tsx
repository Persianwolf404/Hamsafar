import DriverImage from "../../public/driver.png";
import Image from "next/image";
import { responsiveClasses } from "@/shared";
import { Yekan } from "@/shared/fonts";

export default function Drivers() {
  return (
    <div
      dir="rtl"
      className={`flex h-[80vh] items-center ${responsiveClasses}`}
    >
      <div className="flex ">
        <div className="flex justify-center">
          <Image
            className="rounded-[35%_65%_55%_45%_/_66%_40%_60%_34%]"
            width={700}
            src={DriverImage}
            alt={""}
          />
        </div>
        <div className="flex gap-5 px-20 mt-5 flex-col w-3/5">
          <div className="p-5  border-2 border-secondary-accent rounded-xl ">
            <h2
              className={`${Yekan.className} text-secondary-accent text-2xl font-bold`}
            >
              پرداخت بدون دردسر.
            </h2>
            <p className="mt-3 text-accent">
              با اپلیکیشن ما، دیگر خبری از مشکلات پول نقد نیست. مسافران کرایه را
              مستقیماً از طریق اسکن QR کد پرداخت می‌کنند و پول بلافاصله به صورت
              دیجیتال و امن به حسابتان واریز می‌شود می‌شود.
            </p>
          </div>
          <div className="p-5  border-2 border-secondary-accent rounded-xl ">
            <h2
              className={`${Yekan.className} text-secondary-accent text-2xl font-bold`}
            >
              سرعت در سفرها.
            </h2>
            <p className="mt-3 text-accent">
              با این سیستم پرداخت، هم شما و هم مسافر در وقت صرفه‌جویی می‌کنید.
              فرآیند پرداخت تنها با چند لمس روی گوشی مسافر انجام می‌شود. این
              یعنی مسافر زودتر پیاده می‌شود، شما سریع‌تر به سراغ مسافر بعدی
              می‌روید، و روز کاری‌تان روان‌تر پیش می‌رود
            </p>
          </div>
          <div className="p-5  border-2 border-secondary-accent rounded-xl ">
            <h2
              className={`${Yekan.className} text-secondary-accent text-2xl font-bold`}
            >
              شفافیت و در پرداخت.
            </h2>
            <p className="mt-3 text-accent">
              با این اپلیکیشن، هر پرداخت به صورت کاملاً شفاف و دیجیتال ثبت
              می‌شود. دیگر هیچ بحثی بر سر کرایه، پول خرد، یا صحت پرداخت وجود
              نخواهد داشت. این نه تنها به شما آرامش خاطر می‌دهد، بلکه تصویر
              حرفه‌ای و مدرنی از شما و خدماتتان به مسافران ارائه می‌کند
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
