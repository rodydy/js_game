import axios from 'axios'
// 基地址在这儿
// 包装后的axios
axios.defaults.baseURL = "http://localhost:3000";
export default axios;