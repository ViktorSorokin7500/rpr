import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "@/components/shared/container";
import {
  DeclarationOfIndependence,
  EconomyHome,
  Goals,
  NewsHome,
  VotingHome,
} from "@/components/shared/home";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Container className="px-4 py-6">
      <Card className="w-full max-w-7xl mx-auto bg-white shadow-lg">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold text-center">
              Добро пожаловать в Ростовскую Народную Республику!
            </h1>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          <DeclarationOfIndependence />
          <Goals />
          <Separator className="my-6" />
          <NewsHome />
          <Separator className="my-6" />
          <EconomyHome />
          <Separator className="my-6" />
          <VotingHome />
        </CardContent>
      </Card>
    </Container>
  );
}
