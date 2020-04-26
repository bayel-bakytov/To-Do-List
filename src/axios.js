import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://to-do-list-8174e.firebaseio.com";

export default instance;
