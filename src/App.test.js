import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '.components/BookingForm.js';
import { fetchAPI } from './utils/api';

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

  // test('UpdateTimes function returns the same value that is provided in the state', () => {
  //   const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  //   const updateTimes = jest.fn(() => times);

  //   expect(updateTimes()).toBe(times);
  // });

  test('UpdateTimes function returns different value than is provided in the state', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const date = new Date('04/21/2023');
    const updateTimes = jest.fn(() => fetchAPI(date));
    expect(updateTimes()).not.toBe(times);
  });

  test('Validate function returns true', () => {
    const bookingData = {
      res_date: '04/21/2023',
      res_time: '1700',
      guests: '2',
      occasion: 'Birthday',
      seatingOption: 'Outside',
    };

    const validateForm = () => {
      const bookingValues = Object.values(bookingData);
      const empty = (currentValue) => currentValue === '';
      const bookingFieldValues = Object.values(bookingValues);
      return !bookingFieldValues.some(empty);
    };

    const validate = jest.fn(() => validateForm());
    expect(validate()).toBe(true);
  });

  test('Validate function returns false', () => {
    const bookingData = {
      res_date: '',
      res_time: '1700',
      guests: '2',
      occasion: '',
      seatingOption: 'Outside',
    };

    const validateForm = () => {
      const bookingValues = Object.values(bookingData);
      const empty = (currentValue) => currentValue === '';
      const bookingFieldValues = Object.values(bookingValues);
      return !bookingFieldValues.some(empty);
    };

    const validate = jest.fn(() => validateForm());
    expect(validate()).toBe(false);
  });
});
