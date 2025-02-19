import Image from "next/image";
import React from "react";
import Container from "../container";
import Flag from "../../../public/flag.png";
import Title from "../title";
import { Card, CardContent } from "@/components/ui/card";

export const DeclarationOfIndependence = () => {
  const declarationText = `
    Мы, народ РНР, утверждаем, что наша территория была незаконно передана России и требуем признания нашего права на самоопределение. 
    Мы обязуемся строить свободное, демократическое государство, основанное на принципах справедливости, равенства и уважения к правам человека. 
    Слава Ростовской Народной Республике!
  `;

  return (
    <Container className="relative w-full">
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[2/1]">
        {/* Используем aspect-ratio для адаптивной высоты */}
        <Image
          src={Flag}
          alt="Флаг Ростовской Народной Республики"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover z-0"
          priority
        />
        <div className="absolute hidden sm:block inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="absolute hidden sm:flex inset-0  items-center justify-center z-20 p-4">
          <Card className="bg-transparent border-none shadow-lg max-w-full mx-auto p-4 sm:p-6 backdrop-blur-sm">
            <CardContent className="text-center text-white">
              <Title>
                Декларация независимости Ростовской Народной Республики
              </Title>
              <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
                {declarationText}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};
