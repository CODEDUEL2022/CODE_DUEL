/* eslint-disable */
export type User = {
  id: string;
  name: string;
  rate: number;
}

export type Deck = {
  name: string;
  cards: Card[];
}

export type Card = {
  id: number;
  name: string;
  value: number;
  type: 'attack' | 'heal' | 'absorption';
  image_src: string;
}

export type Cards = Card[]

export type Combo = {
  name: string;
  cards: Card[];
  type: 'attack' | 'heal' | 'absorption';
  value: number;
}
