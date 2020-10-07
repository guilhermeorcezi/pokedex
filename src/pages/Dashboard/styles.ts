import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px 5px 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 30px 20px 2px 20px;
  border-radius: 4px;
  min-width: 600px;
  max-width: 600px;

  form:first-child {
    margin: 0 auto;
    display: flex;

    input {
      height: 35px;
      width: 250px;
      border: 2px solid #e3e3e3;
      border-radius: 4px 0 0 4px;
      padding: 10px 15px;
      color: #666360;

      &::placeholder {
        color: #666360;
      }
    }

    button {
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      background: #e3e3e3;
      padding: 10px;
      height: 35px;
      border-radius: 0 4px 4px 0;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background: ${shade(0.02, '#e3e3e3')};
      }

      svg {
        color: #666360;
      }
    }
  }
`;

export const FormFilter = styled.form`
  margin-top: 20px;
  display:flex;

  select {
      height: 40px;
      width: 150px;
      border:none;
      background:#f8f8fc;
      border-radius: 4px 0 0 4px;
      padding: 10px 15px;
      color: #666360;

      &::placeholder {
        color: #666360;
      }
    }

    button {
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      background:#f8f8fc;
      padding: 5px;
      height: 35px;
      border-radius: 0 4px 4px 0;
      transition: background-color 0.5s;
      cursor: pointer;
      color: #666360;
      font-size:12px;
      text-transform:uppercase;

      &:hover {
        background: ${shade(0.025, '#f8f8fc')};
      }


`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 80px;
  flex-wrap: wrap;
`;
