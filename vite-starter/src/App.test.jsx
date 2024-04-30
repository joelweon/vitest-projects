import { fireEvent, render, screen } from '@testing-library/react';
import App from './App.jsx';

test('버튼 클릭', () => {
  // render App
  render(<App />);

  // find an element with a role of button and text matching /blue/i
  const buttonEl = screen.getByRole('button', { name: /blue/i });

  // expect the class to be red
  expect(buttonEl).toHaveClass('red');

  // 버튼 클릭하기
  fireEvent.click(buttonEl);

  // expect the class to be blue
  expect(buttonEl).toHaveClass('blue');

  // expect the button text to match /red/i
  expect(buttonEl).toHaveTextContent(/red/i);
  expect(buttonEl).toHaveStyle({ 'background-color': 'rgb(0, 0, 255)' });
});

test('체크박스', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button', { name: /blue/i });
  const checkboxEl = screen.getByRole('checkbox', { name: /disable button/i });

  expect(buttonEl).toBeEnabled();
  expect(checkboxEl).not.toBeChecked();
});
