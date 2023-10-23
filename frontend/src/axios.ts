import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001", //The APIPORT should be replaced with the API Port on the backend
  headers: {
    "Content-type": "application/json"
  }
});
