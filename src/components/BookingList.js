import React from 'react';
import ListItem from './BookingListItem';

const BookingList = ({ booking }) => {
  const bookingValues = Object.values(booking);
  return (
    <ul className="list-group">
      {bookingValues.map(
        (item) => item !== '' && <ListItem key={item}>{item}</ListItem>
      )}
    </ul>
  );
};

export default BookingList;
