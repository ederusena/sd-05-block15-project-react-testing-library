import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Pokedex from '../components/Pokedex';
import renderWithRouter from '../services/renderWithRouter';

test('renderiza um botão com o texto Próximo Pokémon', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const button = getByText(/próximo pokémon/i);
  expect(button).toBeInTheDocument();
});

test('renderiza um botão com o texto All', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const button = getByText(/all/i);
  expect(button).toBeInTheDocument();
});

test('testa a função apertando o botão All', () => {
  jest.spyOn(Pokedex.prototype, 'filterPokemons');
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const button = getByText(/all/i);
  fireEvent.click(button);
  expect(Pokedex.prototype.filterPokemons).toHaveBeenCalled();
});

test('testa a função apertando o botão All', () => {
  jest.spyOn(Pokedex.prototype, 'filterPokemons');
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const button = getByText(/all/i);
  fireEvent.click(button);
  expect(Pokedex.prototype.filterPokemons).toHaveBeenCalledWith('all');
});
