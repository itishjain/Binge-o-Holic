import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
`;

export const StyleCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 50px; // top right bottom

  .img-wrapper {
    width: 100%;
    border-radius: 20px;
    height: 100%;
    overflow: hidden;
    border: 3px groove grey;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const StyleText = styled.div`
  text-align: center;
`;
