import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const buttonAdd = getByText('Adicionar');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  // Use os fireEvent, para simular a digitação do usuário e o clique.
  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');

    fireEvent.change(inputTask, { target: { value: 'Estudar' } });
    expect(queryByText('Estudar')).not.toBeInTheDocument();

    fireEvent.click(buttonAdd);
    expect(queryByText('Estudar')).toBeInTheDocument();
  });
});
