import styled from 'styled-components';
import {Colors} from '../../app/style';

export const TextAreaBlock = styled.div`
  width: 100%;
  position: relative;
  margin: 0.5rem 0;

  > * {
    transition: 0.2s;
    display: block;
  }

  > label {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  > textarea {
    box-sizing: border-box;
    width: 100%;
    min-height: 8rem;
    resize: none;
    padding: 8px 15px;
    border: 2px solid ${Colors.grey};
    border-radius: 0.2rem;
    background-color: ${Colors.xtLigthGrey};
  }

  &:focus-within label {
    color: ${Colors.beige};
  }

  &:focus-within textarea {
    border-color: ${Colors.beige};
  }
`;
