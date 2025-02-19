"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Container from "@/components/shared/container";
import Title from "@/components/shared/title";
import { FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const contacts = [
  {
    title: "СБУ",
    items: [
      { icon: Phone, label: "Телефон", value: "+380 (044) 293-89-99" },
      { icon: Mail, label: "Email", value: "callcenter@ssu.gov.ua" },
      {
        icon: Globe,
        label: "Сайт",
        value: "ssu.gov.ua",
        href: "https://ssu.gov.ua/",
      },
    ],
  },
  {
    title: "Хочу жить",
    items: [
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/hochu_zhyt",
        href: "https://t.me/hochuzhit",
      },
      {
        icon: Globe,
        label: "Facebook",
        value: "facebook.com/hochuzhyt",
        href: "https://www.facebook.com/hochuzhyt",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "https://hochuzhit.com/",
        href: "https://hochuzhit.com/",
      },
    ],
  },
  {
    title: "Сергей Стерненко",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@STERNENKO",
        href: "https://www.youtube.com/@STERNENKO",
      },
      {
        icon: FaTwitter,
        label: "Twitter/X",
        value: "x.com/sternenko",
        href: "https://x.com/sternenko",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/ssternenko",
        href: "https://t.me/ssternenko",
      },
    ],
  },
  {
    title: "Птахи Мадяра",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@magyarbirds",
        href: "https://www.youtube.com/@magyarbirds",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/robert_magyar",
        href: "https://t.me/robert_magyar",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "magyarbirds.army",
        href: "https://magyarbirds.army/",
      },
    ],
  },
  {
    title: "Апостол Дмитро",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@dmytrokarpenko",
        href: "https://www.youtube.com/@dmytrokarpenko",
      },
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@VolodymyrZolkin",
        href: "https://www.youtube.com/@VolodymyrZolkin",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/AgentApostle",
        href: "https://t.me/AgentApostle",
      },
    ],
  },
  {
    title: "Наш выход. Крынина",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@NashVyhodIKrynina",
        href: "https://www.youtube.com/@NashVyhodIKrynina",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/dvizhenie_nashvyhod",
        href: "https://t.me/dvizhenie_nashvyhod",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/hochunaiti_com",
        href: "https://t.me/hochunaiti_com",
      },
    ],
  },
  {
    title: "Третя штурмова",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@ab3army",
        href: "https://www.youtube.com/@ab3army",
      },
      {
        icon: Globe,
        label: "Рекрутинг",
        value: "ab3.army",
        href: "https://ab3.army/",
      },
      {
        icon: Globe,
        label: "Facebook",
        value: "facebook.com/ab3.army",
        href: "https://facebook.com/ab3.army",
      },
    ],
  },
  {
    title: "РДК",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@join.rusvolcorps",
        href: "https://www.youtube.com/@join.rusvolcorps",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/russvolcorps",
        href: "https://t.me/russvolcorps",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "rusvolcorps.com",
        href: "https://rusvolcorps.com/",
      },
    ],
  },
  {
    title: "NAFO",
    items: [
      {
        icon: Globe,
        label: "Reddit",
        value: "reddit.com/r/NAFO",
        href: "https://www.reddit.com/r/NAFO/",
      },
      {
        icon: FaTwitter,
        label: "Twitter/X",
        value: "x.com/Official_NAFO",
        href: "https://x.com/Official_NAFO",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "nafo-ofan.org",
        href: "https://nafo-ofan.org/",
      },
    ],
  },
  {
    title: "Президент Зеленський",
    items: [
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/V_Zelenskiy_official",
        href: "https://t.me/V_Zelenskiy_official",
      },
      {
        icon: FaTwitter,
        label: "Twitter/X",
        value: "x.com/zelenskyyua",
        href: "https://x.com/zelenskyyua",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "president.gov.ua",
        href: "https://www.president.gov.ua/",
      },
    ],
  },
  {
    title: "Ukraine Now",
    items: [
      {
        icon: FaYoutube,
        label: "YouTube",
        value: "youtube.com/@ukraine_ua",
        href: "https://www.youtube.com/@ukraine_ua",
      },
      {
        icon: FaTwitter,
        label: "Twitter/X",
        value: "x.com/ukraine_ua",
        href: "https://x.com/ukraine_ua",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "ukraine.ua",
        href: "https://ukraine.ua/",
      },
    ],
  },
  {
    title: "РНР",
    items: [
      {
        icon: FaTwitter,
        label: "Twitter/X",
        value: "x.com/rostovpeoplerepiblic",
        href: "https://x.com/rostovpeoplerepiblic",
      },
      {
        icon: FaTelegram,
        label: "Telegram",
        value: "t.me/rostovpeoplerepiblic",
        href: "https://t.me/rostovpeoplerepiblic",
      },
      {
        icon: Globe,
        label: "Сайт",
        value: "rostovpeoplerepiblic.site",
        href: "https://www.rostovpeoplerepiblic.site",
      },
    ],
  },
];

export default function ContactsPage() {
  return (
    <Container className="px-4 py-6">
      <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <Title>Контакты</Title>
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {contact.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <item.icon className="h-5 w-5 text-gray-500" />
                      <p className="text-gray-700">
                        <strong>{item.label}:</strong>{" "}
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-blue-600 hover:underline"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          item.value
                        )}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
