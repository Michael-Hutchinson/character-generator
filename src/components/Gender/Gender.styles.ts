import styled from 'styled-components';

import Gender from './Gender';

type Props = {
  color: string;
};

export const StyledGender = styled(Gender)<Props>`
  background: ${(props) => props.color};
`;
