import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('submits the form when join button is clicked', () => {
  const postUserMock = jest.fn();
  jest.mock('@drop-in-gaming/core', () => ({
    postUser: postUserMock,
  }));
  render(<App />);
  const joinButton = screen.getByText('Join');
  fireEvent.click(joinButton);
  expect(postUserMock).toHaveBeenCalled();
});
