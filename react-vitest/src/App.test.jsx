import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('테스트', () => {
  render(<App />);

  const divEl = screen.getByRole('button');

  expect(divEl).toHaveTextContent('hello');
});
