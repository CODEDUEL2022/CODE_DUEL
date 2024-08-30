import React from 'react';
import styled from './index.module.scss';
import { Card as CardType } from '../../../api/@types';
import Image from 'next/image';

type Props = {
  card: CardType;
  handleClick?: () => void;
};

export const Card: React.FC<Props> = ({ card, handleClick }) => {
  return handleClick ? (
    <button className={styled.cover}>
      <Image className={styled.image} src={card.image_src} alt={card.name} fill />
    </button>
  ) : (
    <div className={styled.cover}>
      <Image className={styled.image} src={card.image_src} alt={card.name} fill />
    </div>
  );
};
