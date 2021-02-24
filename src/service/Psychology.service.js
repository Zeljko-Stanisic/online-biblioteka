import axios from 'axios';

const PsychologyService = {};

PsychologyService.List = async  () => {
    let res = await axios.get('http://localhost:3001/books?kategorija=Psihologija');
    
    return res.data;
}
export default  PsychologyService;