import axios from 'axios';

const HistoryService = {};

HistoryService.List = async  () => {
    let res = await axios.get('http://localhost:3001/books?kategorija=Istorija');
    
    return res.data;
}
export default  HistoryService;