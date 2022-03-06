import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './Search';

describe('<Search />', () => {
  const mockSearchFn = jest.fn();

  beforeEach(() => {
    render(<Search onSearch={mockSearchFn} />);
  });

  it('should render the component', () => {
    expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
    expect(screen.getByRole(/button/i)).toBeDisabled();
  });

  it('should update the input field and trigger the function search', () => {
    const input = screen.getByLabelText(/input/i) as HTMLInputElement;
    userEvent.type(input, 'test');
    expect(input.value).toBe('test');
    expect(screen.getByRole(/button/i)).toBeEnabled();

    fireEvent.click(screen.getByText(/search/i));
    expect(mockSearchFn).toHaveBeenCalledTimes(1);
  });
});
