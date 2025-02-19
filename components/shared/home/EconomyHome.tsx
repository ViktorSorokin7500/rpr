import React from "react";
import Container from "../container";
import Title from "../title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const EconomyHome = () => {
  const declarationText = `
    В соответствии с Постановлением № 478/2025 от 15 февраля 2025 года, изданным Министерством Финансов Ростовской Народной Республики (далее - МФ РНР) и утвержденным Советом Министров РНР, настоящим информируем о следующем:

    В свете текущей экономической ситуации и в рамках стратегического плана по укреплению финансовой независимости и суверенитета Ростовской Народной Республики, МФ РНР, в лице своего Департамента по валютному регулированию и контролю, приступило к разработке и подготовке к введению в оборот новой национальной валюты. Согласно аналитическим исследованиям и прогнозам, проведенным Управлением экономического анализа и планирования МФ РНР, введение данной валюты будет способствовать стабилизации внутреннего рынка, повышению доверия к национальной экономике и укреплению международных экономических связей, особенно в контексте потенциального воссоединения с Украиной.

    В связи с вышеизложенным, Министерство Финансов РНР выражает искреннюю благодарность за поддержку и интерес к данной инициативе и с радостью информирует, что презентация новой валюты состоится в ближайшее время, о чем будет сообщено дополнительно через официальные каналы РНР.
  `;

  const donationDetails = [
    {
      label: "Наименование банка",
      value: "Государственный Банк Ростовской Народной Республики",
      subValue: "(Monobank)",
    },
    { label: "Номер счета", value: "4441 1110 4771 5275" },
    {
      label: "SWIFT",
      value: "UA673220010000026202328481063",
      subValue: "BIC Code: UNJSUAUKXXX",
    },
    {
      label: "SEPA",
      value: "GB37CLJU00997186218774",
      subValue: "BIC Code: CLJUGB21",
    },
    { label: "BTC", value: "1BxpTS8pXHxUtbCFoDZ5FiaC3Cas53KMe2", isBold: true },
    {
      label: "Назначение платежа",
      value:
        "Добровольное пожертвование на поддержку введения новой валюты РНР",
    },
  ];

  return (
    <Container className="px-2 py-6">
      <Title>Экономика РНР</Title>
      <Card className="mt-6 bg-white border border-gray-200 shadow-md">
        <CardContent className="p-6 space-y-6">
          <p className="text-gray-700 leading-relaxed">{declarationText}</p>
          <Separator className="my-6" />
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Реквизиты для оказания финансовой помощи:
            </h3>
            <div className="space-y-4">
              {donationDetails.map((detail, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2">
                  <span className="font-medium text-gray-800 w-32 sm:w-40">
                    {detail.label}:
                  </span>
                  <span
                    className={`text-gray-600 break-words ${
                      detail.isBold ? "font-bold" : ""
                    }`}
                  >
                    {detail.value}
                    {detail.subValue && (
                      <span className="text-sm text-gray-500 ml-2">
                        {detail.subValue}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm italic text-gray-500">
              *Все пожертвования являются добровольными и используются
              исключительно в целях, указанных в Законе РНР № 123/2025.
              Министерство Финансов РНР гарантирует прозрачность и целевое
              использование всех полученных средств.
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
