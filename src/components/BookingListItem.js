import React from 'react';
import Button from './Button';

const BookingListItem = ({ children }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="fw-bold ms-2 me-auto">{children}</div>
      <Button className="btn-sm">Edit</Button>
    </li>
  );
};

export default BookingListItem;
