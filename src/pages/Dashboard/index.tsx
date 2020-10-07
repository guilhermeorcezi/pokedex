import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import { FiSearch } from 'react-icons/fi';
import PokemonCard from '../../components/PokemonCard';
import api from '../../services/api';

import { Container, Header, InputSearch, Content } from './styles';

interface IType {
  type: {
    name: string;
  };
}
export interface IPokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: IType[];
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get('pokemon?limit=100');

      const getPokemons = response.data.results;

      getPokemons.map(async (poke: any) => {
        const newResponse = await api.get(`${poke.url}`);

        setPokemons(state => [...state, newResponse.data]);
      });
    }

    loadPokemons();
  }, []);

  const handleSearchPokemon = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const response = await api.get(`pokemon/${searchValue}`);
        console.log(response.data);
        setPokemons(response.data);
      } catch (err) { }
    },
    [searchValue],
  );

  return (
    <Container>
      <Header>
        <InputSearch>
          <form onSubmit={handleSearchPokemon}>
            <input
              name="search"
              type="text"
              placeholder="Pesquisar"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </InputSearch>
      </Header>

      <Content>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
