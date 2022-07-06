import { object, string, number } from "yup";

export default object({
    fname: string().required("Firstname halna").min(5),
    lname: string().required().min(5),
    address: string().required().min(5),
    phoneno: number().required().positive(),
    email: string().email().required(),
    password: string().required().min(7).max(15),
  });