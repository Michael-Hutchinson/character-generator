import React from 'react';

import { StyledGender } from '../Gender/Gender.styles';
import { Wrapper } from './Card.styles';

interface ICardProps {
  name: string;
  imgUrl: string;
  gender: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ name, imgUrl, gender }) => (
  <Wrapper>
    <p>{name}</p>
    <img src={imgUrl} alt={name} />
    <StyledGender color="green" gender={gender} />
  </Wrapper>
);

export default Card;
