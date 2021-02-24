import axios from 'axios';

const ClassicsService = {};

ClassicsService.List = async  () => {
    let res = await axios.get('http://localhost:3001/books?kategorija=Klasici');
    return res.data;
}
export default  ClassicsService;