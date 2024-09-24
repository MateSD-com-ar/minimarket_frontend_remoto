import { url } from "../utils/utils";
import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${url}api/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (userId) => {
  try {
    const response = await axios.delete(`${url}api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};