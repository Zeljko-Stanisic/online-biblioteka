import axios from 'axios';

const FilterData = [];

FilterData.List = async  () => {
    let res = await axios.get('http://localhost:3001/books');
    
    return res.data;
}
export default  FilterData;