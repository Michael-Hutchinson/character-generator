import React from 'react';

import { Wrapper } from './Item.styles';

interface IItemProps<ItemType> {
  item: ItemType;
  onClick: (item: ItemType) => void;
}

function Item<ItemType>({ item, onClick }: IItemProps<ItemType>) {
  return (
    <Wrapper>
      {Object.keys(item).map((property, i) => (
        <p key={i}>
          {property} - {item[property as keyof ItemType]}
        </p>
      ))}
      <button onClick={() => onClick(item)}>Click me!</button>
    </Wrapper>
  );
}

export default Item;
