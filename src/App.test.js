import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '.components/BookingForm.js';

describe('Booking Form', () => {
  test('Renders the BookingForm heading', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const dispatch = jest.fn();

    render(<BookingForm times={times} dispatch={dispatch} />);

    const heading = screen.getByText('Find a Table for Any Occasion');

    expect(heading).toBeInTheDocument();
  });

  test('initializeTimes function returns the correct expected value', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const initializeTimes = jest.fn(() => times);
    expect(initializeTimes()).toBe(times);
  });

  test('UpdateTimes function returns the same value that is provided in the state', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const updateTimes = jest.fn(() => times);
    expect(updateTimes()).toBe(times);
  });
});
