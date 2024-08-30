import React from 'react';
import { HandOfCardsPresentation } from './presentations/';
import { useHandOfCards } from './hooks';

type Props = {};

export const HandOfCards: React.FC<Props> = (props) => {
  const { cards, selectedCards, handleSelectCard } = useHandOfCards();
  return (
    <HandOfCardsPresentation
      cards={cards}
      selectedCards={selectedCards}
      handleSelectCard={handleSelectCard}
    />
  );
};
