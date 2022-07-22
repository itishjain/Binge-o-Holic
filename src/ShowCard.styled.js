import styled from 'styled-components';
import { StyleCard } from './Components/Styled';

export const StyledShowCards = styled(StyleCard)`
  .btn-wrapper {
    text-align: center;
    .btn {
      margin-top: 10px;
      font-size: 16px;
      padding: 2px;
      border-radius: 10px;
      width: 110px;
      border: 1px groove #eee;
      box-shadow: 2px 2px 2px #2d2d2d;
    }
    .btn:hover {
      color: #000;
      background: white;
      border: 1px groove #111111;
      box-shadow: 2px 2px 2px #1d1d1d;
    }
  }

  .readMore {
    font-size: 15px;
  }
  .readMore:hover {
    color: purple;
    font-size: 17px;
  }
`;
