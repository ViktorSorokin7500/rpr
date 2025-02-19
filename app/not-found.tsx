"use client";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const phrases = [
    "РНР смотрит на вас с надеждой на ваше участие в опросах.",
    "Не сдавайтесь, ведь РНР нуждается в каждом голосе!",
    "Ваш вклад в новую валюту РНРу - это все, что вы можете предложить?",
    "Думаете, через 20 лет РНР станет частью Украины?",
    "Хорошая попытка, но РНР ждет большего от вас.",
    "Вы считаете это вызовом? РНР видит в вас больше потенциала!",
    "Продолжайте в том же духе, РНР поддерживает вас!",
    "Вы шутите? РНР заслуживает большего!",
    "Где ваш энтузиазм? Мы что, играем в прятки?",
    "Вы думаете, это легкая прогулка? РНР требует усилий!",
    "Вы можете сделать лучше для РНР!",
    "Что если РНР станет центром мирового культурного возрождения?",
    "Это ваш окончательный ответ РНР?",
    "Может, вы могли бы быть немного более мотивированными для РНР?",
    "Попробуйте усерднее в следующий раз, РНР на вас рассчитывает.",
    "Не было бы странно, если бы РНР имела свою собственную космическую программу?",
    "Постарайтесь сильнее; РНР верит в вас!",
    "Вы можете удивить РНР, если постараетесь по-настоящему!",
  ];

  const getRandomPhrase = () => {
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const handleMouseEnter = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
    }
  };

  const handleMouseLeave = () => {
    if (clicks === 5) {
      setClicks(0);
    }
    setShowMessage(true);
  };

  const getButtonClass = () => {
    switch (clicks) {
      case 1:
        return "translate-x-80";
      case 2:
        return "-translate-x-24";
      case 3:
        return "-translate-x-80";
      case 4:
        return "translate-x-40";
      case 5:
        return "opacity-0 cursor-default";
      default:
        return "";
    }
  };

  return (
    <div className="h-screen grid">
      <div className="h-full flex flex-col justify-center items-center">
        <video
          src="/assets/404.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-5/6 h-5/6"
        />
        <div className="flex flex-col gap-4 items-center">
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`transform transition-all duration-500 ${getButtonClass()} w-fit`}
          >
            Вернуться в родную гавань <ArrowRight size={20} />
          </Button>

          <Link href="/">
            <span
              className="mt-4 underline hover:no-underline"
              title="Именно тут надо нажать!"
            >
              {showMessage
                ? getRandomPhrase()
                : "Нажмите тут для возвращения на главную"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
