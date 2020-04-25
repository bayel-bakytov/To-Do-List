import axios from "axios";

const instance = axios.create();
instance.defaults.BaseURL = "";

export default instance;
