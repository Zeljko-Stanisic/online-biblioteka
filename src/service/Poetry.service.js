import axios from 'axios';

const PoetryService = {};

PoetryService.List = async  () => {
    let res = await axios.get('http://localhost:3001/books?kategorija=Poezija');
    
    return res.data;
}
export default  PoetryService;