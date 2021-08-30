import React from 'react';
import { render } from '@testing-library/react';
import TicTacToe from './TicTacToe';

describe('<TicTacToe /> tests', () => {
  it('renders <TicTacToe />', () => {
    render(<TicTacToe />);
  });
});