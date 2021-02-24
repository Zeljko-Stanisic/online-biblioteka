import axios from 'axios';

const AdminService = {};

AdminService.List = async  () => {
    let res = await axios.get('http://localhost:3001/books');
    return res.data;
}

AdminService.Create = async (data) => {
    let res = await axios.post('http://localhost:3001/books/', data);

    return res;
}
export default  AdminService;