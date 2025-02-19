import Link from "next/link";
import { SiTelegram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator"; // Для визуального разделения

const navmenu = [
  { name: "Главная", href: "/" },
  { name: "История", href: "/history" },
  { name: "Новости", href: "/news" },
  { name: "Голосования", href: "/voting" },
  { name: "Экономика", href: "/economy" },
  { name: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Навигационное меню */}
          <nav>
            <ul className="flex flex-wrap gap-4 justify-center">
              {navmenu.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:underline text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Separator className="my-4 bg-white/20" /> {/* Разделитель */}
          {/* Социальные сети */}
          <div className="flex justify-center items-center gap-4">
            <span className="text-sm font-medium">Социальные сети:</span>
            <Link
              href="https://t.me/rostovpeoplerepublic"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Telegram"
            >
              <SiTelegram className="fill-blue-400" size={24} />
            </Link>
            <Link
              href="https://t.me/rostovpeoplerepublic" // Замени на актуальную ссылку Twitter, если нужно
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="fill-black" size={18} />
            </Link>
          </div>
          <Separator className="my-4 bg-white/20" /> {/* Разделитель */}
          {/* Копирайт и контакты */}
          <div className="flex flex-col items-center gap-2 text-sm">
            <p>© 2025 Ростовская Народная Республика</p>
            <p>Контакты: rostovpeoplerepublic@gmail.com</p>
          </div>
          {/* Юридические ссылки */}
          <div className="flex justify-center gap-4 text-sm">
            <Link href="/privacy" className="hover:underline">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:underline">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
