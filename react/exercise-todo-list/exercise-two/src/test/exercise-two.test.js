import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByText, getByLabelText } = render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const inputTask = getByLabelText(/Tarefa:/i);
    const buttonAdd = getByText(/Adicionar/i);

    listTodo.forEach((value) => {
      fireEvent.change(inputTask, { target: { value } });
      fireEvent.click(buttonAdd);
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {});
  const { getByText } = render(<Item content={'Estudar'} />);
  expect(getByText(/Estudar/i)).toBeInTheDocument();
});
