import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface WhiteBlockProps {
  className?: string;
  contentClassName?: string;
  contentItem: {
    slug: string;
    title: string;
    content: string;
    image: string;
  };
}

export const WhiteBlock: React.FC<WhiteBlockProps> = ({
  contentClassName,
  className,
  contentItem,
}) => {
  return (
    <div
      className={cn(
        className,
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
      )}
    >
      <div className={cn("p-4 space-y-4", contentClassName)}>
        <Image
          src={contentItem.image}
          alt={contentItem.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3
          className="text-lg font-semibold text-gray-800 line-clamp-1"
          title={contentItem.title}
        >
          {contentItem.title}
        </h3>
        <p className="text-gray-600 text-base line-clamp-2">
          {contentItem.content}
        </p>
        <Link
          href={`/news/${contentItem.slug}`}
          className="inline-block bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-600 transition-colors"
        >
          Перейти
        </Link>
      </div>
    </div>
  );
};
