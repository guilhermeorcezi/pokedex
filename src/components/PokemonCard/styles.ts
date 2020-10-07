import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  height: 250px;
  width: 250px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;

  img {
    max-width: 130px;
  }
`;

export const PokemonTitle = styled.h1`
  text-transform: uppercase;
`;

export const PokemonTypes = styled.div`
  display: flex;
  margin-top: 10px;

  span {
    text-transform: uppercase;
  }

  span + span {
    margin-left: 20px;
  }
`;
