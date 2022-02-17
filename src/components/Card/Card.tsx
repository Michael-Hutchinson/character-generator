import React from 'react';

import { Wrapper } from './Card.styles';

interface ICardProps {
  name: string;
  imgUrl: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ name, imgUrl }) => (
  <Wrapper>
    <p>{name}</p>
    <p>{imgUrl}</p>
  </Wrapper>
);

export default Card;
