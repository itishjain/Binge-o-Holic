import styled from 'styled-components';
import { StyleCard } from './Components/Styled';

export const StyledShowCards = styled(StyleCard)`
  .btn-wrapper {
    text-align: center;
    .btn {
      margin-top: 10px;
      font-size: 16px;
      padding: 4px;
      border-radius: 14px;
      width: 110px;
      border: 1px groove #eee;
      box-shadow: 2px 2px 2px #2d2d2d;
      cursor: pointer;
    }
    .btn:hover {
      color: #000;
      background: white;
      box-shadow: 2px 2px 2px #1d1d1d;
    }
  }

  .readMore {
    text-decoration: none;
    font-size: 15px;
    color: rgb(203, 255, 187);
  }
  .readMore:hover {
    color: rgb(249, 182, 255);
    font-size: 17px;
  }
`;
