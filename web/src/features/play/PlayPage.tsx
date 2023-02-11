import React, { useEffect, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { SortableContainer } from './parts/SortableContainer';
import { Card } from '../../components/parts/Card/Card';
import { CardType } from '../../libs/types/Card';

export const PlayPage = () => {
  // TODO: バックから取得する
  const sampleCards: Array<CardType> = [
    {
      id: 1,
      name: 'vue',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1674808250/e8d355e8ea56f5b6d51de063ea87234a.jpg',
    },
    {
      id: 2,
      name: 'React',
      cost: 2,
      enforce_os_id: 1,
      img_src: 'https://res.cloudinary.com/du3fnn01g/image/upload/v1674453694/olympic_flag.jpg',
    },
  ];

  const [containers, setContainers] = useState<{ [key: string]: Array<CardType> }>({
    fieldCards: [],
    myCards: sampleCards,
  });
  //ドラッグされているcardのid
  const [activeCardId, setActiveCardId] = useState<UniqueIdentifier>();
  const [activeCard, setActiveCard] = useState<CardType>();

  // ドラッグされているカード
  useEffect(() => {
    if (activeCardId === undefined) return;

    const activeFieldCard = containers['fieldCards'].find((card) => card.id === activeCardId);
    const activeMyCard = containers['myCards'].find((card) => card.id === activeCardId);
    const draggingCard = activeFieldCard || activeMyCard;

    setActiveCard(draggingCard);
  }, [activeCardId]);

  // ドラッグの開始、移動、終了などにどのような入力を許可するか(マウス、タッチなど)を決めるprops
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  //各コンテナ取得関数
  const findContainer = (id: UniqueIdentifier) => {
    // idがコンテナのkeyの場合
    if (id in containers) return id;
    // idがcardの場合、コンテナのkeyを取得する
    return Object.keys(containers).find((key: string) => {
      const cardsIdsInContainer = containers[key].map((card) => card.id);
      return cardsIdsInContainer.includes(id);
    });
  };

  // ドラッグ開始時に発火する関数。ドラッグしているcardのidを取得。
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const id = active.id;
    setActiveCardId(id);
  };

  //ドラッグ可能なアイテムがドロップ可能なコンテナの上に移動時に発火する関数
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;
    if (!overId) return;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer || activeContainer === overContainer) return;

    setContainers((allContainers) => {
      // 移動元,移動先のコンテナの要素配列を取得
      const activeContainerCards = allContainers[activeContainer];
      const overContainerCards = allContainers[overContainer];

      const activeContainerCardsIds = activeContainerCards.map((card) => card.id);
      const overContainerCardsIds = overContainerCards.map((card) => card.id);

      const activeCardIndex = activeContainerCardsIds.indexOf(activeId);
      const overCardIndex = overContainerCardsIds.indexOf(overId);

      // 新しい配列に入ったときのindexを作成
      let newIndex;
      if (overId in allContainers) {
        newIndex = overContainerCards.length + 1;
      } else {
        const isBelowLastCard = over && overCardIndex === overContainerCards.length - 1;
        const modifier = isBelowLastCard ? 1 : 0;
        newIndex = overCardIndex >= 0 ? overCardIndex + modifier : overContainerCards.length + 1;
      }

      return {
        ...allContainers,
        [activeContainer]: [
          // 移動元の残ったカード
          ...allContainers[activeContainer].filter((card) => card.id !== activeId),
        ],
        [overContainer]: [
          // もとのcardの配列に新しいcardが入り込む
          ...allContainers[overContainer].slice(0, newIndex),
          containers[activeContainer][activeCardIndex],
          ...allContainers[overContainer].slice(newIndex, allContainers[overContainer].length),
        ],
      };
    });
  };

  // ドラッグ終了時に発火する関数
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;

    if (!overId) return;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(over?.id);

    if (!activeContainer || !overContainer || activeContainer !== overContainer) return;

    const activeContainerCardsIds = containers[activeContainer].map((card) => card.id);
    const overContainerCardsIds = containers[overContainer].map((card) => card.id);

    const activeCardIndex = activeContainerCardsIds.indexOf(activeId);
    const overCardIndex = overContainerCardsIds.indexOf(overId);

    // フィールド情報を更新
    if (activeCardIndex !== overCardIndex) {
      setContainers((containers) => ({
        ...containers,
        [overContainer]: arrayMove(containers[overContainer], activeCardIndex, overCardIndex),
      }));
    }
    setActiveCardId(undefined);
    setActiveCard(undefined);
  };

  const fieldStyle = {
    display: 'flex',
    width: '60%',
    height: '300px',
    backgroundColor: '#144F61',
  };

  const myCardsStyle = {
    display: 'flex',
    width: '80%',
    height: '300px',
    backgroundColor: '#000',
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContainer
          containerId="fieldCards"
          cards={containers.fieldCards}
          style={fieldStyle}
        />
        <SortableContainer containerId="myCards" cards={containers.myCards} style={myCardsStyle} />
        <DragOverlay>{activeCardId ? <Card card={activeCard} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};
