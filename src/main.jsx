import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TicTacToe from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);
