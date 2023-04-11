import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const BookingListItem = ({ children }) => {
  const navigate = useNavigate();
  const goBack = () => navigate('/reservations/bookings');
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="fw-bold ms-2 me-auto">{children}</div>
      <Button className="btn-sm" onClick={goBack}>
        Edit
      </Button>
    </li>
  );
};

export default BookingListItem;
