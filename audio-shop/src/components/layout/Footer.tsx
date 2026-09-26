import { useState } from "react";
import { Globe } from "lucide-react";
import Telegram from "../../assets/icons/Telegram.svg";
import VK from "../../assets/icons/VK.svg";
import Whatsapp from "../../assets/icons/Whatsapp.svg";
import { Container } from "../Container";
import { Link, NavLink } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  return (
    <footer className={className}>
      <Container className="mt-8 grid grid-cols-1 gap-7 rounded-t-[24px] bg-white px-5 py-6 shadow-sm sm:mt-10 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:rounded-t-[30px] sm:px-8 sm:py-7 lg:grid-cols-[1fr_2fr_1fr] lg:px-10">
        <Link
          to="/"
          className="w-fit text-2xl font-bold tracking-tight text-black transition-colors duration-200 hover:text-orange-500"
        >
          QPICK
        </Link>

        <nav className="grid grid-cols-2 gap-5 text-sm sm:gap-6">
          <div className="flex flex-col gap-3">
            <NavLink
              to="/favorites"
              className="transition-colors duration-200 hover:text-orange-500"
            >
              Избранное
            </NavLink>
            <NavLink
              to="/cart"
              className="transition-colors duration-200 hover:text-orange-500"
            >
              Корзина
            </NavLink>
            <a
              href="tel:+79991234567"
              className="transition-colors duration-200 hover:text-orange-500"
            >
              Контакты
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-orange-500"
            >
              Условия сервиса
            </a>

            <div className="mt-1 flex flex-wrap items-center gap-3">
              <Globe
                size={14}
                strokeWidth={1.5}
                className="text-gray-500"
              />

              <button
                type="button"
                onClick={() => setLanguage("ru")}
                className={`transition-colors duration-200 hover:text-orange-600 ${
                  language === "ru" ? "text-orange-500" : "text-black"
                }`}
              >
                Рус
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition-colors duration-200 hover:text-orange-600 ${
                  language === "en" ? "text-orange-500" : "text-black"
                }`}
              >
                Eng
              </button>
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-start gap-3 sm:col-span-2 sm:justify-end lg:col-span-1 lg:items-start">
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VK"
            className="group rounded-full p-1 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={VK}
              alt=""
              className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="group rounded-full p-1 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={Telegram}
              alt=""
              className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group rounded-full p-1 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={Whatsapp}
              alt=""
              className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}