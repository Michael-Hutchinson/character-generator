import styled from 'styled-components';

interface IAppStylesProps {
  characterId: number;
}

export const Wrapper = styled.div<IAppStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-top: 20px;

  button {
    margin-top: 20px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    background: ${(props) => (props.characterId > 5 ? 'orange' : 'black')};
    color: white;
    padding: 0 10px;
    cursor: pointer;
  }
`;
