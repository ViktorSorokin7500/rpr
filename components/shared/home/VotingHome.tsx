import React from "react";
import Container from "../container";
import Title from "../title";
import { WhiteBlockRef } from "../white-block-ref";

const mockPollItems = [
  {
    link: "https://t.me/rostovpeoplerepiblic/3",
    title: "Согласны ли вы с отделением РНР от РФ?",
    image:
      "https://files.edgestore.dev/23zjvdu3b7b4aq0t/myPublicImage/_public/529db872-ac58-4faa-87bc-62e2ef50c505.png",
  },
];

export const VotingHome = () => {
  return (
    <Container className="px-2 py-6">
      <Title>Референдумы:</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {mockPollItems.map((pollItem) => (
          <WhiteBlockRef key={pollItem.link} contentItem={pollItem} />
        ))}
      </div>
    </Container>
  );
};
