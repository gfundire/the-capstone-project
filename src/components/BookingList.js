import React from 'react';
import Button from './Button';
const BookingList = ({ booking }) => {
  return (
    <ul className="list-group">
      {Object.values(booking).map((item) => {
        if (item !== '')
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={item}
            >
              <div className="fw-bold ms-2 me-auto">
                {/* <div class="fw-bold">Subheading</div> */}
                {item}
              </div>
              <Button className="btn-sm">Edit</Button>
            </li>
          );
      })}
    </ul>
  );
};

export default BookingList;
