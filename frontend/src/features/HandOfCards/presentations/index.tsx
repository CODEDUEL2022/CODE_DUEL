import React from 'react';
import styled from './index.module.scss';
import { Card } from '@/commons/Card';
import { Cards } from '../../../../api/@types';
import { Card as CardType } from '../../../../api/@types';

type Props = {
  cards: Cards;
  selectedCards: Cards;
  handleSelectCard: (selectedCardId: number) => void;
};

export const HandOfCardsPresentation: React.FC<Props> = ({
  cards,
  selectedCards,
  handleSelectCard,
}) => {
  return (
    <ul
      className={styled.deck}
      style={{ '--length': selectedCards.length + cards.length } as React.CSSProperties}
    >
      {selectedCards.map((card, index) => (
        <li key={card.name} className={styled.list}>
          <div
            className={`${styled.card} ${styled.active}`}
            style={{ '--index': index } as React.CSSProperties}
          >
            <Card card={card} handleClick={() => handleSelectCard(card.id)} />
          </div>
        </li>
      ))}
      {cards.map((card, index) => (
        <li key={card.name} className={styled.list}>
          <div
            className={styled.card}
            style={{ '--index': index + selectedCards.length } as React.CSSProperties}
          >
            <Card card={card} handleClick={() => handleSelectCard(card.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
};
