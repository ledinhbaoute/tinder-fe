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

const checkRegistedPhoneNumber = async phoneNumber => {
  try {
    const endpoint = `${process.env.EXPO_PUBLIC_API_URL}findUserByPhone`;
    const body = {
      phoneNumber: phoneNumber,
    };
    const response = await axios.post(endpoint, body);
    return response;
  } catch (error) {
    throw error;
  }
};

const register = async (name, gender, phoneNumber, birthDay, interest) => {
  try {
    const interestString = interest.join(',');
    const endpoint = `${process.env.EXPO_PUBLIC_API_URL}register`;
    const body = {
      name: name,
      gender: gender,
      phoneNumber: phoneNumber,
      birthDay: birthDay,
      interest: interestString,
    };
    const response = await axios.post(endpoint, body);
    return response;
  } catch (error) {
    throw error;
  }
};

export { sendOTP, verifyOTP, checkRegistedPhoneNumber, register };
