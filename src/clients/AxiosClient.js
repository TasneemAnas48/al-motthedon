import axios from "axios";
import Vue from 'vue';

const baseDomain = process.env.VUE_APP_API_DOMAIN;
const baseURL = `${baseDomain}`;
// console.log(baseURL);

const httpClient = axios.create({
  baseURL,
  responseType: "json",
  headers: {},
  // timeout: 20000,
});

httpClient.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  return config;
});

httpClient.interceptors.response.use(
  response => {
    // console.log(response.data)
    const message = response.data.message
    switch(message){
      case "Data deleted successfully": {
        Vue.$toast.success(message, {
          duration: 4000,
          position: "top-right",
          queue: true
        });
        break;
      }
      case "Data added successfully": {
        Vue.$toast.success(message, {
          duration: 4000,
          position: "top-right",
          queue: true
        });
        break;
      }
      case "Data updated successfully": {
        Vue.$toast.success(message, {
          duration: 4000,
          position: "top-right",
          queue: true
        });
        break;
      }
    }
    return response
  },
  (error) => {
    console.log(error)
    if (error.response) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400: {
          const errorMessage = error.response.data.message;
          console.error(errorMessage);
          Vue.$toast.error(errorMessage, {
            duration: 4000,
            position: "top-right",
            queue: true
          });
          break;
        }
        case 401: {
          const errorMessage = error.response.data.message;
          console.error(errorMessage);
          Vue.$toast.error(errorMessage, {
            duration: 4000,
            position: "top-right",
            queue: true
          });
          break;
        }
        case 404: {
          const errorMessage = 'Resource not found';
          console.error(errorMessage);
          Vue.$toast.error(errorMessage, {
            duration: 4000,
            position: "top-right",
            queue: true
          });
          break;
        }
        case 500: {
          const errorMessage = 'Internal server error';
          console.error(errorMessage);
          Vue.$toast.error(errorMessage, {
            duration: 4000,
            position: "top-right",
            queue: true
          });
          break;
        }
        default: {
          console.error('An error occurred: ', error);
          Vue.$toast.error("An error occurred", {
            duration: 4000,
            position: "top-right",
            queue: true
          });
        }
      }
    }
    else {
      // const errorCode = error.code;
      // console.log(errorCode)
      // Vue.$toast.error("Unexpected error, please check your internet connection!", {
      //   duration: 4000,
      //   position: "top-right",
      //   queue: true
      // });
    }
    return Promise.reject(error);
  }
);


export default httpClient;
