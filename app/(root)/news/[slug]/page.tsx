import { notFound } from "next/navigation";

export default function NewsDetail({ params }: { params: { slug: string } }) {
  // Здесь ты можешь загрузить данные новости из MongoDB по slug
  const news = [].find((item) => item === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold">{news.title}</h1>
      <Image
        src={news.image}
        alt={news.title}
        width={600}
        height={400}
        className="mt-4 rounded"
      />
      <p className="mt-4">{news.content}</p> */}
    </div>
  );
}
