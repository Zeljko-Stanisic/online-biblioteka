import axios from 'axios';

const DetailsService = {};

DetailsService.Get = async (id) => {
    let res = await axios.get('http://localhost:3001/books/' + id);
    console.log(res);
    return res.data;

}
export default DetailsService;