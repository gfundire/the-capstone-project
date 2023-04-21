import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '.components/BookingForm.js';
import { fetchAPI, submitAPI } from './utils/api';

describe('Booking Form', () => {
  test('Renders the BookingForm heading', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const dispatch = jest.fn();
    const handleSubmit = jest.f();
    const handleBookingData = jest.fn();
    const validateForm = jest.fn();
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: '',
    };

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );

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
    const dispatch = jest.fn();
    const handleSubmit = jest.f();
    const handleBookingData = jest.fn();
    const validateForm = jest.fn();
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: '',
    };

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );

    const dateInput = screen.getAllByLabelText('*Date');
    fireEvent.change(dateInput, { target: { value: date } });
    expect(updateTimes()).not.toEqual(times);
  });

  test('Validate function returns true when all fields are filled', () => {
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
  test('Validate function returns false when some or all fields are empty', () => {
    const bookingData = {
      res_date: '',
      res_time: '',
      guests: '',
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
    expect(validate()).toBe(false);
  });

  test('Form Submission Is Disabled When form fields are empty', () => {
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: '',
    };
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const dispatch = jest.fn();
    const handleSubmit = jest.f();
    const handleBookingData = jest.fn();
    const validateForm = jest.fn();

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );
    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(validateForm).toHaveBeenCalled();
    expect(submitBtn).toHaveHaveAttribute('disabled');
  });

  test('Form is successfully submited when all fields are filled', () => {
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: '',
    };
    const date = new Date('04/21/2023');
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const dispatch = jest.fn();
    const handleSubmit = jest.f();
    const handleBookingData = jest.fn();
    const validateForm = jest.fn();
    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );

    const dateInput = screen.getByLabelText('*Date');
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByLabelText('*Choose time');
    fireEvent.change(timeInput, { target: { value: '1700' } });

    const guestsInput = screen.getByLabelText('*Number of Guests');
    fireEvent.change(guestsInput, { target: { value: '4' } });

    const occasionSelect = screen.getByLabelText('*Number of Guests');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const radioInput = screen.getByLabelText('Outside');
    fireEvent.change(radioInput, { target: { value: 'Outside' } });

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    expect(handleSubmit).toHaveBeenCalled();
    expect(validateForm).toHaveBeenCalled();
    expect(submitBtn).not.toHaveHaveAttribute('disabled');
  });
});
