import axios from "axios";

// baseUrl
export const baseAPI = import.meta.env.VITE_baseUrl;
// get
export const Get = async (url, headers) => {
  try {
    console.log(values)
    const result = await axios.get(url,{ headers });
    return result
  } catch (error) {
    throw new Error(error.message);
  }
};

// post

export const Post = async (url, values, headers) => {
  try {
    const result = await axios.post(url, values, { headers });
    return result
  } catch (error) {
    throw new Error(error.message);
  }
};

// update
export const update = async (url, values, headers) => {
  try {
    const result = await axios.put(url, values, { headers });
    return result
  } catch (error) {
    throw new Error(error.message);
  }
};

// delete
export const remove = async (url, headers) => {
  try {
    const result = await axios.delete(url, { headers });
    return result
  } catch (error) {
    throw new Error(error.message);
  }
};
