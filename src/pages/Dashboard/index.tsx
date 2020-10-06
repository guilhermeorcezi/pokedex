import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import { Container, Header, InputSearch, Content, PokemonCard } from './styles';

const Dashboard: React.FC = () => {
  const [handle, setHandle] = useState(null);

  return (
    <Container>
      <Header>

        <InputSearch>
          <input name="search" type="text" placeholder="Pesquisar" />
          <div>
            <FiSearch />
          </div>
        </InputSearch>

      </Header>

      <Content>

        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>

      </Content>

    </Container>
  );
};

export default Dashboard;
