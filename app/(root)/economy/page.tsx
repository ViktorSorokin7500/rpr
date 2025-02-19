import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FaDonate } from "react-icons/fa";
import Link from "next/link";
import Container from "@/components/shared/container";

export default function EconomyPage() {
  return (
    <Container className="px-2 py-6">
      <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg hover:shadow-md transition-shadow duration-200">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Экономика Ростовской Народной Республики
            </CardTitle>
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              На данный момент Министерство Финансов Ростовской Народной
              Республики (МФ РНР) активно занимается разработкой и подготовкой к
              введению в оборот новой национальной валюты. Этот проект является
              ключевым элементом стратегического плана по укреплению финансовой
              независимости, суверенитета и экономической стабильности РНР.
            </p>
            <p className="text-gray-700 leading-relaxed">
              По завершении разработки новая валюта станет доступной для всех
              граждан РНР, и вы сможете свободно распоряжаться ею на своё
              усмотрение. Среди возможных направлений использования мы
              предлагаем следующие варианты:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                Донация на поддержку &quot;Русореза&quot; — фонд, направленный
                на защиту интересов и безопасности РНР.
              </li>
              <li>
                Вклад в ядерную программу Украины — для укрепления
                стратегического партнёрства и обеспечения региональной
                стабильности.
              </li>
              <li>
                Пул для найма профессионалов — специальный фонд, который будет
                использоваться для финансирования операций по устранению главных
                врагов РНР, включая таких известных личностей, как{" "}
                <b title="В.В,Путин">Хуйло</b>, <b>Алкаш</b>,<b>Лошадь</b> и
                других деятелей, представляющих угрозу для нашего суверенитета и
                благополучия.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              МФ РНР подчёркивает, что все инициативы реализуются в строгом
              соответствии с Законом РНР № 123/2025 &quot;О государственной
              поддержке инициатив экономического развития&quot; и другими
              нормативными актами. Мы гарантируем прозрачность и эффективность
              использования средств, поступающих от граждан.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Следите за обновлениями на официальных каналах РНР. Презентация
              новой валюты и детали её введения будут объявлены в ближайшее
              время. Вместе мы строим сильную и независимую экономику Ростовской
              Народной Республики!
            </p>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              <FaDonate className="mr-2 h-4 w-4" /> Поддержать проект
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
