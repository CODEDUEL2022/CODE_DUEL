import { useState, useEffect, use } from 'react';
import { Cards } from '../../../../api/@types';

type UseHandOfCards = () => {
  cards: Cards;
  selectedCards: Cards;
  handleSelectCard: (selectedCardId: number) => void;
};

export const useHandOfCards: UseHandOfCards = () => {
  const [cards, setCards] = useState<Cards>([]);
  const [selectedCards, setSelectedCards] = useState<Cards>([]);

  // ドローする(socket)、いったん今はsample
  const types = ['attack', 'heal', 'absorption'] as const;
  useEffect(() => {
    setCards([
      {
        id: 1,
        name: 'Card Name 1',
        image_src: 'https://via.placeholder.com/150',
        value: 1,
        type: types[0],
      },
      {
        id: 2,
        name: 'Card Name 2',
        image_src: 'https://via.placeholder.com/150',
        value: 2,
        type: types[1],
      },
      {
        id: 3,
        name: 'Card Name 3',
        image_src: 'https://via.placeholder.com/150',
        value: 3,
        type: types[2],
      },
      {
        id: 4,
        name: 'Card Name 4',
        image_src: 'https://via.placeholder.com/150',
        value: 4,
        type: types[0],
      },
      {
        id: 5,
        name: 'Card Name 5',
        image_src: 'https://via.placeholder.com/150',
        value: 5,
        type: types[1],
      },
      {
        id: 6,
        name: 'Card Name 6',
        image_src: 'https://via.placeholder.com/150',
        value: 6,
        type: types[2],
      },
    ]);
  }, []);

  const handleSelectCard = (selectedCardId: number) => {
    setSelectedCards((prev) => {
      const index = prev.findIndex((card) => card.id === selectedCardId);
      if (index === -1) {
        return [...prev, cards.find((card) => card.id === selectedCardId)!];
      }
      return prev.filter((card) => card.id !== selectedCardId);
    });
    setCards((prev) => prev.filter((card) => card.id !== selectedCardId));
  };

  return {
    cards,
    selectedCards,
    handleSelectCard,
  };
};
