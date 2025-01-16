import { FETCHDATA, POSTASYNC } from "../config/axiosConfig";

// user
export const SMe = async () =>await FETCHDATA('post',`auth/login`);
