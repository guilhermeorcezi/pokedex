import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

export const Header = styled.header`
display:flex;
align-items:center;
justify-content:center;
padding:15px 30px 5px 30px;
`;

export const InputSearch = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:#fff;
padding:30px 20px;
border-radius:4px;
min-width:600px;
max-width:600px;

input{
  height:35px;
  width:250px;
  border: 2px solid #e3e3e3;
  border-radius: 4px 0 0 4px;
  padding:10px 15px;
  color: #666360;

  &::placeholder {
      color: #666360;
    }
}

> div {
  display:flex;
  align-items:center;
  background: #e3e3e3;
  padding:10px;
  border-radius: 0 4px 4px 0;
  cursor:pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.02, '#e3e3e3')};
  }

  svg{
  }
}

`;

export const Content = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
padding:0px 80px;
flex-wrap:wrap;
`;

export const PokemonCard = styled.div`
margin:10px;
height:150px;
width:150px;
border-radius:8px;
background:red;
`;
