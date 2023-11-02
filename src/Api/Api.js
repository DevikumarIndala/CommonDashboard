import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products'; 

 
export const getAllItems = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error in getAllItems:', error);
    throw error; 
  }
};


 

export const addItem = async (item) => {
  const response = await axios.post(BASE_URL, item);
  return response.data;
};

 

export const updateItem = async (item) => {
  const response = await axios.put(`${BASE_URL}/${item.id}`, item);
  return response.data;
};

 

export const deleteItem = async (itemId) => {
  const response = await axios.delete(`${BASE_URL}/${itemId}`);
  return response.data;
};