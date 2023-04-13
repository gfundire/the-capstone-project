import { useFormik } from 'formik';

export default function useBooking() {
  const formik = useFormik({
    initialValues: {
      res_date: '',
      res_time: '',
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
