import axios from "axios";

 const API_URL = "https://19ho3pcala.execute-api.us-east-1.amazonaws.com/dev/";
 const testFunction = () => {
    return axios.post(API_URL + "items", {});
  };
  
  const testFunc = {
    testFunction
  }
  
  export default testFunc;