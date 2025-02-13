import axios from "axios";
const baseApiUrl = 'http://localhost:8888/';

const handleRequest = async (request: Promise<any>) => {
  try {
    const response = await request;
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const BaseApi = {
  create: (data: any) => {
    handleRequest(axios.post(baseApiUrl, data))
  },

  getAll: () => {
    handleRequest(axios.get(baseApiUrl))
  },

  update: (id: number, data: any) => {
    handleRequest(axios.put(baseApiUrl+id, data))
  },

  delete: (id: number) => {
    handleRequest(axios.delete(baseApiUrl+id))
  }
};
