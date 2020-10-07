import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';

import PokemonCard from '../../components/PokemonCard';
import api from '../../services/api';

import {
  Container,
  Header,
  SearchContainer,
  Content,
  FormFilter,
} from './styles';

interface IType {
  type: {
    name: string;
  };
}
export interface IPokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: IType[];
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await api.get('pokemon?limit=150');

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
        setPokemons([response.data]);
        setSearchValue('');
      } catch (err) {
        setSearchValue('');
        toast.error('Este Pokémon não existe.');
      }
    },
    [searchValue],
  );

  const handleFilterPokemon = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (Number(type) === 0) return;

      setPokemons([]);

      try {
        const response = await api.get(`type/${type}`);

        const getPokemons = response.data.pokemon;

        getPokemons.map(async (poke: any) => {
          const newResponse = await api.get(`${poke.pokemon.url}`);

          setPokemons(state => [...state, newResponse.data]);
          setSearchValue('');
        });
      } catch (err) {
        setSearchValue('');
      }
    },
    [type],
  );

  return (
    <Container>
      <Header>
        <SearchContainer>
          <form onSubmit={handleSearchPokemon}>
            <input
              name="search"
              type="text"
              placeholder="Pesquisar"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              required
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>

          <FormFilter onSubmit={handleFilterPokemon}>
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="0" selected>
                Tipo
              </option>
              <option value="1">Normal</option>
              <option value="2">Fighting</option>
              <option value="3">Flying</option>
              <option value="4">Poison</option>
              <option value="5">Ground</option>
              <option value="6">Rock</option>
              <option value="7">Bug</option>
              <option value="8">Ghost</option>
              <option value="9">Steel</option>
              <option value="10">Fire</option>
              <option value="11">Water</option>
              <option value="12">Grass</option>
              <option value="13">Electric</option>
              <option value="14">Psychic</option>
            </select>
            <button type="submit">filtrar</button>
          </FormFilter>
        </SearchContainer>
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
