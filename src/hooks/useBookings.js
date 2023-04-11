import { useFormik } from 'formik';

export default function useBooking() {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: '',
      seatingOption: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      request: '',
    },
  });

  return { formik };
}
