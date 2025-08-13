import Image from "next/image";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import Logo from "../../public/logo.png";
import { responsiveClasses } from "@/shared";

export default function Footer() {
  return (
    <footer className="bg-[var(--acme-background-color)] text-[var(--acme-accent-color)] border-t border-[var(--acme-border-color)]">
      <div
        dir="rtl" className={`${responsiveClasses} flex flex-wrap justify-between items-start gap-8 py-12`}
      >
        {/* Logo and About Section */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <Image
            width={150}
            src={Logo}
            alt="logo"
            className="mb-4 mx-auto md:mx-0"
          />
          <p className="text-sm leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        {/* Contact Information */}
        <div
          dir="rtl"
          className="flex-1 min-w-[200px] text-center md:text-right"
        >
          <h3 className="text-xl font-bold text-[var(--acme-primary-color)] mb-4">راه های ارتباطی</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-[var(--acme-secondary-accent-color)]">آدرس: </span>
              <span>گیلان، بندرانزلی، خیابان گلستان</span>
            </li>
            <li>
              <span className="font-semibold text-[var(--acme-secondary-accent-color)]">شماره تماس: </span>
              <span>09010789033, 09117064116</span>
            </li>
            <li>
              <span className="font-semibold text-[var(--acme-secondary-accent-color)]">ایمیل: </span>
              <span>mohamadeshayanfar@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div
          dir="rtl"
          className="flex-1 min-w-[150px] text-center md:text-right"
        >
          <h3 className="text-xl font-bold text-[var(--acme-primary-color)] mb-4">
            شبکه های اجتماعی
          </h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-[var(--acme-accent-color)] hover:text-[var(--acme-primary-color)] transition-colors duration-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="text-[var(--acme-accent-color)] hover:text-[var(--acme-primary-color)] transition-colors duration-300"
            >
              <FaTelegram size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[var(--acme-foreground-color)] py-4 text-center text-sm text-[var(--acme-border-color)]">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
