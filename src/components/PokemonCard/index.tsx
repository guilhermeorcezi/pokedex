import React from 'react';
import { IPokemon } from '../../pages/Dashboard';

import { Container, PokemonTitle, PokemonTypes } from './styles';

interface PokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => (
  <>
    <Container>
      <PokemonTitle>{pokemon.name}</PokemonTitle>
      <img
        src={`${pokemon.sprites.other.dream_world.front_default}`}
        alt={pokemon.name}
      />
      <PokemonTypes>
        {pokemon.types.map(pokemonType => (
          <span key={pokemonType.type.name}>{pokemonType.type.name}</span>
        ))}
      </PokemonTypes>
    </Container>
  </>
);

export default PokemonCard;
