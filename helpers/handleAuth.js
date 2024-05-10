import axios from 'axios';

const sendOTP = async phoneNumber => {
  try {
    console.log(phoneNumber);
    console.log(process.env.EXPO_PUBLIC_API_URL);
    const endpoint = `${process.env.EXPO_PUBLIC_API_URL}sendOTP`;
    const body = {
      phoneNumber: phoneNumber,
    };
    const response = await axios.post(endpoint, body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const verifyOTP = async data => {
  try {
    const endpoint = `${process.env.EXPO_PUBLIC_API_URL}verifyOTP`;
    const body = {
      pin: data.pin,
      pinId: data.pinId,
    };
    const response = await axios.post(endpoint, body);
    return response;
  } catch (error) {
    throw error;
  }
};

export { sendOTP, verifyOTP };
