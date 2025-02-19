import React from "react";
import Container from "../container";
import { WhiteBlock } from "../white-block";
import Title from "../title";

const mockNewsItems = [
  {
    slug: "rostov-rus",
    title: "РНР запустила программу 'Ростовская Русь'",
    content:
      "Ростовская Народная Республика объявила о старте новой культурной программы 'Ростовская Русь', направленной на возрождение исторических и культурных связей с Украиной. Программа включает в себя фестивали, выставки и образовательные мероприятия.",
    image:
      "https://files.edgestore.dev/23zjvdu3b7b4aq0t/myPublicImage/_public/39d857f5-3748-48ea-8cb3-12741267f205.jpg", // Замените на реальный путь к изображению
  },
  {
    slug: "ukraine-support",
    title: "Митинг в поддержку Украины в Ростове",
    content:
      "Сегодня в центре Ростова прошел многотысячный митинг в поддержку Украины и против российской агрессии. Участники скандировали лозунги о свободе и независимости РНР.",
    image:
      "https://files.edgestore.dev/23zjvdu3b7b4aq0t/myPublicImage/_public/39d857f5-3748-48ea-8cb3-12741267f205.jpg", // Замените на реальный путь к изображению
  },
  {
    slug: "new-currency",
    title: "Новая валюта РНРу введена в оборот",
    content:
      "Ростовская Народная Республика ввела в обращение свою новую валюту - РНРу. Это шаг к экономической независимости и укреплению связей с Украиной. Обмен валют уже начат в нескольких банках РНР.",
    image:
      "https://files.edgestore.dev/23zjvdu3b7b4aq0t/myPublicImage/_public/39d857f5-3748-48ea-8cb3-12741267f205.jpg", // Замените на реальный путь к изображению
  },
];

export const NewsHome = () => {
  return (
    <Container className="px-2 py-6">
      <Title>Наши новости:</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {mockNewsItems.map((newsItem) => (
          <WhiteBlock key={newsItem.slug} contentItem={newsItem} />
        ))}
      </div>
    </Container>
  );
};
