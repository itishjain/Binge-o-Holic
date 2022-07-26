import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #444444;
  position: relative;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  box-shadow: 3.5px 3.5px 5px #1d1d1dbb;
  border-radius: 10px;
  font-weight: 700;
  margin-bottom: 20px;
  &:hover {
    color: #2400ff;
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 3px;
      left: 0%;
      bottom: 0;
      background-color: #2400ff;
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 10%;
          width: 80%;
        }
      }
    }
  }
`;
